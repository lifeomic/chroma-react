import { GitPullRequest as FeatherGitPullRequest, Props } from 'react-feather';
import * as React from 'react';

export const GitPullRequest: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherGitPullRequest data-icon="gitpullrequest" {...rootProps} />
);
