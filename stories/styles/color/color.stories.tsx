import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { createPalette } from '../../../src/styles';
import md from './default.md';
import { PaletteItem } from './Palette';
import { PaletteGrid } from './PaletteGrid';

const palette = createPalette();

const {
  primary,
  secondary,
  common,
  error,
  background,
  divider,
  text,
  type,
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

const PaletteStory: React.FunctionComponent = () => (
  <div style={{ padding: '1rem' }}>
    <PaletteGrid title="Primary Palettes" palettes={mainPalettes} />
    <PaletteGrid title="Utility Palettes" palettes={utilityPalettes} />
    <PaletteGrid title="Secondary Palettes" palettes={secondaryPalettes} />
  </div>
);

storiesOf('Styles/Color', module).add('Colors', () => <PaletteStory />, {
  readme: { content: md },
});
