import { GitHub as FeatherGitHub, Props } from 'react-feather';
import * as React from 'react';

export const GitHub: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherGitHub data-icon="github" {...rootProps} />
);
