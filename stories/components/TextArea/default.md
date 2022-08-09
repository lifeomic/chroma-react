# Text Area

An textarea component for form usage.

<!-- STORY -->

## Import

```js
import { TextArea } from '@lifeomic/chroma-react/components/TextArea';
```

## Usage

```jsx
<TextArea
  value={text}
  onChange={(e) => {
    setText(e.target.value);
  }}
  label="Description"
/>
```

### Accessibility Note - disabled versus readonly

Read only should be used when a screenreader should still be able to read the
text inside of the element to the users. When `disabled` is used, it completely
skips over the element. In most cases, you want to use `readOnly`, not
`disabled`. The disabled state will **not** announce the text inside of the
TextArea to the user.

### Label

The label to display for the TextArea element.

```jsx
<TextArea label="Description" />
```

### Secondary Label

A secondary, supplemental label to display for the TextArea element.

```jsx
<TextArea label="Description" secondaryLabel="Optional" />
```

### Placeholder

The placeholder text to display.

```jsx
<TextArea placeholder="Enter your description" />
```

### TextArea Class Name

To provide a class directly to the textArea.

```jsx
<TextArea textAreaClassName="custom-class-name" />
```

### Full Width

Makes the element take 100% of the width

```jsx
<TextArea fullWidth />
```

### Icon + Tooltip Message

An additional icon and tooltip element can be used to provide additional context
for the user on how the text entry will be used.

```jsx
<TextArea
  label="Your message"
  secondaryLabel="Optional"
  icon={HelpCircle}
  tooltipMessage="We use this description to generate memes!"
/>
```

### Help Message

Caption, help text to display underneath the element. This should be
supplemental text to the label, typically an expanded description of the option.

```jsx
<TextArea label="Description" helpMessage="Some helper text!" />
```

### Required Styling

Shows an \* next to the label; required validation must be handled separately.

```jsx
<TextArea label="Description" showRequiredStyling />
```

### Has Error

Sets an error style on the element.

```jsx
<TextArea label="Description" hasError />
```

### Error Message

Caption, error text to display underneath the element when an error occurs. For
the message to be displayed `hasError` must be set as well.

```jsx
<TextArea label="Description" hasError errorMessage="Some helper text!" />
```

### Disabled

Applies the disabled state to the element.

```jsx
<TextArea label="Description" disabled />
```

**REMINDER:** If you use `disabled`, screenreaders will not announce the text
inside of the TextArea to the user, and will completely skip over this element.

### Read Only

Applies the read only state to the element.

```jsx
<TextArea label="Description" readOnly />
```

### Color

Applies the color to the element.

```jsx
<TextArea label="Name" color="inverse" />
```

### Accessibility

- The label and textarea are "connected" via a uniqueId and the `for` + `id`
  attributes.
- The label has the `aria-hidden` attribute so it cannot be focused by
  screenreaders. Instead, the textarea element receives the focus, and the label
  is read as part of the textarea.
- The component uses a uniqueId to link the textarea to the help and error
  messages via `aria-describedby`. This allows screenreaders to read the help
  and error messages.
- The icon has `aria-hidden` and `role="img"` attributes.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/TextArea/TextArea.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/TextArea/TextArea.stories.tsx)
