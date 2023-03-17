import React, { useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { createColumnHelper, Row } from '@tanstack/react-table';
import { Checkbox } from '../Checkbox';

import { ReactTable } from './ReactTable';

export default {
  title: 'Components/ReactTable',
  component: ReactTable,
  argTypes: {},
} as ComponentMeta<typeof ReactTable>;

type Food = {
  description: string;
  calories: string;
  fat: string;
  carbs: string;
  category: string;
};

const data: Food[] = [
  {
    description: 'Frozen yoghurt',
    calories: '159',
    fat: '6.0',
    carbs: '24',
    category: 'yogurt',
  },
  {
    description: 'Ice cream sandwich',
    calories: '237',
    fat: '9.0',
    carbs: '37',
    category: 'ice cream',
  },
  {
    description: 'Eclair',
    calories: '262',
    fat: '16.0',
    carbs: '24',
    category: 'dessert',
  },
  {
    description: 'Cupcake',
    calories: '305',
    fat: '3.7',
    carbs: '67',
    category: 'cake',
  },
];

const columnHelper = createColumnHelper<Food>();

const columns = [
  columnHelper.accessor('description', {
    cell: (info) => info.getValue(),
    header: 'Description',
  }),
  columnHelper.accessor((row) => row.calories, {
    id: 'calories',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Calories</span>,
  }),
  columnHelper.accessor('fat', {
    header: () => 'Fat',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('carbs', {
    header: () => <span>Carbs</span>,
  }),
  columnHelper.accessor('category', {
    header: 'Category',
  }),
];

const Template: ComponentStory<typeof ReactTable> = (args) => {
  const tableRef = useRef<HTMLTableElement>(null);

  const [rowSelection, setRowSelection] = React.useState({});

  if (args.enableRowSelection) {
    args.state = { rowSelection };
    args.onRowSelectionChange = setRowSelection;
  }

  return (
    <div style={{ overflow: 'auto', width: '80%', height: '400px' }}>
      <ReactTable {...args} ref={tableRef} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  data,
  columns,
};

export const RowSelection = Template.bind({});
const selectionColumn = {
  id: 'select',
  header: ({ table }) => (
    <Checkbox
      {...{
        label: ' ',
        checked: table.getIsAllRowsSelected(),
        indeterminate: table.getIsSomeRowsSelected(),
        onChange: table.getToggleAllRowsSelectedHandler(),
      }}
    />
  ),
  cell: ({ row }) => (
    <div className="px-1">
      <Checkbox
        {...{
          label: ' ',
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    </div>
  ),
};

RowSelection.args = {
  data,
  columns: [selectionColumn, ...columns],
  enableRowSelection: true,
};
