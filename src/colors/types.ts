import { Color as MUIColor } from '@mui/material';
import {
  SimplePaletteColorOptions,
  TypeText as MuiTypeText,
} from '@mui/material/styles/createPalette';

export { SimplePaletteColorOptions };

export type Color = Omit<MUIColor, 'A100' | 'A200' | 'A400' | 'A700'>;

export interface TypeText extends MuiTypeText {
  contrast: string;
  dark: string;
}
