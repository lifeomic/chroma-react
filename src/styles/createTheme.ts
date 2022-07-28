import {
  createTheme as createMuiTheme,
  Theme as MuiTheme,
  ThemeOptions as MuiThemeOptions,
} from '@mui/material/styles';
import muiUseTheme from '@mui/styles/useTheme';
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

interface Spacing {
  (): number;
  (value: number): number;
  (topBottom: number, rightLeft: number): number;
  (top: number, rightLeft: number, bottom: number): number;
  (top: number, right: number, bottom: number, left: number): number;
}

export interface Theme extends Omit<MuiTheme, 'palette' | 'spacing'> {
  palette: Palette;
  typography: Typography;
  boxShadows: BoxShadows;
  pxToRem: (size: number) => string;
  spacing: Spacing;
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
    hexToRgba: hexToRgba,
    spacing: (spacing: number) => spacing * 8,
    ...muiOptions,
  } as any) as any) as Theme;

  return createMuiTheme({
    ...themeWithoutOverrides,
    overrides: createOverrides(themeWithoutOverrides, overrides),
  } as any) as any;
};

export const useTheme = () => muiUseTheme<Theme>();
