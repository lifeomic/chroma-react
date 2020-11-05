import { Speaker as FeatherSpeaker, Props } from 'react-feather';
import * as React from 'react';

export const Speaker: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherSpeaker data-icon="speaker" {...rootProps} />
);
