# Table Module Styling

The Table Module component exposes a few props for applying additional styles.

<!-- STORY -->

## Import

```js
import { TableModule } from '@lifeomic/chroma-react/components/TableModule';
```

## Styling Root Usage

The provided class will be applied to the `<table>` element.

```jsx
<TableModule className="custom-class" />
```

## Styling Headers/Cells Usage

Provide a `className` to any header or cell you'd like to style and the class
will be applied.

```js
const config: Array<TableConfiguration> = [
  {
    header: {
      label: 'Header',
      className: 'header-class-name',
    },
    cell: {
      valuePath: 'foo',
      className: 'cell-class-name',
    },
  },
];
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/TableModule/TableModule.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/TableModule/TableModule.stories.tsx)
