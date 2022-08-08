# Percent Format Field

An input component for entering a number as a percent; it leverages the [Chroma Unit Input](https://lifeomic.github.io/chroma-react/?path=/story/form-components-number-format--unit-input) with '%' postfixed as the unit.

<!-- STORY -->

## Import

```js
import { PercentFormatField } from '@lifeomic/chroma-react/components/NumberFormat';
```

## Usage

```jsx
<PercentFormatField
  label="Tax"
  value={someValue}
  onChange={(value) => {
    handleChange(value);
  }}
/>
```

### Label

The label to display for the element.

```jsx
<PercentFormatField label="Lose Rate" />
```

### Value

Required prop; sets value variable from element value.

```jsx
<PercentFormatField value={someValue} />
```

### onChange

Required prop; function that runs when the value changes.

```jsx
<PercentFormatField onChange={() => doSomething())} />
```

### Minimum Value

Sets a min value for the element. Defaults to 0.

```jsx
<PercentFormatField min={10} />
```

### Maximum Value

Sets a max value for the element. Defaults to Number.MAX_SAFE_INTEGER.

```jsx
<PercentFormatField max={100} />
```

### Accessibility

- Similar to `<TextField />`, as it extends that component

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/NumberFormat/PercentFormatField.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/NumberFormat/PercentFormatFieldStory.stories.tsx)
