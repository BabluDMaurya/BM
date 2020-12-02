import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { AlertController } from '@ionic/angular';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-music-dropdown',
  templateUrl: './music-dropdown.component.html',
  styleUrls: ['./music-dropdown.component.scss'],
})
export class MusicDropdownComponent implements OnInit {
  @Input("playlistData") playlistData;
  constructor(
    private commonService: CommonService,
    private musicService: MusicService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    console.log(this.playlistData);
  }

  async rename() {
    let alert = await this.alertController.create({
      header: "Rename Playlist",
      inputs: [
        {
          name: 'playlistName',
          type: 'text',
          label: 'name',
          value: this.playlistData.playlist_name,
          placeholder: 'Enter Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah'); 
            this.commonService.dismissPopover("");
          }
        }, {
          text: 'Okay',
          handler: (data) => {
            if (data.playlistName) {
              this.musicService.renamePlaylist({ 'playlistName': data.playlistName, 'playlistId': this.playlistData.id }).subscribe((data: any) => {
                if (data) {
                  this.commonService.presentToast("Playlist renamed."); 
                  this.commonService.dismissPopover(true);
                }
              });
            }
          }
        }
      ],
    });
    alert.present();
  }

  remove() {
    this.musicService.removePlaylist({ 'playlistId': this.playlistData.id }).subscribe((data: any) => {
      if (data) {
        this.commonService.presentToast("Playlist removed."); 
       this.commonService.dismissPopover("");
      }
    });
  }

}
