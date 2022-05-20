# Icon Button

A Button element with an icon only. Since it's only an icon that's rendered,
it's required to pass the `aria-label` prop so that screen readers can give
meaning to the button.

## Import

```js
import { IconButton } from '@lifeomic/chroma-react/components/IconButton';
```

<!-- STORY -->

## Usage

### aria-label (_required_)

Why is this required? For screen readers! To ensure we are a11y-friendly, we
require this on Icon Button. This label should be a description for the button,
as it is read from the screen reader, so the more context, the better!

### Icon (_required_)

The Icon Button component requires an `icon` prop. It's recommended to use the
[Chromicons](https://lifeomic.github.io/chromicons.com/) icon set.

```jsx
<IconButton icon={Edit} />
```

### Color

The icon button component takes multiple different colors, for different styled
icon buttons. Typically, the `inverse` color is used when an icon button needs to be
on a dark-colored background. When the action of the icon button will have a
negative or positive impact, `negative` or `positive` color are used.

```jsx
<IconButton icon={Edit} color="inverse" />
<IconButton icon={Edit} color="negative" />
<IconButton icon={Edit} color="positive" />
```

### Size

There are size options exposed. Choose one that fits the best for your needs.

```jsx
<IconButton icon={Edit} size={0} />
<IconButton icon={Edit} size={1} />
```

### Padding

Icon Button exposes a few props to control the inner padding. This comes in
handy when an Icon Button is pressed up against the edge of a window, and you
want padding on the entire container to be consistent on both the left and the
right side, for example.

```jsx
<IconButton
  icon={Edit}
  paddingRight={0}
  paddingLeft={0}
  paddingTop={0}
  paddingBottom={0}
/>
```

### Disabled

Like regular buttons, Icon Button also takes a prop to disable it.

```jsx
<IconButton icon={Edit} disabled />
```

### Class Name

A class name can be provided.

```jsx
<IconButton icon={Edit} className="mr-4" />
```

## Accessibility

- The Icon Button has `type="button"`.
  - Pressing `Tab` will set focus to the element
  - Pressing `Space` or `Enter` triggers the click action.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/IconButton/IconButton.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/IconButton/IconButton.stories.tsx)
