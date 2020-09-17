# Table Module with Actions

It is a common design pattern to include actionable buttons for a table row. The
Table Module exposes a `rowActions` prop to help. Hover over a row to view the
actions toolbar.

<!-- STORY -->

## Import

```js
import { TableModule } from '@lifeomic/chroma-react/components/TableModule';
```

## Usage

Below is an example of having actions inside of the toolbar on hover or on
focus. It's important to add two key event handlers for any button inside of the
`rowActions`:

- `e.currentTarget.blur();`. Ensure when the button is clicked that focus is
  removed from the element, so that the toolbar does not remain visible when
  hovering another row after a click.
- `e.stopPropagation();`. Ensure the event does not bubble to the table row
  `onRowClick`.

This applies to link components as well.

```jsx
<TableModule
  data={data}
  config={config}
  rowActions={(row) => (
    <>
      <Tooltip title="Share">
        <IconButton
          aria-label="Share"
          icon={Share}
          color="inverse"
          onClick={(e) => {
            e.stopPropagation();
            e.currentTarget.blur();
            console.log(`share ${row.id}!`)
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
            console.log(`trash ${row.id}!`)
          }}
        />
      </Tooltip>
    </>
  )}
/>
);
```

## Recipes

Text action with icon buttons.

```js
import { Button } from '@lifeomic/chroma-react/components/Button';
import { IconButton } from '@lifeomic/chroma-react/components/IconButton';
import { Tooltip } from '@lifeomic/chroma-react/components/Tooltip';
import {
  TableActionDivider,
  TableModule,
} from '@lifeomic/chroma-react/components/TableModule';
```

```jsx
<TableModule
  data={data}
  config={config}
  rowActions={(row) => (
    <>
      <Button
        variant="text"
        color="inverse"
        style={{ marginRight: '0.5rem' }}
        onClick={(e) => {
          e.stopPropagation();
          e.currentTarget.blur();
        }}
      >
        Revoke
      </Button>
      <TableActionDivider >
      <Tooltip title="Share">
        <IconButton
          aria-label="Share"
          icon={Share}
          color="inverse"
          onClick={(e) => {
            e.stopPropagation();
            e.currentTarget.blur();
            console.log(`share ${row.id}!`)
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
            console.log(`trash ${row.id}!`)
          }}
        />
      </Tooltip>
    </>
  )}
/>
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/TableModule/TableModule.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/TableModule/TableModule.stories.tsx)
