import {
  makeStyles as muiMakeStyles,
  Styles,
  WithStylesOptions,
} from '@mui/styles';
import { Theme } from './createTheme';
import { makeStyles as tssMakeStyles } from 'tss-react/mui';

export const makeStyles = <
  Props extends {} = {},
  ClassKey extends string = string
>(
  styles: Styles<Theme, Props, ClassKey>,
  options?: WithStylesOptions<Theme>
) => {
  return muiMakeStyles(styles, options);
};

export const newMakeStyles = <
  Props extends {} = {},
  ClassKey extends string = string
>(
  styles: Styles<Theme, Props, ClassKey>,
  options?: WithStylesOptions<Theme>
) => {
  return tssMakeStyles(options)(styles as any);
};
