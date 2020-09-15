# Table Module Truncating Long Data

The Table Module component exposes a prop to allow consumers to cap `<td>`
widths and overflow the text automatically.

<!-- STORY -->

## Import

```js
import { TableModule } from '@lifeomic/chroma-react/components/TableModule';
```

## Usage

`maxCellWidth` allows for different values, so use whatever works best for your
use case.

```html
<TableModule className="custom-class" maxCellWidth="{1}" />
```

Still not quite what you need for your use case? You can provide a `className`
to `cell` and override `maxWidth` manually.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/TableModule/TableModule.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/TableModule/TableModule.stories.tsx)
