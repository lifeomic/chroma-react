import { createColumnHelper, ColumnDef } from '@tanstack/react-table';
import { TableConfiguration } from './types';

const columnHelper = createColumnHelper();

/**
 * returns react table ColumnDef.
 * @param config legacy configuration of TableModule
 */
export const mapTableConfigToColumnDef = (
  config: TableConfiguration<any>
): ColumnDef<any, any> => {
  // TODO support accessor columnFn
  return {
    id: config.header.label || config.header.content(config.header),
    accessorFn: config.cell.content,
  };
};
