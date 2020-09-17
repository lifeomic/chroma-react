# Toggle

A toggle component for form usage. This is similar to Checkbox, but a different
style. Under the covers, this is an input element with `type="checkbox"`.

<!-- STORY -->

## Import

```js
import { Toggle } from '@lifeomic/chroma-react/components/Toggle';
```

## Usage

```jsx
<Toggle
  checked={checked}
  onChange={(e) => {
    setChecked(e.target.checked);
  }}
  label="Toggle"
/>
```

### Label

The label to display for the Toggle element.

```jsx
<Toggle label="Toggle" />
```

### Checked

The checked state of the Toggle. Normally this is controlled in combination with
`onChange` as displayed in the example above.

```jsx
<Toggle checked />
```

### Help Message

Caption, help text to display underneath the element. This should be
supplemental text to the label, typically an expanded description of the option.

```jsx
<Toggle label="Toggle" helpMessage="Some helper text!" />
```

### Has Error

Sets an error style on the element.

```jsx
<Toggle label="Toggle" hasError />
```

### Error Message

Caption, error text to display underneath the element when an error occurs. For
the message to be displayed `hasError` must be set as well.

```jsx
<Toggle label="Toggle" hasError errorMessage="Some helper text!" />
```

### Disabled

Applies the disabled state to the element.

```jsx
<Toggle label="Toggle" disabled />
```

### Color

Applies the color to the element.

```jsx
<Toggle label="Toggle" color="inverse" />
```

### Placement

The toggle switch location can be adjusted.

```jsx
<Toggle placement="right" />
```

### Full Width

Makes the element take 100% of the width

```jsx
<Toggle fullWidth />
```

### Accessibility

- The label and input are "connected" via a uniqueId and the `for` + `id`
  attributes.
- The component has `type="checkbox"`.
- The component uses a uniqueId to link the input to the help and error messages
  via `aria-describedby`. This allows screenreaders to read the help and error
  messages.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Toggle/Toggle.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Toggle/Toggle.stories.tsx)
