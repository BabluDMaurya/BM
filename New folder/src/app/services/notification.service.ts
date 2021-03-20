import { Injectable } from '@angular/core';
import { HttpClient ,  HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { Config } from "../config/config";
import { HttpErrorHandlerService , HandleError } from "./http-error-handler.service";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private handleError : HandleError;
  public  token:any;
  public headers:any;
  public options:any;

  
  constructor(private http :HttpClient, 
                      httpErrorHandler:HttpErrorHandlerService,
                      private storage: Storage) { 
      this.handleError= httpErrorHandler.createHandleError('PostService');
    }
    getApiHeaders(extraHeader ={}, checkAuth=false){
   
      if(checkAuth){ 
         this.token = localStorage.getItem('userToken');
         this.headers = new HttpHeaders({"Authorization": "Bearer " + this.token });
      }
      return  this.options = { headers: this.headers };
    }
    getNotification(){
      return this.http.get<any>(Config.ApiUrl+'api/auth/viewNotification',this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getNotification')));
    }
    getNotificationOfPeople(){
      return this.http.get<any>(Config.ApiUrl+'api/auth/viewNotificationOfPeople',this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getNotificationOfPeople')));
    }
    getUnreadCountMyProfile(){
      return this.http.get<any>(Config.ApiUrl+'api/auth/getUnreadCountMyProfile',this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getUnreadCountMyProfile')));
    } 
    setNotification(data:any) : Observable<any>{
      return this.http.post<any>(Config.ApiUrl+'api/auth/setReadNotification',data,this.getApiHeaders(null, true)).pipe(catchError(this.handleError('setNotification',data)));
    }
    getNotificationOfProgram(){
      return this.http.get<any>(Config.ApiUrl+'api/auth/viewNotificationOfProgram',this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getNotificationOfProgram')));
    }
    getSponcerChatDetails(){
      return this.http.get<any>(Config.ApiUrl+'api/auth/sponcerChat',this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getSponcerChatDetails')));
    }
}
