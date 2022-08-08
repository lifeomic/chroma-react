# Price Format Field

An input component for entering a number as a monetary value in pennies; it leverages the [Chroma Unit Input](https://lifeomic.github.io/chroma-react/?path=/story/form-components-number-format--unit-input). Currently only implements \$USD, with '\$' prefixed as the unit.

<!-- STORY -->

## Import

```js
import { PriceFormatField } from '@lifeomic/chroma-react/components/NumberFormat';
```

## Usage

```jsx
<PriceFormatField
  label="Monthly Costs"
  value={someValue}
  onChange={(value) => {
    handleChange(value);
  }}
/>
```

### Label

The label to display for the element.

```jsx
<PriceFormatField label="Groceries" />
```

### Value

Required prop; sets value variable from element value.

```jsx
<PriceFormatField value={someValue} />
```

### onChange

Required prop; function that runs when the value changes.

```jsx
<PriceFormatField onChange={() => doSomething())} />
```

### Required Styling

Shows an \* next to the label; required validation must be handled separately.

```jsx
<PriceFormatField showRequiredStyling />
```

### Minimum Value

Sets a min value for the element. Defaults to 0.

```jsx
<PriceFormatField min={10} />
```

### Maximum Value

Sets a max value for the element. Defaults to Number.MAX_SAFE_INTEGER.

```jsx
<PriceFormatField max={100} />
```

### Accessibility

- Similar to `<TextField />`, as it extends that component

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/NumberFormat/PriceFormatField.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/NumberFormat/PriceFormatFieldStory.stories.tsx)
