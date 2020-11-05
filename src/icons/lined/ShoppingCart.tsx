import { ShoppingCart as FeatherShoppingCart, Props } from 'react-feather';
import * as React from 'react';

export const ShoppingCart: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherShoppingCart data-icon="shoppingcart" {...rootProps} />
);
