import { Component, OnInit } from '@angular/core'; 
import { NavController } from '@ionic/angular';
import { ProgramService } from './../../services/program.service';
import { CommonService } from './../../services/common.service';
import { AdvInfoComponent } from '../../program/ad-details/adv-info/adv-info.component';
import {SponserCommentComponent} from '../../program/ad-details/sponser-comment/sponser-comment.component';
import { NotificationService } from '../../services/notification.service';


@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.page.html',
  styleUrls: ['../../app.component.scss', './all-list.page.scss'],
})
export class AllListPage implements OnInit {
  programList:any = [];
  sponsorPayment:any = [];
  programData:any = [];
  showList : boolean = true;
  showChat : boolean = false;
  showPayment : boolean = false;
  sponcers:any;
  sponcersChatEmpty:boolean = false;
  sponcersChat:boolean = false;
  sponcerCount: any;
  customClass : any =0;
  chatCount:any = 0;
  constructor(
    private notification: NotificationService,
    private programService : ProgramService,
    public navCtrl: NavController,
    private commonService: CommonService)  { }

  ngOnInit() {
    this.commonService.presentLoader();
    this.commonService.presentToast('Fetching Sponsors');    
    //------ sponcer list ----------//  
    this.programService.getSponserList(null).subscribe(data=>{ 
      console.log(data.data);
      this.programList = data.data;
      // data.data.forEach(element => { 
      //   this.commonService.dismissLoader();
      //   if(element.get_adv.length > 0)
      //   {
      //     element.get_adv.forEach(el => {
      //       el.expanded = false;
      //       this.programList.push(el);
      //     });
      //   }
      //   if(element.get_prog.length > 0)
      //   {
      //     element.get_prog.forEach(al => {
      //       al.expanded = false;
      //       this.programData.push(al);
      //     });
      //   }
        
      // },
      // error =>{
      //   this.commonService.dismissLoader();
      //   this.commonService.presentToast('Failed to fetch.'+error);
      // }); 
    })

    //------chat list---------//
    // this.notification.geUnreadSponcerChat().subscribe(
    //   (data: any) => {
    //     this.sponcerCount = data.count.sponcer_chat_count;
    //   });
    this.notification.getSponcerChatDetails().subscribe(
      (data: any) => {
        console.log(data);
        this.commonService.dismissLoader();
        if(data.slist.length > 0){
          this.sponcersChat  = true;          
          this.sponcers = data.slist;
          this.sponcers.forEach(element => {
            this.chatCount = (parseInt(this.chatCount) + parseInt(element.chat_count));
          });          
        }else{this.sponcers
          this.sponcersChatEmpty  = true;
        }
      });

      this.programService.getSponserPayment(null).subscribe(data=>{ 
        console.log(data);
        this.sponsorPayment = data.data;
      })
  }  
  unread(event){   
    this.commonService.presentModal(SponserCommentComponent,'fullModal',{'adDetails':event});
  }
  goBack() {
    this.navCtrl.back();
  }
  expand(index)
  {
    this.customClass = index;
    this.programList.forEach((el, i)=>{
      if(index == i)
      {
         el.expanded =true;
      }else{
        el.expanded =false;
      }
    });
  }

  expandPayment(index)
  {
    // this.customClass = index;
    this.sponsorPayment.forEach((el, i)=>{
      if(index == i)
      {
         el.expanded =true;
      }else{
        el.expanded =false;
      }
    });
  }

  showSponsersContent(event){
    this.commonService.presentModal(AdvInfoComponent,'fullModal',{'adDetails':event});
  }

  tabChange(ev: any) {    
    if(ev.detail.value == 'chat'){
      this.showList = false;
      this.showPayment = false;
      this.showChat = true;
    } else if(ev.detail.value == 'payment'){
      this.showList = false;
      this.showChat = false;
      this.showPayment = true;
    } else if(ev.detail.value == 'list'){
      this.showList = true;
      this.showChat = false;
      this.showPayment = false;
    }     
  }
}
