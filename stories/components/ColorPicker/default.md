# Color Picker

An input component for form usage.

<!-- STORY -->

## Import

```js
import { ColorPicker } from '@lifeomic/chroma-react/components/ColorPicker';
```

## Usage

```jsx
<ColorPicker
  value={color}
  onChange={(value) => {
    setColor(value);
  }}
  label="Color"
/>
```

### Accessibility Note - disabled versus readonly

Read only should be used when a screenreader should still be able to read the
text inside of the element to the users. When `disabled` is used, it completely
skips over the element. In most cases, you want to use `readOnly`, not
`disabled`. The disabled state will **not** announce the text inside of the
TextField to the user.

### Color Suggestions

Supplies a list of suggestions for the user to choose from.

```jsx
<ColorPicker colorSuggestions={['#fff', '#000']} />
```

### Color Variant

Styles the color component with a square or circle border radius

```jsx
<ColorPicker variant="circle" />
```

### Invalid color text

Displays text in Popover header when color is invalid.

```jsx
<ColorPicker invalidColorText="Invalid Color" />
```

### Label

The label to display for the ColorPicker element.

```jsx
<ColorPicker label="Color" />
```

### Secondary Label

A secondary, supplemental label to display for the ColorPicker element.

```jsx
<ColorPicker label="Color" secondaryLabel="Optional" />
```

### Placeholder

The placeholder text to display.

```jsx
<ColorPicker placeholder="Enter a color" />
```

### Full Width

Makes the element take 100% of the width

```jsx
<ColorPicker fullWidth />
```

### Icon + Tooltip Message

An additional icon and tooltip element can be used to provide additional context
for the user on how the text entry will be used.

```jsx
<ColorPicker
  label="Color"
  secondaryLabel="Optional"
  icon={HelpCircle}
  tooltipMessage="If you provide a color, you'll get free tacos!"
/>
```

### Help Message

Caption, help text to display underneath the element. This should be
supplemental text to the label, typically an expanded description of the option.

```jsx
<ColorPicker helpMessage="Some helper text!" />
```

### Has Error

Sets an error style on the element.

```jsx
<ColorPicker hasError />
```

### Error Message

Caption, error text to display underneath the element when an error occurs. For
the message to be displayed `hasError` must be set as well.

```jsx
<ColorPicker hasError errorMessage="Some helper text!" />
```

### Disabled

Applies the disabled state to the element.

```jsx
<ColorPicker disabled />
```

**REMINDER:** If you use `disabled`, screenreaders will not announce the text
inside of the ColorPicker to the user, and will completely skip over this element.

### Read Only

Applies the read only state to the element.

```jsx
<ColorPicker readOnly />
```

### Accessibility

- The label and input are "connected" via a uniqueId and the `for` + `id`
  attributes.
- The label has the `aria-hidden` attribute so it cannot be focused by
  screenreaders. Instead, the input element receives the focus, and the label is
  read as part of the input.
- The component has `type="text"` by default.
- The component uses a uniqueId to link the input to the help and error messages
  via `aria-describedby`. This allows screenreaders to read the help and error
  messages.
- The icon has `aria-hidden` and `role="img"` attributes.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/ColorPicker/ColorPicker.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/ColorPicker/ColorPicker.stories.tsx)
