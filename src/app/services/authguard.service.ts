import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { SettingsService } from './settings.service';
import { templateJitUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
   dataPromise: any;
   apidata : any;
  constructor(
    private router: Router,
    private storage: Storage,
    private SettingsService:SettingsService ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const data = localStorage.getItem('userToken');
      if ((data !== null) ) {
        return true;
      } else {
        this.router.navigate(['/signin']);
        return false;
      }
  }
}