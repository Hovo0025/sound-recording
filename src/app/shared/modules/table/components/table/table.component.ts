import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { RowActionI, TableActionI, TableColumnI } from '@core/models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<T> implements OnInit {
  @Input() dataSource: T[] = [];
  @Input() columns: TableColumnI[] = [];
  @Input() actions: TableActionI[] = [];

  @Output() rowAction: EventEmitter<RowActionI> = new EventEmitter<RowActionI>();

  displayedColumns: string[] = [];

  ngOnInit(): void {
    this.setDisplayedColumns();
  }

  setDisplayedColumns(): void {
    this.displayedColumns = this.columns.map((el: TableColumnI) => el.key);
    this.displayedColumns.push('actions')
  }

  onSelectAction<T>(el: T, action: TableActionI): void {
    this.rowAction.emit({key: action.key, row: el});
  }
}
