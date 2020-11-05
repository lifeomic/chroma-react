import { Settings as FeatherSettings, Props } from 'react-feather';
import * as React from 'react';

export const Settings: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherSettings data-icon="settings" {...rootProps} />
);
