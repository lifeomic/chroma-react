import { FileText as FeatherFileText, Props } from 'react-feather';
import * as React from 'react';

export const FileText: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherFileText data-icon="filetext" {...rootProps} />
);
