import { SkipForward as FeatherSkipForward, Props } from 'react-feather';
import * as React from 'react';

export const SkipForward: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherSkipForward data-icon="skipforward" {...rootProps} />
);
