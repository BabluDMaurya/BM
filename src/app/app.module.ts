import { MbscModule } from '@mobiscroll/angular';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { UserDetailsComponent } from './modalContent/user-details/user-details.component';
import { FollowersComponent } from './modalContent/followers/followers.component';
import { FollowingComponent } from './modalContent/following/following.component';
import { SearchFoodComponent } from './modalContent/search-food/search-food.component';
import { PrivacyComponent } from './modalContent/privacy/privacy.component';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { Media } from '@ionic-native/media/ngx';
import { TermsComponent } from './modalContent/terms/terms.component';
import { FilePath } from '@ionic-native/file-path/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { AuthguardService } from './services/authguard.service';
import { AuthService } from './services/auth.service';
import { FCM } from '@ionic-native/fcm/ngx';
import { DatePipe } from '@angular/common';
import { ModalMineralComponent } from './modalContent/modal-mineral/modal-mineral.component';
import { NutritionModalComponent } from './user-profile/nutrition-modal/nutrition-modal.component';
import { ShareModalComponent } from './profile/user-profile-view/share-modal/share-modal.component';
import { UserFollowersComponent } from './profile/user-profile-view/user-followers/user-followers.component';
import { FollowingPopupComponent } from './profile/user-profile-view/following-popup/following-popup.component';
import { NotificationModalComponent } from './profile/consultant-profile-view/notification-modal/notification-modal.component';
import { InfoModalComponent } from './profile/consultant-profile-view/info-modal/info-modal.component';
import { SliderZoomComponent } from './modalContent/slider-zoom/slider-zoom.component';
import { UserModalComponent } from './add-program/user-modal/user-modal.component';
import { UserListComponent } from './add-program/user-list/user-list.component';
import { MusicVolumeModalComponent } from './add-video/music-volume-modal/music-volume-modal.component';
import { MusicVolComponent } from './add-program/music-vol/music-vol.component';
import {ChatRoomsComponent}  from './chats/chat-rooms/chat-rooms.component';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { Config } from "./config/config";
import { DateTimeModalComponent } from './add-program/date-time-modal/date-time-modal.component';
import { CalendarModule } from "ion2-calendar";
import { PopoverComponent } from './profile/popover/popover.component';
import { GroupusersModalComponent } from '../app/chats/groupusers-modal/groupusers-modal.component';
import { DropdownComponent } from './chats/dropdown/dropdown.component';
import { RequestsModalComponent } from './chats/requests-modal/requests-modal.component';
import { RequestedDropdownComponent } from './program/requested-dropdown/requested-dropdown.component';
import { VideosThumbListComponent } from './add-program/videos-thumb-list/videos-thumb-list.component'
import { AddEquipmentsComponent } from './add-program/add-equipments/add-equipments.component';
import { ProgramNutritionDetailModalComponent } from './add-program/program-nutrition-detail-modal/program-nutrition-detail-modal.component';
import { ScheduleModalComponent } from './program/schedule-modal/schedule-modal.component';
import { AdDetailsComponent } from './program/ad-details/ad-details.component';
import { SponserCommentComponent } from './program//ad-details/sponser-comment/sponser-comment.component'; 
import { AdvInfoComponent } from './program//ad-details/adv-info/adv-info.component';
import { FormatTimePipe } from './config/format-time-pipe';
import { ParticipantsComponent } from './program/participants/participants.component';
import { EquipmentsComponent } from './program/equipments/equipments.component'
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'https://ionicinto.wdipl.com:9902/', options: {} };
//import { FilterPipe } from './config/filter.pipe';
import { PipeModule } from './nutrition-list/pipe.module';
import { MusicDropdownComponent } from './music/music-dropdown/music-dropdown.component';
import { PlaylistDropdownComponent } from './music/playlist-dropdown/playlist-dropdown.component';
import {VerifyUserComponent} from 'src/app/modalContent/verify-user/verify-user.component';
import{VerifyUserInfoComponent} from "src/app/modalContent/verify-user-info/verify-user-info.component";
// import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@NgModule({
  declarations: [AppComponent, UserDetailsComponent, FollowersComponent, FollowingComponent, SearchFoodComponent,
    ModalMineralComponent, NutritionModalComponent, ShareModalComponent, UserFollowersComponent, FollowingPopupComponent,
    NotificationModalComponent, InfoModalComponent, SliderZoomComponent, UserModalComponent
    , UserListComponent, MusicVolumeModalComponent, MusicVolComponent, TermsComponent, PrivacyComponent, PopoverComponent,
    DateTimeModalComponent, AddEquipmentsComponent, VideosThumbListComponent, ScheduleModalComponent,
    RequestedDropdownComponent, FormatTimePipe, EquipmentsComponent,
    GroupusersModalComponent, DropdownComponent, PlaylistDropdownComponent,
    RequestsModalComponent, ParticipantsComponent, AdDetailsComponent,
    SponserCommentComponent,  MusicDropdownComponent,AdvInfoComponent,VerifyUserComponent,VerifyUserInfoComponent,
    ChatRoomsComponent
  ],

  entryComponents: [UserDetailsComponent, FollowersComponent, FollowingComponent,
    SearchFoodComponent, ModalMineralComponent, NutritionModalComponent, ShareModalComponent,
    UserFollowersComponent, FollowingPopupComponent, NotificationModalComponent, InfoModalComponent,
    SliderZoomComponent, UserModalComponent, UserListComponent, TermsComponent, PrivacyComponent,
    MusicDropdownComponent, PlaylistDropdownComponent, MusicVolumeModalComponent, MusicVolComponent,
    PopoverComponent, DateTimeModalComponent, EquipmentsComponent, AddEquipmentsComponent
    , VideosThumbListComponent, ScheduleModalComponent, RequestedDropdownComponent,
    GroupusersModalComponent, ParticipantsComponent, DropdownComponent, RequestsModalComponent,
    AdDetailsComponent, SponserCommentComponent, AdvInfoComponent,VerifyUserComponent,VerifyUserInfoComponent,ChatRoomsComponent],

  imports: [ 
    MbscModule,  
    BrowserModule,
    IonicModule.forRoot({

    }),
    AppRoutingModule,
    HttpClientModule,
    CalendarModule,
    FormsModule, PipeModule.forRoot(),
    AngularCropperjsModule,
    NgxIonicImageViewerModule,
    ReactiveFormsModule,
    CalendarModule,
    SocketIoModule.forRoot(config),
    IonicStorageModule.forRoot()
  ],
  providers: [
    //Device,
    StreamingMedia,
    ScreenOrientation,
    PreviewAnyFile,
    DatePipe,
    Media,
    StatusBar,
    SplashScreen,
    AndroidPermissions,
    ImagePicker,
    MediaCapture,
    Geolocation,
    AuthguardService,
    AuthService,
    LocationAccuracy,
    Clipboard,
    Camera,
    Crop,
    ScreenOrientation,
    FileTransfer,
    SocialSharing,
    PhotoViewer,
    FCM,
    // LocalNotifications,
    ImagePicker,
    ScreenOrientation,
    File,
    Config,
    // VideoPlayer,
    // SocialSharing,
    FilePath,
    LocalNotifications,
    BarcodeScanner,
    Deeplinks,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptorService,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
