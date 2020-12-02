import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class TutorialGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {

    const isComplete = await this.storage.get('tutorialComplete');

    if (!isComplete) {
      this.router.navigateByUrl('/starting-slide');
    }

    return isComplete;
  }
  
}
