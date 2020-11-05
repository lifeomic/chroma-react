import { Check as FeatherCheck, Props } from 'react-feather';
import * as React from 'react';

export const Check: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCheck data-icon="check" {...rootProps} />
);
