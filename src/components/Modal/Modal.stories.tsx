import React from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';

import { Modal } from './Modal';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';

const meta: Meta<typeof Modal> = {
  component: Modal,
};
export default meta;
type Story = StoryObj<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        Open Modal
      </Button>
      <Modal
        {...args}
        isOpen={isOpen}
        onDismiss={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
};

const Template2: StoryFn<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Button
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        Open Modal
      </Button>
      <Modal
        {...args}
        isOpen={isOpen}
        onDismiss={() => {
          setIsOpen(false);
        }}
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
    </>
  );
};

const Template3: StoryFn<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Button
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        Open Modal
      </Button>
      <Modal
        {...args}
        isOpen={isOpen}
        customHeader={
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: '1rem',
              paddingTop: '19px', // to accommodate for margin
              marginTop: '-3px',
              backgroundColor: 'lightblue',
            }}
          >
            <div>Hello, World!</div>
            <div>
              <Button onClick={() => setIsOpen(false)}>Close</Button>
            </div>
          </div>
        }
        onDismiss={() => {
          setIsOpen(false);
        }}
      >
        <p style={{ padding: 0, margin: 0 }}>Howdy!!!</p>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    title: 'Modal Example',
  },
};

export const ActionsModal: Story = {
  render: Template2,
  args: {
    title: 'Actions Example',
    justifyActions: 'flex-end',
  },
};

export const CustomHeader: Story = {
  render: Template3,
  args: {
    title: 'CustomHeader',
  },
};
