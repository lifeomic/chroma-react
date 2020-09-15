# Table Module with Icon Buttons (deprecated)

**NOTE:** It is now recommended to use `rowActions` instead.

There may be cases where a table cell needs one or many icon buttons. There's a
`TableModuleActions` to assist with styling. Leveraging this component ensures
that all buttons are styled the same, with consistent sizes and padding.

<!-- STORY -->

## Import

```js
import {
  TableModule,
  TableModuleActions,
} from '@lifeomic/chroma-react/components/TableModule';
```

## Usage

When the Table Module has a `onRowClick` defined, but a table cell needs to have
an Icon Button with their own click handler, it's important to add the
`e.stopPropagation();` in the handler for the icon button so that _both_ events
don't fire.

```jsx
const handleIconButtonClick = (e) => {
  // catch the `onRowClick` from being called when the icon is clicked
  e.stopPropagation();
};

const iconConfig: Array<TableConfiguration> = [
  {
    header: {
      label: '',
    },
    cell: {
      content: () => {
        return (
          <TableModuleActions>
            <IconButton icon={Search} onClick={handleIconButtonClick} />
            <IconButton icon={Trash} onClick={handleIconButtonClick} />
          </TableModuleActions>
        );
      },
    },
  },
];

return (
  <TableModule
    data={data}
    config={iconConfig}
    onRowClick={(row) => console.log(row)}
  />
);
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/TableModule/TableModule.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/TableModule/TableModule.stories.tsx)
