# Table Module Treating Rows as Links

There may be cases where a row has an `onRowClick` specified, and that click
links the user out to another route. To help with accessibility, the Table
Module exposes a prop for setting the role.

<!-- STORY -->

## Import

```js
import { TableModule } from '@lifeomic/chroma-react/components/TableModule';
```

## Usage

Adding `rowRole="link"` will add the aria role to the table data rows. The
consumer can then use whatever method to navigate the browser to the specified
route.

```js
const handleRowClick = (row) => this.props.push(`my-url/${row.id}`);
```

```jsx
<TableModule
  data={sortedData}
  config={config}
  onRowClick={handleRowClick}
  rowRole="link"
/>
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/TableModule/TableModule.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/TableModule/TableModule.stories.tsx)
