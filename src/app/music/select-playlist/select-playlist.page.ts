import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MusicService } from 'src/app/services/music.service';
@Component({
  selector: 'app-select-playlist',
  templateUrl: './select-playlist.page.html',
  styleUrls: ['./select-playlist.page.scss', '../../app.component.scss'],
})
export class SelectPlaylistPage implements OnInit {

  musicSelect = 1;
  playListId: any;
  songList: any = [];
  playListData: any;
  constructor(
    public commonService: CommonService,
    public navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private musicService: MusicService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.playListId = paramMap.get("musicData");
    });
    console.log(this.playListId);
    this.musicService.getPlaylistById({ "playlistId": this.playListId }).subscribe((data: any) => {
      this.playListData = data.status;
      data.status.playlist_songs.forEach(el => {
        this.songList.push(el.songs_details);
      });
      console.log(this.songList);
    },err =>{
      this.commonService.presentToast("Something went Wrong.");
    });
  }
  closeModal() {
    this.commonService.dismissModal();
  }
  goBack() {
    this.navCtrl.back();
  }
}
