import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-musicplayer',
  templateUrl: './musicplayer.page.html',
  styleUrls: ['./musicplayer.page.scss'],
})
export class MusicplayerPage implements OnInit, AfterViewInit {
  @Input() src: string;

    @ViewChild('player',{static:false}) playerElementRef: ElementRef;

    isPlaying = false;
    isLoading = false;
    currentTime = 0;
    duration = 0;

    private _player: HTMLAudioElement;

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        this._player = this.playerElementRef.nativeElement;
        this._bindPlayerEvents();
    }

    play(): void {
        this._player.paused ? this._player.play() : this._player.pause();
    }

    seek({ detail: { value } }: { detail: { value: number } }): void {
        this._player.currentTime = value;
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
            this.duration = Math.floor(this._player.duration);
        });
    }
}