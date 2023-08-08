import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DescriptionList } from './DescriptionList';
import { DescriptionTerm } from './DescriptionTerm';
import { DescriptionDetails } from './DescriptionDetails';
import { DescriptionListGroupHeading } from './DescriptionListGroupHeading';
import { DescriptionDivider } from './DescriptionDivider';
import { Avatar } from '../Avatar';
import { HeartCircle } from '@lifeomic/chromicons';
import Avatar1 from '../../assets/example-avatar-1.jpg';
import Avatar2 from '../../assets/example-avatar-2.jpg';

export default {
  title: 'Components/DescriptionList/DescriptionList',
  component: DescriptionList,
  argTypes: {
    margin: {
      type: { name: 'string' },
    },
    marginTop: {
      type: { name: 'string' },
    },
    marginRight: {
      type: { name: 'string' },
    },
    marginBottom: {
      type: { name: 'string' },
    },
    marginLeft: {
      type: { name: 'string' },
    },
    marginX: {
      type: { name: 'string' },
    },
    marginY: {
      type: { name: 'string' },
    },
    padding: {
      type: { name: 'string' },
    },
    paddingTop: {
      type: { name: 'string' },
    },
    paddingRight: {
      type: { name: 'string' },
    },
    paddingBottom: {
      type: { name: 'string' },
    },
    paddingLeft: {
      type: { name: 'string' },
    },
    paddingX: {
      type: { name: 'string' },
    },
    paddingY: {
      type: { name: 'string' },
    },
  },
} as ComponentMeta<typeof DescriptionList>;

const Template: ComponentStory<typeof DescriptionList> = (args) => (
  <DescriptionList title="Description List Title" {...args} />
);

export const Default = Template.bind({});
Default.args = {
  'aria-label': 'List with multiple items',
  items: [
    <DescriptionTerm key="term-1">Term 1</DescriptionTerm>,
    <DescriptionDetails key="details-1">Details 1</DescriptionDetails>,
    <DescriptionDivider key="divider-1" />,
    <DescriptionTerm key="term-2">Term 2</DescriptionTerm>,
    <DescriptionDetails key="details-2">Details 2</DescriptionDetails>,
    <DescriptionDivider key="divider-2" />,
    <DescriptionTerm key="term-3">Term 3</DescriptionTerm>,
    <DescriptionDetails key="details-3">Details 3</DescriptionDetails>,
  ],
};

export const Icons = Template.bind({});
Icons.args = {
  'aria-label': 'List with icons',
  items: [
    <DescriptionTerm key="term-1" icon={HeartCircle}>
      Term 1
    </DescriptionTerm>,
    <DescriptionDetails key="details-1" icon={HeartCircle}>
      Details 1
    </DescriptionDetails>,
    <DescriptionDivider key="divider-1" />,
    <DescriptionTerm key="term-2" icon={HeartCircle}>
      Term 2
    </DescriptionTerm>,
    <DescriptionDetails key="details-5" icon={HeartCircle}>
      Details 2
    </DescriptionDetails>,
    <DescriptionDivider key="divider-2" />,
    <DescriptionTerm key="term-2" icon={HeartCircle}>
      Term 3
    </DescriptionTerm>,
    <DescriptionDetails key="details-2" icon={HeartCircle}>
      Details 3
    </DescriptionDetails>,
  ],
};

export const Avatars = Template.bind({});
Avatars.args = {
  'aria-label': 'List with avatars',
  items: [
    <DescriptionTerm key="term-1" avatar={<Avatar name="1" src={Avatar1} />}>
      Term 1
    </DescriptionTerm>,
    <DescriptionDetails key="term-1" avatar={<Avatar name="2" src={Avatar2} />}>
      Details 1
    </DescriptionDetails>,
    <DescriptionDivider key="divider-1" />,
    <DescriptionTerm key="term-2" avatar={<Avatar name="Third Person" />}>
      Term 2
    </DescriptionTerm>,
    <DescriptionDetails key="details-2" avatar={<Avatar name="Third Person" />}>
      Details 2
    </DescriptionDetails>,
  ],
};

