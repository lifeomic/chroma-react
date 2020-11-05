import { Info as FeatherInfo, Props } from 'react-feather';
import * as React from 'react';

export const Info: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherInfo data-icon="info" {...rootProps} />
);
