import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { Config } from "../config/config";
import { HttpErrorHandlerService, HandleError } from "./http-error-handler.service";
import { Storage } from "@ionic/storage";
@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  private handleError: HandleError;
  public token: any;
  public headers: any;
  public options: any;
  constructor(private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService,
    private storage: Storage) {
    this.handleError = httpErrorHandler.createHandleError('PostService');
  }
  getApiHeaders(extraHeader = {}, checkAuth = false) {

    if (checkAuth) {
      this.token = localStorage.getItem('userToken');
      this.headers = new HttpHeaders({ "Authorization": "Bearer " + this.token });
    }
    return this.options = { headers: this.headers };
  }

  getPaymentHistory(): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getPaymentHistory', null, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getPaymentHistory')));
  }
  getPaymentDetails(id): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getPaymentDetails', id, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getPaymentDetails',id)));
  }
  
}
