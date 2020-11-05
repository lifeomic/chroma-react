import { RefreshCw as FeatherRefreshCw, Props } from 'react-feather';
import * as React from 'react';

export const RefreshCw: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherRefreshCw data-icon="refreshcw" {...rootProps} />
);
