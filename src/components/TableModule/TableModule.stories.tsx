import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TableModule } from './TableModule';
import { TableConfiguration, TableSortClickProps } from './types';
import { TableModuleActions } from './TableModuleActions';
import { IconButton } from '../IconButton';
import { Share, Trash } from '@lifeomic/chromicons';
import { Button } from '../Button';
import { TableActionDivider } from './TableActionDivider';
import { Tooltip } from '../Tooltip';

export default {
  title: 'Components/TableModule',
  component: TableModule,
  argTypes: {},
  subcomponents: { TableModuleActions, TableActionDivider },
} as ComponentMeta<typeof TableModule>;

const data = [
  {
    description: 'Frozen yoghurt',
    calories: '159',
    fat: '6.0',
    carbs: '24',
  },
  {
    description: 'Ice cream sandwich',
    calories: '237',
    fat: '9.0',
    carbs: '37',
  },
  {
    description: 'Eclair',
    calories: '262',
    fat: '16.0',
    carbs: '24',
  },
  {
    description: 'Cupcake',
    calories: '305',
    fat: '3.7',
    carbs: '67',
  },
];

const Template: ComponentStory<typeof TableModule> = (args) => (
  <TableModule {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data,
  config: [
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
  ] as Array<TableConfiguration>,
};

export const Sort: ComponentStory<typeof TableModule> = (args) => {
  const [sort, setSort] = React.useState({ key: null, direction: null });

  const handleSortClick = ({ key, direction }: any) => {
    setSort({ key, direction });
  };
  let sortedData: any = data;

  if (sort.direction && sort.key) {
    sortedData = [...data].sort((a: any, b: any) => {
      if (sort.direction === 'asc') {
        return a[sort.key!] - b[sort.key!];
      }

      if (sort.direction === 'desc') {
        return b[sort.key!] - a[sort.key!];
      }

      return 0;
    });
  }

  const sortConfig: Array<TableConfiguration> = [
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
          handleSortClick({ key: 'calories', direction: header.sortDirection });
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
  ];

  return <TableModule {...args} data={sortedData} config={sortConfig} />;
};
Sort.parameters = {
  docs: {
    description: {
      story: `The Table Module components provides callbacks for allowing consumers to perform
their own sorting. Out of the box, no default sorting is provided to allow
consumers to control how they want to sort their data. This allows folks to use
an API to sort their data (header clicked, determine header name clicked, and
send API request to sort the data) or allow the frontend to sort the data
themselves (header clicked, determine header name clicked, and manually sort
data from the frontend).`,
    },
  },
};

export const HoverActions = Template.bind({});
HoverActions.args = {
  data,
  config: [
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
  ] as Array<TableConfiguration>,
  rowActions: (row: any) => (
    <>
      <Button variant="text" color="inverse" style={{ marginRight: '8px' }}>
        Revoke
      </Button>
      <TableActionDivider />
      <Tooltip title="Share">
        <IconButton
          aria-label="Share"
          icon={Share}
          color="inverse"
          onClick={() => console.log(`search ${row}!`)}
        />
      </Tooltip>
      <Tooltip title="Trash">
        <IconButton
          aria-label="Trash"
          icon={Trash}
          color="inverse"
          onClick={() => console.log(`trash ${row}!`)}
        />
      </Tooltip>
      {row.fat === '9.0' && (
        <Tooltip title="Trash">
          <IconButton
            aria-label="Trash"
            icon={Trash}
            color="inverse"
            onClick={() => console.log(`trash ${row}!`)}
          />
        </Tooltip>
      )}
    </>
  ),
};
HoverActions.parameters = {
  docs: {
    description: {
      story: `It is a common design pattern to include actionable buttons for a table row. The
Table Module exposes a \`rowActions\` prop to help. Hover over a row to view the
actions toolbar.`,
    },
  },
};
