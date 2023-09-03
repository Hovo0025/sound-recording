import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from '@shared/modules/table/table.module';
import { RecordsListComponent } from '@modules/records/components/records-list/records-list.component';
import { RecordsRoutingModule } from '@modules/records/records-routing.module';
import { PlayerModule } from '@modules/palyer/player.module';

@NgModule({
  declarations: [RecordsListComponent],
  imports: [CommonModule, RecordsRoutingModule, TableModule, PlayerModule],
})
export class RecordsModule {}
