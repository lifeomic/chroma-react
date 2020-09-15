# Small Tile Footer

A presentational component to be used with `SmallTile`, rendering footer content
in the tile.

<!-- STORY -->

## Basic Import

```js
import {
  SmallTile,
  SmallTileFooter,
} from '@lifeomic/chroma-react/components/SmallTile';
```

## Basic Usage

### Specifying text

```jsx
<SmallTile>
  <SmallTileFooter text="Footer Text!" />
</SmallTile>
```

### Rendering your own content

There may be cases where you need to render your own content.

```jsx
<SmallTile>
  <SmallTileFooter>
    <p>My own content!</p>
  </SmallTileFooter>
</SmallTile>
```

When the component is provided children, it can leverage the `justify` prop to
justify the container content. The default for `justify` is `space-between`.

```jsx
<SmallTile>
  <SmallTileFooter text="footer" justify="center">
    <Edit width={18} height={18} />
  </SmallTileFooter>
</SmallTile>
```

### Class Name

A class name can be provided.

```jsx
<SmallTileFooter className="mr-4" />
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/SmallTile/SmallTileFooter.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/SmallTile/SmallTile.stories.tsx)
