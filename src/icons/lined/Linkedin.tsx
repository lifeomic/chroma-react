import { Linkedin as FeatherLinkedin, Props } from 'react-feather';
import * as React from 'react';

export const Linkedin: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherLinkedin data-icon="linkedin" {...rootProps} />
);
