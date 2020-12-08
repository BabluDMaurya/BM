import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './services/authguard.service';
import { CheckTutorial } from './services/check-tutorial.service';

const routes: Routes = [
  { path: '', redirectTo: 'starting-slide', pathMatch: 'full' },  
 
  {
    path: 'signin',
    loadChildren: () => import('./auth/signin/signin.module').then( m => m.SigninPageModule),
  },
  {
    path: 'signup',
    loadChildren: () => import('./auth/signup/signup.module').then( m => m.SignupPageModule)
  },

  { path: 'verify/:userData',
   loadChildren: './auth/verify/verify.module#VerifyPageModule', pathMatch: 'full' 
  },
  {
    path: 'forgot',
    loadChildren: () => import('./auth/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  { path: 'reset-password/:emailid',
   loadChildren: './auth/reset-password/reset-password.module#ResetPasswordPageModule', pathMatch: 'full'
  },
  
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  // {
  //   path: 'edit-profile',
  //   loadChildren: () => import('./settings/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  // },
  {
    path: 'change',
    loadChildren: () => import('./settings/change/change.module').then( m => m.ChangePageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./settings/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'contact-admin',
    loadChildren: () => import('./settings/contact-admin/contact-admin.module').then( m => m.ContactAdminPageModule)
  },
  
  {
    path: 'payment-history',
    loadChildren: () => import('./settings/payment-history/payment-history.module').then( m => m.PaymentHistoryPageModule)
  },
  {
    path: 'payment-review',
    loadChildren: () => import('./settings/payment-review/payment-review.module').then( m => m.PaymentReviewPageModule)
  },
 
  {
    path: 'privacy',
    loadChildren: () => import('./settings/privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
  {
    path: 'term',
    loadChildren: () => import('./settings/term/term.module').then( m => m.TermPageModule)
  },
  {
    path: 'program-history',
    loadChildren: () => import('./settings/program-history/program-history.module').then( m => m.ProgramHistoryPageModule)
  },
  
  {
    path: 'nutrition',
    loadChildren: () => import('./nutrition/nutrition.module').then( m => m.NutritionPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'common-slider',
    loadChildren: () => import('./common-slider/common-slider.module').then( m => m.CommonSliderPageModule)
  },
 
  {
    path: 'consultant-profile-view/:userData',
    loadChildren: () => import('./profile/consultant-profile-view/consultant-profile-view.module').then( m => m.ConsultantProfileViewPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'add-program',
    loadChildren: () => import('./add-program/add-program.module').then( m => m.AddProgramPageModule)
  },
  {
    path: 'nutrition-list',
    loadChildren: () => import('./nutrition-list/nutrition-list.module').then( m => m.NutritionListPageModule)
  },
  {
    path: 'consultant-videos',
    loadChildren: () => import('./consultant-videos/consultant-videos.module').then( m => m.ConsultantVideosPageModule)
  },
  {
    path: 'add-video',
    loadChildren: () => import('./add-video/add-video.module').then( m => m.AddVideoPageModule)
  },
  {
    path: 'add-post',
    loadChildren: () => import('./add-post/add-post.module').then( m => m.AddPostPageModule)
  },

  {
    path: 'people',
    loadChildren: () => import('./profile/people/people.module').then( m => m.PeoplePageModule)
  },
  {
    path: 'tab-followers',
    loadChildren: () => import('./profile/tab-followers/tab-followers.module').then( m => m.TabFollowersPageModule)
  },
  {
    path: 'tab-followings',
    loadChildren: () => import('./profile/tab-followings/tab-followings.module').then( m => m.TabFollowingsPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'settings/notification-control',    
    loadChildren: () => import('./settings/notification-control/notification-control.module').then( m => m. NotificationControlPageModule)

  },
  // {
  //   path: 'broadcaster/:broadcastId',
  //   loadChildren: () => import('./app/broadcaster/broadcaster/broadcaster.module').then( m => m.BroadcasterPageModule)
  // },
  // {
  //   path: 'broadcaster',
  //   loadChildren: () => import('./broadcaster/broadcaster.module').then( m => m.BroadcasterPageModule)
  // },
  {
    path: 'date-test',
    loadChildren: () => import('./date-test/date-test.module').then( m => m.DateTestPageModule)
  },
  {
    path: 'simplebroadcaster',
    loadChildren: () => import('./simplebroadcaster/simplebroadcaster.module').then( m => m.SimplebroadcasterPageModule)
  },
  {
    path: 'starting-slide',
    loadChildren: () => import('./starting-slide/starting-slide.module').then( m => m.StartingSlidePageModule),
    canLoad: [CheckTutorial]

  },
  // {
  //   path: 'search',
  //   loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  // },

  {
    path: 'videos/:id/:type?',
    loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: 'bookmark',
    loadChildren: () => import('./bookmark/bookmark.module').then( m => m.BookmarkPageModule)
  },
  {
    path: 'all-images',
    loadChildren: () => import('./profile/all-images/all-images.module').then( m => m.AllImagesPageModule)
  },  
  {
    path: 'comments/:postId',
    loadChildren: () => import('./comments/comments.module').then( m => m.CommentsPageModule)
  },
  {
    path: 'post-preview',
    loadChildren: () => import('./post-preview/post-preview.module').then( m => m.PostPreviewPageModule)
  },
  {
    path: 'musicplayer',
    loadChildren: () => import('./musicplayer/musicplayer.module').then( m => m.MusicplayerPageModule)
   
  },
 {
  path: 'video-preview/:userData',
  loadChildren: () => import('./add-video/video-preview/video-preview.module').then( m => m.VideoPreviewPageModule)
 },
  {
    path: 'program-view/:programId',
    loadChildren: () => import('./program/program-view/program-view.module').then( m => m.ProgramViewPageModule)
  },
  {
    path: 'program-details/:programId',
    loadChildren: () => import('./program/program-details/program-details.module').then( m => m.ProgramDetailsPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chats/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'add-private',
    loadChildren: () => import('./chats/add-private/add-private.module').then( m => m.AddPrivatePageModule)
  },
  {
    path: 'add-group',
    loadChildren: () => import('./chats/add-group/add-group.module').then( m => m.AddGroupPageModule)
  },
  {
    path: 'chat-room/:sender/:receiver',
    loadChildren: () => import('./chats/chat-room/chat-room.module').then( m => m.ChatRoomPageModule)
  },
  {
    path: 'edit-program/:programId',
    loadChildren: () => import('./edit-program/edit-program.module').then( m => m.EditProgramPageModule)
  }, 
  {  path: 'video-preview/:userData',
    loadChildren: () => import('./add-video/video-preview/video-preview.module').then( m => m.VideoPreviewPageModule)
  },
  {
    path: 'music',
    loadChildren: () => import('./music/music.module').then( m => m.MusicPageModule)
  }, 
  {
    path: 'category-page',
    loadChildren: () => import('./category-page/category-page.module').then( m => m.CategoryPagePageModule)
  },
  
  {
    path: 'video-program-view/:videoId/:pgId',
    loadChildren: () => import('./program/video-program-view/video-program-view.module').then( m => m.VideoProgramViewPageModule)
  },
  {
    path: 'all-list',
    loadChildren: () => import('./sponsors/all-list/all-list.module').then( m => m.AllListPageModule)
  },
  {
    path: 'sponcer-chat',
    loadChildren: () => import('./sponcer-chat/sponcer-chat.module').then( m => m.SponcerChatPageModule)
  },
  {
    path: 'access/:id/:senderId',
    loadChildren: () => import('./chats/access/access.module').then( m => m.AccessPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }