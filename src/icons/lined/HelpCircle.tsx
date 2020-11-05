import { HelpCircle as FeatherHelpCircle, Props } from 'react-feather';
import * as React from 'react';

export const HelpCircle: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherHelpCircle data-icon="helpcircle" {...rootProps} />
);
