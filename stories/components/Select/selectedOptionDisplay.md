# Selected Option Display (advanced)

In most cases, the default select should have you covered; however, if you need
to render something a little more custom when an option is chosen, reach for
this. This prop allows you to render whatever you'd like, by providing back the
currently-selected option to you via a callback.

<!-- STORY -->

## Import

```js
import { Select, SelectOption } from '@lifeomic/chroma-react/components/Select';
```

## Usage

The `selectedOptionDisplay` prop returns you the selected option, allowing you
to render whatever you need. Combine this with the `meta` prop on each Select
Option and you have access to the entire object.

```jsx
<Select
  label="Choose an option…"
  placeholder="Placeholder Text…"
  value={selectValue}
  onChange={(v: string) => setSelectValue(v)}
  selectedOptionDisplay={(option: any) => (
    <>
      {/* You have access to the root level props */}
      <span>
        {option.title} {option.value}
      </span>
      {/* ... but combining with `meta` on each option allows you to reach for full object props */}
      <span>
        <b>{option.meta.name}</b>
      </span>
      <span>{option.meta.description}</span>
    </>
  )}
>
  <SelectOption
    title="Option 1"
    value="option 1"
    meta={{ name: 'Option 1', description: 'description' }}
  />
  <SelectOption
    title="Option 2"
    subtitle="subtitle"
    value="option 2"
    meta={{ name: 'Option 2', description: 'description' }}
  />
  <SelectOption
    title="Option 3"
    value="option 3"
    meta={{ name: 'Option 3', description: 'description' }}
  />
  <SelectOption
    title="Option 4"
    value="option 4"
    meta={{ name: 'Option 4', description: 'description' }}
  />
</Select>
```
