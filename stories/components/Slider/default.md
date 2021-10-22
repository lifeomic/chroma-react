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
<Slider type="range" value={[0, 80]} />
```

### Label

The label to display for the Slider element.

```jsx
<Slider label="Name" />
```

### Label Position

Specifies whether to render the label/value above or below the slider.

```jsx
<Slider label="Name" labelPosition="top" />
<Slider label="Name" labelPosition="bottom"/>
```

### Show Value

Boolean as to whether or not to render the value.

```jsx
<Slider showValue={true} />
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

- The label and input are "connected" via a uniqueId and the `for` + `id`
  attributes.
- The label has the `aria-hidden` attribute so it cannot be focused by
  screenreaders. Instead, the input element receives the focus, and the label is
  read as part of the input.
- The component uses a uniqueId to link the input to the help and error messages
  via `aria-describedby`. This allows screenreaders to read the help and error
  messages.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Slider/Slider.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Slider/Slider.stories.tsx)
