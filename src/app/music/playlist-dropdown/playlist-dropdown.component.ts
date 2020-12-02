import { Component, OnInit, Input } from '@angular/core';

import { PopoverController, ModalController, AlertController } from '@ionic/angular'; 
import { MusicService } from 'src/app/services/music.service';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-playlist-dropdown',
  templateUrl: './playlist-dropdown.component.html',
  styleUrls: ['./playlist-dropdown.component.scss'],
})
export class PlaylistDropdownComponent implements OnInit { 
  @Input("playList") playList; 
  @Input("mid") mid; 
  constructor(
    private popoverController: PopoverController,
    private musicService : MusicService,
    private commonService : CommonService,
    private alertController: AlertController
  ) { }

  async dismissClick() {
    await this.popoverController.dismiss();
  }

 async newPlaylist() {
    this.dismissClick(); 
    
    let alert =await this.alertController.create({
      header: "Create New Playlist", 
      inputs: [
        {
          name: 'playlistName',
          type: 'text',
          label: 'name',  
          placeholder: 'Enter Name'
        }  
      ],
      buttons:  [
        {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
        }, {
          text: 'Okay',
          handler: (data) => { 
            if(data.playlistName)
            {
              this.musicService.createPlaylist({'pname':data.playlistName , 'mid':this.mid}).subscribe((data:any)=>{
                if(data){
                  this.commonService.presentToast("Song added.");
                }
              });
            }
          }
        }
      ],        
    });
     alert.present();
  }
  ngOnInit() {
    console.log(this.playList);
   }

   addToList(ev){
    this.commonService.dismissPopover('');
    console.log(ev);
    this.musicService.insertInPlaylist({'playlistId':ev.id, 'mid':this.mid}).subscribe((data:any)=>{
      if(data.status)
      {
        if(data.status.id)
        {
          this.commonService.presentToast('Song added to playlist.');
        }else{
          this.commonService.presentToast(data.status);
        }
      }else{
        this.commonService.presentToast('someting went wrong');
      }
    });
   }

}
