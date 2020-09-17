# Table Module Sorting

The Table Module components provides callbacks for allowing consumers to perform
their own sorting. Out of the box, no default sorting is provided to allow
consumers to control how they want to sort their data. This allows folks to use
an API to sort their data (header clicked, determine header name clicked, and
send API request to sort the data) or allow the frontend to sort the data
themselves (header clicked, determine header name clicked, and manually sort
data from the frontend).

<!-- STORY -->

<sub>_Scroll to the bottom to see the full example of how this table was created
with sorting_</sub>

## Import

```js
import { TableModule } from '@lifeomic/chroma-react/components/TableModule';
```

## Usage

As mentioned above, the table doesn't do any internal sorting. Sorting is 100%
handled by the consumer (you!). To get started with sorting, add an `onSort` for
each `config header`. When the header is clicked, this `onSort` will be called,
providing back the `header` as an argument. To get the current sort direction,
you can take a look at `header.sortDirection`. The available options are
`"asc" | "desc" | null`.

```js
const config: Array<TableConfiguration> = [
  {
    header: {
      label: 'Description',
      onSort: (header: TableSortClickProps) => {
        // your function handler to sort "data"
        // `header.sortDirection` provides "asc" | "desc" | null
        // For example, you may make a fetch for `/api/foods?sort=description&direction=${header.sortDirection}`
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
        // Fetch with sort by "calories" with the direction `/api/foods?sort=calories&direction=${header.sortDirection}`
      },
    },
    cell: {
      valuePath: 'calories',
    },
  },
];
```

### Hand-rolled Example (this story!)

```js
const [sort, setSort] = React.useState({ key: null, direction: null });

const handleSortClick = ({ key, direction }: any) => {
  setSort({ key, direction });
};
let sortedData: any = data;

if (sort.direction && sort.key) {
  sortedData =
    sort.direction &&
    [...data].sort((a: any, b: any) => {
      const aValue = a[sort.key || 'null'];
      const bValue = b[sort.key || 'null'];

      if (sort.direction === 'asc') {
        return aValue > bValue ? 1 : bValue > aValue ? -1 : 0;
      }

      if (sort.direction === 'desc') {
        return bValue > aValue ? 1 : aValue > bValue ? -1 : 0;
      }

      return 0;
    });
}

const config: Array<TableConfiguration> = [
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
```

```jsx
<TableModule data={sortedData} config={config} />
```

## Providing a default sort state

The Table Module exposes `sortState` prop, which allows the consumer to control
the `sortState` directly. This is helpful when there needs to be a default sort
state for a table, for example.

```js
const sortState: TableSortState = { sortKey: 0, sortDirection: 'asc' };
```

```jsx
<TableModule config={config} data={data} sortState={sortState} />
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/TableModule/TableModule.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/TableModule/TableModule.stories.tsx)
