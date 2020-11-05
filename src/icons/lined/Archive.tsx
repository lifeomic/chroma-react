import { Archive as FeatherArchive, Props } from 'react-feather';
import * as React from 'react';

export const Archive: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherArchive data-icon="archive" {...rootProps} />
);
