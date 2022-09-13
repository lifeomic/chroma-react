import { storiesOf } from '@storybook/react';
import * as React from 'react';
import dayjs from 'dayjs';
import { DayPicker, DayPickerProps } from '../../../src/components/DayPicker';
import { FormBox } from '../../../src/components/FormBox';
import { Container } from '../../storyComponents/Container';
import defaultMd from './default.md';

dayjs.extend(require('dayjs/plugin/customParseFormat'));

const PickerWithInternalState: React.FC<
  { initialValue?: Date } & Omit<DayPickerProps, 'value' | 'onChange'>
> = ({ initialValue, ...props }) => {
  const [day, setDay] = React.useState(initialValue);
  return <DayPicker {...props} value={day} onDayChange={setDay} />;
};

const PickerWithErrorHandling: React.FC<
  { initialValue?: Date } & Omit<DayPickerProps, 'value' | 'onChange'>
> = ({ initialValue, ...props }) => {
  const [day, setDay] = React.useState(initialValue);

  const [errorMessage, setErrorMessage] = React.useState('');

  const parseDate = parser('M/D/YYYY');

  return (
    <DayPicker
      {...props}
      value={day}
      errorMessage={errorMessage}
      hasError={!!errorMessage}
      onDayChange={setDay}
      parseDate={parseDate}
      onTextChange={(text) => {
        const date = parseDate(text);
        if (!date) {
          setErrorMessage('Input does not match required format.');
        } else {
          setErrorMessage('');
        }
      }}
    />
  );
};

const parser = (format: string) => (text: string) => {
  const result = dayjs(text, format, true);
  if (result.isValid()) {
    return result.toDate();
  }
  return undefined;
};

const DayPickerStory: React.FC = () => {
  return (
    <React.Fragment>
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
            <PickerWithInternalState
              fullWidth
              label={'Default'}
              initialValue={new Date()}
            />
            <PickerWithInternalState
              fullWidth
              label={'With Manual Input'}
              initialValue={new Date()}
              parseDate={parser('M/D/YYYY')}
            />
            <PickerWithInternalState
              fullWidth
              label={'Disabled'}
              initialValue={new Date()}
              parseDate={parser('M/D/YYYY')}
              disabled
            />
            <PickerWithInternalState
              fullWidth
              label={'With Minimum Date'}
              initialValue={new Date()}
              parseDate={parser('M/D/YYYY')}
              minDate={new Date()}
            />
            <PickerWithInternalState
              fullWidth
              label={'Required'}
              showRequiredLabel
              initialValue={new Date()}
              parseDate={parser('M/D/YYYY')}
              minDate={new Date()}
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
            <PickerWithInternalState
              color={'inverse'}
              fullWidth
              label={'Custom Format'}
              formatDate={(date) => dayjs(date).format('MMMM D, YYYY')}
              parseDate={parser('MMMM D, YYYY')}
              initialValue={new Date()}
            />
            <PickerWithInternalState
              color={'inverse'}
              fullWidth
              label={'With Placeholder'}
              placeholder={'A placeholder message...'}
              parseDate={parser('M/D/YYYY')}
            />
            <PickerWithErrorHandling
              color={'inverse'}
              fullWidth
              label={'With Error Message'}
              initialValue={new Date()}
            />
            <PickerWithErrorHandling
              color={'inverse'}
              fullWidth
              label={'With Max Date'}
              initialValue={new Date()}
              parseDate={parser('M/D/YYYY')}
              maxDate={new Date()}
            />
            <PickerWithInternalState
              color={'inverse'}
              fullWidth
              label={'Required'}
              showRequiredLabel
              initialValue={new Date()}
              parseDate={parser('M/D/YYYY')}
              minDate={new Date()}
            />
          </FormBox>
        </Container>
      </Container>
    </React.Fragment>
  );
};

storiesOf('Old Form Components/DayPicker', module).add(
  'Default',
  () => <DayPickerStory />,
  {
    readme: { content: defaultMd },
  }
);
