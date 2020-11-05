import { Smile as FeatherSmile, Props } from 'react-feather';
import * as React from 'react';

export const Smile: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherSmile data-icon="smile" {...rootProps} />
);
