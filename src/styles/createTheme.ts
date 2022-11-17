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
import { ZIndex, ZIndexOptions, createZIndex } from './createZIndex';
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
  zIndex: ZIndex;
  pxToRem: (size: number) => string;
  hexToRgba: (hex: string, opacity: number) => string;
}
export interface ThemeOptions
  extends Omit<
    MuiThemeOptions,
    'components' | 'palette' | 'typography' | 'breakpoints'
  > {
  breakpoints?: MuiTheme['breakpoints']['values'];
  palette?: PaletteOptions;
  typography?: TypographyOptions;
  components?: OverridesCreator;
  boxShadows?: BoxShadowsOptions;
  zIndex?: ZIndexOptions;
  pxToRem?: (size: number) => string;
}

export const createTheme = ({
  breakpoints,
  palette,
  typography,
  components,
  boxShadows,
  zIndex,
  pxToRem,
  ...muiOptions
}: ThemeOptions = {}): Theme => {
  const themeWithoutOverrides = (createMuiTheme({
    breakpoints: {
      values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, ...breakpoints },
    },
    palette: createPalette(palette),
    typography: createTypography(typography),
    boxShadows: createBoxShadows(boxShadows),
    zIndex: createZIndex(zIndex),
    pxToRem: (size: number) => `${size / 16}rem`,
    hexToRgba,
    ...muiOptions,
  } as any) as any) as Theme;

  return createMuiTheme({
    ...themeWithoutOverrides,
    components: createOverrides(themeWithoutOverrides, components),
  } as any) as any;
};

export const useTheme = () => muiUseTheme<Theme>();
