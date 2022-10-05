import deepmerge from 'deepmerge';
import { Theme } from '../createTheme';
import { Components } from './ChromaComponents';
import { createMuiButtonOverrides } from './MuiButton';
import { createMuiTabOverrides } from './MuiTab';
import { createMuiTabsOverrides } from './MuiTabs';
import { createMuiTooltipOverrides } from './MuiTooltip';

export interface OverridesCreator {
  (theme: Theme): Components;
}

export const createOverrides = (
  theme: Theme,
  overridesCreator?: OverridesCreator
) => {
  const baseOverrides: Components = {
    MuiButton: {
      defaultProps: { color: 'secondary' },
      styleOverrides: createMuiButtonOverrides(theme),
    },
    MuiCheckbox: { defaultProps: { color: 'secondary' } },
    MuiFormControl: { defaultProps: { variant: 'standard' } },
    MuiSelect: { defaultProps: { variant: 'standard' } },
    MuiTooltip: { styleOverrides: createMuiTooltipOverrides(theme) },
    MuiTabs: { styleOverrides: createMuiTabsOverrides(theme) },
    MuiTab: { styleOverrides: createMuiTabOverrides(theme) },
    MuiTextField: { defaultProps: { variant: 'standard' } },
  };

  if (!overridesCreator) {
    return baseOverrides;
  }

  return deepmerge(baseOverrides, overridesCreator(theme), { clone: false });
};
