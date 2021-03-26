import { Injectable } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http"
import { Observable, of } from "rxjs"
import { MessageService } from "./message.service"

export type HandleError =(
  operation?: string,
  result?: any
) => (error: HttpErrorResponse) => Observable<any>

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService {

  constructor(private messageService: MessageService) { }
  createHandleError = (serviceName = "") => <T>(
    operation = "operation",
    result = {} as T

) => this.handleError(serviceName, operation, result)
handleError<T>(serviceName = "", operation = "operation", result ) {
    return (error: HttpErrorResponse) => {      
      console.log(error);
      return of(error);
    }
}
}
