import {
  ColorPartial,
  SimplePaletteColorOptions,
} from '@mui/material/styles/createPalette';
import text from './text';

const shades: ColorPartial = {
  50: '#fefce8',
  100: '#fdfad1',
  200: '#fcf7bb',
  300: '#fcf5a4',
  400: '#fbf38d',
  500: '#faf076',
  600: '#faee60',
  700: '#f9eb49',
  800: '#f7bf4d',
  900: '#916800',
};

const yellow: SimplePaletteColorOptions & ColorPartial = {
  ...shades,
  main: shades[800]!,
  light: shades[600],
  contrastText: text.contrast,
};

export default yellow;
