import {
  makeStyles as muiMakeStyles,
  Styles,
  WithStylesOptions,
} from '@mui/styles';
import { createMakeStyles } from 'tss-react';
import { Theme, useTheme } from './createTheme';

export const makeStyles = <
  Props extends {} = {},
  ClassKey extends string = string
>(
  styles: Styles<Theme, Props, ClassKey>,
  options?: WithStylesOptions<Theme>
) => {
  return muiMakeStyles(styles, options);
};

export const { makeStyles: newMakeStyles } = createMakeStyles({
  useTheme: useTheme as () => Theme,
});
