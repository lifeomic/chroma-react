import { Palette as MUIPalette } from '@material-ui/core/styles/createPalette';
import deepmerge from 'deepmerge';
import black from '../colors/black';
import blue from '../colors/blue';
import charcoal from '../colors/charcoal';
import darkGraphite from '../colors/darkGraphite';
import graphite from '../colors/graphite';
import green from '../colors/green';
import grey from '../colors/grey';
import navy from '../colors/navy';
import orange from '../colors/orange';
import purple from '../colors/purple';
import red from '../colors/red';
import text from '../colors/text';
import yellow from '../colors/yellow';
import { DeepPartial } from '../typeUtils';

const baseMuiPalette = {
  primary: blue,
  secondary: green,
  error: red,
  type: 'light',
  common: {
    black: black.main,
    white: '#ffffff',
  },
  grey,
  text,
  divider: grey[400],
  background: {
    paper: grey[50],
    default: '#f5f8fa',
  },
};

const basePalette = {
  black,
  blue,
  charcoal,
  darkGraphite,
  graphite,
  green,
  navy,
  orange,
  purple,
  red,
  yellow,
  ...baseMuiPalette,
};

export type Palette = typeof basePalette & MUIPalette;

export type PaletteOptions = DeepPartial<Palette>;

export const createPalette = (palette: PaletteOptions = {}): Palette => {
  return deepmerge(basePalette, palette, { clone: false }) as any;
};
