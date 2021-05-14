import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { UserModalComponent } from './user-modal/user-modal.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormControl, FormBuilder, Validators,FormGroup } from '@angular/forms';
import { CalendarComponent } from '../calendar/calendar.component';
import { formatDate, DatePipe } from '@angular/common';
import { DateTimeModalComponent } from './date-time-modal/date-time-modal.component';
import { NavController, Platform, ModalController, IonSlides, ActionSheetController, AlertController, PickerController } from '@ionic/angular';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture/ngx';
import { MusicVolComponent } from './music-vol/music-vol.component';
import { Config } from './../config/config';
import { ProgramService } from './../services/program.service';
import { Router } from '@angular/router';
import { MusicService } from '../services/music.service';
import { NutritionDetailModalComponent } from '../nutrition-list/nutrition-detail-modal/nutrition-detail-modal.component';
import{VerifyUserInfoComponent} from "./../modalContent/verify-user-info/verify-user-info.component";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.page.html',
  styleUrls: ['./../app.component.scss', './add-program.page.scss'],
})
export class AddProgramPage implements OnInit {

  @ViewChild('mySlider', { static: true }) slides: IonSlides;
  // @ViewChild(CalendarComponent, { read: 'any', static: false }) myCal: CalendarComponent;
  @ViewChild(CalendarComponent, {static: true }) myCal: CalendarComponent;
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
  allMusic: any;
  genres: any;
  loginUserData:any;
  approval_btn: any = false;
  request_approve_btn: any = false;
  adData:any;
  selectedVideo: string; 
  uploadedVideo: string; 
  videoFileSelected : boolean = false;
  visibility : boolean = false;
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
    private pickerController: PickerController,
    private musicService: MusicService,
    private file: File,
    private previewAnyFile: PreviewAnyFile,
    private camera: Camera,public modalController: ModalController) {

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
    this.programService.fetchAllProgram().subscribe((data) => {
      this.programList = data.programList
      this.setProgramList(data.programList);
    });
  }

  ngOnInit() {
    this.loginUserData = JSON.parse(localStorage.getItem('userData'));
  
    this.createForm();

  }

  /**
   * get available timeslots 
   * @param programList 
   * @returns events
   */
  setProgramList(programList) {
    let events = [];
    let startTime;
    let endTime;
    programList.forEach((element) => {
      startTime = new Date(element.program_date + 'Z');
      endTime = new Date(element.program_date + 'Z');
      endTime.setMinutes(endTime.getMinutes() + parseInt(element.program_duration));
      let participantType = element.is_requested ? "Excusive" : "Open (User will request to join)";

      events.push({
        title: element.title,
        startTime: startTime,
        endTime: endTime,
        allDay: false,
        typeID: element.type_id,
        participant: participantType
      });
    });
    this.eventSource = (events);
    return events;
  }
  sponsar_prog(){
    this.approval_btn = true;
  }
  unsponsar_prog(){
    this.approval_btn = false;
  }
  /**
   * function to create add program form with validation.
   */
  
  createForm() {
    this.programForm = this.fb.group({
      programTitle: new FormControl('', Validators.compose([
        //UsernameValidator.validUsername,
        Validators.maxLength(40),
        Validators.required
      ])),
      programDescription: new FormControl(''),
      programType: new FormControl('', Validators.compose([
        Validators.required
      ])),

      paymentType: new FormControl('1', Validators.compose([
        Validators.required
      ])),
      participantsType: new FormControl('', Validators.compose([
        Validators.required,
      ])),

      userList: new FormControl(''),
    });
  }


  'validation_messages' = {
    programTitle: [
      { type: 'required', message: 'Title is required.' },
      { type: 'maxlength', message: '40 chars allowed' }
    ],

    programType: [
      { type: 'required', message: 'Program Type is required' },
    ],
    paymentType: [
      { type: 'required', message: 'Payment typee is required.' },
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
    const modal = await this.modalCtrl.create({
      component: UserModalComponent,
      cssClass: 'fullModal',
      componentProps: { formData: this.programForm.value, source: '1' }
    });

    modal.onDidDismiss().then((d: any) => {
      this.modalData = (d.data);
      let ulist = '';
      d.data.forEach(el => {
        if (el.id) {
          ulist += el.id + ',';
        }
      })
      this.programForm.controls['userList'].setValue(ulist);
    });

    return await modal.present();
  }

  userList() {
    this.commonService.presentModal(UserListComponent, 'fullModal', { "userList": this.modalData });
  }
  selectVolume() {
    var fees = this.finalForm.value;
    this.commonService.presentLoader();
    // if(this.programDetail.type_id != 'video'){
    this.programService.updateProgramFees({ "programFees": fees.programFees, "programId": this.programDetail.id}).subscribe(
      (data) => {
        // console.log(data);
        this.commonService.dismissLoader();
        this.router.navigate(["tabs/program"])
      }
    );
  // }
    // if (!this.musicId) {
    //   this.commonService.presentToast('Select Music ');
    //   return false;
    // }
    // this.commonService.presentModal(MusicVolComponent, 'bottomModal', { "musicId": this.musicId, "programId": this.programDetail.id });
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
  resetEvent() {
    this.event = {
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
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
    let options: CaptureVideoOptions = { 
      limit: 1,
      duration: 30,
      quality : 0
     };
    this.mediaCapture.captureVideo(options).then(
      async (data: MediaFile[]) => {
        if (data.length > 0) {
          // this.copyFileToLocalDir(data[0].fullPath);
          // this.showLoader();
          this.uploadedVideo = null; 
          var filename = data[0].name;
          var dirpath = data[0].fullPath.substr(0, data[0].fullPath.lastIndexOf('/') + 1);
          dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;  
          this.selectedVideoFile(dirpath,filename);
          this.visibility = true;
        }
      },
      (err: CaptureError) => console.error(err + 'yyyyerror')
    );
  }
  async selectedVideoFile(dirpath,filename){
    try {
      var dirUrl = await this.file.resolveDirectoryUrl(dirpath);
      var retrievedFile = await this.file.getFile(dirUrl, filename, {});           
    } catch(err) {
      console.log('vidoe error');
      this.dismissLoader();
      this.commonService.presentAlert("Error","Something went wrong.",['Ok'],'');
    }
    retrievedFile.file( data => {
       console.log('data');
        this.dismissLoader();
        if (data.size > 50){ return this.commonService.presentAlert("Error", "You cannot upload more than 100 mb.",['Ok'],'');}
        // if (data.type !== ALLOWED_MIME_TYPE) { return this.commonService.presentAlert("Error", "Incorrect file type.",["OK"]);}
        // if(ALLOWED_MIME_TYPE.indexOf(data.type) == -1){return this.commonService.presentAlert("Error", "Incorrect file type.",["OK"],'');}
        this.selectedVideo = retrievedFile.nativeURL;
        localStorage.setItem('selectedVideo',JSON.stringify(this.selectedVideo));
        this.videoFileSelected = !this.videoFileSelected; 
        // this.videoFileSelected = https://www.dropbox.com/s/df2d2gf1dvnr5uj/Sample_1280x720_mp4.mp4';
    });
  }
  showLoader() {
    this.commonService.presentLoader();   
  }

  dismissLoader() {
    this.commonService.dismissLoader();
  }
  filepreview(){
    console.log(this.selectedVideo);
    this.previewAnyFile.preview(this.selectedVideo)
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));
  }

  removefilepreview(){    
    this.visibility = false;
    this.selectedVideo = null;
    this.videoFileSelected = false;       
    this.commonService.presentToast('Selected video remove');
    console.log('Selected video remove');
  }
  copyFileToLocalDir(fullPath) {
    let myPath = fullPath;
    if (fullPath.indexOf('file://') < 0) {
      myPath = 'file://' + fullPath;
    }
  }
  next() {
    let swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }

  back() {
    let swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  async onEventSelected(event) {
    let start = formatDate(event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);
    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'From: ' + start
        + '<br>To: ' + end
        + '<br>Program Type: ' + event.typeID
        + '<br>Participant Type: ' + event.participant,
      buttons: ['OK'],
      cssClass: "custom-alert"
    });
    this.commonService.dismissModal();
    alert.present();
  }
  
  programDetail: any;
  minutes :any;
  // Time slot was clicked
   onTimeSelected(ev) {
    if (this.programDetail) {
      this.commonService.presentToast('only one program can create at a time');
      return true;
    }
     
    let arr = [];
    var hrs = ['05','10','15','20','25','30','35','40','45','50','55','60'];
    for (let i = 0; i <= 11; i++) {
      
      arr.push({ text: hrs[i], value: hrs[i] });
    } 
    this.selected = new Date(ev.selectedTime);
    var hours = this.selected.getHours();
    var AmOrPm = hours >= 12 ? 'pm' : 'am';
    hours = (hours % 12) || 12;
    const defaultColumnOptions = [
      {
        name: 'Minutes',
        options:arr
        
      }
    ];
    const buttons = [
      {
        text: 'Select Minute        ' + hours+' '+AmOrPm ,
        cssClass: 'timeHeading'
      },
      {
        text: 'Cancel',
        role: 'cancel'
      },
      
      {
        text: 'Confirm',
        handler: (value) => { 
          this.minutes = value.Minutes.value;
          this.getModal();
        }
      }
    ]
    // this.selected = new Date(ev.selectedTime);
    this.event.startTime = this.selected.toISOString();
    this.selected.setHours(this.selected.getHours());
    console.log(this.selected.getHours());
    console.log(this.selected.getTime());
    console.log(new Date().getTime());
    if (this.selected.getTime() > (new Date().getTime())) {
      this.commonService.presentItemPicker(defaultColumnOptions, buttons);
    } else {
      this.commonService.presentToast('Sorry, this is past time');
    }
  }


  // async onTimeSelected(ev) {
  //   const modal = await this.modalController.create({
  //     component: UserModalComponent,
  //     cssClass: 'my-custom-class'
  //   });
  //   return modal.present();
  // }

  async getModal(){ 
    const modal = await this.modalCtrl.create({
      component: DateTimeModalComponent,
      cssClass: 'fullModal',
      componentProps: { 
        "calendarData": this.selected, 
        "programData": this.programForm.value, 
        'programList': this.eventSource, 
        'minutes':  this.minutes }
    });

    modal.onDidDismiss().then((d: any) => {
      console.log(d);
      if (d.data.program_date) {
        let startTime;
        let endTime;
        startTime = new Date(d.data.program_date + 'T' + d.data.program_time + 'Z');
        endTime = new Date(d.data.program_date + 'T' + d.data.program_time + 'Z');
        endTime.setMinutes(endTime.getMinutes() + parseInt(d.data.program_duration));
        let participantType = d.data.is_requested ? "Excusive" : "Open (User will request to join)";
        this.eventSource.push({
          title: d.data.title,
          startTime: startTime,
          endTime: endTime,
          allDay: false,
          typeID: d.data.type_id,
          participant: participantType
        });
        this.programDetail = d.data;
        this.ionViewWillEnter();
      }
    });
    return await modal.present();
  }

  goBack() {
    this.navCtrl.back();
  }

  openGallery() {
    this.pickFromGallery(this.camera.PictureSourceType.PHOTOLIBRARY);
  }
  takeSnap() {
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
      this.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);
    }, (err) => {
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
      this.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);
    }, (err) => {
      alert(err);
    });
  }
  musicId: any;
  async fsubmit() {
    if (!this.musicId || !this.programDetail.id) {
      this.commonService.presentToast('Select music. Or something really went wrong.');
      return;
    }
    this.commonService.presentLoader();
    this.programService.updateProgramMusic({ "musicId": this.musicId, "programId": this.programDetail.id }).subscribe(
      (data) => {
        this.commonService.dismissLoader();
        this.router.navigate(["/tabs/program" ])
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
    let formControl = this.programForm.controls
    this.submitted = true
    if (event == 2) {
      if (this.programForm.invalid) {
        return false;
      }
      if (formControl.participantsType.value == 1 && !formControl.userList.value) {
        this.commonService.presentToast('Selected exclusive but no user selected');
        return false;
      }
      this.programForm.value.file = this.gallaryImgPath;
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
    this.musicId = ev[0];
    this.selectedAudioFile = ev[1]; // audio file 
    this.audioFilename = ev[2];// audio Name
    this.audioFileDuration = ev[3];// audio duration  

    this.prepareAudioFile();
  }

  prepareAudioFile() {
    this.platform.ready().then(() => {
      this.musicChanged = 1;
      this.audioFile = this.baseUrl + "public/storage/audio/" + this.selectedAudioFile;
    });
  }
  toLastScreen() {
    console.log(this.programDetail);
    // if (this.programDetail && this.programForm.value.programType != 6) {
      if (this.programDetail ) {
      this.showProgram = 3;
    } 
    // else {
    //   this.router.navigate(["/tabs/program" ])
    // }
  }
  removeImg(index) {
    this.gallaryImgPath.splice(index, 1);
  }

  clearExcl() {
    this.modalData = null;
  }
  ionViewDidLeave() {
    this.programForm.reset();
    this.showProgram = 1;
    this.programDetail = null;
  }
  ngOnDestroy() {
    this.programForm.reset();
  }
  verifyUserInfoModal() {    
    if(this.loginUserData.trilloMatch != 1){
      this.commonService.presentModal(VerifyUserInfoComponent, 'fullpage', ''); 
    }else{

    }    
  }
  

}