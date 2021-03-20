import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { UserModalComponent } from './user-modal/user-modal.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormControl, FormBuilder, Validators, } from '@angular/forms';
import { CalendarComponent } from '../calendar/calendar.component';
import { formatDate, DatePipe } from '@angular/common';
import { DateTimeModalComponent } from './date-time-modal/date-time-modal.component';
import { NavController, Platform, ModalController, IonSlides, ActionSheetController, AlertController, PickerController } from '@ionic/angular';
import { MediaCapture, MediaFile, CaptureError } from '@ionic-native/media-capture/ngx';
import { MusicVolComponent } from './music-vol/music-vol.component';
import { Config } from './../config/config';
import { ProgramService } from './../services/program.service';
import { Router } from '@angular/router';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.page.html',
  styleUrls: ['./../app.component.scss', './add-program.page.scss'],
})
export class AddProgramPage implements OnInit {

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
  allMusic: any;
  genres: any;
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
    private camera: Camera,public modalController: ModalController) {

    let d = new Date();
    this.currentHrs = d.getHours();

    this.musicService.getGenres().subscribe((data) => {
      this.genres = data.genres;
      this.allMusic = data.genres[0].musics;
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
      { type: 'required', message: 'title is required.' },
      { type: 'maxlength', message: '150 chars allowed' }
    ],

    programType: [
      { type: 'required', message: 'Program Type is required' },
    ],
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
    if (!this.musicId) {
      this.commonService.presentToast('Select Music ');
      return false;
    }
    this.commonService.presentModal(MusicVolComponent, 'bottomModal', { "musicId": this.musicId, "programId": this.programDetail.id });
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
    for (let i = 1; i <= 60; i++) {
      arr.push({ text: i, value: i });
    } 
    const defaultColumnOptions = [
      {
        name: 'Minutes',
        options:arr
      }
    ];
    const buttons = [
      {
        text: 'Select Minute',
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
    this.selected = new Date(ev.selectedTime);
    this.event.startTime = this.selected.toISOString();
    this.selected.setHours(this.selected.getHours());
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
  toMusic() {
    if (this.programDetail && this.programForm.value.programType != 6) {
      this.showProgram = 3;
    } else {
      this.router.navigate(["/tabs/program" ])
    }
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
}