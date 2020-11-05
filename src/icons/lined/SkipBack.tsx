import { SkipBack as FeatherSkipBack, Props } from 'react-feather';
import * as React from 'react';

export const SkipBack: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherSkipBack data-icon="skipback" {...rootProps} />
);
