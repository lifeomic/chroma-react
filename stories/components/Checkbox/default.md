# Checkbox

A checkbox component for form usage. Under the covers, this is an input element
with `type="checkbox"`.

<!-- STORY -->

## Import

```js
import { Checkbox } from '@lifeomic/chroma-react/components/Checkbox';
```

## Usage

```jsx
<Checkbox
  checked={checked}
  onChange={(e) => {
    setChecked(e.target.checked);
  }}
  label="Opt-in"
/>
```

### Label

The label to display for the checkbox element.

```jsx
<Checkbox label="Opt-in" />
```

### Checked

The checked state of the checkbox. Normally this is controlled in combination
with `onChange` as displayed in the example above.

```jsx
<Checkbox checked />
```

### Help Message

Caption, help text to display underneath the element. This should be
supplemental text to the label, typically an expanded description of the option.

```jsx
<Checkbox label="Checkbox" helpMessage="Some helper text!" />
```

### Required Styling

Shows an \* next to the label; required validation must be handled separately.

```jsx
<Checkbox label="Checkbox" showRequiredStyling />
```

### Has Error

Sets an error style on the element.

```jsx
<Checkbox label="Checkbox" hasError />
```

### Error Message

Caption, error text to display underneath the element when an error occurs. For
the message to be displayed `hasError` must be set as well.

```jsx
<Checkbox label="Checkbox" hasError errorMessage="Some helper text!" />
```

### Disabled

Applies the disabled state to the element.

```jsx
<Checkbox label="Checkbox" disabled />
```

### Indeterminate

Applies the indeterminate state to the element. Primarily used when a parent
checkbox has a mix of checked and unchecked children checkboxes.

```jsx
<Checkbox label="Checkbox" indeterminate />
```

### Color

Applies the color to the element.

```jsx
<Checkbox label="Name" color="inverse" />
```

### Accessibility

- The label and input are "connected" via a uniqueId and the `for` + `id`
  attributes.
- The component has `type="checkbox"`.
- The component uses a uniqueId to link the input to the help and error messages
  via `aria-describedby`. This allows screenreaders to read the help and error
  messages.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Checkbox/Checkbox.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Checkbox/Checkbox.stories.tsx)
