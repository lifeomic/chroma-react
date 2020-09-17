# Icon Tile

The base tile presentational component. It doesn't do much by itself, other than
render an empty, styled tile.

<!-- STORY -->

## Basic Import

```js
import { IconTile } from '@lifeomic/chroma-react/components/IconTile';
```

## Basic Usage

### Base

```jsx
<IconTile>{/* Your Content Here */}</IconTile>
```

### onClick + Hover class

Passing an `onClick` prop to the component adds a `hover` class.

```jsx
<IconTile onClick={() => console.log('clicked!')}></IconTile>
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/IconTile/IconTile.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/IconTile/IconTile.stories.tsx)
