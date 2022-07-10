# Price Format Field

An input component for entering a number in some currency; it extends the [Chroma TextField component](https://lifeomic.github.io/chroma-react/?path=/story/form-components-textfield--all). Currently only accommodates USD (\$).

<!-- STORY -->

## Import

```js
import { PriceFormatField } from '@lifeomic/chroma-react/components/NumberFormat';
```

## Usage

```jsx
<PriceFormatField
  value={someValue}
  onChange={(value) => {
    handleChange(value);
  }}
  label="Monthly Costs"
/>
```

### Label

The label to display for the element.

```jsx
<PriceFormatField label="Groceries" />
```

### Has Error

Sets an error style on the element.

```jsx
<PriceFormatField label="Phone Bill" hasError />
```

### Error Message

Caption, error text to display underneath the element when an error occurs. For
the message to be displayed `hasError` must be set as well.

```jsx
<PriceFormatField label="Cost" hasError errorMessage="This is required!" />
```

### Disabled

Applies the disabled state to the element.

```jsx
<PriceFormatField label="Rent" disabled />
```

**REMINDER:** If you use `disabled`, screenreaders will not announce the text
inside of the TextField to the user, and will completely skip over this element.

### Read Only

Applies the read only state to the element.

```jsx
<PriceFormatField label="Total" readOnly />
```

### Accessibility

- Similar to `<TextField />`, as it extends that component

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/NumberFormat/PriceFormatField.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/NumberFormat/PriceFormatFieldStory.stories.tsx)
