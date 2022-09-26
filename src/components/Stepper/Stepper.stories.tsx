import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Stepper } from './Stepper';
import { Step } from './Step';
import { Activity, Flag, User, Zap } from '@lifeomic/chromicons';

export default {
  title: 'Components/Stepper',
  component: Stepper,
  argTypes: {},
  subcomponents: { Step },
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => (
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

export const Default = Template.bind({});
Default.args = {
  activeStep: 1,
};
