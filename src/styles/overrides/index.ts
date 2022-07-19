import { ComponentsOverrides as MuiOverrides } from '@mui/material/styles';
import deepmerge from 'deepmerge';
import { Theme } from '../createTheme';
import { ChromaOverrides } from './ChromaOverrides';
import { createMuiButtonOverrides } from './MuiButton';
import { createMuiTabOverrides } from './MuiTab';
import { createMuiTabsOverrides } from './MuiTabs';
import { createMuiTooltipOverrides } from './MuiTooltip';

export interface Overrides extends MuiOverrides, ChromaOverrides {}

export interface OverridesCreator {
  (theme: Theme): Overrides;
}

export const createOverrides = (
  theme: Theme,
  overridesCreator?: OverridesCreator
) => {
  const baseOverrides: Overrides = {
    MuiButton: createMuiButtonOverrides(theme),
    MuiTooltip: createMuiTooltipOverrides(theme),
    MuiTabs: createMuiTabsOverrides(theme),
    MuiTab: createMuiTabOverrides(theme),
  };

  if (!overridesCreator) {
    return baseOverrides;
  }

  return deepmerge(baseOverrides, overridesCreator(theme), { clone: false });
};
