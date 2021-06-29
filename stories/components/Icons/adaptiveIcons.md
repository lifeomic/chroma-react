**NOTE:** These icons are deprecated in favor of using [Chromicons](https://github.com/lifeomic/chromicons) directly and will be removed in a future release.  The Chromicons viewer can be found at https://lifeomic.github.io/chromicons.com/.
# Adaptive Icons

A default set of icons exposed by Chroma.

Adaptive icons allow a bit more flexability over their filled counterparts.
Adaptive icons allow consumers to provide a `fill` directly as a prop. By
default, the fill or stroke for the icon is set to "currentColor".

<!-- STORY -->

## Import

```js
import { ChevronDown } from '@lifeomic/chroma-react/icons/ChevronDown';
```

## Usage

```jsx
<ChevronDown />
```

### Icon Colors

By default, the `fill` for each icon is set to `currentColor`. To style an icon
with a color of your choice, use:

```jsx
// Container sets color
<div style={{ color: 'black' }}>
  <ChevronDown />
</div>

// Set fill directly
<ChevronDown fill="black" />
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/icons)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Icons)
