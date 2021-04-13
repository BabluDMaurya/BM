import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeoplePage } from './people.page';

const routes: Routes = [
  {
    path: '',
    component: PeoplePage,
    children: [
      {
        path: 'tabFollowers',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-followers/tab-followers.module').then(m => m.TabFollowersPageModule)
          }
        ]
      },
      {
        path: 'tabFollowings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-followings/tab-followings.module').then(m => m.TabFollowingsPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeoplePageRoutingModule {}
