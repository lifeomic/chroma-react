import { Overrides } from '@material-ui/core/styles/overrides';
import { Theme } from '../createTheme';

export const createMuiTabOverrides = (theme: Theme): Overrides['MuiTab'] => ({
  root: {
    minHeight: theme.pxToRem(48),
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.subtitle1.fontSize,
    textTransform: 'initial',
    transition: 'color 0.5s ease',
    letterSpacing: theme.pxToRem(0.1),
    '&:hover': {
      color: theme.palette.black[500],
    },
    '&:disabled': {
      color: theme.palette.black[400],
    },
    '&:focus': {
      outline: 'none',
    },
    '&$selected': {
      color: theme.palette.black[900],
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: theme.typography.subtitle1.fontSize,
    },
  },
  textColorInherit: {
    color: theme.palette.black[900],
    opacity: 'initial',
  },
  wrapper: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
});
