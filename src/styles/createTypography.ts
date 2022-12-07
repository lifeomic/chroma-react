import {
  Typography as MUITypography,
  TypographyOptions as MUITypographyOptions,
} from '@mui/material/styles/createTypography';
import { CSSProperties } from 'react';
import deepmerge from 'deepmerge';

export interface FontFamily {
  primary: CSSProperties['fontFamily'];
  secondary: CSSProperties['fontFamily'];
  monospace: CSSProperties['fontFamily'];
}

export interface FontWeight {
  lighter: CSSProperties['fontWeight'];
  light: CSSProperties['fontWeight'];
  regular: CSSProperties['fontWeight'];
  bold: CSSProperties['fontWeight'];
  bolder: CSSProperties['fontWeight'];
}

export interface FontSize {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  body: string;
  button: string;
  subtitle: string;
  caption: string;
  tooltip: string;
  code: string;
}

export const fontFamilies: FontFamily = {
  primary: '"Lato", Helvetica, Roboto, Arial, "Lucida Grande", sans-serif',
  secondary:
    '"Work Sans", Helvetica, Roboto, Arial, "Lucida Grande", sans-serif',
  monospace:
    '"Ubuntu Mono", Consolas, "Lucida Console", Monaco, Courier, monospace',
};

export const fontWeights: FontWeight = {
  lighter: 100,
  light: 300,
  regular: 400,
  bold: 700,
  bolder: 900,
};

export const fontSizes: FontSize = {
  h1: '3rem',
  h2: '2.25rem',
  h3: '1.875rem',
  h4: '1.5rem',
  h5: '1.25rem',
  h6: '1.125rem',
  body: '1rem',
  button: '0.75rem',
  subtitle: '0.875rem',
  caption: '0.75rem',
  tooltip: '0.6875rem',
  code: '1rem',
};

interface CustomTypographyProperties {
  fontFamilySecondary: CSSProperties['fontFamily'];
  fontFamilyMonospace: CSSProperties['fontFamily'];
  fontWeightBold: CSSProperties['fontWeight'];
  fontWeightBolder: CSSProperties['fontWeight'];
  fontWeightLighter: CSSProperties['fontWeight'];
}

export interface Typography extends MUITypography, CustomTypographyProperties {}

export interface TypographyOptions
  extends Partial<CustomTypographyProperties>,
    MUITypographyOptions {}

const baseTypography: TypographyOptions = {
  fontFamily: fontFamilies.primary, // Not using fontFamilyPrimary here because we need to override MUI fontFamily
  fontFamilySecondary: fontFamilies.secondary,
  fontFamilyMonospace: fontFamilies.monospace,
  fontWeightLighter: fontWeights.lighter,
  fontWeightLight: fontWeights.light,
  fontWeightRegular: fontWeights.regular,
  fontWeightMedium: fontWeights.regular,
  fontWeightBold: fontWeights.bold,
  fontWeightBolder: fontWeights.bolder,
  h1: {
    fontSize: fontSizes.h1,
  },
  h2: {
    fontSize: fontSizes.h2,
  },
  h3: {
    fontSize: fontSizes.h3,
  },
  h4: {
    fontSize: fontSizes.h4,
  },
  h5: {
    fontSize: fontSizes.h5,
  },
  h6: {
    fontSize: fontSizes.h6,
  },
  body1: {
    fontSize: fontSizes.body,
  },
  body2: {
    fontSize: fontSizes.subtitle,
  },
  subtitle1: {
    fontSize: fontSizes.subtitle,
  },
  subtitle2: {
    fontSize: fontSizes.subtitle,
  },
  button: {
    textTransform: 'initial',
    fontSize: fontSizes.button,
    fontWeight: fontWeights.bold,
    letterSpacing: 0.5,
    lineHeight: 1.4, // Improve readability for multiline button.
  },
  caption: {
    fontSize: fontSizes.caption,
  },
};

export const createTypography = (
  typography: TypographyOptions = {}
): TypographyOptions => {
  return deepmerge(baseTypography, typography, { clone: false });
};
