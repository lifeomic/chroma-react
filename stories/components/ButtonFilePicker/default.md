# Button File Picker

An element that appears as a Button component, but is used for file selection.

## Import

```js
import { ButtonFilePicker } from '@lifeomic/chroma-react/components/ButtonFilePicker';
```

<!-- STORY -->

## Usage

### Accept

A CSV list of the type of file extension(s) the file picker should accept.

```jsx
<ButtonFilePicker accept=".jpg,.jpeg">Upload a File</ButtonFilePicker>
```

### Allow Multiple Selection

In the case that the user needs to select multiple files, provide the following
prop:

```jsx
<ButtonFilePicker allowMultipleSelection>Upload a File</ButtonFilePicker>
```

### On Change

To receive the files selected, utilize the on change prop:

```jsx
<ButtonFilePicker onChange={(e) => console.log(e.target.files)}>
  Upload a File
</ButtonFilePicker>
```

### A Direct Button Extension

This component is a direct extension of the Button component. The following
props are also available to Button File Picker:

- variant
- children
- icon
- color
- disabled
- className
- fullWidth

## Accessibility

- The label and input utilize the `for` and `id`.
- The input can receive focus via the `Tab` key.
  - Pressing `Space` or `Enter` triggers the click action.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/ButtonFilePicker/ButtonFilePicker.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/ButtonFilePicker/ButtonFilePicker.stories.tsx)
