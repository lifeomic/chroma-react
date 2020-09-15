import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ButtonFilePicker } from '../../../src/components/ButtonFilePicker';
import { Container } from '../../storyComponents/Container';
import md from './default.md';

const ButtonFilePickerStory: React.FC = () => {
  const handlePick = (e: any) => {
    console.log(e.target.files);
  };

  return (
    <Container>
      <Container containerStyles={{ flex: 1, flexFlow: 'column' }}>
        <ButtonFilePicker
          variant="contained"
          onChange={handlePick}
          allowMultipleSelection={boolean('allowMultipleSelection', false)}
          disabled={boolean('disabled', false)}
        >
          Upload a File
        </ButtonFilePicker>
        <ButtonFilePicker
          variant="text"
          onChange={handlePick}
          allowMultipleSelection={boolean('allowMultipleSelection', false)}
          disabled={boolean('disabled', false)}
        >
          Upload a File
        </ButtonFilePicker>
        <ButtonFilePicker
          variant="outlined"
          onChange={handlePick}
          allowMultipleSelection={boolean('allowMultipleSelection', false)}
          disabled={boolean('disabled', false)}
        >
          Upload a File
        </ButtonFilePicker>
      </Container>
      <Container
        containerStyles={{ background: '#384049', flex: 1, flexFlow: 'column' }}
      >
        <ButtonFilePicker
          variant="contained"
          color="inverse"
          onChange={handlePick}
          allowMultipleSelection={boolean('allowMultipleSelection', false)}
          disabled={boolean('disabled', false)}
        >
          Upload a File
        </ButtonFilePicker>
        <ButtonFilePicker
          variant="text"
          color="inverse"
          onChange={handlePick}
          allowMultipleSelection={boolean('allowMultipleSelection', false)}
          disabled={boolean('disabled', false)}
        >
          Upload a File
        </ButtonFilePicker>
        <ButtonFilePicker
          variant="outlined"
          color="inverse"
          onChange={handlePick}
          allowMultipleSelection={boolean('allowMultipleSelection', false)}
          disabled={boolean('disabled', false)}
        >
          Upload a File
        </ButtonFilePicker>
      </Container>
    </Container>
  );
};

storiesOf('Components/ButtonFilePicker', module).add(
  'Default',
  () => <ButtonFilePickerStory />,
  {
    readme: {
      content: md,
    },
  }
);
