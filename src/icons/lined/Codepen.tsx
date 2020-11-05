import { Codepen as FeatherCodepen, Props } from 'react-feather';
import * as React from 'react';

export const Codepen: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCodepen data-icon="codepen" {...rootProps} />
);
