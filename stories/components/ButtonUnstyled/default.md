# Button

A Button component with no button styles.

## Import

```js
import { ButtonUnstyled } from '@lifeomic/chroma-react/components/ButtonUnstyled';
```

<!-- STORY -->

## Usage

### Children

The content to render inside of a button.

```jsx
<ButtonUnstyled>Button</ButtonUnstyled>
```

### Full Width

To set the width of the button to take 100% of the width, use the `fullWidth`
prop.

```jsx
<ButtonUnstyled fullWidth>Button</ButtonUnstyled>
```

### onClick

```jsx
<ButtonUnstyled onClick={() => console.log('clicked!')}>Button</ButtonUnstyled>
```

### Disabled

```jsx
<ButtonUnstyled disabled>Button</ButtonUnstyled>
```

### Class Name

A class name can be provided.

```jsx
<ButtonUnstyled className="mr-4">Button</ButtonUnstyled>
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

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Button/ButtonUnstyled.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Button/ButtonUnstyled.stories.tsx)
