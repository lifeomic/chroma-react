# Radio

A basic Radio component. The recommended use case is to always use this with
RadioGroup.

<!-- STORY -->

## Import

```js
import { Radio, RadioGroup } from '@lifeomic/chroma-react/components/Radio';
```

## Usage

```jsx
const [valueProp, setValueProp] = React.useState('opt2');

return (
  <RadioGroup
    title="Select an option"
    name="chroma1"
    value="opt2"
    onChange={handleChange}
  >
    <Radio value="opt1" label="Option 1" />
    <Radio value="opt2" label="Option 2" />
    <Radio value="opt3" disabled label="Disabled (not selectable)" />
    <Radio
      value="opt4"
      label="Option 4"
      helpMessage="This is some helper text."
    />
  </RadioGroup>
);
```

### Value

The value of the radio. When a radio is selected, the `onChange` event will
provide this via `e.target.value`.

```jsx
<Radio value="opt1" />
```

### Label

The label to display for this radio element.

```jsx
<Radio label="Option 1" />
```

### Help Message

Caption, help text to display underneath the element. This should be
supplemental text to the label, typically an expanded description of the option.

```jsx
<Radio label="Option 1" helpMessage="Some helper text!" />
```

### Disabled

Applies the disabled state to the element.

```jsx
<Radio label="Option 1" disabled />
```

### Color

If using RadioGroup, provide the `color` to the RadioGroup instead. You do not
need to provide the color prop yourself.

### Children

The Radio component supports children to be rendered; however, this should be
used sparingly and deeply considered to not negatively affect accessibility.

### Accessibility

- The label and input are "connected" via a uniqueId and the `for` + `id`
  attributes.
- The component has `type="radio"` and `role="radio"` attributes.
- The component uses a uniqueId to link the input to the help message via
  `aria-describedby`. This allows screenreaders to read the help message.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Radio/Radio.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Radio/Radio.stories.tsx)
