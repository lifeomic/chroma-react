# Paper

The Paper component is used as a general content wrapper.

<!-- STORY -->

## Import

```js
import { Paper } from '@lifeomic/chroma-react/components/Paper';
```

## Usage

```jsx
<Paper>
  <p>Your content here</p>
</Paper>
```

### Padding

The default component has padding applied to it; however, to allow for more
control over the padding on the component, leverage the `padding` prop:

```jsx
<Paper padding={0}>
  <p style={{ padding: 20 }}>Your content here</p>
</Paper>
```

### Class Name

A class name can be provided.

```jsx
<Paper className="mr-4" />
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Paper/Paper.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Paper/Paper.stories.tsx)
