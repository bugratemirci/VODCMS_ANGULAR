import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Content } from '../content/content';
import apiConstants from '../constants/api';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { AlertifyService } from '../services/alertify.service';
import { Store, select } from '@ngrx/store';
import { resetContent, setContent } from '../ngrx/contentSlice/content.actions';
@Injectable({
  providedIn: 'root'
})
export class ContentsService {

  constructor(private http: HttpClient, private alertify: AlertifyService, private store: Store<{ content: Content }>) { }

  getProducts(): Observable<Content[]> {
    return this.http.get<Content[]>(apiConstants.apiUrl + apiConstants.apiPrefix + "contents/").pipe(
      tap(),
      catchError(this.handleError)
    )
  }
  getCurrentContent(): Observable<Content> {
    return this.store.select('content');
  }
  setCurrentContent(content: Content) {
    this.store.dispatch(setContent(content));
  }

  resetCurrentContent() {
    this.store.dispatch(resetContent())
  }
  deleteContent(id: number) {
    return this.http.post(apiConstants.apiUrl + apiConstants.apiPrefix + "contents/delete", { id }).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    )
  }
  addToDB(content: any, licence: any) {
    return this.http.post(apiConstants.apiUrl + apiConstants.apiPrefix + "contents/add", { content: content, licence: licence }).pipe(
      tap(),
      catchError(this.handleError)
    )
  }
  updateDB(content: any, licence: any) {
    return this.http.post(apiConstants.apiUrl + apiConstants.apiPrefix + "contents/update", { content: content, licence: licence }).pipe(
      tap(),
      catchError(this.handleError)
    )
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = ""
    if (err.error instanceof ErrorEvent) {
      errorMessage = "Bir hata oluştu: " + err.error.message;
      alert(errorMessage)
    }
    else {
      errorMessage = "Sistemsel bir hata oluştu."
      alert(errorMessage)
    }

    return throwError(errorMessage);
  }
}
