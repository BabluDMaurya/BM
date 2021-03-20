import { Injectable, Optional } from '@angular/core';
import { AlertController,ToastController,LoadingController,ModalController ,PopoverController ,NavController, PickerController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import {SettingsService} from './../services/settings.service'
import { Router } from '@angular/router'; 
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { catchError } from "rxjs/operators";
import { Config } from "../config/config";
import { HttpErrorHandlerService, HandleError } from "./http-error-handler.service";
import { NotificationService } from '../services/notification.service';
import { ChatService } from 'src/app/services/chat.service';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private handleError: HandleError;
  public token: any;
  public headers: any;
  public options: any;
  private userData:any;
  private userToken:any;
  public footerTabHooks = new Subject<boolean>();
  cssClass: any;
  constructor(
    private notification: NotificationService,
    private alertController: AlertController,
    public toastController:ToastController,
    public loadingController:LoadingController,
    public storage:Storage,
    public settingsService:SettingsService,
    public router:Router,
    public modalController:ModalController,
    public popoverController: PopoverController,
    private pickerController:PickerController,
    private navCtrl:NavController,
    private http: HttpClient,
    private dataService: ChatService,
    httpErrorHandler: HttpErrorHandlerService,
   ) {

    this.handleError = httpErrorHandler.createHandleError('PostService');
    }

   getApiHeaders(extraHeader = {}, checkAuth = false) {

    if (checkAuth) {
      this.token = localStorage.getItem('userToken');
      this.headers = new HttpHeaders({ "Authorization": "Bearer " + this.token });
    }
    return this.options = { headers: this.headers };
  }
    isLoading = false;
    modaldata:any;
    
    async getUnreadCountMyProfile(){
      this.notification.getUnreadCountMyProfile().subscribe(
      (data: any) => {
        localStorage.setItem('notification',data.status.length);
        localStorage.setItem('totalchat',data.unreadchatcount);
        localStorage.setItem('sponcerchat',data.sponcerCount.sponcer_chat_count);
      });
    }
    async presentPromptRedirect(title,msg,sendData) {
      let alert = await this.alertController.create({
        cssClass:this.cssClass, 
        header: title,
        message:msg,
        backdropDismiss : false,
        inputs: [
          {
            name: 'groupName',
            placeholder: 'Enter here ...',
            type:'text',
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              // console.log('Cancel clicked');
            }
          },
          {
            text: 'request',
            handler: data => {
              this.presentLoader();
              if(sendData != null && sendData != ''){                
                if(data.groupName != '' && data.groupName != null){
                  sendData.groupName = data.groupName;
                  this.dataService.sendChatRequest(sendData).subscribe(
                    (data: any) => {
                      this.dismissLoader();
                      if(data.status == 'success'){
                        this.router.navigate(['/chat-room/'+data.requestID +'/'+data.room+'/'+data.type]);
                      }else{
                          console.log('Somthing wrong');
                           return false;
                      }
                    });
                }else{
                  this.dismissLoader();
                  console.log("please enter group name");
                  return false;
                }
              }else{
                this.dismissLoader();
              }
            }
          }
        ]
      });      
      alert.present();
    }

    async presentAlert(title,msg,btns:any[],myCustomClass) {

      if(myCustomClass != null && myCustomClass != ''){
        this.cssClass = myCustomClass;
      }else{
        this.cssClass = 'custom-alert';
      }
      let alert =await this.alertController.create({
        cssClass:this.cssClass, 
        header: title,
        message: msg,
        buttons: btns,        
      });
       alert.present();
    }

    async redirectUrlWithIdConfirm(title,msg,redirrectUrl,id) {
      let alert = await this.alertController.create({
        header: title,
        message: msg,
        backdropDismiss : false,
        cssClass: 'custom-alert' ,       
        buttons: [          
          {
            text: 'Ok',
            handler: () => {
              this.router.navigate([redirrectUrl, id]).then( (e) => {
                if (e) { 
                } else { 
                }
              });
            }
          }
        ]
      });
      alert.present();
    }

    async presentToast(headerdata) {
      const toast = await this.toastController.create({
        header: headerdata,
        duration: 2000,
        position: 'bottom',
      });
      toast.present();
    }
  
    async presentLoader() {
      this.isLoading = true;
      return await this.loadingController.create({
        spinner: 'crescent',
        // message: 'wait...',
        cssClass: 'custom-loader',
        translucent: true,
      }).then(a => {
        a.present().then(() => {        
          if (!this.isLoading) {
            a.dismiss();
            // a.dismiss().then(() => console.log('abort presenting loader'));
          }
        });
      });
    }
  
    async dismissLoader() {
      this.isLoading = false;
      return await this.loadingController.dismiss();
      // return await this.loadingController.dismiss().then(() => console.log('dismissed loder'));
    }

    loggingout(){
      this.storage.get('userData').then((value) =>            
      this.settingsService.logout().subscribe((data: any) => {         
           this.storage.clear(); 
           localStorage.removeItem('userToken') ;
           localStorage.removeItem('userData') ;
           localStorage.removeItem('sponcerchat') ;
           localStorage.removeItem('totalchat') ;
           localStorage.removeItem('notification') ;
           localStorage.clear          
           
           this.dismissLoader(); 
          this.router.navigateByUrl('/signin');
          this.navCtrl.navigateRoot;
            
        }, err => {
          this.storage.clear(); 
          localStorage.removeItem('userToken') ;
          localStorage.removeItem('userData') ;   
          localStorage.removeItem('sponcerchat') ;
          localStorage.removeItem('totalchat') ;
          localStorage.removeItem('notification') ;       
        })
      );
    }
    dismissModal(dataArray=[]) { 
      this.modalController.dismiss(dataArray);
      return dataArray;
    }
    modal:any;
    async presentModal(path, classcss, parameters) {
      this.modal = await this.modalController.create({
        component:path,
        cssClass: classcss,
        componentProps: parameters,
        backdropDismiss: false
      });
     
      this.modal.onDidDismiss().then((d: any) => { 
        this.modal =null;        
        this.modaldata = d;
      });
      
      return await this.modal.present();
    }
    
    async showPopover(path, classcss, parameters) {
      const popover = await this.popoverController.create({
        component: path,
        translucent: true,
        cssClass:classcss,// 'custom-popover',
        componentProps:parameters//{'postId':ev , 'commentStatus':commentStatus}
      });
     
      return await popover.present();
    }

    dismissPopover(dataArray:any) { 
      this.popoverController.dismiss(dataArray); 
    }

    setUserData(data:any, token:any= null)
    {
      this.userData = data;
      if(token){ 
        this.userToken = token;
      }
    }

    async presentItemPicker(columnOptions=[],buttons=[], numColumns=1,numOptions=5,)
    {
      // console.log(columnOptions);
      const picker = await this.pickerController.create({
        columns:columnOptions, 
        buttons: buttons,
        cssClass: 'timeSelect',     
      });
  
      await picker.present();
    }

    
    getColumns(numColumns, numOptions, columnOptions) {
      let columns = [];
      for (let i = 0; i < numColumns; i++) {
        columns.push({
          name: `col-${i}`,
          options: this.getColumnOptions(i, numOptions, columnOptions)
        });
      }
      // console.log(columns);
      return columns;
    }
  
    getColumnOptions(columnIndex, numOptions, columnOptions) {
      let options = [];
      for (let i = 0; i < numOptions; i++) {
        options.push({
          text: columnOptions[columnIndex][i % numOptions],
          value: i
        })
      }
  
      return options;
    }

    getUserData(){
      return this.userData;
    }

    getUserToken(){
      return this.userToken;
    }

    getUsersById(formData) {
      return this.http.post<any>(Config.ApiUrl + 'api/auth/getUsersById', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('getUsersById', formData)));
    }
    loadVideoType(formData) {
      return this.http.post<any>(Config.ApiUrl + 'api/auth/loadVideoType', formData, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('loadVideoType', formData)));
    }

    verifyToken(){
      return this.http.post<any>(Config.ApiUrl + 'api/auth/verifyToken', null, this.getApiHeaders(null, true)).pipe(catchError(this.handleError('verifyToken')));
    }
    likedPost(formData){
      return this.http.post<any>(Config.ApiUrl+'api/auth/imageLike', formData ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('getUserData', formData)));
    }
    bookmarkPost(formData){
      return this.http.post<any>(Config.ApiUrl+'api/auth/bookmark', formData ,this.getApiHeaders(null,true)).pipe(catchError(this.handleError('bookmarkPost', formData)));
    }  

}
