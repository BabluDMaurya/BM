import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { PostService } from '../../services/post.service';
import { UserModalComponent } from '../../add-program/user-modal/user-modal.component';
import { Router, ActivatedRoute, ParamMap} from "@angular/router";
import { Config } from "../../config/config";
import {Storage} from '@ionic/storage';
import { FormControl, FormBuilder, Validators} from '@angular/forms';
import { ModalController } from '@ionic/angular';
const baseUrl = Config.ApiUrl;
@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.page.html',
  styleUrls: ['./video-preview.page.scss'],
})
export class VideoPreviewPage implements OnInit {
  videoID : any;
  videoData : any;
  videoDataPath : string;
  videoThumbArray : any;
  VideoDetailsForm : any;
  formData :any;
  filepath : string;
  constructor(
    public commonService: CommonService,
    private actRoute: ActivatedRoute,
    private postService:PostService,
    public storage:Storage,
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private router : Router,
    ) { }
    sliderOpts = {
      zoom:true,
      slidesPerView:3,
      centeredSlides:false,
      spaceBetween:5
  }
    
  ngOnInit() {
    this.filepath = baseUrl+'storage/';
    this.actRoute.paramMap.subscribe((params: ParamMap) => {                 
      this.videoID = params.get('userData');      
    }); 
    this.videoDataPath = localStorage.getItem('videoPath');
    this.videoThumbArray = localStorage.getItem('videoThumb').split(",");
    this.createForm();   
  }
  async userModal() {  
    const modal = await this.modalCtrl.create({
      component: UserModalComponent,
      cssClass: 'fullModal',
      componentProps: { formData: this.VideoDetailsForm.value, source: '1' }
    });
    modal.onDidDismiss().then((d: any) => {      
      let ulist : any = '';      
      d.data.forEach(el=>{
        if(el.id){
          ulist +=el.id+',';
        }        
      });     
      this.VideoDetailsForm.controls['userList'].setValue(ulist.slice(0, ulist.length - 1));
    });
    return await modal.present();
  }

  createForm() {
    this.VideoDetailsForm = this.fb.group({
      videoThumb: new FormControl('', Validators.compose([
        Validators.required
      ])),
      videoType: new FormControl('1', Validators.compose([
        Validators.required
      ])),
      userList: new FormControl(''),
      videoID : new FormControl(''),
    });
    this.VideoDetailsForm.controls['videoID'].setValue(this.videoID);
  }

  videoFormSubmit(){   
    this.commonService.presentLoader();
    this.postService.updateVideoPostById(this.VideoDetailsForm.value).subscribe((data: any) => {
      this.commonService.dismissLoader();
      if(data.status == "success"){
        localStorage.removeItem('videoPath');
        localStorage.removeItem('videoThumb');
        localStorage.removeItem('videoData');
        this.router.navigateByUrl('tabs/consultant-profile');
      }else{
        return this.commonService.presentAlert("Error", "Some thing wrong",['Ok'],'');
      }
    });
  }
}
