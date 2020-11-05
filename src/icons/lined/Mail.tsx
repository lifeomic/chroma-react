import { Mail as FeatherMail, Props } from 'react-feather';
import * as React from 'react';

export const Mail: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherMail data-icon="mail" {...rootProps} />
);
