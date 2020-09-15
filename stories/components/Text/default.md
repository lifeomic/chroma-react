# Text

<!-- STORY -->

## Import

```js
import { Text } from '@lifeomic/chroma-react/components/Text';
```

## Usage

```jsx
<Text size="body">body text</Text>
```

### Size

`Text` takes a `size` prop to adjust the sizing:

```jsx
<Text size="headline">body text</Text>
```

The sizing options are listed above in the story.

### Family

`Text` supports a `family` prop to adjust the font family:

```jsx
<Text family="monospace">monospace text</Text>
```

### Color

`Text` supports a `color` prop for applying colors from the theme:

```jsx
<Text color="inverse">body text</Text>
```

### Set component to `<h1>`

There may be cases where the text needs to be an `h1` tag. The `useH1` prop can
be provided to set this. Be careful not to have too many `h1` tags for
accessibility reasons.

### Weight

`Text` takes a `weight` prop to adjust the font weight:

```jsx
<Text weight="bold">bold text</Text>
```

### Margin Bottom

`Text` takes a `marginBottom` prop to add margin to the bottom by default:

```jsx
<Text marginBottom>Bottom-space text</Text>
```

### Class Name

A class name can be provided.

```jsx
<Text className="mr-4" />
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Text/Text.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Text/Text.stories.tsx)
