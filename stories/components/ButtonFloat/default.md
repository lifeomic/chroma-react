# Button Float

A Button element that floats above other content.

## Import

```js
import { ButtonFloat } from '@lifeomic/chroma-react/components/ButtonFloat';
```

<!-- STORY -->

### Icon

The Button Float component takes an icon prop. It's recommended to use the
[Chromicons](https://lifeomic.github.io/chromicons.com/) icon set.

```jsx
<ButtonFloat icon={Edit} />
```

### Align

An align prop can be applied. Valid options are `bottom` (default), `center`, or
`top`.

```jsx
<ButtonFloat align="top" icon={Edit} />
```

### Justify

A justify prop can be applied. Valid options are `right` (default), `center`, or
`left`.

```jsx
<ButtonFloat justify="left" icon={Edit} />
```

### Size

There are size options exposed. The default size is `2`. Choose one that fits
the best for your needs.

```jsx
<ButtonFloat icon={Edit} size={0} />
<ButtonFloat icon={Edit} size={1} />
<ButtonFloat icon={Edit} size={2} />
```

### Trailing Icon

The Button Float component takes a `trailingIcon` prop. This icon will be
rendered after the text. It's recommended to use the Chroma icon set.

```jsx
<ButtonFloat trailingIcon={ChevronDown}>Button</Button>
```

### Disabled

Like regular buttons, Button Float also takes a prop to disable it.

```jsx
<ButtonFloat icon={Edit} disabled />
```

### Class Name

A class name can be provided.

```jsx
<ButtonFloat icon={Edit} className="mr-4" />
```

## Accessibility

- The Button Float has `type="button"`.
- Pressing `Tab` will set focus to the element
- Pressing `Space` or `Enter` triggers the click action.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/ButtonFloat/ButtonFloat.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/ButtonFloat/ButtonFloat.stories.tsx)
