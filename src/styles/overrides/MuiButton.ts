import { ComponentsOverrides as Overrides } from '@mui/material/styles/overrides';
import { Theme } from '../createTheme';

export const createMuiButtonOverrides = (
  theme: Theme
): Overrides['MuiButton'] => {
  const basePadding = theme.spacing(1.375, 1.75);

  return {
    root: {
      ...theme.typography.button,
      textTransform: 'initial',
      boxSizing: 'border-box',
      minWidth: theme.spacing(11),
      minHeight: theme.pxToRem(30),
      padding: basePadding,
      transition: theme.transitions.create(
        ['background-color', 'color', 'box-shadow', 'border'],
        {
          duration: theme.transitions.duration.short,
        }
      ),
      '&:focus': {
        outline: 0,
      },
    },
    textPrimary: {
      // text, contained, and outlined buttons should all be the same size
      padding: basePadding,
      color: theme.palette.primary.main,
      '&:hover, &:focus': {
        backgroundColor: 'inherit',
        color: theme.palette.primary[800],
      },
      '&:disabled': {
        color: theme.palette.primary.main,
        opacity: 0.44,
      },
    },
    outlinedPrimary: {
      border: `1px solid ${theme.palette.primary.main}`,
      '&:hover, &:focus': {
        backgroundColor: 'transparent',
        color: theme.palette.primary[800],
        border: `1px solid ${theme.palette.primary[800]}`,
      },
      '&:disabled': {
        color: theme.palette.primary.main,
        opacity: 0.44,
        border: `1px solid ${theme.palette.primary.main}`,
      },
    },
    containedPrimary: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
      boxShadow: 'none',
      '&$focusVisible': {
        boxShadow: theme.shadows[6],
      },
      '&:disabled': {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
        opacity: 0.44,
      },
      '&:active': {
        // Remove boxshadow "pop" when clicking
        boxShadow: 'none',
      },
      '&:hover, &:focus': {
        backgroundColor: theme.palette.primary[800],
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.grey[300],
        },
      },
    },
    sizeSmall: {
      ...theme.typography.button,
      padding: theme.spacing(1, 1.375),
      minWidth: theme.spacing(8),
      minHeight: theme.pxToRem(32),
    },
  };
};
