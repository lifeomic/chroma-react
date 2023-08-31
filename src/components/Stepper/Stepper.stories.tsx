import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { Stepper } from './Stepper';
import { Step } from './Step';
import { Activity, Flag, User, Zap } from '@lifeomic/chromicons';

const meta: Meta<typeof Stepper> = {
  component: Stepper,
  argTypes: {
    height: {
      control: { type: 'number' },
    },
    width: {
      control: { type: 'number' },
    },
    margin: {
      control: { type: 'number' },
    },
    marginTop: {
      control: { type: 'number' },
    },
    marginBottom: {
      control: { type: 'number' },
    },
    marginLeft: {
      control: { type: 'number' },
    },
    marginRight: {
      control: { type: 'number' },
    },
    marginX: {
      control: { type: 'number' },
    },
    marginY: {
      control: { type: 'number' },
    },
    padding: {
      control: { type: 'number' },
    },
    paddingTop: {
      control: { type: 'number' },
    },
    paddingBottom: {
      control: { type: 'number' },
    },
    paddingLeft: {
      control: { type: 'number' },
    },
    paddingRight: {
      control: { type: 'number' },
    },
    paddingX: {
      control: { type: 'number' },
    },
    paddingY: {
      control: { type: 'number' },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Stepper>;

const Template: StoryFn<typeof Stepper> = (args) => (
  <Stepper {...args}>
    <Step icon={Zap} subTitle="950" title="Registered" />
    <Step icon={Activity} subTitle="900" title="Consented" />
    <Step
      icon={User}
      title="Demographics"
      subTitlePillLabel="subTitlePillLabel"
    />
    <Step disabled icon={Flag} subTitle="550" title="Completed" />
  </Stepper>
);

export const Default: Story = {
  render: Template,
  args: {
    activeStep: 1,
  },
};
