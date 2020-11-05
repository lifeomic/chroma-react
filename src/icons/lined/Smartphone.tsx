import { Smartphone as FeatherSmartphone, Props } from 'react-feather';
import * as React from 'react';

export const Smartphone: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherSmartphone data-icon="smartphone" {...rootProps} />
);
