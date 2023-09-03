import { NgModule } from '@angular/core';
import { PlayerComponet } from './components/player.componet';
import { TimeConversionPipe } from '@core/pipes/time-conversion.pipe';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@core/material/material.module';
import { AudioPlayerComponent } from '@modules/palyer/audio-player.component';

@NgModule({
  declarations: [PlayerComponet, TimeConversionPipe, AudioPlayerComponent],
  imports: [CommonModule, MaterialModule],
  exports: [PlayerComponet],
})
export class PlayerModule {}
