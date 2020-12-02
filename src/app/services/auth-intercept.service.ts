import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders} from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Storage } from "@ionic/storage";

export const InterceptorSkipHeader = 'X-Skip-Interceptor';
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService,
              public storage: Storage) { }
  user2:any;
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // for skip the adding headers
    if (req.headers.has(InterceptorSkipHeader)) {
      console.log("batman");
      const headers = req.headers.delete(InterceptorSkipHeader);
      return next.handle(req.clone({ headers }));
    } 
    const token = localStorage.getItem('userToken');
     if(token)
     {
      const modifiedReq = req.clone({
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${token}`
        })
      });
      
      return next.handle(modifiedReq);
     }else{
        return next.handle(req);
     }
   
    // return this.authService.user.pipe(
    //   take(1),
    //   exhaustMap(user => {
    //     console.log('sdf');
    //     console.log(user);
    //     if (!user) {
    //       return next.handle(req);
    //     }
    //     const modifiedReq = req.clone({
    //       headers:new HttpHeaders({
    //               'Content-Type':  'application/json',
    //               'Authorization': `Bearer asdsadasdsadsadsadsad`
    //             })
    //     });
    //     return next.handle(modifiedReq);
    //   })
    // );
  }
}
