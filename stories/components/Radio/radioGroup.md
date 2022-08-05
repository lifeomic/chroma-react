# Radio Group

The Radio Group and Radio components are styled radio inputs. They are typically
used in combination; however, Radio can work on its own as well.

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

### Title

The title, or legend, for the group of radio buttons.

```jsx
<RadioGroup title="My radios" />
```

### Name

The name which will be applied to all of the children Radio elements. Context is
used to provide this to all children.

```jsx
<RadioGroup name="chroma" />
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
<RadioGroup value="opt2" />
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

return <RadioGroup onChange={handleChange} />;
```

Use this event to determine which value is selected. The `e.target.value`
argument will provide the "value" of the Radio selected.

### Required Styling

Shows an \* next to the group label; required validation must be handled separately.

```jsx
<RadioGroup showRequiredStyling />
```

### Color

A color can be provided.

```jsx
<RadioGroup color="inverse" />
```

### Direction

A direction can be applied. Valid options are `row` or `column` (default).

```jsx
<RadioGroup direction="row" />
```

### Align

An align prop can be applied, which sets `alignItems`. Valid options are
`center` or `flex-start` (default).

```jsx
<RadioGroup align="center" />
```

### Justify

A justify prop can be applied, which sets `justifyContent`. Valid options are
`flex-start` (default), `center`, `space-between` or `space-evenly`.

```jsx
<RadioGroup justify="center" />
```

### Class Name

A class name can be provided.

```jsx
<RadioGroup className="mr-4" />
```

### Accessibility

- The component renders as a fieldset.
- The component has the `role="radiogroup"` attribute.
- The title for the component renders as a legend.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Radio/RadioGroup.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Radio/Radio.stories.tsx)
