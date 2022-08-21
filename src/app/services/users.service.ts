import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import apiConstants from '../constants/api';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../login/user';
import { Store, select } from '@ngrx/store';
import { setUser, resetUser } from '../ngrx/userSlice/user.actions';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private store: Store<{ user: User }>) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(apiConstants.apiUrl + apiConstants.apiPrefix + "users/").pipe(
      tap(),
      catchError(this.handleError)
    )
  }

  getUser(): Observable<User> {
    return this.store.select('user')
  }

  setUser(user: User): void {
    this.store.dispatch(setUser(user));
  }

  resetUser(): void {
    this.store.dispatch(resetUser());
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(apiConstants.apiUrl + apiConstants.apiPrefix + "users/login", { username, password }).pipe(
      tap(data => console.log(data)
      ),
      catchError(this.handleError)
    )
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = ""
    if (err.error instanceof ErrorEvent) {
      errorMessage = "Bir hata oluştu: " + err.error.message;
    }
    else {
      errorMessage = "Sistemsel bir hata oluştu."
    }

    return throwError(errorMessage);
  }
}
