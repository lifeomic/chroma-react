import { Moon as FeatherMoon, Props } from 'react-feather';
import * as React from 'react';

export const Moon: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherMoon data-icon="moon" {...rootProps} />
);
