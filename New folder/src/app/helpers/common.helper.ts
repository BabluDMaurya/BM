import { FormGroup } from '@angular/forms';
import { async } from '@angular/core/testing';
import { ToastController } from '@ionic/angular';

// custom validator to check that two fields match
export async function  presentToast(headerdata) {
let toastController:ToastController ;
    const toast = await this.toastController.create({
      header: headerdata,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }