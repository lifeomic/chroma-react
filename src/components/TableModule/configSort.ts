import { TableSortClickProps, TableConfiguration } from './types';

const buildSortConfig = (handleSortClick: any) => {
  return [
    {
      header: {
        label: 'Description',
        onSort: (header: TableSortClickProps) => {
          handleSortClick({
            key: 'description',
            direction: header.sortDirection,
          });
        },
      },
      cell: {
        valuePath: 'description',
      },
    },
    {
      header: {
        label: 'Calories',
        onSort: (header: TableSortClickProps) => {
          handleSortClick({
            key: 'calories',
            direction: header.sortDirection,
          });
        },
      },
      cell: {
        valuePath: 'calories',
      },
    },
    {
      header: {
        label: 'Fat',
        onSort: (header: TableSortClickProps) => {
          handleSortClick({ key: 'fat', direction: header.sortDirection });
        },
      },
      cell: {
        valuePath: 'fat',
      },
    },
    {
      header: {
        label: 'Carbs',
        onSort: (header: TableSortClickProps) => {
          handleSortClick({ key: 'carbs', direction: header.sortDirection });
        },
      },
      cell: {
        valuePath: 'carbs',
      },
    },
  ] as Array<TableConfiguration>;
};

export { buildSortConfig };
