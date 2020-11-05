import { Slack as FeatherSlack, Props } from 'react-feather';
import * as React from 'react';

export const Slack: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherSlack data-icon="slack" {...rootProps} />
);
