# Select Option

An option to be used inside of an open select menu.

<!-- STORY -->

## Import

```js
import { Select, SelectOption } from '@lifeomic/chroma-react/components/Select';
```

## Usage

```jsx
<Select
  label="Choose an option…"
  placeholder="Placeholder Text…"
  value={selectValue}
  onChange={(v: string) => setSelectValue(v)}
>
  <SelectOption title="Option 1" value="option 1" />
  <SelectOption title="Option 2" subtitle="subtitle" value="option 2" />
  <SelectOption title="Option 3" value="option 3" />
  <SelectOption title="Option 4" value="option 4" />
</Select>
```

### Title

The main label text to display for the option.

```jsx
<SelectOption title="Name" />
```

### Sub Title

The secondary label text to display for the option.

```jsx
<SelectOption title="Name" subtitle="Email" />
```

### Value (required)

The content of this attribute represents the value to be submitted with the
form, should this option be selected.

```jsx
<SelectOption value="option 1" />
```

### Class Name

A class name can be provided.

```jsx
<SelectOption className="mr-4" />
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Select/SelectOption.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Select/Select.stories.tsx)
