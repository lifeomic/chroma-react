import { Briefcase as FeatherBriefcase, Props } from 'react-feather';
import * as React from 'react';

export const Briefcase: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherBriefcase data-icon="briefcase" {...rootProps} />
);
