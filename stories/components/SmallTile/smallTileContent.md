# Small Tile Content

A presentational component to be used with `SmallTile`, rendering main content
in the tile.

<!-- STORY -->

## Basic Import

```js
import {
  SmallTile,
  SmallTileContent,
} from '@lifeomic/chroma-react/components/SmallTile';
```

## Basic Usage

### Specifying a title

```jsx
<SmallTile>
  <SmallTileContent text="Title Text!" />
</SmallTile>
```

### Rendering your own content

There may be cases where you need to render your own content in this component.
You'll also likely want to set the `fullHeight` prop so that the content
component can take the entire height of the container.

```jsx
<SmallTile>
  <SmallTileContent fullHeight>
    <p>My own content!</p>
  </SmallTileContent>
</SmallTile>
```

### Class Name

A class name can be provided.

```jsx
<SmallTileContent className="mr-4" />
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/SmallTile/SmallTileContent.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/SmallTile/SmallTile.stories.tsx)
