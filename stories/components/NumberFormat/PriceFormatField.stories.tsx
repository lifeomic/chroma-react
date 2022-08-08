import { Container } from '../../storyComponents/Container';
import { FormBox } from '../../../src/components/FormBox';
import { PriceFormatField } from '../../../src/components/NumberFormat';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import md from './priceFormat.md';

const PriceFormatFieldStory: React.FC = () => {
  const [price, setPrice] = React.useState(5000);
  const [priceMin, setPriceMin] = React.useState(500);
  const [priceMax, setPriceMax] = React.useState(10000);

  return (
    <Container
      containerStyles={{ display: 'flex', flexFlow: 'wrap', padding: 0 }}
    >
      <Container
        containerStyles={{
          background: '#fff',
          flex: 1,
          flexFlow: 'column',
          padding: 0,
        }}
      >
        <FormBox padding={2}>
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
          <PriceFormatField
            label="Price (required)"
            value={priceMax}
            max={10000}
            showRequiredLabel
            hasError
            errorMessage="This is required"
            onChange={(value) => setPriceMax(value)}
          />
        </FormBox>
      </Container>
      <Container
        containerStyles={{
          background: '#f5f8fa',
          flex: 1,
          flexFlow: 'column',
          padding: 0,
        }}
      >
        <FormBox padding={2}>
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
          <PriceFormatField
            label="Price (required)"
            value={priceMax}
            max={10000}
            showRequiredLabel
            hasError
            errorMessage="This is required"
            onChange={(value) => setPriceMax(value)}
          />
        </FormBox>
      </Container>
      <Container
        containerStyles={{
          background: '#006eb7',
          flex: 1,
          flexFlow: 'column',
          padding: 0,
        }}
      >
        <FormBox padding={2}>
          <PriceFormatField
            label="Price"
            value={price}
            color="inverse"
            onChange={(value) => setPrice(value)}
          />
          <PriceFormatField
            label="Price (min $5.00)"
            value={priceMin}
            min={500}
            color="inverse"
            onChange={(value) => setPriceMin(value)}
          />
          <PriceFormatField
            label="Price (max $100.00)"
            value={priceMax}
            max={10000}
            color="inverse"
            onChange={(value) => setPriceMax(value)}
          />
          <PriceFormatField
            label="Price (required)"
            value={priceMax}
            max={10000}
            showRequiredLabel
            hasError
            errorMessage="This is required"
            color="inverse"
            onChange={(value) => setPriceMax(value)}
          />
        </FormBox>
      </Container>
      <Container
        containerStyles={{
          background: '#484049',
          flex: 1,
          flexFlow: 'column',
          padding: 0,
        }}
      >
        <FormBox padding={2}>
          <PriceFormatField
            label="Price"
            value={price}
            color="inverse"
            onChange={(value) => setPrice(value)}
          />
          <PriceFormatField
            label="Price (min $5.00)"
            value={priceMin}
            min={500}
            color="inverse"
            onChange={(value) => setPriceMin(value)}
          />
          <PriceFormatField
            label="Price (max $100.00)"
            value={priceMax}
            max={10000}
            color="inverse"
            onChange={(value) => setPriceMax(value)}
          />
          <PriceFormatField
            label="Price (required)"
            value={priceMax}
            max={10000}
            showRequiredLabel
            hasError
            errorMessage="This is required"
            color="inverse"
            onChange={(value) => setPriceMax(value)}
          />
        </FormBox>
      </Container>
    </Container>
  );
};

storiesOf('Form Components/Number Format Field', module).add(
  'Price',
  () => <PriceFormatFieldStory />,
  { readme: { content: md } }
);
