import { GitCommit as FeatherGitCommit, Props } from 'react-feather';
import * as React from 'react';

export const GitCommit: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherGitCommit data-icon="gitcommit" {...rootProps} />
);
