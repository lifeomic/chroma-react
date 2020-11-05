import { PhoneMissed as FeatherPhoneMissed, Props } from 'react-feather';
import * as React from 'react';

export const PhoneMissed: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherPhoneMissed data-icon="phonemissed" {...rootProps} />
);
