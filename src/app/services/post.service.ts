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
export class PostService {

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
  addComment(formData){
    return this.http.post<any>(Config.ApiUrl+'api/auth/addComment', formData ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('addComment', formData)));
  }
  getComment(postId){
    return this.http.post<any>(Config.ApiUrl+'api/auth/getComment', postId ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getComment', postId)));
  }
  deleteComment(commentId){
    return this.http.post<any>(Config.ApiUrl+'api/auth/deleteComment', commentId ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('deleteComment', commentId)));
  }
  getProfileImage(){
    return this.http.get<any>(Config.ApiUrl+'api/auth/getProfileImage',this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getProfileImage')));
  }

  getPostById(formData){
    return this.http.post<any>(Config.ApiUrl+'api/auth/getPostById', formData ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getPostById', formData)));
  }

  getProgVideoPostById(formData){
    return this.http.post<any>(Config.ApiUrl+'api/auth/getProgVideoPostById', formData ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getProgVideoPostById', formData)));
  }
  removePost(formData){
    return this.http.post<any>(Config.ApiUrl+'api/auth/removePost', formData ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('removePost', formData)));
  }

  commentDisable(formData){
    return this.http.post<any>(Config.ApiUrl+'api/auth/disablePostComment', formData ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('commentDisable', formData)));
  }
  getVideoPostById(videoId){
    return this.http.post<any>(Config.ApiUrl+'api/auth/videoPostById', videoId ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getVideoPostById', videoId)));
  }
  updateVideoPostById(videoData){
    return this.http.post<any>(Config.ApiUrl+'api/auth/videoUpdateById', videoData ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('updateVideoPostById', videoData)));
  }
    getAddByPGId(pgId){
    return this.http.post<any>(Config.ApiUrl+'api/auth/addByPGId', pgId ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getAddByPGId', pgId)));
    }
}
