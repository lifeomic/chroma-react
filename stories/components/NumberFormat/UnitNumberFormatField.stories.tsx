import { Container } from '../../storyComponents/Container';
import { UnitNumberFormatField } from '../../../src/components/NumberFormat';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import md from './unitNumberFormat.md';

const UnitNumberFormatFieldStory: React.FC = () => {
  const [value, setValue] = React.useState(56);
  const [min, setMin] = React.useState(20);
  const [max, setMax] = React.useState(99);

  return (
    <Container containerStyles={{ flexWrap: 'wrap' }}>
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
