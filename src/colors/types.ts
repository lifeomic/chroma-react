// eslint-disable-next-line no-restricted-imports
import { Color as MUIColor } from '@material-ui/core';
import {
  SimplePaletteColorOptions,
  TypeText as MuiTypeText,
} from '@material-ui/core/styles/createPalette';
import { Omit } from '../typeUtils';

export { SimplePaletteColorOptions };

export type Color = Omit<MUIColor, 'A100' | 'A200' | 'A400' | 'A700'>;

export interface TypeText extends MuiTypeText {
  contrast: string;
  dark: string;
}
