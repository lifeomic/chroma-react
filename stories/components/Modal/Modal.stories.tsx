import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Button } from '../../../src/components/Button';
import { Checkbox } from '../../../src/components/Checkbox';
import { FormBox } from '../../../src/components/FormBox';
import { Modal } from '../../../src/components/Modal';
import { Select, SelectOption } from '../../../src/components/Select';
import { TextField } from '../../../src/components/TextField';
import { Container } from '../../storyComponents/Container';
import defaultMd from './default.md';

const ModalStory: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Container>
      <Button
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        title={text('title', 'Dialog Example')}
        fullWidth={boolean('is full width?', false)}
        size={select('size', [0, 1], 0)}
        onDismiss={() => {
          console.log('closing...');
          setIsOpen(false);
        }}
        disableDismissOnClickOutside={boolean(
          'disableDismissOnClickOutside',
          false
        )}
      />
    </Container>
  );
};

const ActionsModalStory: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Container>
      <Button
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        title={text('title', 'Actions Example')}
        fullWidth={boolean('is full width?', false)}
        size={select('size', [0, 1], 0)}
        onDismiss={() => {
          console.log('closing...');
          setIsOpen(false);
        }}
        justifyActions={select(
          'justify actions',
          ['space-between', 'flex-end'],
          'flex-end'
        )}
        actions={
          <>
            <Button variant="text" onClick={() => setIsOpen(false)}>
              Close
            </Button>
            <Button variant="contained" onClick={() => setIsOpen(false)}>
              Save
            </Button>
          </>
        }
      >
        <p style={{ padding: 0, margin: 0 }}>Howdy!!!</p>
        <Checkbox label="Foo Bar" />
      </Modal>
    </Container>
  );
};

const FormModalStory: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectValue, setSelectValue] = React.useState<string | undefined>(
    undefined
  );

  return (
    <Container>
      <Button
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        title={text('title', 'Actions Example')}
        fullWidth={boolean('is full width?', false)}
        size={select('size', [0, 1], 0)}
        onDismiss={() => {
          console.log('closing...');
          setIsOpen(false);
        }}
        isFormContent={true}
        onFormSubmit={() => console.log('form submitted')}
        justifyActions={select(
          'justify actions',
          ['space-between', 'flex-end'],
          'flex-end'
        )}
        actions={
          <>
            <Button variant="text" onClick={() => setIsOpen(false)}>
              Close
            </Button>
            <Button
              variant="contained"
              type="submit"
              onClick={() => setIsOpen(false)}
            >
              Save
            </Button>
          </>
        }
      >
        <FormBox padding={0}>
          <TextField aria-label="Name" label="Name" name="name" fullWidth />
          <Select
            label="Select an option"
            placeholder="Pick one…"
            value={selectValue}
            onChange={(v: string) => setSelectValue(v)}
            fullWidth
          >
            <SelectOption title="Option 1" value="option 1" />
            <SelectOption
              title="Option 2"
              subtitle="This is a subtitle. For options that need a little extra description."
              value="option 2"
            />
            <SelectOption title="Option 3" value="option 3" />
            <SelectOption title="Option 4" value="option 4" />
          </Select>
          <TextField
            aria-label="Email"
            label="Email"
            name="email"
            type="email"
            fullWidth
          />
          <Checkbox label="Send reminders" />
        </FormBox>
      </Modal>
    </Container>
  );
};

const FullScreenModalStory: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Container>
      <Button
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        isFullScreen={true}
        title={text('title', 'Dialog Example')}
        onDismiss={() => {
          console.log('closing...');
          setIsOpen(false);
        }}
      >
        <p style={{ padding: 0, margin: 0 }}>Howdy!!!</p>
      </Modal>
    </Container>
  );
};

const CustomHeaderModalStory: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Container>
      <Button
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        isFullScreen={true}
        customHeader={
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>Hello, World!</div>
            <div>
              <Button onClick={() => setIsOpen(false)}>Close</Button>
            </div>
          </div>
        }
        onDismiss={() => {
          console.log('closing...');
          setIsOpen(false);
        }}
      >
        <p style={{ padding: 0, margin: 0 }}>Howdy!!!</p>
      </Modal>
    </Container>
  );
};

storiesOf('Components/Modal', module)
  .add('Default', () => <ModalStory />, { readme: { content: defaultMd } })
  .add('Actions', () => <ActionsModalStory />, {
    readme: { content: defaultMd },
  })
  .add('Form', () => <FormModalStory />, { readme: { content: defaultMd } })
  .add('Fullscreen', () => <FullScreenModalStory />, {
    readme: { content: defaultMd },
  })
  .add('Custom Header', () => <CustomHeaderModalStory />, {
    readme: { content: defaultMd },
  });
