import React from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';

import { TableModule } from './TableModule';
import {
  RowSelectionRow,
  RowSelectionState,
  TableConfiguration,
} from './types';
import { Checkbox } from '../Checkbox';
import { IconButton } from '../IconButton';
import { SpinButton } from '../SpinButton';
import { Share, Trash, Smile } from '@lifeomic/chromicons';
import { Button } from '../Button';
import { TableActionDivider } from './TableActionDivider';
import { Tooltip } from '../Tooltip';

const meta: Meta<typeof TableModule> = {
  component: TableModule,
};
export default meta;
type Story = StoryObj<typeof TableModule>;

import { data } from './storyData';
const dataLong = [...data, ...data, ...data, ...data];

import { configBasic, configSticky, configWrapped } from './storyConfigBasic';
import { buildSortConfig } from './configSort';

const Template: StoryFn<typeof TableModule> = (args) => {
  const tableRef = React.useRef<HTMLTableElement>(null);
  return (
    <div style={{ overflow: 'auto', width: '80%', height: '400px' }}>
      <TableModule {...args} ref={tableRef} rowClickLabel="row-click-label" />
    </div>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    data,
    config: configBasic as Array<TableConfiguration>,
  },
};

export const WrappedCells: Story = {
  render: Template,
  args: {
    data,
    maxCellWidth: 3,
    wrapCellContent: true,
    config: configWrapped as Array<TableConfiguration>,
  },
  parameters: {
    docs: {
      description: {
        story: `If a table involves content that is very long and needs to be fully displayed, use \`wrapCellContent\` to show it all. This will also cover content that needs to honor new lines, i.e. a couple paragraphs with a break between or a list of items.`,
      },
    },
  },
};

export const Sticky: Story = {
  render: Template,
  args: {
    data: dataLong,
    config: configSticky as Array<TableConfiguration>,
  },
  parameters: {
    docs: {
      description: {
        story: `Columns can be made "sticky" or so they don't travel off-screen when scrolling the
        table horizontally. This helps keep track of what row one is looking at in tables with more
        columns than can be visible at one time in the document. \n \n Any number of columns can be made
        sticky. They don't have to be consecutive, and can start and end at any column. However,
        most common use-cases will likely just involve the first one or two consecutive columns
        being sticky.`,
      },
    },
  },
};

const TemplateSort: StoryFn<typeof TableModule> = (args) => {
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
  const sortConfig = buildSortConfig(handleSortClick);
  const tableRef = React.useRef<HTMLTableElement | null>(null);
  return (
    <TableModule
      {...args}
      data={sortedData}
      config={sortConfig}
      ref={tableRef}
      rowClickLabel="row-click-label"
    />
  );
};

export const Sort: Story = {
  render: TemplateSort,
  parameters: {
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
  },
};

export const HoverActions: Story = {
  render: Template,
  args: {
    data,
    config: configBasic as Array<TableConfiguration>,
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
        {row.description !== 'Cupcake' && (
          <Tooltip title="Trash">
            <IconButton
              aria-label="Trash"
              icon={Trash}
              color="inverse"
              onClick={() => console.log(`trash ${row}!`)}
            />
          </Tooltip>
        )}
        {row.fat === '9.0' && (
          <Tooltip title="Amaze">
            <IconButton
              aria-label="Amaze"
              icon={Smile}
              color="inverse"
              onClick={() => console.log(`Amaze ${row}!`)}
            />
          </Tooltip>
        )}
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `It is a common design pattern to include actionable buttons for a table row. The
  Table Module exposes a \`rowActions\` prop to help. Hover over a row to view the
  actions toolbar.\nActions can be different per row, in this example the row where fat = 9.0 has 
  an extra action "Amaze" and the row where description = "Cupcake" does not have a "Trash" action.`,
      },
    },
  },
};

