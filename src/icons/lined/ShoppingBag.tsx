import { ShoppingBag as FeatherShoppingBag, Props } from 'react-feather';
import * as React from 'react';

export const ShoppingBag: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherShoppingBag data-icon="shoppingbag" {...rootProps} />
);
