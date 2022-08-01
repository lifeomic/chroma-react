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

export interface Theme extends Omit<MuiTheme, 'palette'> {
  palette: Palette;
  typography: Typography;
  boxShadows: BoxShadows;
  pxToRem: (size: number) => string;
}

export interface ThemeOptions
  extends Omit<MuiThemeOptions, 'components' | 'palette' | 'typography'> {
  palette?: PaletteOptions;
  typography?: TypographyOptions;
  components?: OverridesCreator;
  boxShadows?: BoxShadowsOptions;
  pxToRem?: (size: number) => string;
}

export const createTheme = ({
  palette,
  typography,
  components,
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
    ...muiOptions,
  } as any) as any) as Theme;

  return createMuiTheme({
    ...themeWithoutOverrides,
    components: createOverrides(themeWithoutOverrides, components),
  } as any) as any;
};

export const useTheme = () => muiUseTheme<Theme>();
