import { Voicemail as FeatherVoicemail, Props } from 'react-feather';
import * as React from 'react';

export const Voicemail: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherVoicemail data-icon="voicemail" {...rootProps} />
);
