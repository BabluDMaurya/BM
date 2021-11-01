import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfilePageRoutingModule } from './user-profile-routing.module';

import { UserProfilePage } from './user-profile.page';
import { PopOverComponent } from './pop-over/pop-over.component';
import { LazyLoadImageModule,IntersectionObserverHooks,Attributes,LAZYLOAD_IMAGE_HOOKS } from 'ng-lazyload-image';

// export class LazyLoadImageHooks extends IntersectionObserverHooks {
//   setup(attributes:Attributes){
//     // attributes.offset = 1;
//     attributes.defaultImagePath = './../../../assets/images/editcoverpic.png';
//     attributes.errorImagePath = "./../../../assets/images/placeholder.svg";
//     return super.setup(attributes);
//   }
  // loadImage({ imagePath }: Attributes): Promise<string> {
  //   return fetch(imagePath, {
  //     headers: {
  //       Authorization: 'Bearer ...',
  //     },
  //   })
  //     .then((res) => res.blob())
  //     .then((blob) => URL.createObjectURL(blob));
  // }
// }

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfilePageRoutingModule,
    LazyLoadImageModule
  ],
  declarations: [UserProfilePage,PopOverComponent],
  // providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: LazyLoadImageHooks }],
  entryComponents: [PopOverComponent],
})
export class UserProfilePageModule {}
