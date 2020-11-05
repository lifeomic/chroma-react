import { AtSign as FeatherAtSign, Props } from 'react-feather';
import * as React from 'react';

export const AtSign: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherAtSign data-icon="atsign" {...rootProps} />
);
