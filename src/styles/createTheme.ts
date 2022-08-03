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
import { hexToRgba } from './utils/colorManipulator';
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
}

export const createTheme = ({
  palette,
  typography,
  overrides,
  boxShadows,
  pxToRem,
  ...muiOptions
}: ThemeOptions = {}): Theme => {
  const themeWithoutOverrides = (createMuiTheme({
    palette: createPalette(palette),
    typography: createTypography(typography),
    boxShadows: createBoxShadows(boxShadows),
    pxToRem: (size: number) => `${size / 16}rem`,
    hexToRgba,
    ...muiOptions,
  } as any) as any) as Theme;

  return createMuiTheme({
    ...themeWithoutOverrides,
    overrides: createOverrides(themeWithoutOverrides, overrides),
  } as any) as any;
};

export const useTheme = () => muiUseTheme<Theme>();
