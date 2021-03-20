import { Component, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { NutritionService } from './../services/nutrition.service';
import { CommonService } from './../services/common.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { FormControl, FormBuilder, FormArray } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./../app.component.scss', './add-post.page.scss'],
})
export class AddPostPage implements OnInit {
  @ViewChild('myInput', { static: true }) content: ElementRef;
  public uploader: FileUploader = new FileUploader({
    url: 'https://ionicinto.wdipl.com/api/auth/uploadPost',
    autoUpload: true,
    method: 'post',
    headers: [{ name: 'Access-Control-Allow-Credentials', value: 'true' },
    { name: 'Access-Control-Allow-Origin', value: '*' }]

  });
  addPostForm: any;
  sliderOpts = {
    zoom: false,
    slidesPerView: 'auto',
    centeredSlides: false,
    spaceBetween: 15,
  }
  postSubscrib:any;
  private win: any = window;
  gallaryImgPath: any = [];
  description: string;
  constructor(private camera: Camera,
    private imagePicker: ImagePicker,
    private transfer: FileTransfer,
    private nutritionService: NutritionService,
    private commonService: CommonService,
    public sanitizer: DomSanitizer,
    public formBuilder: FormBuilder,
    private navCtrl: NavController,
    private router: Router,
  ) {
    this.createForm();
  }

  ngOnInit() {

  }
  
  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];

  }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
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

  //
  createForm() {
    this.addPostForm = this.formBuilder.group({
      description: new FormControl(''),
      file: new FormArray([this.formBuilder.group({
        name: ['']
      })]),
    });
  }

  takeSnap() {
    this.pickImage(this.camera.PictureSourceType.CAMERA);

  }
  fileTransfer: FileTransferObject = this.transfer.create();


  token = localStorage.getItem('userToken');
  uploadOpts: FileUploadOptions = {
    fileKey: 'file',
    fileName: 'somerandom.jpg',
    httpMethod: 'POST',
    headers: { 'Authorization': 'Bearer ' + this.token },
    params: {}
  };
  // ----------------------------- Open gallery  with multiple --------------//

  openGallery() {
    let options: ImagePickerOptions = {
      maximumImagesCount: 8,
      outputType: 1
    };

    if (!this.imagePicker.hasReadPermission) {
      this.imagePicker.requestReadPermission();
      return null;
    }
    if (this.imagePicker.hasReadPermission) {
      this.imagePicker.getPictures(options).then((results) => {
        console.log('batman', results);
        if (results == 'OK') {

          return;
        }
        for (var i = 0; i < results.length; i++) {
          this.gallaryImgPath.push('data:image/jpeg;base64,' + results[i]);
        }
      }, (err) => { alert(err) });
    }
  }

  removeImg(index) {
    this.gallaryImgPath.splice(index, 1);
  }


  //public fileUploader: FileUploader = new FileUploader({});
  postImg() {
    if (this.gallaryImgPath.length == 0 && !this.description) {
      return false;
    }
    this.commonService.presentLoader();
    this.postSubscrib =this.nutritionService.uploadPost({ 'file[]': this.gallaryImgPath, 'description': this.description }).subscribe((data: any) => {

      this.commonService.dismissLoader();
      this.router.navigateByUrl('tabs/consultant-profile');
    }, (err) => {

      this.commonService.dismissLoader();
    });

  }
  

  //------------------ -- GO BACK  ------------
  goBack() {
    this.navCtrl.back();
  }

  ngOnDestroy(){
    console.log('destroy');
   this.description = null;
   this.gallaryImgPath=null;
  }
}