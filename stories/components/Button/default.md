# Button

A typical Button component.

## Import

```js
import { Button } from '@lifeomic/chroma-react/components/Button';
```

<!-- STORY -->

## Usage

### Variant

The button component takes multiple different variants, for different styled
buttons. Typically, the `contained` variant is used as the primary action.

```jsx
<Button variant="contained">Button</Button>
<Button variant="text">Button</Button>
<Button variant="outlined">Button</Button>
```

### Children

The content to render inside of a button.

```jsx
<Button>Button</Button>
```

### Icon

The Button component takes an `icon` prop. It's recommended to use the
[Chromicons](https://lifeomic.github.io/chromicons.com/) icon set.

```jsx
<Button icon={Edit}>Button</Button>
```

### Trailing Icon

The Button component takes a `trailingIcon` prop. This icon will be
rendered after the text. It's recommended to use the Chromicons icon set.

```jsx
<Button trailingIcon={ChevronDown}>Button</Button>
```

### Color

The button component takes multiple different colors, for different styled
buttons. Typically, the `inverse` color is used when a button needs to be
on a dark-colored background. When the action of the button will have a
negative or positive impact, `negative` or `positive` color are used.

```jsx
<Button color="inverse">Button</Button>
<Button color="negative">Button</Button>
<Button color="positive">Button</Button>
```

### Full Width

To set the width of the button to take 100% of the width, use the `fullWidth`
prop.

```jsx
<Button fullWidth>Button</Button>
```

### onClick

```jsx
<Button onClick={() => console.log('clicked!')}>Button</Button>
```

### Disabled

```jsx
<Button disabled>Button</Button>
```

### Class Name

A class name can be provided.

```jsx
<Button className="mr-4">Button</Button>
```

## Accessibility

- The Button has `type="button"`.
  - Pressing `Tab` will set focus to the element
  - Pressing `Space` or `Enter` triggers the click action.
- When the Button has focus, Space and Enter keys activates it.
- When the Button is disabled, the tabIndex is set to `-1`.
- The icon of Button has `role="img"` and `aria-hidden` attributes so that it
  does not get picked up by screen readers.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Button/Button.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Button/Button.stories.tsx)
