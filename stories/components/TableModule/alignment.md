# Table Module Cell Alignment

The Table Module config API allows for specifying `align` properties for both
header and cell items.

<!-- STORY -->

## Import

```js
import { TableModule } from '@lifeomic/chroma-react/components/TableModule';
```

## Usage

`align` is an option prop available on both config options. By default, it will
be set to "left".

```js
const config: Array<TableConfiguration> = [
  {
    header: {
      align: 'right',
      label: 'Fat',
    },
    cell: {
      align: 'right',
      valuePath: 'fat',
    },
  },
];
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/TableModule/TableModule.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/TableModule/TableModule.stories.tsx)
