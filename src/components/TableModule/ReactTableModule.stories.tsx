import React, { useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { createColumnHelper, SortingState } from '@tanstack/react-table';
import { Checkbox } from '../Checkbox';

import { ReactTableModule } from './ReactTableModule';

export default {
  title: 'Components/TableModule2',
  component: ReactTableModule,
  argTypes: {},
} as ComponentMeta<typeof ReactTableModule>;

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

const config = [
  {
    header: {
      label: 'Description',
    },
    cell: {
      content: (dataValue: any) => {
        return dataValue.description;
      },
    },
  },
  {
    header: {
      label: 'Calories',
    },
    cell: {
      content: (dataValue: any) => {
        return dataValue.calories;
      },
    },
  },
  {
    header: {
      label: 'Fat',
    },
    cell: {
      content: (dataValue: any) => {
        return dataValue.fat;
      },
    },
  },
  {
    header: {
      label: 'Carbs',
    },
    cell: {
      content: (dataValue: any) => {
        return dataValue.carbs;
      },
    },
  },
  {
    header: {
      label: 'Category',
    },
    cell: {
      content: (dataValue: any) => {
        return dataValue.category;
      },
    },
  },
];

const Template: ComponentStory<typeof ReactTableModule> = (args) => {
  const tableRef = useRef<HTMLTableElement>(null);

  const [rowSelection, setRowSelection] = React.useState({});

  if (args.enableRowSelection) {
    args.state = { rowSelection };
    args.onRowSelectionChange = setRowSelection;
  }

  return (
    <div style={{ overflow: 'auto', width: '80%', height: '400px' }}>
      <ReactTableModule {...args} ref={tableRef} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  data,
  config,
};

export const ManualSort: ComponentStory<typeof ReactTableModule> = (args) => {
  const tableRef = useRef<HTMLTableElement>(null);

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [sortedData, setSortedData] = React.useState(data);

  args.state = { sorting };

  React.useEffect(() => {
    const sort = sorting?.[0];
    const index = sort?.id.toLowerCase();
    console.log('sorting', sort);
    if (sort && index) {
      setSortedData(
        [...data].sort((a: any, b: any) => {
          if (!sort.desc) {
            return a[index!] - b[index!];
          }

          if (sort.desc) {
            return b[index!] - a[index!];
          }

          return 0;
        })
      );
    }
  }, [sorting, setSortedData]);

  return (
    <div style={{ overflow: 'auto', width: '80%', height: '400px' }}>
      <ReactTableModule
        {...args}
        data={sortedData}
        config={config}
        onSortingChange={setSorting}
        enableSorting={true}
        ref={tableRef}
      />
    </div>
  );
};

export const DefaultSort: ComponentStory<typeof ReactTableModule> = (args) => {
  const tableRef = useRef<HTMLTableElement>(null);

  const [sorting, setSorting] = React.useState<SortingState>([]);

  args.state = { sorting };

  return (
    <div style={{ overflow: 'auto', width: '80%', height: '400px' }}>
      <ReactTableModule
        {...args}
        data={data}
        columns={columns}
        onSortingChange={setSorting}
        enableSorting={true}
        ref={tableRef}
      />
    </div>
  );
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
