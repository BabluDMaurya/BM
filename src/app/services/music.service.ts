import { Injectable } from '@angular/core';
import { HttpClient ,  HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Config } from "../config/config";
import { HttpErrorHandlerService , HandleError } from "./http-error-handler.service";
import { Storage } from "@ionic/storage";


@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private handleError : HandleError;
  public  token:any;
  public headers:any;
  public options:any;

  
  constructor(
              private http :HttpClient, 
              httpErrorHandler:HttpErrorHandlerService,
              private storage: Storage
              ) { 
      this.handleError= httpErrorHandler.createHandleError('PostService');
    }
    getApiHeaders(extraHeader = {}, checkAuth = false) {
      if (checkAuth) {
        this.token = localStorage.getItem('userToken');
        this.headers = new HttpHeaders({ "Authorization": "Bearer " + this.token });
      }
      console.log(this.headers);
      return this.options = { headers: this.headers };
    }
    getGenres(){
      return this.http.post<any>(Config.ApiUrl+'api/auth/genres',this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getGenres')));
    }

    getArtists(){
      return this.http.post<any>(Config.ApiUrl+'api/auth/getArtists',null,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getArtists')));
    }

    getArtistById(formData){
      return this.http.post<any>(Config.ApiUrl+'api/auth/getArtistById',formData,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getArtistById')));
    }

    createPlaylist(formData){
      return this.http.post<any>(Config.ApiUrl+'api/auth/createPlaylist',formData,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('createPlaylist')));
    }

    getPlaylist(){
      return this.http.post<any>(Config.ApiUrl+'api/auth/getPlaylist',null,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getPlaylist')));
    }

    insertInPlaylist(formData){
      return this.http.post<any>(Config.ApiUrl+'api/auth/insertInPlaylist',formData,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('insertInPlaylist')));
    }

    getPlaylistById(formData){
      return this.http.post<any>(Config.ApiUrl+'api/auth/getPlaylistById',formData,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getPlaylistById')));
    }

    renamePlaylist(formData){
      return this.http.post<any>(Config.ApiUrl+'api/auth/renamePlaylist',formData,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('renamePlaylist')));
    }

    removePlaylist(formData){
      return this.http.post<any>(Config.ApiUrl+'api/auth/removePlaylist',formData,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('removePlaylist')));
    }
}
