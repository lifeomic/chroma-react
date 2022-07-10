# Percent Format Field

An input component for entering a number postfixed with a %; it extends the [Chroma TextField component](https://lifeomic.github.io/chroma-react/?path=/story/form-components-textfield--all).

<!-- STORY -->

## Import

```js
import { PercentFormatField } from '@lifeomic/chroma-react/components/NumberFormat';
```

## Usage

```jsx
<PercentFormatField
  value={someValue}
  onChange={(value) => {
    handleChange(value);
  }}
  label="Tax"
/>
```

### Label

The label to display for the element.

```jsx
<PercentFormatField label="Win Rate" />
```

### Has Error

Sets an error style on the element.

```jsx
<PercentFormatField label="Bonus" hasError />
```

### Error Message

Caption, error text to display underneath the element when an error occurs. For
the message to be displayed `hasError` must be set as well.

```jsx
<PercentFormatField label="Percent" hasError errorMessage="This is required!" />
```

### Disabled

Applies the disabled state to the element.

```jsx
<PercentFormatField label="Population" disabled />
```

**REMINDER:** If you use `disabled`, screenreaders will not announce the text
inside of the TextField to the user, and will completely skip over this element.

### Read Only

Applies the read only state to the element.

```jsx
<PercentFormatField label="Sales Tax" readOnly />
```

### Accessibility

- Similar to `<TextField />`, as it extends that component

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/NumberFormat/PercentFormatField.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/NumberFormat/PercentFormatFieldStory.stories.tsx)
