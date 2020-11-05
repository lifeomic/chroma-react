import { Cloud as FeatherCloud, Props } from 'react-feather';
import * as React from 'react';

export const Cloud: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCloud data-icon="cloud" {...rootProps} />
);
