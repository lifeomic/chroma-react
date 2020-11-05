import { PhoneForwarded as FeatherPhoneForwarded, Props } from 'react-feather';
import * as React from 'react';

export const PhoneForwarded: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherPhoneForwarded data-icon="phoneforwarded" {...rootProps} />
);
