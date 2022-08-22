import { Injectable } from '@angular/core';
import { Licence } from '../models/licence';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import apiConstants from '../constants/api';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { resetLicence, setLicence } from '../ngrx/licenceSlice/licence.actions';

@Injectable({
  providedIn: 'root'
})
export class LicencesService {

  constructor(private http: HttpClient, private store: Store<{ licence: Licence }>) { }
  licences: Licence[]

  getAllLicence(): Observable<Licence[]> {
    return this.http.get<Licence[]>(apiConstants.apiUrl + apiConstants.apiPrefix + "licences/").pipe(
      tap(),
      catchError(this.handleError)
    )
  }
  addLicence(obj: any) {
    return this.http.post(apiConstants.apiUrl + apiConstants.apiPrefix + "licences/add", { licenceName: obj.licenceName, startTime: obj.startTime, endTime: obj.endTime }).pipe(
      tap(),
      catchError(this.handleError)
    )
  }
  updateLicence(obj: any) {
    return this.http.post(apiConstants.apiUrl + apiConstants.apiPrefix + "licences/update", { licenceName: obj.licenceName, startTime: obj.startTime, endTime: obj.endTime, id: obj.id }).pipe(
      tap(),
      catchError(this.handleError)
    )
  }
  resetLicence() {
    this.store.dispatch(resetLicence());
  }
  deleteLicence(id: number) {
    return this.http.post(apiConstants.apiUrl + apiConstants.apiPrefix + "licences/delete", { id }).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    )
  }

  getCurrentLicence(): Observable<Licence> {
    return this.store.select('licence').pipe(
      tap(),
      catchError(this.handleError)
    )
  }
  setCurrentLicence(licence: Licence) {
    this.store.dispatch(setLicence(licence));
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
