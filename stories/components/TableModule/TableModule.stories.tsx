import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Checkbox } from '../../../src/components/Checkbox';
import { IconButton } from '../../../src/components/IconButton';
import { Button } from '../../../src/components/Button';
import { FormBox } from '../../../src/components/FormBox';
import { Tooltip } from '../../../src/components/Tooltip';
import { Text } from '../../../src/components/Text';
import {
  TableActionDivider,
  TableConfiguration,
  TableModule,
  TableModuleActions,
  TableSortClickProps,
} from '../../../src/components/TableModule';
import { Share, Trash } from '@lifeomic/chromicons';
import { Container } from '../../storyComponents/Container';
import { Noop } from '../../storyComponents/Noop';
import alignmentMd from './alignment.md';
import checkboxesMd from './checkboxes.md';
import defaultMd from './default.md';
import iconButtonsMd from './iconButtons.md';
import infiniteScrollMd from './infiniteScroll.md';
import rowRoleMd from './rowRole.md';
import rowActionsMd from './rowActions.md';
import sortingMd from './sorting.md';
import stylingMd from './styling.md';
import testingMd from './testing.md';
import truncatingDataMd from './truncatingData.md';

const config: Array<TableConfiguration> = [
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
];

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

const TableModuleStory: React.FC = () => {
  return (
    <Container>
      <TableModule
        data={data}
        config={config}
        onRowClick={(row) => console.log(row)}
        isLoading={boolean('isLoading', false)}
      />
    </Container>
  );
};

const TableModuleAlignmentStory: React.FC = () => {
  const alignConfig: Array<TableConfiguration> = [
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
        align: 'right',
        label: 'Fat (right aligned)',
      },
      cell: {
        align: 'right',
        valuePath: 'fat',
      },
    },
    {
      header: {
        label: 'Carbs',
      },
      cell: {
        valuePath: 'carbs',
      },
    },
  ];

  return (
    <Container>
      <TableModule
        data={data}
        config={alignConfig}
        onRowClick={(row) => console.log(row)}
        isLoading={boolean('isLoading', false)}
      />
    </Container>
  );
};

const TableModuleSortingStory: React.FC = () => {
  const [sort, setSort] = React.useState({ key: null, direction: null });

  const handleSortClick = ({ key, direction }: any) => {
    setSort({ key, direction });
  };
  let sortedData: any = data;

  if (sort.direction && sort.key) {
    sortedData = [...data].sort((a: any, b: any) => {
      const aValue = a[sort.key!];
      const bValue = b[sort.key!];

      if (sort.direction === 'asc') {
        return aValue > bValue ? 1 : bValue > aValue ? -1 : 0;
      }

      if (sort.direction === 'desc') {
        return bValue > aValue ? 1 : aValue > bValue ? -1 : 0;
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

  return (
    <Container>
      <TableModule
        data={sortedData}
        config={sortConfig}
        onRowClick={(row) => console.log(row)}
        isLoading={boolean('isLoading', false)}
      />
    </Container>
  );
};

const TableModuleWithIconButtonStory: React.FC = () => {
  const handleIconButtonClick = (e: any) => {
    e.stopPropagation();
    console.log('icon button clicked!');
  };

  const iconConfig: Array<TableConfiguration> = [
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
        label: '',
      },
      cell: {
        content: () => {
          return (
            <TableModuleActions>
              <IconButton
                aria-label="Share"
                icon={Share}
                onClick={handleIconButtonClick}
              />
              <IconButton
                aria-label="Trash"
                icon={Trash}
                onClick={handleIconButtonClick}
              />
            </TableModuleActions>
          );
        },
      },
    },
  ];

  return (
    <Container>
      <TableModule
        data={data}
        config={iconConfig}
        onRowClick={() => console.log('row clicked!')}
        isLoading={boolean('isLoading', false)}
      />
    </Container>
  );
};

const TableModuleMaxCellWidthStory: React.FC = () => {
  const maxConfig: Array<TableConfiguration> = [
    {
      header: {
        label: 'Id',
      },
      cell: {
        valuePath: 'id',
      },
    },
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
        label: 'Name',
      },
      cell: {
        valuePath: 'name',
      },
    },
    {
      header: {
        label: 'Date',
      },
      cell: {
        valuePath: 'date',
      },
    },
  ];

  const maxData = [
    {
      id: 'b1ad6b84-30eb-49e1-9659-8bb1709b616f',
      description: 'Lorem ipsum dolor sit amet',
      name: 'Tony',
      date: String(new Date()),
    },
    {
      id: '363ae92e-aa79-4387-9cbe-8a7bc4875a46',
      description: 'Lorem ipsum dolor',
      name: 'Bob',
      date: String(new Date()),
    },
  ];

  return (
    <Container>
      <TableModule
        data={maxData}
        config={maxConfig}
        onRowClick={(row) => console.log(row)}
        isLoading={boolean('isLoading', false)}
        maxCellWidth={select('maxCellWidth', [1, 2], 1)}
      />
    </Container>
  );
};

const TableModuleRowActionsStory: React.FC = () => {
  const iconConfig: Array<TableConfiguration> = [
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
  ];

  return (
    <Container>
      <TableModule
        data={data}
        config={iconConfig}
        onRowClick={(row) => console.log(row)}
        isLoading={boolean('isLoading', false)}
        maxCellWidth={2}
        rowActions={(row) => (
          <>
            <Button
              variant="text"
              color="inverse"
              style={{ marginRight: '8px' }}
            >
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
        )}
      />
    </Container>
  );
};

