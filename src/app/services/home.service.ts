import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpErrorHandlerService, HandleError } from './http-error-handler.service';
import { Config } from '../config/config';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  options: { headers: any; };
  headers: any;
  token: string;
  private handleError: HandleError
  constructor(private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('NutritionService');
  }

  getApiHeaders(extraHeaders = {}, checkAuth = false) {
    if (checkAuth) {
      this.token = localStorage.getItem('userToken');
      this.headers = new HttpHeaders({ "Authorization": "Bearer " + this.token });
    }
    return this.options = { headers: this.headers };
  }

  getHomeContent(formData): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getHomeContent', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getHomeContent', formData)));
  }
}