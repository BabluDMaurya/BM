import { Injectable, ɵSWITCH_COMPILE_INJECTABLE__POST_R3__  } from '@angular/core';
import { HttpClient ,  HttpParams } from "@angular/common/http"; 
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { Config } from "../config/config";
import { Router } from "@angular/router";
import { Storage } from '@ionic/storage';
import { HttpErrorHandlerService , HandleError } from "./http-error-handler.service";
import { throwError, BehaviorSubject } from 'rxjs';
import { User } from './../auth/user.model';
import { ToastController, Platform } from '@ionic/angular';
import { NotificationService } from './notification.service';
import { CommonService } from './common.service';
import { Socket } from 'ngx-socket-io';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}
@Injectable({
  providedIn: 'root'
})

export class AuthService { 
  user = new BehaviorSubject<User>(null);
  authState = new BehaviorSubject(false);
  private handleError : HandleError
  constructor(private http :HttpClient,
    httpErrorHandler:HttpErrorHandlerService,
    private router:Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController,
    private notify:NotificationService,
    private commonService:CommonService,
    private socket: Socket, 
    )
  { 
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
    this.handleError= httpErrorHandler.createHandleError('TasksService') 
  }
  ifLoggedIn() {
    const dataPromise = this.storage.get('userToken');
      dataPromise.then(data => {
        let retdata = data;         
         if (retdata !== null) {          
          return true;
        }
      });
  }
  addUser(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl+'api/auth/register', data).pipe(catchError(this.handleError('addTask', data)));
  }

  checkMailAvailability(email: string): Observable<{}> {
    const url = Config.ApiUrl+'api/auth/checkEmailAvailability/' + email + '';
    return this.http.get(url).pipe(catchError(this.handleError('')));
  }

  checkUnameAvailability(uname: string): Observable<{}> {
    const url = Config.ApiUrl+'api/auth/checkUnameAvailability/'+ uname+'';
    return this.http.get(url).pipe(catchError(this.handleError('')));
  }

  checkOtp(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl+'api/auth/checkOtp', data).pipe(catchError(this.handleError('checkOtp',data)))
  }
  resendOtp(data: any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl+'api/auth/resendOtp', data).pipe(catchError(this.handleError('resendOtp',data)))
  }

  userLogin(data:any) : Observable<any>{
    return this.http.post<any>(Config.ApiUrl+'api/auth/userLogin',data).pipe(catchError(this.handleError('userLogin',data)))
  }  
  forgotPassword(data:any) : Observable<any>{
    return this.http.post<any>(Config.ApiUrl+'api/auth/forgotPassword',data).pipe(catchError(this.handleError('forgotPassword',data)))
  }

  updatePassword(data:any) : Observable<any>{
    return this.http.post<any>(Config.ApiUrl+'api/auth/updatePassword',data).pipe(catchError(this.handleError('updatePassword',data)))
  }
  getCaptchaHtml(): Observable<{}> {
    const url = Config.ApiUrl+'api/auth/captchaHtml';
    return this.http.get(url).pipe(catchError(this.handleError('')));
  }  
   
  async autoLogin()   {
    const data =localStorage.getItem('userToken');
    var userData:any =localStorage.getItem('userData');
    userData =  JSON.parse(userData); 
      if(userData)
      {
        this.commonService.setUserData(userData);
          this.socket.connect();
          this.socket.emit('set-name', userData.id,'chatList');
        if(userData.user_type == 1)  
          {
            this.router.navigate(["/tabs/consultant-profile"]); 
          }else if(userData.user_type == 0) 
          {
            this.router.navigate(["/tabs/user-profile"]); 
          } 
      }  
  }
  
}

