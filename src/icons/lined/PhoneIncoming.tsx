import { PhoneIncoming as FeatherPhoneIncoming, Props } from 'react-feather';
import * as React from 'react';

export const PhoneIncoming: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherPhoneIncoming data-icon="phoneincoming" {...rootProps} />
);
