import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { File } from '@ionic-native/file/ngx';
import { ActionSheetController } from '@ionic/angular';
import { NutritionService } from '.././../services/nutrition.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Storage } from '@ionic/storage';
import { CommonService } from '../../services/common.service';
import { Config } from "../../config/config";
import { NavController } from '@ionic/angular';
@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.page.html',
    styleUrls: ['./../../app.component.scss', './edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
    dataa2: any;
    dataa: any;
    mainData: boolean = false;
    fileUrl: any = null;
    respData: any;
    displayName: string = '';
    profileData: any;
    fileData: File = null;
    sex: string;
    birthYear: any;
    aboutMe: any;
    moreAboutMe: any;
    tagline: any;
    channel: any;
    interest: any;
    interesrDB: any;
    interestDisable: any;
    langData: any;
    countryData: any;
    secondary: any = null;
    classTypeArr: any;
    classType: any;
    classTypeDB: any;
    classTypeDBArr: any;
    spokenLanguagesArr: any;
    spokenLanguages: any;
    countryId: any;
    stateId: any;
    stateData: any;
    cityId: any;
    cityData: any;
    hometown: any;
    data_val: any;
    abc: any;
    profilePicture: any;
    backgroundPicture: any;
    gender: string;
    token: any;
    img: any;
    userType: any;
    storageData: any;
    userName: any;
    postSubscrib: any;

    gallaryImgPath: any = [];
    consultant: boolean = false;
    saveDetail: {
        field_name: any,
        field_data: undefined,
    };
    defaultInputText: boolean = true;
    defaultInputBox: boolean = false;
    validations_form: FormGroup;
    imagePath = '';
    isLoading: boolean;
    ionViewWillEnter() {
        setTimeout(() => 1000);
    }
    constructor(
        private settingsService: SettingsService,
        public formBuilder: FormBuilder,
        private camera: Camera,
        private crop: Crop,
        public actionSheetController: ActionSheetController,
        private transfer: FileTransfer,
        private storage: Storage,
        private nutritionService: NutritionService,
        public commonService: CommonService,
        public navCtrl: NavController
    ) { this.createForm(); }

    ngOnInit() {
        const dataPromise = this.storage.get('userData');
        dataPromise.then(data => {
            this.storageData = JSON.parse(data);
            this.userType = this.storageData.user_type;
            this.userName = this.storageData.user_name;
            if (this.userType == '1') {
                this.consultant = true;
            }
        });

        this.settingsService.getCommonData().subscribe(
            (data: any) => {
                this.classTypeDB = data.classData;
                this.classTypeDBArr = JSON.stringify(this.classTypeDB);
                this.interest = data.specialityData;
                this.langData = data.langData;
                this.countryData = data.countryData;
            }
        );
        this.settingsService.getProfileData().subscribe(
            (data: any) => {
                this.dataa2 = true;
                const { dataa } = data.status;

                this.profileData = data.status;
                this.dataa = data.status;
                if (this.profileData && this.profileData != '') {

                    this.mainData = true;
                }
                this.displayName = data.status.userData.bios.display_name;

                if (data.status.userData.bios.profile_pic != null) {

                    this.profilePicture = Config.profilePic + data.status.userData.bios.profile_pic;
                } else {

                    this.profilePicture = './../../assets/images/user.jpg';
                }

                if (data.status.userData.bios.profile_background_image != null) {
                    this.backgroundPicture = Config.backgroundPic + data.status.userData.bios.profile_background_image;
                } else {
                    this.backgroundPicture = './../../assets/images/editcoverpic.png';
                }

                this.sex = data.status.userData.gender;

                this.birthYear = data.status.userData.birth_year;
                this.aboutMe = data.status.userData.bios.about_me;

                if (this.userType == '1') {
                    this.moreAboutMe = data.status.userData.additional.more_about_me;
                    this.tagline = data.status.userData.additional.tag_line;

                    this.classTypeArr = data.status.userData.additional.class_names_id.split(',');

                }
                this.interesrDB = data.status.userData.bios.specialities_id;
                this.interestDisable = data.status.userData.bios.specialities_id;
                if (data.status.userData.bios.secondary_specialities_ids !== null) {
                    this.secondary = data.status.userData.bios.secondary_specialities_ids.split(',');
                }

                if (data.status.userData.bios.languages_id) {
                    this.spokenLanguagesArr = data.status.userData.bios.languages_id.split(',');
                } else {
                    this.spokenLanguagesArr = [];
                }
                this.countryId = data.status.userData.bios.country_id;
                console.log(this.countryId);
                this.stateId = data.status.userData.bios.state_id;

                this.cityId = data.status.userData.bios.city_id;

                this.hometown = data.status.userData.bios.hometown;
                if (this.countryId !== '') {
                    this.stateData = data.status.address.allStates;
                    this.cityData = data.status.address.allCities;
                }
            },
            err => {
                this.dataa2 = true;
                this.dataa = true;
            });
    }
    createForm() {
        this.validations_form = this.formBuilder.group({
            about_me: new FormControl('', Validators.compose([
                Validators.maxLength(1000),
                Validators.required
            ])),
            tag_line: new FormControl('', Validators.compose([
                Validators.maxLength(200),
                Validators.required
            ])),
            display_name: new FormControl('', Validators.compose([
                Validators.maxLength(12),
            ])),
            hometown: new FormControl('', Validators.compose([
                Validators.maxLength(200),
            ])),
            gender: ['', [Validators.required]],
            lang_ids: [[], [Validators.required]],
            country: ['', [Validators.required]],
            more_about_me: ['', [Validators.required]],
            class_names_id: ['', [Validators.required]],
            state_id: ['', [Validators.required]],
            secondary: ['', [Validators.required]],
            city_id: ['', [Validators.required]],
        });
    }
    'validation_messages' = {
        about_me: [
            { type: 'required', message: 'Bio is required.' },
            { type: 'maxlength', message: 'Bio cannot be more than 10 characters long' },
        ],
        tag_line: [
            { type: 'required', message: 'Tag line is required.' },
            { type: 'maxlength', message: 'Tag line cannot be more than 10 characters long' },
        ],
        display_name: [
            { type: 'maxlength', message: 'Display name cannot be more than 12 characters long' },
        ],
        hometown: [
            { type: 'maxlength', message: 'hometown  cannot be more than 200 characters long' },
        ],
        gender: [
            { type: 'required', message: 'Please Select any one option' },
        ],
    };
    fileProgress(fileInput: any) {
        this.fileData = <File>fileInput.target.files[0];
    }
    pickImage(sourceType) {
        const options: CameraOptions = {
            quality: 50,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }
        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.cropImage(imageData,'profile_pic');
            console.log(base64Image + ' --base64Image');
        }, (err) => {
        });
    }
    selectionImage(sourceType) {
        const options: CameraOptions = {
            // quality: 100,
            // sourceType: sourceType,
            // destinationType: this.camera.DestinationType.FILE_URI,
            // encodingType: this.camera.EncodingType.JPEG,
            // mediaType: this.camera.MediaType.PICTURE
            quality: 100,
            sourceType: sourceType, 
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }
        this.camera.getPicture(options).then((imageData) => {
            // let baseImage = 'data:image/jpeg;base64,' + imageData; 
            this.gallaryImgPath.push('data:image/jpeg;base64,' + imageData);
            this.cropImage(imageData,'profile_background_image'); 
           // this.designImage(imageData);
            // console.log(baseImage + ' --baseImage');

        }, (err) => {
        });
    }
    async backImage(event) {
        this.img = event.srcElement.name;

        const actionSheet = await this.actionSheetController.create({
            header: "Select Image source",
            buttons: [{
                text: 'Load from Library',
                handler: () => {
                    this.selectionImage(this.camera.PictureSourceType.PHOTOLIBRARY);
                }
            },
            {
                text: 'Use Camera',
                handler: () => {
                    this.selectionImage(this.camera.PictureSourceType.CAMERA);
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
    async selectImage(event) {
        this.img = event.srcElement.name;

        const actionSheet = await this.actionSheetController.create({
            header: "Select Image source",
            buttons: [{
                text: 'Load from Library',
                handler: () => {
                    this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
                }
            },
            {
                text: 'Use Camera',
                handler: () => {
                    this.pickImage(this.camera.PictureSourceType.CAMERA);
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

    cropImage(fileUrl,fieldname) {
        this.crop.crop(fileUrl, {
            quality: 50,
            targetWidth: 411,
            targetHeight: 185
        })
            .then(
                newPath => {
                    this.commonService.presentLoader();
                    this.showCroppedImage(newPath.split('?')[0] , fieldname);
                    const fileTransfer: FileTransferObject = this.transfer.create();
                    const parameters = { channel: this.img };

                    const uploadOpts: FileUploadOptions = {
                        fileKey: 'file',
                        fileName: newPath.substr(newPath.lastIndexOf('/') + 1),
                        httpMethod: 'POST',
                        chunkedMode: false
                    };

                    this.token = localStorage.getItem('userToken');
                    const headers = { 'Authorization': 'Bearer ' + this.token };

                    uploadOpts.headers = headers;
                    uploadOpts.params = parameters;

                    fileTransfer.upload(newPath, Config.ApiUrl + 'api/auth/uploadPic', uploadOpts)
                        .then((data) => {
                            this.commonService.dismissLoader();
                            this.commonService.presentToast('Updated !');
                            this.ngOnInit();
                        }, (err) => {
                            alert(JSON.stringify(err) + 'err');
                        });
                },
                error => {
                    this.commonService.presentToast('Error !');
                }
            );

    }
    // fileTransfer: FileTransferObject = this.transfer.create();


    token1 = localStorage.getItem('userToken');
    uploadOpts: FileUploadOptions = {
        fileKey: 'file',
        fileName: 'somerandom.jpg',
        httpMethod: 'POST',
        headers: { 'Authorization': 'Bearer ' + this.token1 },
        params: {}
    };
    designImage(fileUrl) {
        if (this.gallaryImgPath.length == 0) {
            return false;
        }
        this.commonService.presentLoader();
        this.postSubscrib = this.settingsService.uploadPic({ 'file[]': this.gallaryImgPath }).subscribe((data: any) => {
            console.log("pppppa" + data);
            this.commonService.dismissLoader();
        }, (err) => {

            this.commonService.dismissLoader();
        });

    }
    showCroppedImage(ImagePath,fieldname) {
        this.isLoading = true;
        var copyPath = ImagePath;
        var splitPath = copyPath.split('/');
        var imageName = splitPath[splitPath.length - 1];
        var img = 'abc';
        var filePath = ImagePath.split(img)[0];
        let test_obj = {
            field_name: fieldname,
            field_data: imageName,
        };
        this.saveDetail = test_obj;
    }

    // update profile values
    detailsUpdate(editvalue) {
        console.log(editvalue);
        let abc = editvalue.target.value;

        if (Array.isArray(editvalue.target.value)) {
            this.data_val = editvalue.target.value.toString();
        } else {
            this.data_val = editvalue.target.value;
        }
        if (editvalue.target.name == 'specialities_id') {

            this.interestDisable = this.data_val;

        }
        let test_obj = {
            field_name: editvalue.target.name,
            field_data: this.data_val,
        };

        if (this.data_val !== '') {
            this.saveDetail = test_obj;
        }

        if (this.saveDetail.field_name === 'country_id') {
            this.settingsService.getState(this.saveDetail).subscribe((data: any) => {
                this.stateData = data.stateData;
            }, err => { });
        }
        if (this.saveDetail.field_name === 'state_id') {
            this.settingsService.getCity(this.saveDetail).subscribe((data: any) => {
                this.cityData = data.cityData;
            }, err => { });
        }
        this.settingsService.editProfile(this.saveDetail).subscribe((data: any) => {
            if (data.status === 'success') {
                this.commonService.presentToast('Saved !');
                if (editvalue.target.name == 'display_name') {
                    this.ngOnInit();
                }
            } else {
                this.commonService.presentToast('Error !');
            }
        }, err => {
            this.commonService.presentToast('Error !');
        });

    }
    // update additional profile value for consultant
    additionaldetailUpdate(editvalue) {
        if (editvalue.target.name == 'tag_line') {
            if (this.validations_form.controls.tag_line.status == 'INVALID') {
                return;
            }
        }
        if (Array.isArray(editvalue.target.value)) {
            this.data_val = editvalue.target.value.toString();
        } else {
            this.data_val = editvalue.target.value;
        }
        let test_obj = {
            field_name: editvalue.target.name,
            field_data: this.data_val,
        };
        if (this.data_val !== '') {
            this.saveDetail = test_obj;
        }
        this.settingsService.additionalInfo(this.saveDetail).subscribe((data: any) => {
            if (data.status === 'success') {
                this.commonService.presentToast('Saved !');
            } else {
                this.commonService.presentToast('Error !');
            }
        }, err => {
            this.commonService.presentToast('Error !');
        });
    }
    showInputBox() {
        this.defaultInputText = false;
        this.defaultInputBox = true;
    }
    HideInputBox() {
        this.defaultInputText = true;
        this.defaultInputBox = false;
    }
    setLangCheked(id) {
        var idd = id.toString();
        if (this.spokenLanguagesArr) {
            if (this.spokenLanguagesArr.indexOf(idd) !== -1) {
                return true;
            } else {
                return false;
            }
        }
    }

    setClassCheked(id) {
        var idd = id.toString();
        if (this.classTypeArr) {
            if (this.classTypeArr.indexOf(idd) !== -1) {
                return true;
            } else {
                return false;
            }
        }
    }

    setInterestCheked(id) {
        var idd = '';
        idd = id.toString();
        if (this.interesrDB) {
            if (this.interesrDB.indexOf(idd) !== -1) {
                return true;
            } else {
                return false;
            }
        }
    }

    setSecondaryInterestCheked(id) {
        const idd = id.toString();
        if (this.secondary) {
            if (this.secondary.indexOf(idd) !== -1 && this.interestDisable !== id) {
                return true;
            } else {
                return false;
            }
        }
    }
    setStateCheked(id) {
        var idd = '';
        idd = id.toString();
        if (this.stateId) {
            if (this.stateId.indexOf(idd) !== -1) {
                return true;
            } else {
                return false;
            }
        }
    }
    goBack() {
        this.navCtrl.back();
    }


}