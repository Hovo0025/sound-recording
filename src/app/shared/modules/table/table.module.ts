import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@core/material/material.module';
import { TableComponent } from '@shared/modules/table/components/table/table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, MaterialModule],
  exports: [TableComponent],
})
export class TableModule {}
