import { Link2 as FeatherLink2, Props } from 'react-feather';
import * as React from 'react';

export const Link2: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherLink2 data-icon="link2" {...rootProps} />
);
