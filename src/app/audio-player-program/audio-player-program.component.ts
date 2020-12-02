import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Input } from '@angular/core';

@Component({
    selector: 'app-audio-player-program',
    templateUrl: './audio-player-program.component.html',
    styleUrls: ['./audio-player-program.component.scss', '.././app.component.scss'],
})
export class AudioPlayerProgramComponent implements OnInit, AfterViewInit {

    @Input() selectedAudio: any;

    @ViewChild('player', null) playerElementRef: ElementRef;

    isPlaying = false;
    isLoading = false;
    currentTime = 0;
    duration = "00:00";

    drag: boolean = false;
    private _player: HTMLAudioElement;

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        this._player = this.playerElementRef.nativeElement;
        this._bindPlayerEvents();
    }
    onDrag() {
        this.drag = true;
        setTimeout(() => {
            this.drag = false;
        }, 300);
    }

    play(): void {
        this.isPlaying=true;
        this.selectedAudio[1] = 0;
         this._player.play();
    }
    pause(){
        this.isPlaying=false;

        this._player.pause() ;
    }

    seek({ detail: { value } }: { detail: { value: number } }): void {
        if (this.drag) {
            this._player.currentTime = value;
        }
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
            const minutes: number = Math.floor(this._player.duration / 60); 
            this.duration =  minutes + ':' +  Math.floor((this._player.duration - minutes * 60));
        });
    }

}
