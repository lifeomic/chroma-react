import { Facebook as FeatherFacebook, Props } from 'react-feather';
import * as React from 'react';

export const Facebook: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherFacebook data-icon="facebook" {...rootProps} />
);
