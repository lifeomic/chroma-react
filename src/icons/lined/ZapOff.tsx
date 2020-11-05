import { ZapOff as FeatherZapOff, Props } from 'react-feather';
import * as React from 'react';

export const ZapOff: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherZapOff data-icon="zapoff" {...rootProps} />
);
