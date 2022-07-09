import createMuiTheme, {
  Theme as MuiTheme,
  ThemeOptions as MuiThemeOptions,
} from '@material-ui/core/styles/createMuiTheme';
import muiUseTheme from '@material-ui/styles/useTheme';
import { Omit } from '../typeUtils';
import {
  BoxShadows,
  BoxShadowsOptions,
  createBoxShadows,
} from './createBoxShadows';
import { createPalette, Palette, PaletteOptions } from './createPalette';
import {
  createTypography,
  Typography,
  TypographyOptions,
} from './createTypography';
import { createOverrides, OverridesCreator } from './overrides';
import { hexToDec, isHex, sliceHex } from './utils/colorManipulator';
export interface Theme extends Omit<MuiTheme, 'palette'> {
  palette: Palette;
  typography: Typography;
  boxShadows: BoxShadows;
  pxToRem: (size: number) => string;
  hexToRgba: (hex: string, opacity: number) => string;
}
export interface ThemeOptions
  extends Omit<MuiThemeOptions, 'overrides' | 'palette' | 'typography'> {
  palette?: PaletteOptions;
  typography?: TypographyOptions;
  overrides?: OverridesCreator;
  boxShadows?: BoxShadowsOptions;
  pxToRem?: (size: number) => string;
  hexToRgba?: (hex: string, opacity: number) => string;
}

export const createTheme = ({
  palette,
  typography,
  overrides,
  boxShadows,
  pxToRem,
  hexToRgba,
  ...muiOptions
}: ThemeOptions = {}): Theme => {
  const themeWithoutOverrides = (createMuiTheme({
    palette: createPalette(palette),
    typography: createTypography(typography),
    boxShadows: createBoxShadows(boxShadows),
    pxToRem: (size: number) => `${size / 16}rem`,
    hexToRgba: (hex: string, opacity?: number): string => {
      let rgba = '';
      if (isHex(hex)) {
        const hexArr = sliceHex(hex);
        const r = hexToDec(hexArr[0]);
        const g = hexToDec(hexArr[1]);
        const b = hexToDec(hexArr[2]);
        if (opacity) {
          const percent = opacity > 1 ? '%' : '';
          rgba = `rgba(${r},${g},${b},${opacity}${percent})`;
        } else {
          rgba = `rgba(${r},${g},${b},1)`;
        }
      } else {
        throw new Error('Invalid hex code');
      }
      return rgba;
    },
    ...muiOptions,
  } as any) as any) as Theme;

  return createMuiTheme({
    ...themeWithoutOverrides,
    overrides: createOverrides(themeWithoutOverrides, overrides),
  } as any) as any;
};

export const useTheme = () => muiUseTheme<Theme>();
