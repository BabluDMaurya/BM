import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core'; 
import { PopoverController } from '@ionic/angular';
import { PlaylistDropdownComponent } from '../playlist-dropdown/playlist-dropdown.component'; 
import { MusicService } from 'src/app/services/music.service';
import { Config } from "../../config/config";
@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss', '../../app.component.scss'],
})
export class AudioPlayerComponent implements OnInit {

  @ViewChild('player', null) playerElementRef: ElementRef;
  selectedAudio = [];
  isPlaying = false;
  isLoading = false;
  currentTime = 0;
  duration :any;
  musicSelect: any;
  private _player: HTMLAudioElement;
  @Input() songList: any;
  playList: any;
  baseUrl = Config.musicPath;
  srcPath = 'into_20190423_095653_audio.mp3';
  drag: boolean = false;
  constructor( 
    private musicService: MusicService,
    public popoverController: PopoverController,
  ) {

  }


  async selectPlaylist(mid) {
    const popover = await this.popoverController.create({
      component: PlaylistDropdownComponent,
      translucent: false,
      cssClass: 'dropdown-menu',
      componentProps: { 'playList': this.playList, 'mid': mid }
    });
    return await popover.present();
  }

  ngOnInit() { 
    this.musicService.getPlaylist().subscribe((data: any) => {
      this.playList = data.status;
    });
  }

  ngAfterViewInit(): void {
    this._player = this.playerElementRef.nativeElement;
    this._bindPlayerEvents();
  }
 

  playThis(item) {  
    this._player.autoplay= true;
    this.musicSelect = item;
    
    this.srcPath = item.filename;
    this.play(item);
  }

  play(src: any): void { 
    if (src) { 
      this.musicSelect = src;
    } else {
      this.musicSelect = this.songList[0];
      this.srcPath = this.songList[0].filename;
    }
    this.isPlaying = true;
    this._player.play();
  }

  pause(src: any): void {
    this.isPlaying = false; 
    this._player.pause()
  }

  seek({ detail: { value } }: { detail: { value: number } }): void {
    if (this.drag) {
      this._player.currentTime = value;
    }
  }

  onDrag() {
    this.drag = true;
    setTimeout(() => {
      this.drag = false;
    }, 300);
  }

  private _bindPlayerEvents(): void {
    this._player.addEventListener('playing', () => {
      this.isPlaying = true;
    });

    this._player.addEventListener('pause', () => {
      this.isPlaying = false;
    });

    this._player.addEventListener('timeupdate', () => {

      this.currentTime = Math.floor(this._player.currentTime);

    });

    this._player.addEventListener('seeking', () => {
      this.isLoading = true;
    });

    this._player.addEventListener('seeked', () => {
      this.isLoading = false;
    });


    this._player.addEventListener('loadstart', () => {
      this.isLoading = true;
    });

    this._player.addEventListener('loadeddata', () => {
      this.isLoading = false; 
      let dur  = Math.floor(this._player.duration)
      this.duration = Math.floor((dur/60)) + ":"+ (dur%60);
      
    console.log("dfsa");
    console.log(this.duration);
    });
  }


}
