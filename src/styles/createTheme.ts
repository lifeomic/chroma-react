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
import { Components } from './overrides/ChromaComponents';

export interface Theme extends Omit<MuiTheme, 'palette' | 'components'> {
  palette: Palette;
  typography: Typography;
  boxShadows: BoxShadows;
  pxToRem: (size: number) => string;
  components: Components;
}

export interface ThemeOptions
  extends Omit<
    MuiThemeOptions,
    'overrides' | 'palette' | 'typography' | 'components'
  > {
  palette?: PaletteOptions;
  typography?: TypographyOptions;
  overrides?: OverridesCreator;
  boxShadows?: BoxShadowsOptions;
  pxToRem?: (size: number) => string;
  components?: Components;
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
    ...muiOptions,
  } as any) as any) as Theme;

  return createMuiTheme({
    ...themeWithoutOverrides,
    components: createOverrides(themeWithoutOverrides, overrides),
  } as any) as any;
};

export const useTheme = () => muiUseTheme<Theme>();
