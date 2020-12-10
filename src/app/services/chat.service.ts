import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Config } from "../config/config";
import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { HttpErrorHandlerService , HandleError } from "./http-error-handler.service";


import { catchError } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private handleError : HandleError
  public items: any = [];
  public  token:any;
  public headers:any;
  public options:any;
  constructor(private http :HttpClient,httpErrorHandler:HttpErrorHandlerService) { 
    this.items = [
      { title: "Pooja0001" },
      { title: "Prateek0002" },
      { title: "Darshan0003" },
      { title: "Viraj0004" },
      { title: "Bablu0005" },
      { title: "Allister0006" }
    ];
    this.handleError= httpErrorHandler.createHandleError('SearchService');
  }
  getApiHeaders(extraHeader ={}, checkAuth=false){
   
    if(checkAuth){ 
       this.token = localStorage.getItem('userToken');
       
       this.headers = new HttpHeaders({"Authorization": "Bearer " + this.token });
    }
    return  this.options = { headers: this.headers };
  } 
  searchPeople(data:any): Observable<any> {
    return this.http.post<any>(Config.ApiUrl+'api/auth/searchPeople', data,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('searchPeople', data)));
}
  searchQuery(data:any): Observable<any>{
    return this.http.post<any>(Config.ApiUrl+'api/auth/searchRequest',data,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('selectAll',data)));

  }
//---------featch user list 
  chatUserList(): Observable<any>{
    return this.http.post<any>(Config.ApiUrl+'api/auth/chatUserList',null,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('chatUserList',null)));

  }

  requestsUserListCount(): Observable<any>{
    return this.http.post<any>(Config.ApiUrl+'api/auth/getChatRequestCount',null,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('requestsUserListCount',null)));

  }

  requestsUserList(): Observable<any>{
    return this.http.post<any>(Config.ApiUrl+'api/auth/getChatRequest',null,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('requestsUserList',null)));

  }

  //------------Accept chat request
  acceptChatRequest(data:any): Observable<any>{
    return this.http.post<any>(Config.ApiUrl+'api/auth/acceptRequest',data,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('acceptChatRequest',data)));

  }
  //------------Reject chat request
  rejectChatRequest(data:any): Observable<any>{
    return this.http.post<any>(Config.ApiUrl+'api/auth/rejectRequest',data,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('rejectChatRequest',data)));

  }

  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
