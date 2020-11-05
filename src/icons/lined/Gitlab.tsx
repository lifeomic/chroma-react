import { Gitlab as FeatherGitlab, Props } from 'react-feather';
import * as React from 'react';

export const Gitlab: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherGitlab data-icon="gitlab" {...rootProps} />
);
