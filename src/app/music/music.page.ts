import { Component, OnInit } from '@angular/core';
import { NavController, Platform, PopoverController, ModalController } from '@ionic/angular';
import { MusicService } from '../services/music.service';
import { CommonService } from '../services/common.service';
import { MusicDropdownComponent } from './music-dropdown/music-dropdown.component';
import { ProgramService } from '../services/program.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss', './../app.component.scss'],
})
export class MusicPage implements OnInit {

  genreList: any;
  songList: any;
  musicSelect: any;
  genreSelect: any;
  artistList: any;
  playList: any;
  allMusic: any =false;
  tabArtist: any = false;
  tabPlaylist: any = false;
  tabMusic: any = true;
  constructor(
    public popoverController: PopoverController,
    public modalController: ModalController,
    public commonService: CommonService,
    public programService: ProgramService,
    public musicService: MusicService,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    console.log("asdsa");
    this.musicService.getGenres().subscribe((data: any) => {
      this.genreList = data.genres;
      this.songList = this.genreList[0].musics;
      this.genreSelect = this.genreList[0].id

    });

    this.musicService.getArtists().subscribe((data: any) => {
      this.artistList = data.artists;
    });

    this.musicService.getPlaylist().subscribe((data: any) => {
      this.playList = data.status;
      console.log(this.playList);
    });

  }

  getGenreMusic(musics) {
    this.songList = musics;
  }

  async presentPopover(list: any) {
    const popover = await this.popoverController.create({
      component: MusicDropdownComponent,
      componentProps: { 'playlistData': list },
      translucent: false,
      cssClass: 'dropdown-menu'
    });
    popover.onDidDismiss().then((d: any) => {
      console.log("tessd");
      this.ngOnInit();
    });

    return await popover.present();

  }
  musicTypes: string = 'genre';
  musicList(ev: any) {
    this.musicTypes = ev.detail.value;
    if(this.musicTypes == 'genre'){
      this.tabArtist = false;
      this.tabPlaylist = false;
      this.tabMusic = true;
      this.ngOnInit();
    }
    if(this.musicTypes == 'artists'){
      this.tabArtist = true;
      this.tabPlaylist = false;
      this.tabMusic = false;
    }
    if(this.musicTypes == 'playlist'){
      this.tabArtist = false;
      this.tabPlaylist = true;
      this.tabMusic = false;
    }
    console.log(this.musicTypes);
  }
  selectMusicList: string = 'hiphop';
  selectMusic(ev: any) {
    this.selectMusicList = ev.detail.value;
  }

  searchChanged(musicname) {

    const searchTerm = musicname.srcElement.value;
    console.log(searchTerm)
    if (!searchTerm) {
      this.ngOnInit();
    } else {
      this.programService.searchMusic({ "searchQuery": searchTerm }).subscribe(
        (search: any) => { 
          this.songList = (search.musicList); 
        }
      );
    }
  }
  searchArtist(artistname) {
    const searchTerm = artistname.srcElement.value;
    if (!searchTerm) {
      this.ngOnInit();
    }else{
      var abc =  this.artistList.filter(artist =>
      artist.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
      this.artistList = abc;
    }
     
      
  }
  searchPlaylist(playlistname) {
    console.log(this.playList);
    const searchTerm = playlistname.srcElement.value;
    if (!searchTerm) {
      this.ngOnInit();
    }else{
      var abc =  this.playList.filter(playlist =>
        playlist.playlist_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
      this.playList = abc;
    }
  }
  goBack() {
    this.navCtrl.back();
  }
}
