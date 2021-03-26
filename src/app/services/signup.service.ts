import { Injectable, ɵSWITCH_COMPILE_INJECTABLE__POST_R3__  } from '@angular/core';
import { HttpClient ,  HttpParams } from "@angular/common/http"
import { HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs"
import { catchError } from "rxjs/operators"
import { Config } from "../config/config";

import { HttpErrorHandlerService , HandleError } from "./http-error-handler.service"

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private handleError: HandleError;
  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('TasksService');
  }

  addUser(data: any): Observable<any> {
    // tslint:disable-next-line: max-line-length
    // return this.http.post<any>('http://127.0.0.1:8000/api/auth/register', data).pipe(catchError(this.handleError('addTask', data)));
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>(Config.ApiUrl+'api/auth/register', data).pipe(catchError(this.handleError('addTask', data)));
  }
  checkMailAvailability(email: string): Observable<{}> {
    const url = Config.ApiUrl+'api/auth/checkEmailAvailability/${email}';
    return this.http.get(url).pipe(catchError(this.handleError('')));
  }

  checkUnameAvailability(uname: string): Observable<{}> {
    const url = Config.ApiUrl+'api/auth/checkUnameAvailability/${uname}';
    return this.http.get(url).pipe(catchError(this.handleError('')));
  }

  checkOtp(data: any): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>(Config.ApiUrl+'api/auth/checkOtp', data).pipe(catchError(this.handleError('checkOtp',data)))
  }

  userLogin(data: any): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>(Config.ApiUrl+'api/auth/userLogin', data).pipe(catchError(this.handleError('userLogin',data)))
  }

}
