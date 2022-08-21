import { Injectable } from '@angular/core';
import { Licence } from '../models/licence';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import apiConstants from '../constants/api';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LicencesService {

  constructor(private http: HttpClient) { }
  licences: Licence[]

  getAllLicence(): Observable<Licence[]> {
    return this.http.get<Licence[]>(apiConstants.apiUrl + apiConstants.apiPrefix + "licences/").pipe(
      tap(data => console.log(data)),
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
