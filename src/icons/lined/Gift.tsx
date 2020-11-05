import { Gift as FeatherGift, Props } from 'react-feather';
import * as React from 'react';

export const Gift: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherGift data-icon="gift" {...rootProps} />
);
