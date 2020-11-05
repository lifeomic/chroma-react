import { GitMerge as FeatherGitMerge, Props } from 'react-feather';
import * as React from 'react';

export const GitMerge: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherGitMerge data-icon="gitmerge" {...rootProps} />
);