export const Sections = Template.bind({});
Sections.args = {
  'aria-label': 'List with multiple sections of items',
  items: [
    <DescriptionListGroupHeading key="section-1">
      Section 1
    </DescriptionListGroupHeading>,
    <DescriptionTerm key="term-1">Term 1</DescriptionTerm>,
    <DescriptionDetails key="details-1">Details 1</DescriptionDetails>,
    <DescriptionDivider key="divider-1" />,
    <DescriptionTerm key="term-2">Term 2</DescriptionTerm>,
    <DescriptionDetails key="details-2">Details 2</DescriptionDetails>,
    <DescriptionDivider key="divider-2" />,
    <DescriptionTerm key="term-3">Term 3</DescriptionTerm>,
    <DescriptionDetails key="details-3">Details 3</DescriptionDetails>,
    <DescriptionListGroupHeading key="section-2">
      Section 2
    </DescriptionListGroupHeading>,
    <DescriptionTerm key="term-4">Term 4</DescriptionTerm>,
    <DescriptionDetails key="details-4">Details 4</DescriptionDetails>,
    <DescriptionDivider key="divider-3" />,
    <DescriptionTerm key="term-5">Term 5</DescriptionTerm>,
    <DescriptionDetails key="details-5">Details 5</DescriptionDetails>,
    <DescriptionDivider key="divider-4" />,
    <DescriptionTerm key="term-6">Term 6</DescriptionTerm>,
    <DescriptionDetails key="details-6">Details 6</DescriptionDetails>,
  ],
};

export const SecondaryText = Template.bind({});
SecondaryText.args = {
  'aria-label': 'List with some items with secondary text',
  items: [
    <DescriptionTerm
      key="term-1"
      text="Term 1"
      secondaryText="This is secondary text"
    />,
    <DescriptionDetails key="details-1">Details 1</DescriptionDetails>,
    <DescriptionDivider key="divider-1" />,
    <DescriptionTerm key="term-2">Term 2</DescriptionTerm>,
    <DescriptionDetails key="details-2">Details 2</DescriptionDetails>,
    <DescriptionDivider key="divider-2" />,
    <DescriptionDetails key="term-3">Term 3</DescriptionDetails>,
    <DescriptionDetails key="details-3">Details 3</DescriptionDetails>,
    <DescriptionDivider key="divider-3" />,
    <DescriptionTerm key="term-4">Term 4</DescriptionTerm>,
    <DescriptionDetails
      key="details-4"
      text="Details 4"
      secondaryText="This is secondary text"
    />,
  ],
};

export const Margin = Template.bind({});
Margin.args = {
  'aria-label': 'List with some margin',
  items: [
    <DescriptionListGroupHeading key="section-1">
      Section 1
    </DescriptionListGroupHeading>,
    <DescriptionTerm key="term-1">Term 1</DescriptionTerm>,
    <DescriptionDetails key="details-2">Details 1</DescriptionDetails>,
    <DescriptionDivider key="divider-1" />,
    <DescriptionTerm key="term-3">Term 2</DescriptionTerm>,
    <DescriptionDetails key="details-3">Details 2</DescriptionDetails>,
  ],
  margin: '50px',
};

export const Padding = Template.bind({});
Padding.args = {
  'aria-label': 'List with some padding',
  items: [
    <DescriptionListGroupHeading key="section-1">
      Section 1
    </DescriptionListGroupHeading>,
    <DescriptionTerm key="term-1">Term 1</DescriptionTerm>,
    <DescriptionDetails key="details-2">Details 1</DescriptionDetails>,
    <DescriptionDivider key="divider-1" />,
    <DescriptionTerm key="term-3">Term 2</DescriptionTerm>,
    <DescriptionDetails key="details-3">Details 2</DescriptionDetails>,
  ],
  padding: '1rem',
};
