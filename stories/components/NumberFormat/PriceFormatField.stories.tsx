import { Container } from '../../storyComponents/Container';
import { PriceFormatField } from '../../../src/components/NumberFormat';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import md from './priceFormat.md';

const PriceFormatFieldStory: React.FC = () => {
  const [price, setPrice] = React.useState(5000);
  const [priceMin, setPriceMin] = React.useState(500);
  const [priceMax, setPriceMax] = React.useState(10000);

  return (
    <Container containerStyles={{ flexWrap: 'wrap' }}>
      <PriceFormatField
        label="Price"
        value={price}
        onChange={(value) => setPrice(value)}
      />
      <PriceFormatField
        label="Price (min $5.00)"
        value={priceMin}
        min={500}
        onChange={(value) => setPriceMin(value)}
      />
      <PriceFormatField
        label="Price (max $100.00)"
        value={priceMax}
        max={10000}
        onChange={(value) => setPriceMax(value)}
      />
    </Container>
  );
};

storiesOf('Form Components/Number Format', module).add(
  'Price',
  () => <PriceFormatFieldStory />,
  { readme: { content: md } }
);
