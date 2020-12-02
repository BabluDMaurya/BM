import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private storage:Storage) { }
  
  SetToken(token){
   return this.storage.set('user-token',token);
  }
  DeleteToken(token){
    this.storage.remove('user-token');
  }
async GetPayLoad(){
  const token = await this.storage.get('user-token');
  let payload;
  if(token){
    payload = token.split('.')[1];
    payload = JSON.parse(window.atob(payload))
  }
  return payload.data;
}

}
