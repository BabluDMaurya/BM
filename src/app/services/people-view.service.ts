import { Injectable } from '@angular/core';
import { HttpClient ,  HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { Config } from "../config/config";
import { HttpErrorHandlerService , HandleError } from "./http-error-handler.service";


@Injectable({
  providedIn: 'root'
})
export class PeopleViewService {

  private handleError : HandleError;
  public  token:any;
  public headers:any;
  public options:any;
  getApiHeaders(extraHeader ={}, checkAuth=false){
   
    if(checkAuth){ 
       this.token = localStorage.getItem('userToken');
       
       this.headers = new HttpHeaders({"Authorization": "Bearer " + this.token });
    }
    return  this.options = { headers: this.headers };
  }

  constructor(private http :HttpClient, 
    httpErrorHandler:HttpErrorHandlerService) {
      this.handleError= httpErrorHandler.createHandleError('NutritionService');   
     }
    
     getUserData(formData) {
      return this.http.post<any>(Config.ApiUrl+'api/auth/getUserData', formData ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getUserData', formData)));
    }
  
    getMyPost(postType,userId, page){
      return this.http.get<any>(Config.ApiUrl+'api/auth/loadMyPost?postType='+postType+'&userId='+userId+'&page='+page, this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getMyPost')));
    }
    getVedioType(postType,userId, videoType,page){
      return this.http.get<any>(Config.ApiUrl+'api/auth/loadVideoType?postType='+postType+'&userId='+userId+'&page='+page+ '&videoType='+videoType, this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getOpenVedio')));
    }
    getExclusiveVedioType(postType,userId, videoType,page){
      return this.http.get<any>(Config.ApiUrl+'api/auth/loadExVideoType?postType='+postType+'&userId='+userId+'&page='+page+ '&videoType='+videoType, this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getOpenVedio')));
    }
    likedPost(formData){
      return this.http.post<any>(Config.ApiUrl+'api/auth/imageLike', formData ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getUserData', formData)));
    }

    getFollowers(userId){
      return this.http.get<any>(Config.ApiUrl+'api/auth/getFollowers?userId='+userId ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getFollowers')));
    }

    getFollowings(userId){
      return this.http.get<any>(Config.ApiUrl+'api/auth/getFollowings?userId='+userId ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getFollowings')));
    }

    followUpPeople(data){
      return this.http.post<any>(Config.ApiUrl+'api/auth/followUpPeople' ,data,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('followUpPeople', data)));
    }

    getFolloFollowingResult(data){
      return this.http.post<any>(Config.ApiUrl+'api/auth/getFolloFollowingResult',data,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getFolloFollowingResult')));
     }
    
    bookmarkPost(formData){
      return this.http.post<any>(Config.ApiUrl+'api/auth/bookmark', formData ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('bookmarkPost', formData)));
    }   
    upNextPost(postType,userId, videoType, postId){
      return this.http.get<any>(Config.ApiUrl+'api/auth/upNextPost?postType='+postType+'&userId='+userId+'&videoType='+videoType+'&postId='+postId, this.getApiHeaders(null,true)).pipe(catchError(this.handleError('upNextPost')));
    } 

    blockuser(formData){
      return this.http.post<any>(Config.ApiUrl+'api/auth/blockUser', formData ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('blockuser', formData)));
    }

    getBlockList(formData){
      return this.http.post<any>(Config.ApiUrl+'api/auth/getBlockList', formData ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getBlockList', formData)));
    } 
    getBlockStatus(formData){
      return this.http.post<any>(Config.ApiUrl+'api/auth/getBlockStatus', formData ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getBlockStatus', formData)));
    } 

    reportPeople(formData){
      return this.http.post<any>(Config.ApiUrl+'api/auth/reportPeople', formData ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('reportPeople', formData)));
    }

    userNotification(formData){
      return this.http.post<any>(Config.ApiUrl+'api/auth/userNotification', formData ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('userNotification', formData)));
    }

    getUserNotification(formData){
      return this.http.post<any>(Config.ApiUrl+'api/auth/getUserNotification', formData ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getUserNotification', formData)));
    }

    getEachUserData(id) {
      return this.http.post<any>(Config.ApiUrl+'api/auth/getEachUserData', id ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getEachUserData', id)));
    }

    // Guest API's
    getGuestUserData(formData) {
      return this.http.post<any>(Config.ApiUrl+'api/getGuestUserData', formData ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getUserData', formData)));
    }

    guestGetMyPost(postType,userId, page){
      return this.http.get<any>(Config.ApiUrl+'api/guestLoadMyPost?postType='+postType+'&userId='+userId+'&page='+page, this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getMyPost')));
    }

    guestUpNextPost(postType,userId, videoType, postId){
      return this.http.get<any>(Config.ApiUrl+'api/guestUpNextPost?postType='+postType+'&userId='+userId+'&videoType='+videoType+'&postId='+postId, this.getApiHeaders(null,true)).pipe(catchError(this.handleError('upNextPost')));
    } 
    
}
