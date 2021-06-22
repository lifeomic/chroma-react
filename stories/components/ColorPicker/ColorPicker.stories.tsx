import * as React from 'react';
import blue from '../../../src/colors/blue';
import defaultMd from './default.md';
import { FormBox } from '../../../src/components/FormBox';
import { ColorPicker } from '../../../src/components/ColorPicker';
import { Container } from '../../storyComponents/Container';
import { storiesOf } from '@storybook/react';

const AllColorPickersStory: React.FC = () => {
  const [text, setText] = React.useState(blue.main);

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
            <ColorPicker
              label="Color"
              onChange={(value) => {
                setText(value);
              }}
              value={text}
            />
            <ColorPicker
              label="Color"
              onChange={(value) => {
                setText(value);
              }}
              value={text}
              variant="circle"
            />
            <ColorPicker
              disabled
              label="Disabled"
              placeholder="Enter hex color"
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
            <ColorPicker
              color="inverse"
              label="Color"
              onChange={(value) => {
                setText(value);
              }}
              value={text}
            />
            <ColorPicker
              color="inverse"
              label="Color"
              onChange={(value) => {
                setText(value);
              }}
              value={text}
              variant="circle"
            />
            <ColorPicker
              color="inverse"
              disabled
              label="Disabled"
              placeholder="Enter hex color"
            />
          </FormBox>
        </Container>
      </Container>
    </React.Fragment>
  );
};

storiesOf('Form Components/ColorPicker', module).add(
  'All',
  () => <AllColorPickersStory />,
  {
    readme: { content: defaultMd },
  }
);
