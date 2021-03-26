import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Config } from "../config/config";
import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { HttpErrorHandlerService, HandleError } from "./http-error-handler.service";


import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private handleError: HandleError

  public items: any = [];

  //
  public token: any;
  public headers: any;
  public options: any;
  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandlerService,
  ) {
    this.handleError = httpErrorHandler.createHandleError('SearchService');
  }

  getApiHeaders(extraHeader = {}, checkAuth = false) {

    if (checkAuth) {
      this.token = localStorage.getItem('userToken');

      this.headers = new HttpHeaders({ "Authorization": "Bearer " + this.token });
    }
    console.log(this.headers);
    return this.options = { headers: this.headers };
  }

  searchPeople(data: any): Observable<any> {
    console.log('service');
    return this.http.post<any>(Config.ApiUrl + 'api/auth/searchPeople', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('searchPeople', data)));
  }

  listCountry(): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/topTenPeople', null, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('listCountry')));
  }

  getTopConsultant(): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getTopConsultant', null, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getTopConsultant')));
  }

  searchQuery(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/searchRequest', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('selectAll', data)));
  }

  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  getSpecialities(data:any):Observable<any>{
    return this.http.post<any>(Config.ApiUrl+'api/auth/getSpecialities', data , this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getSpecialities',data)));
  }

  getProgramByCategory(data:any):Observable<any>{
    return this.http.post<any>(Config.ApiUrl+'api/auth/getProgramByCategory', data , this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getProgramByCategory',data)));
  }

  searchProgramRequest(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/searchProgramRequest', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('searchProgramRequest', data))); 
  }

  getUserByCategoryId(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getUserByCategoryId', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getUserByCategoryId', data))); 
  }

  getCBC(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getCBC', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getCBC', data))); 
  }
}
