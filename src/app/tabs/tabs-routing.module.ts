import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

import { AuthguardService } from '../services/authguard.service';
const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    canActivate: [AuthguardService],
    children: [
      {
        path: 'user-profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../user-profile/user-profile.module').then(m => m.UserProfilePageModule)
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'consultant-profile-view/:userData',
        children: [
          {
            path: '',
            // redirectTo: '/tabs/profile',
            pathMatch: 'full',
            loadChildren: () =>
              import('../profile/consultant-profile-view/consultant-profile-view.module').then(m => m.ConsultantProfileViewPageModule)
          }
        ]
      },
      {
        path: 'user-profile-view/:userData',
        children: [
          {
            path: '',
            // redirectTo: '/tabs/profile',
            pathMatch: 'full',
            loadChildren: () =>
              import('../profile/user-profile-view/user-profile-view.module').then(m => m.UserProfileViewPageModule)
          }
        ]
      },
      {
        path: 'consultant-profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile/my-profile/my-profile.module').then(m => m.MyProfilePageModule)
          }
        ]
      }, {
        path: 'bookmark',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../bookmark/bookmark.module').then(m => m.BookmarkPageModule)
          }
        ]
      }, {
        path: 'images/:userId',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile/images/images.module').then(m => m.ImagesPageModule)
          }
        ]
      }, {
        path: 'all-images/:userId/:userName',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile/all-images/all-images.module').then(m => m.AllImagesPageModule)
          }
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../search/search.module').then(m => m.SearchPageModule)
          }
        ]
      },
      {
        path: 'edit-profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../settings/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
          }
        ]
      },
      {
        path: 'post-preview/:postId',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../post-preview/post-preview.module').then(m => m.PostPreviewPageModule)
          }
        ]
      },
      {
        path: 'program',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../program/program/program.module').then(m => m.ProgramPageModule)
          }
        ]
      },
      {
        path: 'chats',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../chats/chat/chat.module').then(m => m.ChatPageModule)
          }
        ]
      },

      {
        path: 'music',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../music/music.module').then(m => m.MusicPageModule)
          }
        ]
      },

      {
        path: 'category-page/:id/:name',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../category-page/category-page.module').then(m => m.CategoryPagePageModule)
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
