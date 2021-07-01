**NOTE:** These icons are deprecated in favor of using [Chromicons](https://github.com/lifeomic/chromicons) directly and will be removed in a future release. The Chromicons viewer can be found at https://lifeomic.github.io/chromicons.com/.

# Filled Icons

A default set of icons exposed by Chroma.

Filled icons are a bit more opinionated, in that they include colors set by
default. An escape hatch is provided though (see below).

<!-- STORY -->

## Import

```js
import { File } from '@lifeomic/chroma-react/icons/File';
```

## Usage

```jsx
<File />
```

### Overriding the Icon Colors

The Filled Icons expose a `useCurrentColor` prop, which will set the fill or
stroke for each icon to "currentColor", allowing the consumer to override the
color.

```jsx
// Container sets color
<div style={{ color: 'black' }}>
  <File useCurrentColor />
</div>
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/icons)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Icons)
