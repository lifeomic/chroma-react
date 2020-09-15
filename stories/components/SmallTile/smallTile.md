# Small Tile

The base tile presentational component. It doesn't do much by itself, other than
render an empty, styled tile.

<!-- STORY -->

## Basic Import

```js
import { SmallTile } from '@lifeomic/chroma-react/components/SmallTile';
```

## Basic Usage

### Base

```jsx
<SmallTile>{/* Your Content Here */}</SmallTile>
```

### onClick + Hover class

Passing an `onClick` prop to the component adds a `hover` class.

```jsx
<SmallTile onClick={() => console.log('clicked!')}></SmallTile>
```

### Class Name

A class name can be provided.

```jsx
<SmallTile className="mr-4" />
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/SmallTile/SmallTile.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/SmallTile/SmallTile.stories.tsx)
