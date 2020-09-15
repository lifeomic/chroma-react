# Table Module with Checkboxes

<!-- STORY -->

## Import

```js
import { Checkbox } from '@lifeomic/chroma-react/components/Checkbox';
import { TableModule } from '@lifeomic/chroma-react/components/TableModule';
```

## Usage

When checkboxes are inside of a table, there are two events you may need to add
if you have `onRowClick` defined on the Table Module:

- `e.currentTarget.blur();`. Ensure when the button is clicked that focus is
  removed from the element, so that the toolbar does not remain visible when
  hovering another row after a click.
- `e.stopPropagation();`. Ensure the event does not bubble to the table row
  `onRowClick`.

This applies to link components as well.

```jsx
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
              label=""
              onClick={(e) => {
                // (Optional)
                // If you want focus to remove from the checkbox
                // e.currentTarget.blur();
                e.stopPropagation();
                console.log('Checkbox click handler');
              }}
              onChange={yourOnChangeHandler}
            />
          );
        },
      },
    },
    ...config,
  ]}
  onRowClick={() => console.log('Row click handler')}
/>
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/TableModule/TableModule.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/TableModule/TableModule.stories.tsx)