export const RowSelection: Story = {
  render: (args) => {
    const tableRef = React.useRef<HTMLTableElement | null>(null);
    const initialRowSelection: RowSelectionState = { '0': true };
    const [rowSelection, setRowSelection] = React.useState(initialRowSelection);
    const selectionColumn: TableConfiguration<RowSelectionRow> = {
      header: {
        content: () => '',
      },
      cell: {
        content: (rowData: RowSelectionRow) => (
          <Checkbox
            label=""
            aria-label="select row"
            checked={rowData.getIsSelected()}
            disabled={!rowData.getCanSelect()}
            onChange={rowData.getToggleSelectedHandler()}
          />
        ),
      },
    };
    return (
      <TableModule
        {...args}
        data={data}
        config={[
          selectionColumn,
          {
            header: {
              label: 'Description',
            },
            cell: {
              valuePath: 'description',
            },
          },
          {
            header: {
              label: 'Calories',
            },
            cell: {
              valuePath: 'calories',
            },
          },
          {
            header: {
              label: 'Fat',
            },
            cell: {
              valuePath: 'fat',
            },
          },
        ]}
        ref={tableRef}
        rowClickLabel="row-click-label"
        enableRowSelection={true}
        state={{ rowSelection }}
        onRowSelectionChange={setRowSelection}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: `It is a common design pattern to include multi-selection for a
        table. The TableModule exposes properties like \`enableRowSelection\` to
        enable this capability and use \`state.rowSelection\` to initialize row
        selection state. In order to access row selection state, use the \`onRowSelectionChange\`
        handler.`,
      },
    },
  },
};

const TemplateRowAddRemove: StoryFn<typeof TableModule> = (args) => {
  const [tableData, setTableData] = React.useState(data);
  const tableRef = React.useRef<HTMLTableElement>(null);
  return (
    <div style={{ overflow: 'auto', width: '80%' }}>
      <Button
        onClick={() => {
          setTableData([...tableData, data[0]]);
        }}
      >
        Add row
      </Button>
      <TableModule
        {...args}
        data={tableData}
        config={configBasic}
        ref={tableRef}
        rowClickLabel="row-click-label"
        rowActions={(row: any, index?: number) => (
          <Button
            variant="text"
            color="inverse"
            style={{ marginRight: '8px' }}
            onClick={() => {
              if (index !== undefined) {
                setTableData(
                  tableData.slice(0, index).concat(tableData.slice(index + 1))
                );
              }
            }}
          >
            Remove
          </Button>
        )}
      />
    </div>
  );
};

export const RowAddRemove: Story = {
  render: TemplateRowAddRemove,
};

export const RowManualOrder: Story = {
  render: (args) => {
    const tableRef = React.useRef<HTMLTableElement | null>(null);
    const [tableData, setTableData] = React.useState(data);
    const spinColumn: TableConfiguration<Item> = {
      header: {
        content: () => '',
      },
      cell: {
        content: (_, index) => (
          <SpinButton
            decrementDisabled={index === tableData.length - 1}
            incrementDisabled={index === 0}
            onIncrement={(e) => {
              // swap row at index -1 and index
              const targetIndex = index! - 1;
              tableData[targetIndex] = tableData.splice(
                index!,
                1,
                tableData[targetIndex]
              )[0];
              setTableData([...tableData]);
            }}
            onDecrement={(e) => {
              // swap row at index and index + 1
              const targetIndex = index! + 1;
              tableData[targetIndex] = tableData.splice(
                index!,
                1,
                tableData[targetIndex]
              )[0];
              setTableData([...tableData]);
            }}
          />
        ),
      },
    };
    return (
      <TableModule
        {...args}
        data={tableData}
        config={[
          spinColumn,
          {
            header: {
              label: 'Description',
            },
            cell: {
              valuePath: 'description',
            },
          },
          {
            header: {
              label: 'Calories',
            },
            cell: {
              valuePath: 'calories',
            },
          },
          {
            header: {
              label: 'Fat',
            },
            cell: {
              valuePath: 'fat',
            },
          },
        ]}
        ref={tableRef}
        rowClickLabel="row-click-label"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: `It supports manual row order via SpinButton. In this example, it
        could either click the Up or Down button to adjust the order of a row.
        When using keyboard, please use the Tab key to focus on a SpinButton then
        use ArrowUp or ArrowDown button.`,
      },
    },
  },
};
