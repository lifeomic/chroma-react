# Phone Number Format Field

An input component for entering a phone number, it extends the [Chroma TextField component](https://lifeomic.github.io/chroma-react/?path=/story/form-components-textfield--all).. Leverages [react-phone-number-input](https://gitlab.com/catamphetamine/react-phone-number-input#readme).

<!-- STORY -->

## Import

```js
import { PhoneNumberFormatField } from '@lifeomic/chroma-react/components/NumberFormat';
```

## Usage

```jsx
<PhoneNumberFormatField
  value=""
  onChange={(value) => {
    console.log(value);
  }}
  label="Phone"
/>
```

### Label

The label to display for the element.

```jsx
<PhoneNumberFormatField label="Name" />
```

### Placeholder

The placeholder text to display.

```jsx
<PhoneNumberFormatField placeholder="Enter your phone number" />
```

### Required Styling

Shows an \* next to the label; required validation must be handled separately.

```jsx
<PhoneNumberFormatField label="Phone" showRequiredStyling />
```

### Has Error

Sets an error style on the element.

```jsx
<PhoneNumberFormatField label="Phone" hasError />
```

### Error Message

Caption, error text to display underneath the element when an error occurs. For
the message to be displayed `hasError` must be set as well.

```jsx
<PhoneNumberFormatField
  label="Phone"
  hasError
  errorMessage="This is required!"
/>
```

### Disabled

Applies the disabled state to the element.

```jsx
<PhoneNumberFormatField label="Phone" disabled />
```

**REMINDER:** If you use `disabled`, screenreaders will not announce the text
inside of the TextField to the user, and will completely skip over this element.

### Read Only

Applies the read only state to the element.

```jsx
<PhoneNumberFormatField label="Phone" readOnly />
```

### Accessibility

- Similar to `<TextField />`, as it extends that component
- Uses a native `<select>` element for the flag input

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/NumberFormat/PhoneNumberFormatField.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/NumberFormat/PhoneNumberFormatFieldStory.stories.tsx)
