# Slider

An slider component for form usage.

<!-- STORY -->

## Import

```js
import { Slider } from '@lifeomic/chroma-react/components/Slider';
```

## Usage

```jsx
<Slider
  formatValue={(value) => `${value} cm`}
  label="Slider"
  onChange={(value) => setValue(value)}
  showValue
  type="point"
  value={value}
/>
```

### Type

Specifies which type of slider to render. The two options are "point" or "range".
If type is point, the value provided should be a number.
If type is range, the value provided should be an array of two numbers.

```jsx
<Slider type="point" value={60} />
```

```jsx
<Slider type="range" value={[0, 80]} />
```

### Label

The label to display for the Slider element.

```jsx
<Slider label="Name" />
```

### Label Placement

Specifies where to place the label/value vertically, either above or below the slider.

```jsx
<Slider label="Name" labelPlacement="top" />
```

```jsx
<Slider label="Name" labelPlacement="bottom" />
```

### Show Value

Boolean as to whether or not to render the raw or formatted value.

```jsx
<Slider showValue={true} />
```

### Value Placement

Specifies where to place the value horizontally. Should only be used if no label is provided.

```jsx
<Slider aria-Label="Age" showValue={true} valuePlacement="left" />
```

```jsx
<Slider aria-Label="Age" showValue={true} valuePlacement="center" />
```

```jsx
<Slider aria-Label="Age" showValue={true} valuePlacement="right" />
```

### Format Value

A function that is called when rendering the value. The function should return the formatted value
you wish to have rendered.

```jsx
<Slider formatValue={(value) => `${value} cm`} showValue={true} />
```

### Help Message

Caption, help text to display underneath the element. This should be
supplemental text to the label, typically an expanded description of the option.

```jsx
<Slider helpMessage="Some helper text!" />
```

### Has Error

Sets an error style on the element.

```jsx
<Slider hasError />
```

### Error Message

Caption, error text to display underneath the element when an error occurs. For
the message to be displayed `hasError` must be set as well.

```jsx
<Slider hasError errorMessage="Some helper text!" />
```

### Disabled

Applies the disabled state to the element.

```jsx
<Slider disabled />
```

### Color

When a slider needs to be rendered, but on a dark-colored background, the `color` prop can be utilized.

```jsx
<Slider color="inverse" />
```

### Accessibility

- The label and slider are "connected" via a uniqueId and the `aria-labelledby`
  attribute.
- The label is hidden so it cannot be focused by
  screenreaders. Instead, the slider element receives the focus, and the label is
  read as part of the input.
- The component uses a uniqueId to link the slider to the help and error messages
  via `aria-describedby`. This allows screenreaders to read the help and error
  messages.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Slider/Slider.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Slider/Slider.stories.tsx)
