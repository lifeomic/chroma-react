import { FilePlus as FeatherFilePlus, Props } from 'react-feather';
import * as React from 'react';

export const FilePlus: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherFilePlus data-icon="fileplus" {...rootProps} />
);
