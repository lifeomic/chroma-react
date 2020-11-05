import { ExternalLink as FeatherExternalLink, Props } from 'react-feather';
import * as React from 'react';

export const ExternalLink: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherExternalLink data-icon="externallink" {...rootProps} />
);
