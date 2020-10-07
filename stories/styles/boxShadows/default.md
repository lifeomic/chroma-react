# Box Shadows

Chroma provides a collection of base boxShadows along side of `createTheme` and `createBoxShadows`.

<!-- STORY -->

## Usage

To use the base box shadows directly, without referencing from the theme, you can generate the base box shadows by calling `createBoxShadows` without any arguments

```tsx
import { createBoxShadows } from '@lifeomic/chroma-react/styles';

const boxShadows = createBoxShadows();
```

The shadows should be available via the "theme". The most common use case should be for components using the "withStyles" HOC.

```tsx
import { useStyles } from '@lifeomic/chroma-react/styles';

const useStyles = makeStyles((theme) => ({
  boxShadow: theme.boxShadows.table,
}));
```

## Links

- [Utility Source](https://github.com/lifeomic/chroma-react/blob/master/src/styles/createBoxShadows.ts)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/styles/boxShadows/boxShadows.stories.tsx)
