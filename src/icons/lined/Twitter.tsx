import { Twitter as FeatherTwitter, Props } from 'react-feather';
import * as React from 'react';

export const Twitter: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherTwitter data-icon="twitter" {...rootProps} />
);
