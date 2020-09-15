# Color Palette

Chroma provides a base palette along side of `createTheme` and `createPalette`.

## Usage

To use the base palette directly, without referencing from the theme, you can generate the base palette by calling `createPalette` without any arguments

```tsx
import { createPalette } from '@lifeomic/chroma-react/styles';

const palette = createPalette();
```

Additionally, all of the colors used in the palette are available under `@lifeomic/chroma-react/colors/{color}`

```tsx
import { createPalette } from '@lifeomic/chroma-react/styles';
import black from '@lifeomic/chroma-react/colors/black';

const palette = createPalette({
  primary: black,
});
```

The palette should be available via the "theme". The most common use case
should be for components using the "withStyles" HOC.

```tsx
import { useStyles } from '@lifeomic/chroma-react/styles';

const useStyles = makeStyles((theme) => ({
  backgroundColor: theme.palette.background.default,
}));
```

## Links

- [Utility Source](https://github.com/lifeomic/chroma-react/blob/master/src/styles/createPalette.ts)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/styles/color/color.stories.tsx)

<!-- STORY -->
