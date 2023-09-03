import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  template: ``,
})
export class AudioPlayerComponent {
  totalAudioLength!: number;
  currentAudioTime = 0;
  isAudioLoaded: boolean = false;
  isAudioPlaying: boolean = false;
  isRepeat: boolean = false;
  audioVolume = 100;
  isAudioEnded = new Subject();
  isMute = false;
  @Output() playEvent = new EventEmitter();
  @Output() pauseEvent = new EventEmitter();

  @ViewChild('audioPlayer') audioPlayer!: ElementRef;

  options(): void {
    setTimeout(() => {
      this.audioPlayer.nativeElement.addEventListener('playing', () => {});

      this.audioPlayer.nativeElement.addEventListener('loadeddata', () => {
        this.isAudioLoaded = true;
        this.getAudioLength();
      });

      this.audioPlayer.nativeElement.addEventListener('timeupdate', () => {
        this.currentAudioTime = Math.floor(
          this.audioPlayer.nativeElement.currentTime
        );
        if (this.audioPlayer.nativeElement.ended) {
          this.isAudioEnded.next(true);
        }
      });

      this.audioPlayer.nativeElement.addEventListener('volumechange', () => {
        this.audioVolume = Math.floor(
          this.audioPlayer.nativeElement.volume * 100
        );
        this.isMute = this.audioVolume == 0;
      });
    });
  }

  play(): void {
    this.isAudioPlaying = true;
    setTimeout(() => {
      this.audioPlayer.nativeElement.play();
      this.playEvent.emit();
    }, 0);
  }

  pause(): void {
    this.isAudioPlaying = false;
    setTimeout(() => {
      this.audioPlayer.nativeElement.pause();
      this.pauseEvent.emit();
    }, 0);
  }

  getAudioLength(): void {
    this.totalAudioLength = Math.floor(this.audioPlayer.nativeElement.duration);
  }
}
