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
  checkChatUser(data:any): Observable<any>{
    return this.http.post<any>(Config.ApiUrl+'api/auth/checkChatUser',data,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('checkChatUser',data)));

  }
  getChatRoom(data:any): Observable<any>{
    return this.http.post<any>(Config.ApiUrl+'api/auth/getChatRoom',data,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getChatRoom',data)));

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
  //-----------send chat request
  sendChatRequest(data:any): Observable<any>{
    return this.http.post<any>(Config.ApiUrl+'api/auth/sendChatRequest',data,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('chatRequestSend',data)));

  }
  //------------block user for chat-
  blockChatUser(data:any): Observable<any>{
    return this.http.post<any>(Config.ApiUrl+'api/auth/blockChatUser',data,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('blockChatUser',data)));

  }
  //------------delete user form chatlist-
  deleteChatUser(data:any): Observable<any>{
    return this.http.post<any>(Config.ApiUrl+'api/auth/deleteChatUser',data,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('deleteChatUser',data)));

  }
  //------------clear chat private-
  clearChatUser(data:any): Observable<any>{
    return this.http.post<any>(Config.ApiUrl+'api/auth/clearChatUser',data,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('clearChatUser',data)));

  }
  //------------delete chat group-
  deleteGroup(data:any): Observable<any>{
    return this.http.post<any>(Config.ApiUrl+'api/auth/deleteGroup',data,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('deleteGroup',data)));

  }
  //------------exit from chat group-
  exitGroup(data:any): Observable<any>{
    return this.http.post<any>(Config.ApiUrl+'api/auth/exitGroup',data,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('exitGroup',data)));

  }
  //------------delete all request -
  allRequestDecline(data):Observable<{}>{
    return this.http.post<any>(Config.ApiUrl+'api/auth/declienAll',data,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('allRequestDecline',data)));
  }
  //------------get the chat Group detail by id-
  chatGroup(data:any): Observable<any>{
    return this.http.post<any>(Config.ApiUrl+'api/auth/chatGroup',data,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('chatGroup',data)));

  }
  
  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
