import { ColumnDef } from '@tanstack/react-table';
import { TableConfiguration, TableCell } from './types';

/**
 * returns react table ColumnDef.
 * @param config legacy configuration of TableModule
 */
export const mapTableConfigToColumnDef = (
  config: TableConfiguration<any>
): ColumnDef<any, any> => {
  // TODO support accessor columnFn
  const columnDef: ColumnDef<any, any> = {
    id: config.header.label || config.header.content(config.header),
    accessorFn: cellContentAccessor(config.cell),
  };

  return columnDef;
};

/**
 * returns an accessorFn.
 * @param cell
 */
export const cellContentAccessor = (cell: TableCell): ((row: any) => any) => {
  return cell.content // private API
    ? cell.content
    : (row: any): any => {
        return cell.valuePath && row[cell.valuePath];
      };
};
