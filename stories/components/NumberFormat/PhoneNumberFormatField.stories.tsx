import { Container } from '../../storyComponents/Container';
import { PhoneNumberFormatField } from '../../../src/components/NumberFormat';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import defaultMd from './phoneNumberFormat.md';

const PhoneNumberFormatFieldStory: React.FC = () => {
  const [text, setText] = React.useState('');

  return (
    <Container>
      <PhoneNumberFormatField
        label="Phone"
        value={text}
        onChange={(value) => setText(value)}
      />
    </Container>
  );
};

storiesOf('Form Components/Number Format Field', module).add(
  'Phone Number',
  () => <PhoneNumberFormatFieldStory />,
  { readme: { content: defaultMd } }
);
