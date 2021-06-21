import { GitPullRequest as FeatherGitPullRequest, Props } from 'react-feather';
import * as React from 'react';

/**
 * @deprecated It is recommended you use the Chromicons package directly (https://github.com/lifeomic/chromicons)
 * instead of the icons provided by Chroma.
 *
 * This icon will be removed in a future version of Chroma.
 */

export const GitPullRequest: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherGitPullRequest data-icon="gitpullrequest" {...rootProps} />
);
