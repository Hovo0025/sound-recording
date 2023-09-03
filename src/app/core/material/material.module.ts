import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IconsModule } from '@core/material/icons.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    IconsModule,
    MatToolbarModule,
    MatSlideToggleModule,
  ],
  exports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    IconsModule,
    MatToolbarModule,
    MatSlideToggleModule,
  ],
})
export class MaterialModule {}
