import { PhoneOff as FeatherPhoneOff, Props } from 'react-feather';
import * as React from 'react';

export const PhoneOff: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherPhoneOff data-icon="phoneoff" {...rootProps} />
);
