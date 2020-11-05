import { PhoneOutgoing as FeatherPhoneOutgoing, Props } from 'react-feather';
import * as React from 'react';

export const PhoneOutgoing: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherPhoneOutgoing data-icon="phoneoutgoing" {...rootProps} />
);
