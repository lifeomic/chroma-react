import { CreditCard as FeatherCreditCard, Props } from 'react-feather';
import * as React from 'react';

export const CreditCard: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCreditCard data-icon="creditcard" {...rootProps} />
);
