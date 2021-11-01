import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { PopoverController,NavController, ModalController} from '@ionic/angular';
import { NutritionModalComponent } from '../user-profile/nutrition-modal/nutrition-modal.component'
import { Config } from '../config/config';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
import { PeopleViewService } from "../services/people-view.service";
import { ProgramService } from './../services/program.service';

@Component({
  selector: 'app-consultant-videos',
  templateUrl: './consultant-videos.page.html',
  styleUrls: ['./../app.component.scss','./consultant-videos.page.scss'],
})
export class ConsultantVideosPage implements OnInit {
  bookmark = true;
  like = true;
  last_page: any;
  currentPage: any = 0;  
  myPosts: any;
  mySavedVideoPosts:any;
  gotData: boolean = false;
  userData: any;
  userId: any;
  profileData:any;
  url:any=Config.imgUrl;
  upcomingList:any;
  profile_url = Config.profilePic;
  noData:any;
  storagePath: any = Config.storagePath;
  profilePicUrl:any = Config.profilePic;  
  bannerDefaultImage = './../../../assets/images/editcoverpic.png';
  profileDefaultImage = './../../../assets/images/user.jpg';
  defaultPostImage : any = './../../../assets/images/loading.jpg';
  constructor(
    public commonService : CommonService,
    public modalController: ModalController,
    private peopleView: PeopleViewService,
    private navCtrl:NavController,
    private programService:ProgramService
    ) { }
  consultantVideos:string='intoactive';
  segmentChanged(ev: any) {
    this.consultantVideos=ev.detail.value;   
  }

  goBack() {
    this.navCtrl.back();
  }
  ngOnInit() {
    this.userData =JSON.parse(localStorage.getItem('userData'));
    this.userId = this.userData.id;
    this.peopleView.getUserData({'userId':this.userId}).subscribe((data:any)=>{
      this.profileData = data;
    });
    this.videoLoadData();
    this.videoPostData();
    
   
  }

  ionViewWillEnter(){
    this.programService.getUpcomingPrograms(null).subscribe(data => {
      if(data.programList.length<1)
      {
        this.noData=true;
      }
      let filter  = data.programList.filter(el=>{
        if(el.type_id == 'video')
        {
          return el;
        }
      });
     this.upcomingList = this.getCounter(filter);
      console.log(filter)
    });

  }

  getCounter(elementArr) {
    elementArr.filter(el => {
      el.convertedTime = new Date(el.program_date + 'Z');
      let a: any = new Date(el.program_date + 'Z');
      let b: any = new Date();
      let c: any;

      if (a > b) {
        c = Math.abs(a - b) / 1000;

      } else {
        c = 0;
        el.live = true;
      }

      el.cd = c;

      setInterval(function () {
        if (parseInt(el.cd) > 0)
          el.cd = parseInt(el.cd) - 1;
        el.hh = ~~(el.cd / (60 * 60));
        el.mm = ~~(el.cd % 3600 / 60);
        el.ss = (el.cd % 3600 % 60);
      }, 1000)
      return el;
    });

    return elementArr;
  }

  async openViewer(path) {
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: this.storagePath + path, // required
        srcHighRes: this.storagePath + path,
        srcFallback: this.storagePath + path
      },
      cssClass: 'ion-img-viewer', // required
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }
  videoPostData() {       
    this.peopleView.getExclusiveVedioType('2', this.userId, 2, 1).subscribe((data: any) => {
      this.myPosts = data.posts.data;
      console.log(this.myPosts);
      this.myPosts.forEach((element, i) => {
        this.myPosts[i].count = element.post_likes.length;

        element.post_likes.filter((f) => {
          if (f.user_id == this.userId) {
            this.myPosts[i].liked = true;
          }
        });
        element.post_bookmarks.filter((f) => {
          if (f.user_id == this.userId) {
            this.myPosts[i].bookmarked = true;
          }
        });
      });      
      this.last_page = data.posts.last_page;
      this.currentPage = data.posts.current_page;
      this.gotData = true;
    });
  }
  videoLoadData() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.peopleView.getMyPost('2', this.userId, 1).subscribe((data: any) => {
      this.mySavedVideoPosts = data.posts.data;
      console.log(this.mySavedVideoPosts[0].video_post[0].video_type);
      this.mySavedVideoPosts.forEach((element, i) => {
        this.mySavedVideoPosts[i].count = element.post_likes.length;
        element.post_likes.filter((f) => {
          if (f.user_id == this.userData.id) {
            this.mySavedVideoPosts[i].liked = true;
          }
        });
        element.post_bookmarks.filter((f) => {
          if (f.user_id == this.userData.id) {
            this.mySavedVideoPosts[i].bookmarked = true;
          }
        });
      });
      this.last_page = data.posts.last_page;
      this.currentPage = data.posts.current_page;
      this.gotData = true;
    });
    
  }
  loadVideoData(event) {
    setTimeout(() => {
      if (this.currentPage > 0) {
        this.peopleView.getExclusiveVedioType('2', this.userId, 2, (this.currentPage + 1)).subscribe((data: any) => {
          data.posts.data.forEach((element, i) => {
            element.count = element.post_likes.length;
            element.post_likes.filter((f) => {
              if (f.user_id == this.userId) {
                data.posts.data[i].liked = true;
              }
            });
            element.post_bookmarks.filter((f) => {
              if (f.user_id == this.userId) {
                this.myPosts[i].bookmarked = true;
              }
            });
          });
          this.myPosts = this.myPosts.concat(data.posts.data);
          this.last_page = data.posts.last_page;
          this.currentPage = data.posts.current_page;
        });
      }
      event.target.complete();
      if (this.last_page <= (this.currentPage + 1)) {
        event.target.disabled = true;
      }
    }, 500);
  }
  liked(postId, likeStat) {
    this.myPosts.forEach((element, i) => {
      if (element.id == postId) {
        this.myPosts[i].liked = !likeStat;
        if (likeStat) {
          this.myPosts[i].count = (this.myPosts[i].count - 1);

        } else {
          this.myPosts[i].count = (this.myPosts[i].count + 1);
        }
      }
    });
    this.peopleView.likedPost({ 'postId': postId, 'liked': likeStat }).subscribe((data: any) => {
      if (data.status) {
        this.commonService.presentToast(data.status);
      }
    });
  }

  nutritionModal(data) {
    this.commonService.presentModal(NutritionModalComponent, 'fullModal', { 'data': data });
  }
}
