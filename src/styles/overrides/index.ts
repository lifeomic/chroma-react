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
    MuiButton: { styleOverrides: createMuiButtonOverrides(theme) },
    MuiTooltip: { styleOverrides: createMuiTooltipOverrides(theme) },
    MuiTabs: { styleOverrides: createMuiTabsOverrides(theme) },
    MuiTab: { styleOverrides: createMuiTabOverrides(theme) },
  };

  if (!overridesCreator) {
    return baseOverrides;
  }

  return deepmerge(baseOverrides, overridesCreator(theme), { clone: false });
};
