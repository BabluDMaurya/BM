import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject, Subject } from "rxjs";
import { catchError } from "rxjs/operators";
import { Config } from "../config/config";
import { HttpErrorHandlerService, HandleError } from "./http-error-handler.service";
const headers = new HttpHeaders().set("x-app-id", "e7d1816f")
  .set("x-app-key", "eaffae6d9dc969b02c0b9bdf44003ce5")
  .set("InterceptorSkipHeader", "");

@Injectable({
  providedIn: 'root'
})
export class NutritionService {
  
  private handleError: HandleError
  //store nutrition data while navigating in add nutrition 
  private nutritionData = new BehaviorSubject('');
  currentNutritionData = this.nutritionData.asObservable();
  public token: any;
  public headers: any;
  public options: any;
  public confirmEvent = new Subject<boolean>();

  constructor(private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService
  ) {
    this.handleError = httpErrorHandler.createHandleError('NutritionService');
  }

  // update nutrition data  by  BehaviorSubject              
  changeMessage(data: any) {
    this.nutritionData.next(data);
  }

  getApiHeaders(extraHeader = {}, checkAuth = false) {
    if (checkAuth) {
      this.token = localStorage.getItem('userToken');
      this.headers = new HttpHeaders({ "Authorization": "Bearer " + this.token });
    }
    return this.options = { headers: this.headers };
  }

  ntnxfetchFood(qstring: string): Observable<{}> { 
    const url = 'https://trackapi.nutritionix.com/v2/search/instant?query=' + qstring;
    return this.http.get<any>(url, { headers }).pipe(catchError(this.handleError('ntnxfetchFood')));
  }

  ntnxFoodDetail(qstring: any): Observable<{}> {
    const url = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
    return this.http.post<any>(url, qstring, { headers }).pipe(catchError(this.handleError('ntnxFoodDetail')));
  }

  nutrtionBarcode(barcode: string): Observable<{}> {
    // const url = 'https://api.nutritionix.com/v1_1/item?upc=' + barcode + '&appId=e7d1816f&appKey=eaffae6d9dc969b02c0b9bdf44003ce5';   // Darshan 
    const url = 'https://api.nutritionix.com/v1_1/item?upc=' + barcode + '&appId=2db0ddb6&appKey=086fbc4bf0ed8d4555b4510cd8b966fd';      // Viraj
    return this.http.get<any>(url).pipe(catchError(this.handleError('nutrtionBarcode')));
  }

  insertNutrition(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/insertNutrition', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('insertNutrition', data)));
  }
  uploadGroupPicture(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/uploadGroupPicture', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('uploadGroupPicture', formData)));
  }
  uploadPost(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/uploadPost', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('uploadPost', formData)));
  }
  getNutritionByUser(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getNutritionByUser', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getNutritionByUser', data)));
  }
  getNutritionById(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getNutritionById', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getNutritionById', data)));
  }
  searchMusic(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/searchMusic', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('searchMusic', data)));
  }
  deleteNutrition(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/deleteNutrition', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('deleteNutrition', data)));
  }

}
