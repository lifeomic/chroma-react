# Icon Button Float

A Button element with an icon only that floats above other content. Since it's
only an icon that's rendered, it's required to pass the `aria-label` prop so
that screen readers can give meaning to the button.

## Import

```js
import { IconButtonFloat } from '@lifeomic/chroma-react/components/IconButtonFloat';
```

<!-- STORY -->

## Usage

### aria-label (_required_)

Why is this required? For screen readers! To ensure we are a11y-friendly, we
require this on Icon Button Float. This label should be a description for the
button, as it is read from the screen reader, so the more context, the better!

### Icon (_required_)

The Icon Button Float component requires an `icon` prop. It's recommended to use
the [Chromicons](https://lifeomic.github.io/chromicons.com/) icon set.

```jsx
<IconButtonFloat icon={Edit} />
```

### Align

An align prop can be applied. Valid options are `bottom` (default), `center`, or
`top`.

```jsx
<IconButtonFloat align="top" icon={Edit} />
```

### Justify

A justify prop can be applied. Valid options are `right` (default), `center`, or
`left`.

```jsx
<IconButtonFloat justify="left" icon={Edit} />
```

### Size

There are size options exposed. The default size is `2`. Choose one that fits
the best for your needs.

```jsx
<IconButtonFloat icon={Edit} size={0} />
<IconButtonFloat icon={Edit} size={1} />
<IconButtonFloat icon={Edit} size={2} />
```

### Disabled

Like regular buttons, Icon Button Float also takes a prop to disable it.

```jsx
<IconButtonFloat icon={Edit} disabled />
```

### Class Name

A class name can be provided.

```jsx
<IconButtonFloat icon={Edit} className="mr-4" />
```

## Accessibility

- The Icon Button Float has `type="button"`.
- Pressing `Tab` will set focus to the element
- Pressing `Space` or `Enter` triggers the click action.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/IconButtonFloat/IconButtonFloat.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/IconButtonFloat/IconButtonFloat.stories.tsx)
