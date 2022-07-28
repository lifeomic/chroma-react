// eslint-disable-next-line no-restricted-imports
import {
  makeStyles as muiMakeStyles,
  Styles,
  WithStylesOptions,
} from '@mui/styles';
import { Theme } from './createTheme';

export const makeStyles = <
  Props extends {} = {},
  ClassKey extends string = string
>(
  styles: Styles<Theme, Props, ClassKey>,
  options?: WithStylesOptions<Theme>
) => {
  return muiMakeStyles(styles, options);
};
