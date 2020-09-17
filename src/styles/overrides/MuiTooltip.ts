import { Overrides } from '@material-ui/core/styles/overrides';
import { Theme } from '../createTheme';
import { fontSizes } from '../createTypography';

export const createMuiTooltipOverrides = (
  theme: Theme
): Overrides['MuiTooltip'] => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.hint,
    fontSize: fontSizes.tooltip,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    maxWidth: 500,
    letterSpacing: '0.021875em',
    boxShadow: theme.boxShadows.tooltip,
  },
  popper: {
    opacity: 1,
  },
});
