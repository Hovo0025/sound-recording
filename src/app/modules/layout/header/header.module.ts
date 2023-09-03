import { NgModule } from '@angular/core';
import { HeaderComponent } from '@modules/layout/header/components/header/header.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@core/material/material.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MaterialModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
