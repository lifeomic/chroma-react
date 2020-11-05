import { PhoneCall as FeatherPhoneCall, Props } from 'react-feather';
import * as React from 'react';

export const PhoneCall: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherPhoneCall data-icon="phonecall" {...rootProps} />
);
