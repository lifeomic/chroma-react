# Select

An accessible select component. If you need a multi-select component, see
ComboBox.

<!-- STORY -->

## Import

```js
import { Select, SelectOption } from '@lifeomic/chroma-react/components/Select';
```

## Usage

```jsx
<Select
  label="Choose an option…"
  placeholder="Placeholder Text…"
  value={selectValue}
  onChange={(v: string) => setSelectValue(v)}
>
  <SelectOption title="Option 1" value="option 1" />
  <SelectOption title="Option 2" subtitle="subtitle" value="option 2" />
  <SelectOption disabled title="Option 3" value="option 3" />
  <SelectOption title="Option 4" value="option 4" />
</Select>
```

### Label

The label to display for the Select element. This is also the popover title
announced for screenreaders when the select menu is open. If a label is not
provided, `popoverAriaLabel` should be provided.

```jsx
<Select label="Name" />
```

### Secondary Label

A secondary, supplemental label to display for the Select element.

```jsx
<Select secondaryLabel="Optional" />
```

### Placeholder

The placeholder text to display.

```jsx
<Select placeholder="Enter your name" />
```

### Full Width

Makes the element take 100% of the width.

```jsx
<Select fullWidth />
```

### Help Message

Caption, help text to display underneath the element. This should be
supplemental text to the label, typically an expanded description of the option.

```jsx
<Select label="Name" helpMessage="Some helper text!" />
```

### Has Error

Sets an error style on the element.

```jsx
<Select label="Name" hasError />
```

### Error Message

Caption, error text to display underneath the element when an error occurs. For
the message to be displayed `hasError` must be set as well.

```jsx
<Select label="Name" hasError errorMessage="Some helper text!" />
```

### Disabled

Applies the disabled state to the element.

```jsx
<Select label="Name" disabled />
```

### Color

Applies the color to the element.

```jsx
<Select label="Name" color="inverse" />
```

### Accessibility

- When the select menu is open, the arrow keys on a user's keyboard can be used
  to navigate between options.
- The Escape key closes the open menu.
- Pressing the Enter key "clicks" the option.
- A checkmark is read with the selected menu option.
- The label and input are "connected" via a uniqueId and the `for` + `id`
  attributes.
- The label has the `aria-hidden` attribute so it cannot be focused by
  screenreaders. Instead, the input element receives the focus, and the label is
  read as part of the input.
- The component uses a uniqueId to link the input to the help and error messages
  via `aria-describedby`. This allows screenreaders to read the help and error
  messages.
- The icon has `aria-hidden` and `role="img"` attributes.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Select/Select.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Select/Select.stories.tsx)
