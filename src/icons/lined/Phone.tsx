import { Phone as FeatherPhone, Props } from 'react-feather';
import * as React from 'react';

export const Phone: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherPhone data-icon="phone" {...rootProps} />
);
