import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { AudioPlayerComponent } from '../audio-player.component';
import { IRecordItem } from '@core/models';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponet
  extends AudioPlayerComponent
  implements OnInit, OnChanges
{
  @Input() audioList: IRecordItem[] = [];
  @Input() next = true;
  @Input() previous = true;
  @Input() repeat = true;
  @Input() scrollTitle = true;
  @Input() playButtonColor = 'rgb(76, 130, 175)';
  @Input() pauseButtonColor = 'rgb(76, 130, 175)';
  @Input() nextButtonColor = 'rgb(76, 130, 175)';
  @Input() previousButtonColor = 'rgb(76, 130, 175)';
  @Input() repeatButtonColor = 'rgb(76, 130, 175)';
  @Input() activeRepeatButtonColor = 'rgb(76, 130, 175)';
  @Input() volumeButtonColor = 'rgb(76, 130, 175)';
  @Input() muteButtonColor = 'rgb(76, 130, 175)';

  @Input() selectedAudio!: IRecordItem | undefined;
  currentAudioIndex = 0;
  repeatActive = false;
  isError = false;
  volumeBeforeMute!: any;

  constructor() {
    super();
  }

  ngOnInit() {
    this.options();
    this.initiateAudioPlayer();
    //check audio is ended for next song
    this.isAudioEnded.subscribe((data) => {
      if (!this.isRepeat && this.audioList.length > 0) {
        this.nextAudio();
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    if (changes['selectedAudio'].currentValue) {
      this.initiateAudioPlayer(this.selectedAudio);
    }
  }

  nextAudio(): void {
    if (this.audioList.length - 1 != this.currentAudioIndex) {
      this.currentAudioIndex += 1;
      this.selectedAudio = this.audioList[this.currentAudioIndex];
      this.getAudioLength();
      if (this.isAudioPlaying) {
        this.play();
      }
    } else {
      this.currentAudioIndex = 0;
      const audio = this.audioList[this.currentAudioIndex];
      this.initiateAudioPlayer(audio);
    }
  }

  previousAudio(): void {
    if (this.currentAudioIndex != 0) {
      this.currentAudioIndex -= 1;
      this.selectedAudio = this.audioList[this.currentAudioIndex];
      this.getAudioLength();
      if (this.isAudioPlaying) {
        this.play();
      }
    }
  }

  seekAudio(event: Event): void {
    const inputEvent = event as InputEvent;
    const inputValue = (inputEvent.target as HTMLInputElement).value;
    if (this.audioVolume != 0) {
      this.isMute = false;
    }
    this.audioPlayer.nativeElement.currentTime = inputValue;
  }

  repeatAudio(): void {
    this.isRepeat = !this.isRepeat;
    this.repeatActive = !this.repeatActive;
    this.audioPlayer.nativeElement.loop = this.isRepeat;
  }

  volumeChange(event: Event): void {
    const inputEvent = event as InputEvent;
    const inputValue = (inputEvent.target as HTMLInputElement).value;
    this.audioPlayer.nativeElement.volume = +inputValue / 100;
  }

  muteAudio(): void {
    if (this.isMute) {
      this.audioPlayer.nativeElement.volume = 0.5;
      this.isMute = false;
    } else {
      this.audioPlayer.nativeElement.volume = 0;
      this.isMute = true;
    }
  }

  initiateAudioPlayer(audio?: IRecordItem): void {
    if (this.audioList.length <= 0) {
      this.isError = true;
    } else {
      if (audio) {
        this.selectedAudio = audio;
        this.play();
      } else {
        this.selectedAudio = this.audioList[this.currentAudioIndex];
      }
    }
  }
}
