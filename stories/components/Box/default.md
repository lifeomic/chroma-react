# Box

The Box component is used as a presentational wrapper. It provides a div with
basic CSS and
[flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
options as props.

<!-- STORY -->

## Import

```js
import { Box } from '@lifeomic/chroma-react/components/Box';
```

## Usage

The default settings in the demo above are created with the equivalent of this.

```jsx
<Box fullHeight fullWidth padding={2} bgColor="grey.300">
  <Box margin={2} padding={1} bgColor="common.white">
    Item Box 1
  </Box>

  <Box margin={2} padding={1} bgColor="common.white">
    Item Box 2
  </Box>

  <Box margin={2} padding={1} bgColor="common.white">
    Item Box 3
  </Box>
</Box>
```

---

### Direction

A direction can be applied. Valid options are `row` (default) or `column`.

```jsx
<Box direction="column">
  <p>Flexed column</p>
</Box>
```

### Align

An align prop can be applied, which sets `alignItems`. Valid options are
`stretch` (default), `baseline`, `center`, `flex-start`, or `flex-end`.

```jsx
<Box align="center">
  <p>Centered</p>
</Box>
```

---

### Justify

An justify prop can be applied, which sets `justifyContent`. Valid options are
`flex-start` (default), `center`, `space-between`, `space-evenly` or `flex-end`.

```jsx
<Box justify="center">
  <p>Centered</p>
</Box>
```

---

### Margin and Padding

Numbers are multiplied by the default theme spacing. Strings are are used as raw
CSS. As well as `margin` and `padding`, the top, bottom, left, right, x and y
versions of each are supported.

```jsx
<Box margin={2} padding="1px">
  <p>Margin 16px, padding 1px</p>
</Box>

<Box marginTop={4} marginX="auto" paddingY={1}>
  <p>Top margin 32px, centered, with left and right padding at 8px</p>
</Box>
```

---

### Height and Width

Numbers are multiplied by the default theme spacing. Strings are are used as raw
CSS.

```jsx
<Box fullHeight fullWidth>
  <p>100% height and width</p>
</Box>

<Box height={4} width="50%">
  <p>32px high and width at 50% of available space</p>
</Box>
```

---

### Color

Color props take a string dot notation to the theme palette properties, or are
passed as raw CSS.

```jsx
<Box color="text.contrast" bgColor="common.black">
  <p>Light text on a black background</p>
</Box>

<Box color="#fff" bgColor="primary.main">
  <p>White text on a background of the primary theme color variant.</p>
</Box>
```

---

### Border Radius

Sets the `borderRadius` of a box using `theme.shape.borderRadius`.

```jsx
<Box borderRadius>
  <p>Rounded corners</p>
</Box>
```

---

### Class Name

A class name can be provided.

```jsx
<Box className="mr-4" />
```

---

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Box/Box.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Box/Box.stories.tsx)
