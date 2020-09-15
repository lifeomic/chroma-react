# Icon Tile

A tile component for displaying a hero background, icon badge, and minimal text
content. Compose the different components together to suit the needs for your
application.

<!-- STORY -->

## Import

```js
import {
  IconTile,
  IconTileBadge,
  IconTileContent,
  IconTileHero,
} from '@lifeomic/chroma-react/components/IconTile';
```

## Usage

```jsx
<IconTile onClick={() => console.log('clicked')}>
  <IconTileHero backgroundUrl={sampleBackground} />
  <IconTileBadge icon={Edit2} />
  <IconTileContent text="Text" caption="caption" />
</IconTile>
```

### Class Name

A class name can be provided.

```jsx
<IconTile className="mr-4" />
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/IconTile/IconTile.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/IconTile/IconTile.stories.tsx)
