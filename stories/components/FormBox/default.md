# Form Box

The Form Box component is used as a presentational flexbox wrapper, specifically
when used with forms. It provides padding and spacing between form elements.

<!-- STORY -->

## Import

```js
import { FormBox } from '@lifeomic/chroma-react/components/FormBox';
```

## Usage

```jsx
<FormBox>
  <TextField />
  <TextArea />
</FormBox>
```

### Direction

Just like `<Box>`, this component takes a direction as well. When a direction of
row is specified, the elements will be spaced via right-margin instead of
bottom-margin (when direction is "column").

```jsx
<FormBox direction="row" />
```

### Spacing

Spacing options are provided via this component. A default spacing is set, so
only provide this prop if you need to override it. This component spacing is the
space _between_ elements in the box.

```jsx
<FormBox spacing={1}>
  <TextField />
  <TextArea />
</FormBox>
```

### Padding

The padding option applies the inner padding of the box. When the component is
used inside of a modal, it's wise to leave the padding as-is. This value will
apply to both the x-axis and y-axis padding.

```jsx
<FormBox padding={2}>
  <TextField />
  <TextArea />
</FormBox>
```

### Padding X

Padding to apply to the x-axis only.

```jsx
<FormBox paddingX={1}>
  <TextField />
  <TextArea />
</FormBox>
```

### Padding Y

Padding to apply to the y-axis only.

```jsx
<FormBox paddingY={1}>
  <TextField />
  <TextArea />
</FormBox>
```

### Class Name

A class name can be provided.

```jsx
<FormBox className="mr-4" />
```

### Box Props

Under the covers, this component extends the Box component. All props available
on the Box component are available here as well.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/FormBox/FormBox.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/FormBox/FormBox.stories.tsx)
