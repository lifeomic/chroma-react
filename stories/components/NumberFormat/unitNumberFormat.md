# Unit Number Format Field

An input component for entering a number pre- or postfixed with a unit string; it extends the [Chroma TextField component](https://lifeomic.github.io/chroma-react/?path=/story/form-components-textfield--all).

<!-- STORY -->

## Import

```js
import { UnitNumberFormatField } from '@lifeomic/chroma-react/components/NumberFormat';
```

## Usage

```jsx
<UnitNumberFormatField
  value={someValue}
  onChange={(value) => {
    handleChange(value);
  }}
  units="in"
  label="Length"
/>
```

### Label

The label to display for the element.

```jsx
<UnitNumberFormatField label="Volume" />
```

### Has Error

Sets an error style on the element.

```jsx
<UnitNumberFormatField label="Length" hasError />
```

### Error Message

Caption, error text to display underneath the element when an error occurs. For
the message to be displayed `hasError` must be set as well.

```jsx
<UnitNumberFormatField label="Speed" hasError errorMessage="Invalid speed" />
```

### Disabled

Applies the disabled state to the element.

```jsx
<UnitNumberFormatField label="Pressure" disabled />
```

**REMINDER:** If you use `disabled`, screenreaders will not announce the text
inside of the TextField to the user, and will completely skip over this element.

### Read Only

Applies the read only state to the element.

```jsx
<UnitNumberFormatField label="Phone" readOnly />
```

### Accessibility

- Similar to `<TextField />`, as it extends that component

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/NumberFormat/UnitNumberFormatField.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/NumberFormat/UnitNumberFormatFieldStory.stories.tsx)