const TestBed: React.FC = () => {
  const iconConfig: Array<TableConfiguration> = [
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
  ];

  return (
    <FormBox style={{ padding: '16px 32px 32px' }}>
      <Text size="headline">Regular Content</Text>
      <TableModule
        data={data}
        config={config}
        onRowClick={(row) => console.log(row)}
        isLoading={boolean('isLoading', false)}
      />

      <Text size="headline">No-click row but action</Text>
      <TableModule
        data={data}
        config={config}
        isLoading={boolean('isLoading', false)}
        rowActions={(row) => (
          <>
            <Tooltip title="Trash">
              <IconButton
                aria-label="Trash"
                icon={Trash}
                color="inverse"
                onClick={(e) => {
                  e.stopPropagation();
                  e.currentTarget.blur();
                  console.log(`trash ${row}!`);
                }}
              />
            </Tooltip>
          </>
        )}
      />

      <Text size="headline">Long, overflowed content</Text>
      <div style={{ overflowX: 'auto' }}>
        <TableModule
          data={data}
          config={[...config, ...config, ...config, ...config]}
          onRowClick={(row) => console.log(row)}
          isLoading={boolean('isLoading', false)}
          maxCellWidth={2}
        />
      </div>

      <Text size="headline">Long, overflowed content with actions</Text>
      <div style={{ overflowX: 'auto' }}>
        <TableModule
          data={data}
          config={[...config, ...config, ...config, ...iconConfig]}
          onRowClick={(row) => console.log(row)}
          isLoading={boolean('isLoading', false)}
          maxCellWidth={2}
          rowActions={(row) => (
            <>
              <Button
                variant="text"
                color="inverse"
                style={{ marginRight: '8px' }}
                onClick={(e) => {
                  e.stopPropagation();
                  e.currentTarget.blur();
                }}
              >
                Revoke
              </Button>
              <TableActionDivider />
              <Tooltip title="Share">
                <IconButton
                  aria-label="Share"
                  icon={Share}
                  color="inverse"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.currentTarget.blur();
                    console.log(`search ${row}!`);
                  }}
                />
              </Tooltip>
              <Tooltip title="Trash">
                <IconButton
                  aria-label="Trash"
                  icon={Trash}
                  color="inverse"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.currentTarget.blur();
                    console.log(`trash ${row}!`);
                  }}
                />
              </Tooltip>
            </>
          )}
        />
      </div>

      <Text size="headline">No-click Content</Text>
      <TableModule
        data={data}
        config={config}
        isLoading={boolean('isLoading', false)}
      />

      <Text size="headline">With Checkboxes</Text>
      <TableModule
        data={data}
        config={[
          {
            header: {
              label: '',
            },
            cell: {
              content: () => {
                return (
                  <Checkbox
                    aria-label="checkbox"
                    label=""
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log('Checkbox click handler');
                    }}
                  />
                );
              },
            },
          },
          ...config,
        ]}
        onRowClick={() => console.log('Row click handler')}
        isLoading={boolean('isLoading', false)}
      />

      <Text size="headline">Specific rows with actions, others without</Text>
      <TableModule
        data={data}
        config={config}
        isLoading={boolean('isLoading', false)}
        rowActions={(row) => {
          if (row.carbs === '37' || row.carbs === '67') {
            return (
              <>
                <Button
                  variant="text"
                  color="inverse"
                  style={{ marginRight: '8px' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.currentTarget.blur();
                  }}
                >
                  Revoke
                </Button>
                <TableActionDivider />
                <Tooltip title="Share">
                  <IconButton
                    aria-label="Share"
                    icon={Share}
                    color="inverse"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.currentTarget.blur();
                      console.log(`search ${row}!`);
                    }}
                  />
                </Tooltip>
                <Tooltip title="Trash">
                  <IconButton
                    aria-label="Trash"
                    icon={Trash}
                    color="inverse"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.currentTarget.blur();
                      console.log(`trash ${row}!`);
                    }}
                  />
                </Tooltip>
              </>
            );
          }

          return null;
        }}
      />
    </FormBox>
  );
};

storiesOf('Components/TableModule', module)
  .add('Default', () => <TableModuleStory />, {
    readme: {
      content: defaultMd,
    },
  })
  .add('Alignment', () => <TableModuleAlignmentStory />, {
    readme: {
      content: alignmentMd,
    },
  })
  .add('Sorting', () => <TableModuleSortingStory />, {
    readme: {
      content: sortingMd,
    },
  })
  .add('With Actions', () => <TableModuleRowActionsStory />, {
    readme: {
      content: rowActionsMd,
    },
  })
  .add('With Checkboxes', () => <Noop />, {
    readme: {
      content: checkboxesMd,
    },
  })
  .add('Infinite Scroll', () => <Noop />, {
    readme: {
      content: infiniteScrollMd,
    },
  })
  .add('Linkable Rows', () => <Noop />, {
    readme: {
      content: rowRoleMd,
    },
  })
  .add('Styling', () => <Noop />, {
    readme: {
      content: stylingMd,
    },
  })
  .add('Data overflow', () => <TableModuleMaxCellWidthStory />, {
    readme: {
      content: truncatingDataMd,
    },
  })
  .add('Testing', () => <Noop />, {
    readme: {
      content: testingMd,
    },
  })
  .add('Test Bed for design', () => <TestBed />)
  .add(
    'With Icon Buttons (deprecated)',
    () => <TableModuleWithIconButtonStory />,
    {
      readme: {
        content: iconButtonsMd,
      },
    }
  );
