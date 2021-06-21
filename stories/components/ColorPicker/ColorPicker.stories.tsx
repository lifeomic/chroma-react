import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { FormBox } from '../../../src/components/FormBox';
import { ColorPicker } from '../../../src/components/ColorPicker';
import { HelpCircle } from '../../../src/icons/lined';
import { Container } from '../../storyComponents/Container';
import defaultMd from './default.md';
import blue from '../../../src/colors/blue';

const AllColorPickersStory: React.FC = () => {
  const [text, setText] = React.useState('');

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
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              label="Name"
            />
            <ColorPicker disabled label="Disabled" placeholder="Enter name" />
            <ColorPicker
              readOnly
              label="Read Only"
              placeholder="Enter name"
              value={blue.main}
            />
            <ColorPicker
              label="Full Width"
              icon={HelpCircle}
              secondaryLabel="Optional"
              fullWidth
              placeholder="Enter up to 250 characters"
              tooltipMessage="Perhaps you don't want to use help text? You can stow it here."
            />
            <ColorPicker
              label="Name"
              hasError
              placeholder="Required"
              errorMessage="This is required!"
            />
            <ColorPicker
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              label=""
              aria-label="Name"
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
            <ColorPicker
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              label="Name"
            />
            <ColorPicker disabled label="Disabled" placeholder="Enter name" />
            <ColorPicker
              readOnly
              label="Read Only"
              placeholder="Enter name"
              value={blue.main}
            />
            <ColorPicker
              label="Full Width"
              icon={HelpCircle}
              secondaryLabel="Optional"
              fullWidth
              tooltipMessage="Perhaps you don't want to use help text? You can stow it here."
              placeholder="Enter up to 250 characters"
            />
            <ColorPicker
              label="Name"
              hasError
              placeholder="Required"
              errorMessage="This is required!"
            />
            <ColorPicker
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              label=""
              aria-label="Name"
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
            <ColorPicker
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              label="Name"
              color="inverse"
            />
            <ColorPicker
              disabled
              label="Disabled"
              placeholder="Enter name"
              color="inverse"
            />
            <ColorPicker
              readOnly
              label="Read Only"
              placeholder="Enter name"
              color="inverse"
              value={blue.main}
            />
            <ColorPicker
              label="Full Width"
              icon={HelpCircle}
              secondaryLabel="Optional"
              fullWidth
              tooltipMessage="Perhaps you don't want to use help text? You can stow it here."
              placeholder="Enter up to 250 characters"
              color="inverse"
            />
            <ColorPicker
              label="Name"
              hasError
              placeholder="Required"
              errorMessage="This is required!"
              color="inverse"
            />
            <ColorPicker
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              label=""
              aria-label="Name"
              color="inverse"
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
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              label="Name"
              color="inverse"
            />
            <ColorPicker
              disabled
              label="Disabled"
              placeholder="Enter name"
              color="inverse"
            />
            <ColorPicker
              readOnly
              label="Read Only"
              placeholder="Enter name"
              color="inverse"
              value={blue.main}
            />
            <ColorPicker
              label="Full Width"
              icon={HelpCircle}
              secondaryLabel="Optional"
              fullWidth
              tooltipMessage="Perhaps you don't want to use help text? You can stow it here."
              placeholder="Enter up to 250 characters"
              color="inverse"
            />
            <ColorPicker
              label="Name"
              hasError
              placeholder="Required"
              errorMessage="This is required!"
              color="inverse"
            />
            <ColorPicker
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              label=""
              aria-label="Name"
              color="inverse"
            />
          </FormBox>
        </Container>
      </Container>
    </React.Fragment>
  );
};

const ColorPickerStory: React.FC = () => {
  const [text, setText] = React.useState('');

  return (
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
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          label="Name"
        />
        <ColorPicker disabled label="Disabled" placeholder="Enter name" />
        <ColorPicker
          readOnly
          label="Read Only"
          placeholder="Enter name"
          value={blue.main}
        />
        <ColorPicker
          label="Full Width"
          icon={HelpCircle}
          secondaryLabel="Optional"
          fullWidth
          placeholder="Enter up to 250 characters"
          tooltipMessage="Perhaps you don't want to use help text? You can stow it here."
        />
        <ColorPicker
          label="Name"
          hasError
          placeholder="Required"
          errorMessage="This is required!"
        />
      </FormBox>
    </Container>
  );
};

const InverseColorPickerStory: React.FC = () => {
  const [text, setText] = React.useState('');

  return (
    <React.Fragment>
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
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            label="Name"
            color="inverse"
          />
          <ColorPicker
            disabled
            label="Disabled"
            placeholder="Enter name"
            color="inverse"
          />
          <ColorPicker
            readOnly
            label="Read Only"
            placeholder="Enter name"
            color="inverse"
            value={blue.main}
          />
          <ColorPicker
            label="Full Width"
            icon={HelpCircle}
            secondaryLabel="Optional"
            fullWidth
            tooltipMessage="Perhaps you don't want to use help text? You can stow it here."
            placeholder="Enter up to 250 characters"
            color="inverse"
          />
          <ColorPicker
            label="Name"
            hasError
            placeholder="Required"
            errorMessage="This is required!"
            color="inverse"
          />
        </FormBox>
      </Container>
    </React.Fragment>
  );
};

storiesOf('Form Components/ColorPicker', module)
  .add('All', () => <AllColorPickersStory />, {
    readme: { content: defaultMd },
  })
  .add('Default', () => <ColorPickerStory />, {
    readme: { content: defaultMd },
  })
  .add('Inverse', () => <InverseColorPickerStory />, {
    readme: { content: defaultMd },
  });
