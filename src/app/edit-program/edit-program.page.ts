import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { UserModalComponent } from '../add-program/user-modal/user-modal.component';
import { UserListComponent } from '../add-program/user-list/user-list.component';
import { FormControl, FormBuilder, Validators,FormGroup } from '@angular/forms';
import { CalendarComponent } from '../calendar/calendar.component';
import { formatDate } from '@angular/common';
import { DateTimeModalComponent } from '../add-program/date-time-modal/date-time-modal.component';
import { NavController, Platform, ModalController, IonSlides, ActionSheetController, AlertController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { MediaCapture, MediaFile, CaptureError } from '@ionic-native/media-capture/ngx';
import { MusicVolComponent } from '../add-program/music-vol/music-vol.component';
import { Config } from './../config/config';
import { ProgramService } from './../services/program.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MusicService } from '../services/music.service';
import{VerifyUserInfoComponent} from "./../modalContent/verify-user-info/verify-user-info.component";
@Component({
  selector: 'app-edit-program',
  templateUrl: './edit-program.page.html',
  styleUrls: ['./../app.component.scss', './edit-program.page.scss'],
})
export class EditProgramPage implements OnInit {

  @ViewChild('mySlider', { static: true }) slides: IonSlides;
  @ViewChild(CalendarComponent, { read: 'any', static: false }) myCal: CalendarComponent;

  sliderOpts = {
    zoom: true,
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 5,
  }
  showProgram: any = 1;
  event = {
    startTime: '',
    endTime: '',
  };
  minDate = new Date().toISOString();
  eventSource = [];
  viewTitle;
  calendar = {
    mode: 'day',
    currentDate: new Date(),
  };
  message: any;
  duration: any = -1;
  position: any = 0;
  gallaryImgPath: any = [];
  get_duration_interval: any;
  get_position_interval: any;
  // ------- viraj variable ------ /
  programForm: any;
  modalData: any;
  profileUrl = Config.profilePic;
  currentHrs: any;
  programList: any;
  selected: any;
  programId:any;
  allMusic: any;
  genres: any;
  approval_btn: any = false;
  loginUserData:any;
  request_approve_btn: any = false;
  programDetail: any;
  adData:any;
  finalForm: FormGroup;
  constructor(public commonService: CommonService,
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string,
    private modalCtrl: ModalController,
    private datePipe: DatePipe,
    public navCtrl: NavController,
    private fb: FormBuilder,
    private actionSheetController: ActionSheetController,
    private mediaCapture: MediaCapture,
    private programService: ProgramService,
    private router: Router,
    private platform: Platform,
    private camera: Camera,
    private musicService:MusicService,
    private actRoute: ActivatedRoute, ) {

    let d = new Date();
    this.currentHrs = d.getHours();

    
    this.musicService.getGenres().subscribe((data) => {
      this.genres = data.genres;
      this.allMusic = data.genres[0].musics;
    });
    this.finalForm = this.fb.group({
      programFees: new FormControl(''),
    });
  }
  data: any;
  ionViewWillEnter() {
    this.programService.getProgramById({ 'programId': this.programId }).subscribe((data) => {
      this.programList = data.programData;
      console.log(this.programList );
      let startTime = new Date(data.programData.program_date + 'Z');
      let endTime = new Date(data.programData.program_end_time + 'Z');
      let events=[]; 
      events.push({
        title: data.programData.title,
        startTime: startTime,
        endTime: endTime,
        allDay: false
      });
      this.eventSource =events;
      this.commonService.getUsersById({ "userId": this.programList.request_sent }).subscribe(users => {
        this.modalData = users.userList;

        let uList
        users.userList.forEach(el => {
          if (el.id) {
            uList += el.id + ',';
          }
          console.log(el.id);
        });
        this.programForm.controls['userList'].setValue(uList);
     
      });
      this.programForm.patchValue({
        programTitle: this.programList.title,
        programDescription: this.programList.description,
      });
    });
  }

  ngOnInit() {
    // console.log(this.programDetail);
    this.loginUserData = JSON.parse(localStorage.getItem('userData'));
    this.createForm();
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      this.programId = params.get('programId');
     
    });
  }

  /**
   * function to create add program form with validation.
   */
  createForm() {
    this.programForm = this.fb.group({
      programTitle: new FormControl('', Validators.compose([
        //UsernameValidator.validUsername,
        Validators.maxLength(150),
        Validators.required
      ])),
      programDescription: new FormControl(''),
      // programType: new FormControl('', Validators.compose([
      //   Validators.required
      // ])),

     
      participantsType: new FormControl('', Validators.compose([
        Validators.required,
      ])),

      userList: new FormControl(''),
    });
  }


  'validation_messages' = {
    programTitle: [
      { type: 'required', message: 'title is required.' },
      { type: 'maxlength', message: '150 chars allowed' }
    ],

    // programType: [
    //   { type: 'required', message: 'Program Type is required' },
    // ],programType
    paymentType: [
      { type: 'required', message: 'payment typee is required.' },
    ],
    participantsType: [
      { type: 'required', message: 'Select participant types.' },
    ]

  };


  musicTypes: string = 'music';
  musicList(ev: any) {
    this.musicTypes = ev.detail.value;
  }
  selectMusicList: string = 'hiphop';
  selectMusic(ev: any) {
    this.selectMusicList = ev.detail.value;
  }


  fmtMSS(s) {
    return this.datePipe.transform(s * 1000, 'mm:ss');
  }

  slidePrev(slides) {
    this.slides.slidePrev();
  }
  slideNext(slides) {
    this.slides.slideNext();
  }
  async userModal() {
    console.log(this.modalData);
    console.log(this.programForm.value);
    // this.commonService.presentModal(UserModalComponent, 'fullModal', {formData:this.programForm.value , source:'1'});
    const modal = await this.modalCtrl.create({
      component: UserModalComponent,
      cssClass: 'fullModal',
      componentProps: { formData: this.programForm.value, source: '1' }

    });

    modal.onDidDismiss().then((d: any) => {
      console.log(d);
      this.modalData = (d.data);
      let ulist = '';
      console.log(d.data);
      d.data.forEach(el => {
        if (el.id) {
          ulist += el.id + ',';
        }
        console.log(el.id);
      })
      console.log(ulist);
      this.programForm.controls['userList'].setValue(ulist);
    });

    return await modal.present();
  }

  userList() {
    this.commonService.presentModal(UserListComponent, 'fullModal', { "userList": this.modalData });
  }
  // selectVolume() {
  //   if (!this.musicId) {
  //     this.commonService.presentToast('Select Music ');
  //     return false;
  //   }
  //   this.commonService.presentModal(MusicVolComponent, 'bottomModal', { "musicId": this.musicId, "programId": this.programDetail.id });
  // }
  
  resetEvent() {
    this.event = {
      //title: '',
      //desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      //allDay: false
    };
  }
  async selectMedia() {
    const actionSheet = await this.actionSheetController.create({
      header: 'What would you like to add?',
      buttons: [
        {
          text: 'Capture Image',
          handler: () => {
            this.takeSnap();
          }
        },
        {
          text: 'Record Video',
          handler: () => {
            this.recordVideo();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }
  recordVideo() {
    this.mediaCapture.captureVideo().then(
      (data: MediaFile[]) => {
        if (data.length > 0) {
          this.copyFileToLocalDir(data[0].fullPath);
        }
      },
      (err: CaptureError) => console.error(err)
    );
  }
  copyFileToLocalDir(fullPath) {
    let myPath = fullPath;
    // Make sure we copy from the right location
    if (fullPath.indexOf('file://') < 0) {
      myPath = 'file://' + fullPath;
    }
  }
  // Change current month/week/day
  next() {
    let swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }

  back() {
    let swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }

  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  // Calendar event was clicked
  async onEventSelected(event) {
    // Use Angular date pipe for conversion
    console.log(event);
    let start = formatDate(event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);

    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'From: ' + start + '<br><br>To: ' + end,
     
      buttons: ['OK']
    });
    this.commonService.dismissModal();
    alert.present();
  }
  
  // Time slot was clicked
  async onTimeSelected(ev) {
    if (this.programDetail) {
      this.commonService.presentToast('only one program can create at a time');
      return true;
    }
    this.selected = new Date(ev.selectedTime);
    this.event.startTime = this.selected.toISOString();
    this.selected.setHours(this.selected.getHours());

    // if (ev.events.length > 0) {
    //   console.log('sad');
    // } else {
    console.log(this.selected.getTime());
    console.log(new Date().getTime());
    if (this.selected.getTime() > (new Date().getTime())) {
      const modal = await this.modalCtrl.create({
        component: DateTimeModalComponent,
        cssClass: 'fullModal',
        componentProps: { "calendarData": this.selected, "programData": this.programForm.value, 'programList': this.eventSource }

      });

      modal.onDidDismiss().then((d: any) => {
        console.log(d);
        if (d.data.program_date) {
          let startTime;
          let endTime;
          startTime = new Date(d.data.program_date + 'T' + d.data.program_time + 'Z');
          endTime = new Date(d.data.program_date + 'T' + d.data.program_time + 'Z');
          endTime.setMinutes(endTime.getMinutes() + parseInt(d.data.program_duration));
          this.eventSource.push({
            title: d.data.title,
            startTime: startTime,
            endTime: endTime,
            allDay: false
          });
          this.programDetail = d.data;
          this.ionViewWillEnter();
        }


      });

      return await modal.present();
    } else {
      this.commonService.presentToast('Sorry, this is past time');
    }
    // }    

  }
  

  goBack() {
    this.navCtrl.back();
  }

  // ----------------------------- Open gallery  with multiple --------------//

  openGallery() {
    this.pickFromGallery(this.camera.PictureSourceType.PHOTOLIBRARY);
  }

  takeSnap() {
    console.log('sad');
    this.pickImage(this.camera.PictureSourceType.CAMERA);

  }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 60,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      mediaType: this.camera.MediaType.ALLMEDIA,
      correctOrientation: true
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);
      console.log('viraj', imageData);
    }, (err) => {
      // Handle error
      alert(err);
    });
  }

  pickFromGallery(sourceType) {
    const options: CameraOptions = {
      quality: 60,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      mediaType: this.camera.MediaType.ALLMEDIA,
      correctOrientation: true
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);
      console.log('viraj', imageData);
    }, (err) => {
      // Handle error
      alert(err);
    });
  }
  musicId: any;
  async fsubmit() {
    console.log(this.programDetail);
    if (!this.musicId || !this.programDetail.id) {
      this.commonService.presentToast('Select music. Or something really went wrong.');
      return;
    }
    console.log(this.programDetail);
    this.commonService.presentLoader();
    this.programService.updateProgramMusic({ "musicId": this.musicId, "programId": this.programDetail.id }).subscribe(
      (data) => {
        console.log(this.programDetail.id);
        this.commonService.dismissLoader();
        //  this.navCtrl.navigateForward('/add-program/program-details/' ,this.programDetail.id)
        this.router.navigate(["/add-program/program-details/", this.programDetail.id])
      });
  }

  searchChanged(musicname) {
    const searchTerm = musicname.srcElement.value;
    if (searchTerm == '') {
      this.musicService.getGenres().subscribe((data) => {
        this.genres = data.genres;
        this.allMusic = data.genres[0].musics;
      });
    } else {
      this.programService.searchMusic({ "searchQuery": searchTerm }).subscribe(
        (search: any) => {

          this.allMusic = (search.musicList);
        }
      )
    }
  }
  submitted: boolean = false;
  get f() { return this.programForm.controls; }

  nextStep(event) {
    console.log(this.f);
    let formControl = this.programForm.controls
    this.submitted = true
    if (event == 2) {

      if (this.programForm.invalid) {
        console.log(this.programForm);
        return false;
      }

      if (formControl.participantsType.value == 1 && !formControl.userList.value) {
        this.commonService.presentToast('Selected exclusive but no user selected');
        return false;
      }
      this.showProgram = 2;
    }
  }
  selectedAudioFile: any;
  audioFilename: any;
  audioFileDuration: any;
  audioFile: string = 'into_20180418_173147_audio.mp3';
  baseUrl = Config.ApiUrl;
  musicChanged = 0;
  musicSelect(ev: any) {
    console.log(ev);

    this.musicId = ev[0];
    this.selectedAudioFile = ev[1] + '.mp3'; // audio file 
    this.audioFilename = ev[2];// audio Name
    this.audioFileDuration = ev[3];// audio duration  

    this.prepareAudioFile();
  }


  prepareAudioFile() {
    this.platform.ready().then(() => {
      this.musicChanged = 1;
      this.audioFile = this.baseUrl + "public/audio/" + this.selectedAudioFile;
      console.log("MySelectedAudioFile: " + this.audioFile);
    });
  }
  toMusic() {
    if (this.programDetail) {
      this.showProgram = 3;
    }
  }
  ionViewDidLeave() {
    this.programForm.reset();
    this.showProgram = 1;
    this.programDetail = null;
  }
  ngOnDestroy() {
    this.programForm.reset();

  }
  sponsar_prog(){
    this.approval_btn = true;
  }
  unsponsar_prog(){
    this.approval_btn = false;
  }
  verifyUserInfoModal() {    
    if(this.loginUserData.trilloMatch != 1){
      this.commonService.presentModal(VerifyUserInfoComponent, 'fullpage', ''); 
    }else{

    }    
  }
  applyAdvertise()
  {
    this.loginUserData = JSON.parse(localStorage.getItem('userData'));
    
    let title ="Advertise Rule";
    let msg ="<p>1. Your Video will send for verification.</p>"
            +"<p class='mb-0'>2. Once approved Video Program will be locked</p>";
    let btn=  [
      {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
      }, {
        text: 'Okay',
        handler: () => {
          console.log('Confirm Okay');
          this.sendrequest();
        }
      }
    ];
    
      if(this.loginUserData.trilloMatch != 1){
        this.commonService.presentModal(VerifyUserInfoComponent, 'fullpage', '');
      }else{
        this.commonService.presentAlert(title,msg,btn,'custom-alert advertiseAlert'); 
      }
  }
  sendrequest()
  {
    this.commonService.presentLoader();

    if(this.programDetail.type_id == 'video')
    {
      // console.log('programId:'+this.programDetail.id);
      this.programService.advertiseRequest({'programId':this.programDetail.id}).subscribe(data=>{
        this.adData = data.status;
        this.request_approve_btn = true;
        this.commonService.dismissLoader();
      } );
    }else{
      this.commonService.dismissLoader();
      this.commonService.presentToast('Only Video Program are eligible');
    }
    
  }
  selectVolume() {
    var fees = this.finalForm.value;
    var progData = this.programForm.value;
    this.programList.program_fee = fees.programFees;
    this.programList.description = progData.programDescription;
    this.programList.title = progData.programTitle;
    // this.programList.file = this.gallaryImgPath;
    console.log(this.gallaryImgPath);
    console.log('hh');
    console.log(this.programList);
    this.commonService.presentLoader();
    // this.programService.updateProgramFees({ "programFees": fees.programFees, "programId": this.programList.id}).subscribe(
    //   (data) => {
    //     this.commonService.dismissLoader();
    //     this.router.navigate(["tabs/program"])
    //   }
    // );
    this.programService.editProgram(this.programList).subscribe((data) => {
      this.commonService.dismissLoader();
      // this.router.navigate(["tabs/program"])
    });
 }
}
