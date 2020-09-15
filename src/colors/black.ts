import gray from './grey';
import { Color, SimplePaletteColorOptions } from './types';

const shades: Color = {
  50: '#eeeeee',
  100: '#d1d5d8',
  200: '#b2b9c0',
  300: '#929da9',
  400: '#7b8996',
  500: '#637585',
  600: '#576674',
  700: '#47535e',
  800: '#384049',
  900: '#262c32',
};

const black: Color & SimplePaletteColorOptions = {
  ...shades,
  main: shades[900],
  light: shades[700],
  contrastText: gray[200],
};

export default black;
