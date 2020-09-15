# Icon Tile Content

A presentational component to be used with `IconTile`, rendering main content in
the tile.

<!-- STORY -->

## Basic Import

```js
import {
  IconTile,
  IconTileContent,
} from '@lifeomic/chroma-react/components/IconTile';
```

## Basic Usage

### Specifying a title

```jsx
<IconTile>
  <IconContent text="Title Text!" />
</IconTile>
```

### Specifying a caption

```jsx
<IconTile>
  <IconContent caption="Caption Text!" />
</IconTile>
```

### Class Name

A class name can be provided.

```jsx
<IconContent className="mr-4" />
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/IconTile/IconTileContent.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/IconTile/IconTile.stories.tsx)
