import { Activity as FeatherActivity, Props } from 'react-feather';
import * as React from 'react';

export const Activity: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherActivity data-icon="activity" {...rootProps} />
);
