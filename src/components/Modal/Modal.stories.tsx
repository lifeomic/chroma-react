import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from './Modal';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>;

export const Default: ComponentStory<typeof Modal> = (args) => {
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
Default.args = {
  title: 'Modal Example',
};

export const ActionsModal: ComponentStory<typeof Modal> = (args) => {
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
ActionsModal.args = {
  title: 'Actions Example',
  justifyActions: 'flex-end',
};

export const CustomHeader: ComponentStory<typeof Modal> = (args) => {
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
CustomHeader.args = {
  title: 'CustomHeader',
};
