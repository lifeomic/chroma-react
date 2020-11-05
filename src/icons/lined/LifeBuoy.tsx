import { LifeBuoy as FeatherLifeBuoy, Props } from 'react-feather';
import * as React from 'react';

export const LifeBuoy: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherLifeBuoy data-icon="lifebuoy" {...rootProps} />
);
