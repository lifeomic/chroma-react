/**
 * @description A default interface for capturing the different
 * "sortDirection" options.
 */
export interface TableSortDirection {
  sortDirection: 'asc' | 'desc' | null;
}

/**
 * @description The internal state of the table to determine how sorting
 * should work.
 */
export interface TableSortState extends TableSortDirection {
  sortKey?: number | null;
}

interface TableAlignOptions {
  align?: 'left' | 'right';
}

/**
 * @description A public interface providing typings for a Table Header's "onSort" method.
 */
export interface TableSortClickProps extends TableSortDirection {
  index: number;
  header: TableHeader;
}

export interface TableHeader extends TableAlignOptions {
  label?: string;
  content?(header: TableHeader): any;
  onSort?(sort: TableSortClickProps): any;
  className?: string;
}

export interface TableCell<Item = any> extends TableAlignOptions {
  valuePath?: string;
  content?(cell: Item): any;
  className?: string;
}

export interface TableConfiguration<Item = any> {
  header: TableHeader;
  cell: TableCell<Item>;
}
