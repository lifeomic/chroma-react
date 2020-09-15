import muiWithTheme, {
  WithTheme as MuiWithTheme,
} from '@material-ui/styles/withTheme';
import { ConsistentWith } from '@material-ui/types';
import { Theme } from './createTheme';

export type WithTheme = MuiWithTheme<Theme>;

export const withTheme = <
  C extends React.ComponentType<
    ConsistentWith<React.ComponentProps<C>, WithTheme>
  >
>(
  component: C
) => muiWithTheme<Theme, C>(component);
