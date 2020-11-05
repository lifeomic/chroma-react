import { XCircle as FeatherXCircle, Props } from 'react-feather';
import * as React from 'react';

export const XCircle: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherXCircle data-icon="xcircle" {...rootProps} />
);
