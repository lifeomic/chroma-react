import * as React from 'react';
import { createPalette } from '../../../src/styles';
import { PaletteItem } from './Palette';
import { PaletteGrid } from './PaletteGrid';

export default {
  title: 'Styles/Color',
  parameters: {
    docs: {
      description: {
        component: `# Color Palette

Chroma provides a base palette along side of \`createTheme\` and \`createPalette\`.

### Usage

To use the base palette directly, without referencing from the theme, you can generate the base palette by calling \`createPalette\` without any arguments

\`\`\`tsx
import { createPalette } from '@lifeomic/chroma-react/styles';

const palette = createPalette();
\`\`\`

Additionally, all of the colors used in the palette are available under \`@lifeomic/chroma-react/colors/{color}\`

\`\`\`tsx
import { createPalette } from '@lifeomic/chroma-react/styles';
import black from '@lifeomic/chroma-react/colors/black';

const palette = createPalette({
  primary: black,
});
\`\`\`

The palette should be available via the "theme". The most common use case
should be for components using the "withStyles" HOC.

\`\`\`tsx
import { useStyles } from '@lifeomic/chroma-react/styles';

const useStyles = newMakeStyles()((theme) => ({
  backgroundColor: theme.palette.background.default,
}));
\`\`\`

### Links

- [Utility Source](https://github.com/lifeomic/chroma-react/blob/master/src/styles/createPalette.ts)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/styles/color/color.stories.tsx)`,
      },
    },
  },
};

const palette = createPalette();

const {
  primary,
  secondary,
  common,
  error,
  background,
  divider,
  text,
  mode,
  ...additionalColors
} = palette;

const mainPalettes: PaletteItem[] = [
  { name: 'Primary', values: primary as any },
  { name: 'Secondary', values: secondary as any },
  { name: 'Error', values: error as any },
];

const utilityPalettes: PaletteItem[] = [
  { name: 'Text', values: text as any },
  { name: 'Common', values: common },
  { name: 'Background', values: background },
];

const secondaryPalettes: PaletteItem[] = Object.keys(additionalColors).map(
  (key) => ({
    name: key,
    values: (additionalColors as any)[key],
  })
);

export const Colors: React.FunctionComponent = () => (
  <div style={{ padding: '1rem' }}>
    <PaletteGrid title="Primary Palettes" palettes={mainPalettes} />
    <PaletteGrid title="Utility Palettes" palettes={utilityPalettes} />
    <PaletteGrid title="Secondary Palettes" palettes={secondaryPalettes} />
  </div>
);
