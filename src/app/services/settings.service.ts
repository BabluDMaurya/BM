import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { Config } from "../config/config";
import { HttpErrorHandlerService, HandleError } from "./http-error-handler.service";
import { Storage } from "@ionic/storage";
const headers = new HttpHeaders().set("x-app-id", "93012253").set("x-app-key", "cff839f34a8901afade9652f4c6bced9");
@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private handleError: HandleError
  public headers: any;
  public options: any;
  public token: any;
  constructor(private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService,
    private storage: Storage) {
    this.handleError = httpErrorHandler.createHandleError('TasksService');
  }

  getApiHeaders(extraHeader = {}, checkAuth = false) {

    if (checkAuth) {
      this.token = localStorage.getItem('userToken');

      this.headers = new HttpHeaders({ "Authorization": "Bearer " + this.token });
    }
    
    return this.options = { headers: this.headers };
  }

  resetPassword(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/resetPassword', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('resetPassword', data)))
  }
  contactAdmin(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/contactAdmin', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('contactAdmin', data)));
  }
  deleteUser(id: any): Observable<{}> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/deleteUser', id, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('deleteUser', id)))
  }
  logout(): Observable<{}> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/logOut', null, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('logout')))
  }
  isLogedIn(): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/islogedin', null, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('isLogedIn')));
  }
  currentTimeZone(): Observable<any> {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/currentTimeZone', null, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('currentTimeZone')));
  }
  editProfile(data: any): Observable<{}> {
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>(Config.ApiUrl + 'api/auth/editProfile', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('editProfile', data)));
  }
  additionalInfo(data: any): Observable<{}> {
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>(Config.ApiUrl + 'api/auth/additionalInfo', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('additionalInfo', data)));
  }
  getState(data: any): Observable<{}> {
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getState', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getState', data)));
  }

  getCity(data: any): Observable<{}> {
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getCity', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getCity', data)));
  }

  getProfileData(): Observable<{}> {
    // tslint:disable-next-line: max-line-length
    return this.http.get<any>(Config.ApiUrl + 'api/auth/getProfileData', this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getProfileData')));

  }
  getCommonData(): Observable<{}> {
    // tslint:disable-next-line: max-line-length
    return this.http.get<any>(Config.ApiUrl + 'api/auth/getCommonData', this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getCommonData')));

  }
  addDeviceToken(data:any) : Observable<any>{
    return this.http.post<any>(Config.ApiUrl+'api/auth/addUserTokenFcm',data,this.getApiHeaders(null, true)).pipe(catchError(this.handleError('addDeviceToken',data)));
  }
  getMyProfileData(): Observable<{}> {
    // tslint:disable-next-line: max-line-length
    return this.http.get<any>(Config.ApiUrl + 'api/auth/getMyProfileData', this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getMyProfileData')));

  }
  getBookmarkPost(): Observable<{}> {
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getBookmarkPost',null, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getBookmarkPost')));

  }
  commentDisableUpdate(data): Observable<{}>{
    return this.http.post<any>(Config.ApiUrl + 'api/auth/commentDisableUpdate',data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('commentDisableUpdate')));
  }
  videoPost(data): Observable<{}>{
    return this.http.post<any>(Config.ApiUrl + 'api/auth/videoData',data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('videoPost')));
  }
  getNotificationControl(): Observable<{}>{
    return this.http.post<any>(Config.ApiUrl + 'api/auth/getNotificationControl',null, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getNotificationControl')))
  }
  setNotificationControl(data: any): Observable<{}>{
    return this.http.post<any>(Config.ApiUrl + 'api/auth/setNotificationControl', data, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('setNotificationControl',data)))
  }
  uploadPic(formData) {
    return this.http.post<any>(Config.ApiUrl + 'api/auth/uploadBgPic', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('uploadPic', formData)));
  }
  userIndentityVerify(formData){
    return this.http.post<any>(Config.ApiUrl + 'api/auth/userIndentityVerify', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('userindentityverify', formData)));
  }
  getCountryCodeApi(){
    return this.http.post<any>(Config.ApiUrl + 'api/auth/truliooCountryCode', null, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getCountryCodeApi', )));
  }
}
