import { ComponentsProps } from './ChromaProps';
import {
  ChromaOverrides as ChromaComponentsOverrides,
  ChromaComponentNameToClassKey,
} from './ChromaOverrides';
import { Theme } from '../createTheme';
import { Interpolation } from '@mui/material';
import { Components as MuiComponents } from '@mui/material/styles';

export interface Components
  extends ChromaComponents<Theme>,
    MuiComponents<Theme> {}

export type ComponentsVariants = {
  [Name in keyof ChromaComponentNameToClassKey]?: Array<{
    props: Partial<ComponentsProps[Name]>;
    style: Interpolation<{ theme: Theme }>;
  }>;
};

export type ChromaComponents<Theme> = {
  [Name in keyof ChromaComponentNameToClassKey]?: Array<{
    defaultProps?: ComponentsProps[Name];
    styleOverrides?: ChromaComponentsOverrides<Theme>[Name];
    variants?: ComponentsVariants[Name];
  }>;
};
