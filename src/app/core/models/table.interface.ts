export interface RowActionI<T = any> {
  key: string;
  row: T;
}
export interface TableActionI<T = any> {
  key: string;
  icon?: string;
  label?: string;
}

export interface TableColumnI {
  key: string;
  label: string;
  type?: string
}
