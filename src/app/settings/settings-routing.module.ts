import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'contact-admin',
    loadChildren: () => import('./contact-admin/contact-admin.module').then( m => m.ContactAdminPageModule)
  },
  
  {
    path: 'payment-history',
    loadChildren: () => import('./payment-history/payment-history.module').then( m => m.PaymentHistoryPageModule)
  },
  {
    path: 'payment-review',
    loadChildren: () => import('./payment-review/payment-review.module').then( m => m.PaymentReviewPageModule)
  },
  {
    path: 'change',
    loadChildren: () => import('./change/change.module').then( m => m.ChangePageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
  {
    path: 'term',
    loadChildren: () => import('./term/term.module').then( m => m.TermPageModule)
  },
  {
    path: 'program-history',
    loadChildren: () => import('./program-history/program-history.module').then( m => m.ProgramHistoryPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },  {
    path: 'card-details',
    loadChildren: () => import('./card-details/card-details.module').then( m => m.CardDetailsPageModule)
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule {}
