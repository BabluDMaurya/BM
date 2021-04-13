import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { PostService } from './../../services/post.service';
import { CommonService } from './../../services/common.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./../../app.component.scss','./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  popovervalue: any;
  postData:any;
  commentStatus :any;
  constructor(public navCtrl: NavController, 
    private navParams: NavParams,
    private postService: PostService,
    private commonService : CommonService
    ) {
      this.postData = this.navParams.get('postId');
      this.commentStatus = this.navParams.get('commentStatus');
      
      console.log(this.postData);
     }

  ngOnInit() {}
  
  // Remove any post 
  removePost(){
    this.commonService.presentLoader();
    this.postService.removePost({'postId':this.postData}).subscribe((data)=>{
      console.log(data);
      this.commonService.dismissLoader();
      if(data.postStatus == true){
      
      }
    });
    this.commonService.dismissPopover({'click':1});
  }

  // Disable - Enable any comment for any post
  commentDisable(){
    this.commonService.presentLoader();
    this.postService.commentDisable({'postId':this.postData,  'comment':this.commentStatus}).subscribe((data)=>{
      console.log(data);
      this.commonService.dismissLoader();
      if(data.postStatus == true){
        
      }
    });
    this.commonService.dismissPopover({'click':2});
  }
}
