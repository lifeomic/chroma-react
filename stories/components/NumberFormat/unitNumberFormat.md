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
  onBlur={() => {
    doSomething();
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

### Value

Required prop; sets value variable from element value.

```jsx
<UnitNumberFormatField value={someValue} />
```

### Units

Required prop; displays the units of the input value within the input.

```jsx
<UnitNumberFormatField units="mL" />
```

### onChange

Required prop; function that runs when the value changes.

```jsx
<UnitNumberFormatField onChange={() => doSomething())} />
```

### Required Styling

Shows an \* next to the label; required validation must be handled separately.

```jsx
<UnitNumberFormatField showRequiredStyling />
```

### Minimum Value

Sets a min value for the element. Defaults to 0.

```jsx
<UnitNumberFormatField min={10} />
```

### Maximum Value

Sets a max value for the element. Defaults to Number.MAX_SAFE_INTEGER.

```jsx
<UnitNumberFormatField max={100} />
```

### Decimal Scale

Sets the number of decimal places for the value. Defaults to 0.

```jsx
<UnitNumberFormatField decimalScale={2} />
```

### Prefix Units

Boolean. When active units are prefixed instead of postfixed.

```jsx
<UnitNumberFormatField prefixUnits />
```

### Accessibility

- Similar to `<TextField />`, as it extends that component

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/NumberFormat/UnitNumberFormatField.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/NumberFormat/UnitNumberFormatFieldStory.stories.tsx)
