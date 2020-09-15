# Radio Group Minimal

The Radio Group Minimal and Radio components are styled radio inputs. They are typically
used in combination; however, Radio can work on its own as well. A `title` is required
to pass the `aria-label` prop so that screen readers can give meaning to the radio group.
Unlike Radio Group, Radio Group Minimal does not have a `helpMessage` prop.

<!-- STORY -->

## Import

```js
import {
  Radio,
  RadioGroupMinimal,
} from '@lifeomic/chroma-react/components/Radio';
```

## Usage

```jsx
const [valueProp, setValueProp] = React.useState('opt2');

return (
  <RadioGroupMinimal
    title="Select an option"
    name="chroma1"
    value="opt2"
    onChange={handleChange}
  >
    <Radio value="opt1" label="Option 1" />
    <Radio value="opt2" label="Option 2" />
    <Radio value="opt3" disabled label="Disabled (not selectable)" />
    <Radio value="opt4" label="Option 4" />
  </RadioGroupMinimal>
);
```

### Title (_required_)

The title, or legend, for the group of radio buttons is not displayed but is
applied as an `aria-label` for screen readers.

```jsx
<RadioGroup title="Select an option" />
```

### Name

The name which will be applied to all of the children Radio elements. Context is
used to provide this to all children.

```jsx
<RadioGroupMinimal name="chroma" />
```

If using a form library, this will be the prop name that will be used. In the
example above, you'd see:

```json
{
  "name": "opt2"
}
```

### Value

This is the _default_ value of the radio group. In the example below, a Radio
with the value of "opt2" will be checked by default.

```jsx
<RadioGroupMinimal value="opt2" />
```

**NOTE**: You do not need to dynamically change the value. This is **just** the
default value, so do not do `value={myValue}` or you will get errors from React
about controlled versus uncontrolled. To get the selected value, use the
`onChange` prop.

### On Change

The change event triggered when a radio button option is clicked.

```jsx
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValueProp(e.target.value);
};

return <RadioGroupMinimal onChange={handleChange} />;
```

Use this event to determine which value is selected. The `e.target.value`
argument will provide the "value" of the Radio selected.

### Background

The background can be turned off.

```jsx
<RadioGroupMinimal background="false" />
```

### Color

A color can be provided.

```jsx
<RadioGroupMinimal color="inverse" />
```

### Direction

A direction can be applied. Valid options are `row` (default) or `column`.

```jsx
<RadioGroupMinimal direction="column" />
```

### Class Name

A class name can be provided.

```jsx
<RadioGroupMinimal className="mr-4" />
```

### Accessibility

- The component renders as a fieldset.
- The component has the `role="radiogroup"` attribute.
- An `aria-label` is set with the `title`.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Radio/RadioGroupMinimal.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Radio/Radio.stories.tsx)
