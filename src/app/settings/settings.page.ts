import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AlertController, ToastController, NavController } from '@ionic/angular';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { Storage} from '@ionic/storage';
import { SettingsService } from './../services/settings.service';

import { CommonService } from './../services/common.service';
import { Config } from "./../config/config";

import{VerifyUserInfoComponent} from "./../modalContent/verify-user-info/verify-user-info.component";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./../app.component.scss','./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  isLoading = false;
  id :any; 
  toggleValue: boolean;
  loginUserData:any;
  uv : any = 'Earn with IntoActive';
  constructor(
    public router: Router,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private clipboard: Clipboard,
    public toastController: ToastController,
    public storage :Storage,
    public settingService: SettingsService,
    public commonService: CommonService,
    public navCtrl: NavController,
    public config: Config
    ) { }

  ngOnInit() {
    this.loginUserData = JSON.parse(localStorage.getItem('userData'));
    this.settingService.getProfileData().subscribe(
      (data: any) => {
        if(data.status.userData.comment_disable == 0 || data.status.userData.comment_disable == null){
          this.toggleValue = false;
        }else{
          this.toggleValue = true;
        }
      },
      err => {
      });
  }
  editProfile() {
    this.isLoading = true;
    this.router.navigate(["/edit-profile"]);
    this.loadingController
      .create({ keyboardClose: true, message: '' })
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          this.isLoading = false;
          loadingEl.dismiss();
          this.router.navigateByUrl('/edit-profile');
        }, 300);
      });
  }
  change() {
    this.isLoading = true;
    this.router.navigate(["/change"]);
    this.loadingController
      .create({ keyboardClose: true, message: '' })
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          this.isLoading = false;
          loadingEl.dismiss();
          this.router.navigateByUrl('/change');
        }, 300);
      });
  }
  
  async delete(){
    const alert = await this.alertController.create({
      header: 'Are you sure you want delete your account?',
      message: 'Once deleted, you will not be able to recover your account !!!',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.id = this.storage.get('userData').then((value) =>            
            this.settingService.deleteUser({'uid':value.id}).subscribe((data: any) => {              
              if (data.message === true) {
                console.log('success');
                this.router.navigateByUrl('/signin');
              } else {
                console.log('error');
              }
            }, err => {
              console.log('error msg!');
            })
          );
          }
        }
      ]
    });

    await alert.present();
  }
  async  copy() {
    const toast = await this.toastController.create({
      message: 'Your profile have been copied.',
      duration: 2000
    });
    toast.present();

    
this.clipboard.copy(Config.profileLink);
this.clipboard.paste().then(
   (resolve: string) => {
      alert(resolve);
    },
    (reject: string) => {
      alert('Error: ' + reject);
    }
  );

//this.clipboard.clear();
  }
  async loginpopup() {

    const alert = await this.alertController.create({
      header: 'Logout!',
      message: 'Confirm Logout!',
      cssClass: 'custom-alert',    
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.commonService.presentLoader();
            this.commonService.loggingout();

          }
        }
      ]
    });

    await alert.present();
  }
  
  async activatePopup() {
    let prompt = this.alertController.create({
      header: 'Status',
      message: "Comment Status Updated Successfully", 
      cssClass: 'custom-alert signal-btn',    
      buttons: [
       {
          text: 'OK',
          handler: data => {
            // console.log('Saved clicked');
          }
        }
        
      ]      
    });
    console.log(this.toggleValue + 'togglevalue');
    if(this.toggleValue == true){
      //(await prompt).present();
      this.settingService.commentDisableUpdate({'status':this.toggleValue}).subscribe((data: any) => {
      },err => {
          console.log('error msg!');
      })

    }else if(this.toggleValue == false){
      this.settingService.commentDisableUpdate({'status':this.toggleValue}).subscribe((data: any) => {
        console.log(data.status);
      },err => {
          console.log('error msg!');
      })
    }
  }
  goBack() {
    this.navCtrl.back();
  }
  verifyUserInfoModal() {    
    if(this.loginUserData.trilloMatch != 1){
      this.commonService.presentModal(VerifyUserInfoComponent, 'fullpage', ''); 
    }else{

    }    
  }
}