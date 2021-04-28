import { Component, OnInit, ViewChild, ElementRef, HostListener,OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from "@angular/router";
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from './../services/common.service';
import { PostService } from './../services/post.service';
import { Storage } from '@ionic/storage';
import { Config } from "./../config/config";
import { IonContent,  NavController} from '@ionic/angular';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./../app.component.scss','./comments.page.scss'],
})
export class CommentsPage implements OnInit,OnDestroy {
  @ViewChild('commentfield', {static: true}) content: ElementRef;
  data: any;
  postId: any;
  comment: any;
  routeUrl: any;
  count:any;
  profileImage: any;
  commentId: any;
  replyToComment: any;
  profilePicPath: any;
  submitted: boolean = false;
  storageData: any;
  userId: any;
  commentForm: FormGroup;
  router: any;
  url : any = Config.profilePic;
  constructor(private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              public commonService: CommonService,
              public postService: PostService,
              public storage: Storage,
              public navCtrl: NavController,
              public urlrouter: Router) {
    
              this.createForm();
              this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
                this.postId = params.get('postId');
              });
       
   } 
  @HostListener('window:scroll', ['$event'])
  ngOnInit() {
    this.routeUrl = this.urlrouter.url;
    console.log(this.urlrouter.url + 'hhhhh');
    this.scrollToBottomOnInit();
    this.profilePicPath = Config.profilePic;
    const dataPromise = this.storage.get('userData');
    dataPromise.then(data => {
       
        this.storageData = JSON.parse(data)
        this.userId = this.storageData.id;

  });
    this.commentForm.patchValue({
      postId:this.postId
    });


    this.postService.getComment({'postId' : this.postId }).subscribe(
      (data: any) => {
        this.data = true;
       this.comment = data.status;
       this.count = data.count;
       console.log('this.postId' + this.postId);
      });

      this.postService.getProfileImage().subscribe(
        (data: any) => {
            this.profileImage = data.status.profile_pic;
        });
  }
  
  
  createForm() {
    this.commentForm = this.fb.group({
      comment: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(25),
      ])),
      postId:new FormControl(''),
      replyToComment:new FormControl()
    });
  }
  'validation_messages' = {
    comment: [
      { type: 'required', message: 'Email is required.' },
      { type: 'maxlength', message: 'Comment cannot be more than 25 characters long' }
    ],
    
  };
 // @ViewChild("comment",{"static" : true}) input: ElementRef;
  replyComment(event){
    this.content.nativeElement.focus();
    if(event.srcElement.id != ''){
      console.log('ghfghf');
      this.replyToComment = event.srcElement.id;
    }else{
      this.replyToComment = '';
    }
    this.commentForm.get('replyToComment').setValue(this.replyToComment);
  }
  
 

  async deleteComment(event){
    this.commentId = event.srcElement.id;
    this.postService.deleteComment({'commentId' : this.commentId}).subscribe((data:any)=>{
      if(data.status == true){
        this.commonService.presentToast('Comment Deleted !');
        this.ngOnInit();
      }
    },err=>{
       console.log(err + 'errr'); 
      }  
   );
  }
  main() {
    this.router.navigate(["/main"]);
  }
  getContent() {
    return document.querySelector('ion-content');
  }
  scrollToBottomOnInit() {
    this.getContent().scrollToBottom(300);
  }
  onClickSubmit() {
    
    this.submitted = true;
    console.log(this.commentForm.value);
    if(this.commentForm.value != ''){
      this.commonService.presentLoader();
    this.postService.addComment(this.commentForm.value).subscribe((data:any)=>{
      if(data.status == true){
        this.commentForm.reset();
        this.commentForm.get('replyToComment').setValue('');
        this.getContent().scrollToBottom(1000);
        this.ngOnInit();
      }
      this.commonService.dismissLoader();
    },err=>{ 
      this.commonService.dismissLoader();
       console.log(err + 'errr')  }  
   );
    }
   
  }

  goBack(){
    this.navCtrl.back();
  }
  ngOnDestroy(){
    console.log("comment ngOnDestroy");
  }
  ionViewWillEnter() {    
    console.log('comment ionViewWillEnter');
  }
  ionViewDidLeave(){   
    console.log('comment ionViewDidLeave');
  }
}
