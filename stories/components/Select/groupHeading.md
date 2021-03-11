# Group Heading

A heading to be used to represent a group of related options

<!-- STORY -->

## Import

```js
import {
  GroupHeading,
  Select,
  SelectOption,
} from '@lifeomic/chroma-react/components/Select';
```

## Usage

```jsx
<Select
  label="Choose an option…"
  placeholder="Placeholder Text…"
  value={selectValue}
  onChange={(v: string) => setSelectValue(v)}
>
  <GroupHeading>Group 1</GroupHeading>
  <SelectOption title="Option 1" value="option 1" />
  <SelectOption title="Option 2" subtitle="subtitle" value="option 2" />
  <GroupHeading>Group 2</GroupHeading>
  <SelectOption title="Option 3" value="option 3" />
  <SelectOption title="Option 4" value="option 4" />
</Select>
```

### Class Name

A class name can be provided.

```jsx
<GroupHeading className="mr-4">Group 1</GroupHeading>
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Select/GroupHeading.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Select/Select.stories.tsx)
