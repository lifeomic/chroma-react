# ComboBox

A multi-select component. This component leverages styles and props from Select.
If you need a single-select component, see Select.

<!-- STORY -->

## Import

```js
import {
  ComboBox,
  SelectOption,
} from '@lifeomic/chroma-react/components/Select';
```

## Usage

```jsx
const [comboValue, setComboValue] = React.useState<Array<string> | undefined>(
  undefined
);

<ComboBox
  label="ComboBox"
  placeholder="Pick any that apply…"
  value={comboValue}
  onChange={(values: Array<string>) => {
    setComboValue(values);
  }}
>
  <SelectOption
    title="Option 1"
    value="option1"
  />
  <SelectOption
    title="Option 2"
    subtitle="Subtitle"
    value="option2"
  />
  <SelectOption title="Option 3" value="option3" />
  <SelectOption title="Option 4" value="option4" />
</ComboBox>
```

### onChange and value

The ComboBox works by providing `value` for the checked options and `onChange`
for listening for when items are added/removed. ComboBox expects the `value` to
be an array of options. In the example above, to default-check "Option 3",
provide:

```jsx
<ComboBox value={[ "option3" ]}>
```

When an option is selected, the `onChange` is called. This function provides two
arguments, one for the selected values, and then the `meta` object. The `meta`
object can be used to store additional information about the option.

When an item is currently selected, and then clicked a second time, the item is
"removed". Chroma does not remove this item for you from the list. It is up to
you, the consumer, to do this yourself with a combination of `onChange` and
`value`.

### Label

The label to display for the ComboBox element. This is also the popover title
announced for screenreaders when the select menu is open. If a label is not
provided, `popoverAriaLabel` should be provided.

```jsx
<ComboBox label="Name" />
```

### Secondary Label

A secondary, supplemental label to display for the combobox element.

```jsx
<Select secondaryLabel="Optional" />
```

### Placeholder

The placeholder text to display.

```jsx
<ComboBox placeholder="Enter your name" />
```

### Full Width

Makes the element take 100% of the width.

```jsx
<ComboBox fullWidth />
```

### Help Message

Caption, help text to display underneath the element. This should be
supplemental text to the label, typically an expanded description of the option.

```jsx
<ComboBox label="Name" helpMessage="Some helper text!" />
```

### Has Error

Sets an error style on the element.

```jsx
<ComboBox label="Name" hasError />
```

### Error Message

Caption, error text to display underneath the element when an error occurs. For
the message to be displayed `hasError` must be set as well.

```jsx
<ComboBox label="Name" hasError errorMessage="Some helper text!" />
```

### Disabled

Applies the disabled state to the element.

```jsx
<ComboBox label="Name" disabled />
```

### Color

Applies the color to the element.

```jsx
<ComboBox label="Name" color="inverse" />
```

### Accessibility

- The list of options has the `aria-multiselectable` attribute so that
  screenreaders can announce the number of options selected.
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

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/ComboBox/ComboBox.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/ComboBox/ComboBox.stories.tsx)
