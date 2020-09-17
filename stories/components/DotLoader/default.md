# Dot Loader

A Dot Loader provides a visual cue that an action is processing or page is
loading.

## Import

```js
import { DotLoader } from '@lifeomic/chroma-react/components/DotLoader';
```

<!-- STORY -->

## Usage

```jsx
<DotLoader />
```

### Size

```jsx
<DotLoader size={0} />
<DotLoader size={1} />
```

### DotStyle

```jsx
const useStyles = makeStyles((theme) => ({
  dotStyle: {
    fill: theme.palette.green.main,
  },
}));

const styles = useStyles();
<DotLoader dotStyle={styles.dotStyle} />;
```

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/DotLoader/DotLoader.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/DotLoader/DotLoader.stories.tsx)
