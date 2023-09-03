import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  IRecordItem,
  RowActionI,
  TableActionI,
  TableColumnI,
} from '@core/models';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { RecordService } from '@core/services/record.service';

@Component({
  selector: 'app-record-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.scss'],
})
export class RecordsListComponent implements OnInit {
  records$!: Observable<IRecordItem[]>;
  columns$ = new BehaviorSubject<TableColumnI[]>([]);
  actions$ = new BehaviorSubject<TableActionI[]>([]);
  selectedAudio$ = new Subject<IRecordItem>();

  constructor(
    private readonly recordService: RecordService,
    private readonly cdr: ChangeDetectorRef
  ) {}
  load = false;
  ngOnInit(): void {
    this.initTable();
    this.records$ = this.recordService.getRecords();
  }

  private initTable() {
    this.columns$.next([
      {
        key: 'id',
        label: 'ID',
      },
      {
        key: 'title',
        label: 'Название',
      },
      {
        key: 'cover',
        label: 'Обложка',
        type: 'img',
      },
    ]);

    this.actions$.next([
      {
        key: 'play',
        label: 'Воспроизвести',
      },
    ]);
  }

  onRowAction(action: RowActionI): void {
    switch (action.key) {
      case 'play':
        this.playRecord(action.row);
        break;
    }
  }

  playRecord(record: IRecordItem): void {
    this.selectedAudio$.next(record);
  }
}
