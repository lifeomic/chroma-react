import { Container } from '../../storyComponents/Container';
import { PhoneNumberFormatField } from '../../../src/components/NumberFormat';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import defaultMd from './phoneNumberFormat.md';

const PhoneNumberFormatFieldStory: React.FC = () => {
  const [text, setText] = React.useState('');

  return (
    <Container
      containerStyles={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <PhoneNumberFormatField
        label="Phone"
        value={text}
        onChange={(value) => setText(value)}
      />
      <PhoneNumberFormatField
        label="Required"
        value={text}
        showRequiredLabel
        onChange={(value) => setText(value)}
      />
    </Container>
  );
};

storiesOf('Form Components/Phone Input', module).add(
  'Default',
  () => <PhoneNumberFormatFieldStory />,
  { readme: { content: defaultMd } }
);
