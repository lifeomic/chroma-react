import { Container } from '../../storyComponents/Container';
import { FormBox } from '../../../src/components/FormBox';
import { UnitNumberFormatField } from '../../../src/components/NumberFormat';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import md from './unitNumberFormat.md';

const UnitNumberFormatFieldStory: React.FC = () => {
  const [value, setValue] = React.useState(56);
  const [min, setMin] = React.useState(20);
  const [max, setMax] = React.useState(99);

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
          <UnitNumberFormatField
            label="Some Unit"
            value={value}
            units="unit"
            onChange={(value) => setValue(value)}
          />
          <UnitNumberFormatField
            label="Shortform Unit"
            value={value}
            units="in"
            onChange={(value) => setValue(value)}
          />
          <UnitNumberFormatField
            label="Longform Unit"
            value={value}
            units="inches"
            onChange={(value) => setValue(value)}
          />
          <UnitNumberFormatField
            label="Prefix Unit"
            value={value}
            units="(in) "
            prefixUnits
            onChange={(value) => setValue(value)}
          />
          <UnitNumberFormatField
            label="2 Decimal Places"
            value={value}
            units="mg"
            decimalScale={2}
            onChange={(value) => setValue(value)}
          />
          <UnitNumberFormatField
            label="Weight (min 10)"
            value={min}
            units="kg"
            min={10}
            onChange={(value) => setMin(value)}
          />
          <UnitNumberFormatField
            label="Weight (max 100)"
            value={max}
            units="kg"
            max={100}
            onChange={(value) => setMax(value)}
          />
          <UnitNumberFormatField
            label="Unit (required)"
            value={max}
            units="kg"
            max={100}
            showRequiredLabel
            hasError
            errorMessage="This is required"
            onChange={(value) => setMax(value)}
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
          <UnitNumberFormatField
            label="Some Unit"
            value={value}
            units="unit"
            onChange={(value) => setValue(value)}
          />
          <UnitNumberFormatField
            label="Shortform Unit"
            value={value}
            units="in"
            onChange={(value) => setValue(value)}
          />
          <UnitNumberFormatField
            label="Longform Unit"
            value={value}
            units="inches"
            onChange={(value) => setValue(value)}
          />
          <UnitNumberFormatField
            label="Prefix Unit"
            value={value}
            units="(in) "
            prefixUnits
            onChange={(value) => setValue(value)}
          />
          <UnitNumberFormatField
            label="2 Decimal Places"
            value={value}
            units="mg"
            decimalScale={2}
            onChange={(value) => setValue(value)}
          />
          <UnitNumberFormatField
            label="Weight (min 10)"
            value={min}
            units="kg"
            min={10}
            onChange={(value) => setMin(value)}
          />
          <UnitNumberFormatField
            label="Weight (max 100)"
            value={max}
            units="kg"
            max={100}
            onChange={(value) => setMax(value)}
          />
          <UnitNumberFormatField
            label="Unit (required)"
            value={max}
            units="kg"
            max={100}
            showRequiredLabel
            hasError
            errorMessage="This is required"
            onChange={(value) => setMax(value)}
          />
        </FormBox>
      </Container>
      <Container
        containerStyles={{
          background: '#0063b7',
          flex: 1,
          flexFlow: 'column',
          padding: 0,
        }}
      >
        <FormBox padding={2}>
          <UnitNumberFormatField
            label="Some Unit"
            value={value}
            units="unit"
            color="inverse"
            onChange={(value) => setValue(value)}
          />
          <UnitNumberFormatField
            label="Shortform Unit"
            value={value}
            units="in"
            color="inverse"
            onChange={(value) => setValue(value)}
          />
          <UnitNumberFormatField
            label="Longform Unit"
            value={value}
            units="inches"
            color="inverse"
            onChange={(value) => setValue(value)}
          />
          <UnitNumberFormatField
            label="Prefix Unit"
            value={value}
            units="(in) "
            prefixUnits
            color="inverse"
            onChange={(value) => setValue(value)}
          />
          <UnitNumberFormatField
            label="2 Decimal Places"
            value={value}
            units="mg"
            decimalScale={2}
            color="inverse"
            onChange={(value) => setValue(value)}
          />
          <UnitNumberFormatField
            label="Weight (min 10)"
            value={min}
            units="kg"
            min={10}
            color="inverse"
            onChange={(value) => setMin(value)}
          />
          <UnitNumberFormatField
            label="Weight (max 100)"
            value={max}
            units="kg"
            max={100}
            color="inverse"
            onChange={(value) => setMax(value)}
          />
          <UnitNumberFormatField
            label="Unit (required)"
            value={max}
            units="kg"
            max={100}
            showRequiredLabel
            hasError
            errorMessage="This is required"
            color="inverse"
            onChange={(value) => setMax(value)}
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
          <UnitNumberFormatField
            label="Some Unit"
            value={value}
            units="unit"
            color="inverse"
            onChange={(value) => setValue(value)}
          />
          <UnitNumberFormatField
            label="Shortform Unit"
            value={value}
            units="in"
            color="inverse"
            onChange={(value) => setValue(value)}
          />
          <UnitNumberFormatField
            label="Longform Unit"
            value={value}
            units="inches"
            color="inverse"
            onChange={(value) => setValue(value)}
          />
          <UnitNumberFormatField
            label="Prefix Unit"
            value={value}
            units="(in) "
            prefixUnits
            color="inverse"
            onChange={(value) => setValue(value)}
          />
          <UnitNumberFormatField
            label="2 Decimal Places"
            value={value}
            units="mg"
            decimalScale={2}
            color="inverse"
            onChange={(value) => setValue(value)}
          />
          <UnitNumberFormatField
            label="Weight (min 10)"
            value={min}
            units="kg"
            min={10}
            color="inverse"
            onChange={(value) => setMin(value)}
          />
          <UnitNumberFormatField
            label="Weight (max 100)"
            value={max}
            units="kg"
            max={100}
            color="inverse"
            onChange={(value) => setMax(value)}
          />
          <UnitNumberFormatField
            label="Unit (required)"
            value={max}
            units="kg"
            max={100}
            showRequiredLabel
            hasError
            errorMessage="This is required"
            color="inverse"
            onChange={(value) => setMax(value)}
          />
        </FormBox>
      </Container>
    </Container>
  );
};

storiesOf('Form Components/Number Format Field', module).add(
  'Unit',
  () => <UnitNumberFormatFieldStory />,
  {
    readme: { content: md },
  }
);
