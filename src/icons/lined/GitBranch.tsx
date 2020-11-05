import { GitBranch as FeatherGitBranch, Props } from 'react-feather';
import * as React from 'react';

export const GitBranch: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherGitBranch data-icon="gitbranch" {...rootProps} />
);
