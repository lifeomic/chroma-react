import { ComponentsOverrides as Overrides } from '@mui/material/styles/overrides';
import { Theme } from '../createTheme';

export const createMuiTabsOverrides = (theme: Theme): Overrides['MuiTabs'] => ({
  root: {
    minHeight: 'initial',
    height: 'initial',
    borderBottom: `1px solid ${theme.palette.divider}`,
    width: '100%',
  },
  indicator: {
    height: theme.pxToRem(3),
    backgroundColor: theme.palette.primary.main,
  },
});
