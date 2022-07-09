import { Container } from '../../storyComponents/Container';
import { UnitNumberFormatField } from '../../../src/components/NumberFormat';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import md from './unitNumberFormat.md';

const UnitNumberFormatFieldStory: React.FC = () => {
  const [value, setValue] = React.useState(56);

  return (
    <Container containerStyles={{ flexWrap: 'wrap' }}>
      <UnitNumberFormatField
        label="Some Unit"
        value={value}
        units={'unit'}
        onChange={(value) => setValue(value)}
      />
      <UnitNumberFormatField
        label="Shortform Unit"
        value={value}
        units={'in'}
        onChange={(value) => setValue(value)}
      />
      <UnitNumberFormatField
        label="Longform Unit"
        value={value}
        units={'inches'}
        onChange={(value) => setValue(value)}
      />
      <UnitNumberFormatField
        label="Prefix Unit, 2 Decimals"
        value={value}
        units={'£'}
        prefixUnits
        decimalScale={2}
        onChange={(value) => setValue(value)}
      />
    </Container>
  );
};

storiesOf('Form Components/Number Format', module).add(
  'Unit Input',
  () => <UnitNumberFormatFieldStory />,
  { readme: { content: md } }
);
