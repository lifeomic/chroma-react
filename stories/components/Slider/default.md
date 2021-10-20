# Slider

An input component for form usage.

<!-- STORY -->

## Import

```js
import { Slider } from '@lifeomic/chroma-react/components/Slider';
```

## Usage

```jsx
<Slider
  formatValue={(value) => `${value[0]}cm`}
  label="Slider"
  onChange={(value) => setValue(value)}
  showValue
  type="point"
  value={value}
/>
```

### Type

Specifies which type of slider to render. The two options are "point" or "range".
Point should only have one value provided and range should have two values provided.

```jsx
<Slider type="range" value={[0, 80]} />
```

### Label

The label to display for the Slider element.

```jsx
<Slider label="Name" />
```

### Show Value

Boolean as to whether or not to show value.

```jsx
<Slider showValue={true} />
```

### Format Value

A function that is called when rendering the value.

```jsx
<Slider formatValue={(value) => `${value[0]}cm`} showValue={true} />
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
