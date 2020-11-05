import { Instagram as FeatherInstagram, Props } from 'react-feather';
import * as React from 'react';

export const Instagram: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherInstagram data-icon="instagram" {...rootProps} />
);
