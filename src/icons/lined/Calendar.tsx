import { Calendar as FeatherCalendar, Props } from 'react-feather';
import * as React from 'react';

export const Calendar: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCalendar data-icon="calendar" {...rootProps} />
);
