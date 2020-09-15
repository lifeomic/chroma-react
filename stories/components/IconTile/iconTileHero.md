# Icon Tile Hero

A presentational component to be used with `IconTile`, rendering a background
hero image.

<!-- STORY -->

## Basic Import

```js
import {
  IconTile,
  IconTileHero,
} from '@lifeomic/chroma-react/components/IconTile';
```

## Basic Usage

### Specifying a hero image

This component takes a `backgroundUrl` prop, which can be any type of image,
such as an `svg, jpg, png, etc.`.

```jsx
<IconTile>
  <IconTileHero backgroundUrl="/your-svg.svg" />
</IconTile>
```

This can also be any image from the web, as long as it utilizes the specified
extensions:

```jsx
<IconTile>
  <IconTileHero backgroundUrl="https://lifeomic.com/wp-content/uploads/2019/03/metabs-pattern.png" />
</IconTile>
```

### Specifying styles for the hero image

If you have provided a hero image, but want to move off of the default colors, a
`background` class can be provided.

```jsx
<IconTile>
  <IconTileHero
    backgroundUrl="/your-svg.svg"
    backgroundColor="linear-gradient(45deg, red 0%, green 50%, blue 99%, rebeccapurple 100%)"
  />
</IconTile>
```

```jsx
<IconTile>
  <IconTileHero backgroundUrl="/your-svg.svg" backgroundColor="red" />
</IconTile>
```

### Completely overriding the background styles

If you have provided a hero image, but want to move off of the default styles, a
`background` class can be provided to `classes`.

```jsx
<IconTile>
  <IconTileHero
    backgroundUrl="/your-svg.svg"
    classes={{ background: backgroundClassName }}
  />
</IconTile>
```

### Rendering your own content

There may be cases where you need to render your own content in this component.

```jsx
<IconTile>
  <IconTileHero>
    <img src="" />
  </IconTileHero>
</IconTile>
```

### Class Name

A class name can be provided.

```jsx
<IconTileHero className="mr-4" />
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/IconTile/IconTileHero.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/IconTile/IconTile.stories.tsx)
