import { boolean, select, text, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Button } from '../../../src/components/Button';
import { Box } from '../../../src/components/Box';
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
        fullWidth={boolean('fullWidth', false)}
        size={
          number('size', 0, {
            range: false,
            min: 0,
            max: 2,
            step: 1,
          }) as any
        }
        onDismiss={() => {
          console.log('closing...');
          setIsOpen(false);
        }}
        disableDismissOnClickOutside={boolean(
          'disableDismissOnClickOutside',
          false
        )}
      >
        <Content />
      </Modal>
    </Container>
  );
};

function Content() {
  const [width, setWidth] = React.useState(32);
  const [height, setHeight] = React.useState(16);

  const setSize = (width: number, height: number) => {
    setHeight(height);
    setWidth(width);
  };

  return (
    <div>
      <Box
        margin={0}
        padding={2}
        width={width}
        height={height}
        bgColor="blue.200"
        style={{ display: 'box' }}
      >
        <Box direction="column">
          <Box margin={1} width={18} justify="space-between">
            <Button onClick={() => setSize(32, 16)}>Small</Button>
            <Button onClick={() => setSize(256, 256)}>Large</Button>
          </Box>
          <Box margin={1} width={18} justify="space-between">
            <Button onClick={() => setSize(width, height + 16)}>Taller</Button>
            <Button onClick={() => setSize(width + 16, height)}>Wider</Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

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
        fullWidth={boolean('fullWidth', false)}
        size={
          number('size', 0, {
            range: false,
            min: 0,
            max: 2,
            step: 1,
          }) as any
        }
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
        fullWidth={boolean('fullWidth', false)}
        size={
          number('size', 0, {
            range: false,
            min: 0,
            max: 2,
            step: 1,
          }) as any
        }
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
