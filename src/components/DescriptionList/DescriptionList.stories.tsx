import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { DescriptionList } from './DescriptionList';
import { DescriptionTerm } from './DescriptionTerm';
import { DescriptionDetails } from './DescriptionDetails';
import { DescriptionListGroupHeading } from './DescriptionListGroupHeading';
import { DescriptionDivider } from './DescriptionDivider';
import { Avatar } from '../Avatar';
import { Database, HeartCircle } from '@lifeomic/chromicons';
import Avatar1 from '../../assets/example-avatar-1.jpg';
import Avatar2 from '../../assets/example-avatar-2.jpg';

const meta: Meta<typeof DescriptionList> = {
  component: DescriptionList,
  args: {
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
  },
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
};
export default meta;
type Story = StoryObj<typeof DescriptionList>;

export const Default: Story = {
  args: {
    'aria-label': 'List with multiple items',
  },
};

export const Title: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The DescriptionList component takes an `title` prop.',
      },
    },
  },
  args: {
    'aria-label': 'List with a title',
    title: 'Title',
  },
};

export const TitleIcon: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The DescriptionList component takes an `titleIcon` prop. It's recommended to use the [Chromicons](https://lifeomic.github.io/chromicons.com/) icon set.",
      },
    },
  },
  args: {
    'aria-label': 'List with title icon and title',
    title: 'Title',
    titleIcon: Database,
  },
};

export const Icons: Story = {
  args: {
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
      <DescriptionDetails key="details-2" icon={HeartCircle}>
        Details 2
      </DescriptionDetails>,
      <DescriptionDivider key="divider-2" />,
      <DescriptionTerm key="term-3" icon={HeartCircle}>
        Term 3
      </DescriptionTerm>,
      <DescriptionDetails key="details-3" icon={HeartCircle}>
        Details 3
      </DescriptionDetails>,
    ],
  },
};

export const Avatars: Story = {
  args: {
    'aria-label': 'List with avatars',
    items: [
      <DescriptionTerm key="term-1" avatar={<Avatar name="1" src={Avatar1} />}>
        Term 1
      </DescriptionTerm>,
      <DescriptionDetails
        key="details-1"
        avatar={<Avatar name="2" src={Avatar2} />}
      >
        Details 1
      </DescriptionDetails>,
      <DescriptionDivider key="divider-1" />,
      <DescriptionTerm key="term-2" avatar={<Avatar name="Third Person" />}>
        Term 2
      </DescriptionTerm>,
      <DescriptionDetails
        key="details-2"
        avatar={<Avatar name="Third Person" />}
      >
        Details 2
      </DescriptionDetails>,
    ],
  },
};

export const Sections: Story = {
  args: {
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
  },
};

export const ColumnsWidth: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The DescriptionList component takes a `columnsWidth` prop. If changing column widths is desired, `fr` and `px` units space-seperated are accepted, or a combination of both. Some examples include: `1fr 1fr`, `50px auto`, `minmax(10px, 1fr) 1fr`, `repeat(2, 1fr)`. Column widths default to `1fr 2fr`.',
      },
    },
  },
  args: {
    'aria-label': 'List with multiple items',
    columnsWidth: '1fr 1fr',
  },
};

export const Align: Story = {
  args: {
    'aria-label': 'List with multiple items with alignment',
    items: [
      <DescriptionTerm key="term-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a
        condimentum metus.
      </DescriptionTerm>,
      <DescriptionDetails key="details-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </DescriptionDetails>,
      <DescriptionDivider key="divider-1" />,
      <DescriptionTerm key="term-2" align="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </DescriptionTerm>,
      <DescriptionDetails key="details-2" align="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a
        condimentum metus. In hac habitasse platea dictumst. Morbi tincidunt
        augue vel dui bibendum, non pulvinar leo facilisis. Vivamus vel arcu sit
        amet metus euismod mollis in eget nibh.
      </DescriptionDetails>,
      <DescriptionDivider key="divider-2" />,
      <DescriptionTerm key="term-3" align="flex-end">
        Lorem ipsum dolor sit amet
      </DescriptionTerm>,
      <DescriptionDetails key="details-3" align="flex-end">
        Vivamus vel arcu sit amet metus euismod mollis in eget nibh. Consectetur
        adipiscing elit. Morbi a condimentum metus.
      </DescriptionDetails>,
    ],
  },
};

export const Justify: Story = {
  args: {
    'aria-label': 'List with multiple items with justification',
    items: [
      <DescriptionTerm key="term-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a
        condimentum metus.
      </DescriptionTerm>,
      <DescriptionDetails key="details-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </DescriptionDetails>,
      <DescriptionDivider key="divider-1" />,
      <DescriptionTerm key="term-2" justify="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </DescriptionTerm>,
      <DescriptionDetails key="details-2" justify="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a
        condimentum metus. In hac habitasse platea dictumst. Morbi tincidunt
        augue vel dui bibendum, non pulvinar leo facilisis. Vivamus vel arcu sit
        amet metus euismod mollis in eget nibh.
      </DescriptionDetails>,
      <DescriptionDivider key="divider-2" />,
      <DescriptionTerm key="term-3" justify="flex-end">
        Lorem ipsum dolor sit amet
      </DescriptionTerm>,
      <DescriptionDetails key="details-3" justify="flex-end">
        Vivamus vel arcu sit amet metus euismod mollis in eget nibh. Consectetur
        adipiscing elit. Morbi a condimentum metus.
      </DescriptionDetails>,
    ],
  },
};

export const TextAlign: Story = {
  args: {
    'aria-label': 'List with multiple items with text alignment',
    items: [
      <DescriptionTerm key="term-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a
        condimentum metus.
      </DescriptionTerm>,
      <DescriptionDetails key="details-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </DescriptionDetails>,
      <DescriptionDivider key="divider-1" />,
      <DescriptionTerm key="term-2" textAlign="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </DescriptionTerm>,
      <DescriptionDetails key="details-2" textAlign="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a
        condimentum metus. In hac habitasse platea dictumst. Morbi tincidunt
        augue vel dui bibendum, non pulvinar leo facilisis. Vivamus vel arcu sit
        amet metus euismod mollis in eget nibh.
      </DescriptionDetails>,
      <DescriptionDivider key="divider-2" />,
      <DescriptionTerm key="term-3" textAlign="right">
        Lorem ipsum dolor sit amet
      </DescriptionTerm>,
      <DescriptionDetails key="details-3" textAlign="right">
        Vivamus vel arcu sit amet metus euismod mollis in eget nibh. Consectetur
        adipiscing elit. Morbi a condimentum metus.
      </DescriptionDetails>,
    ],
  },
};

export const Gap: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The DescriptionList component takes a `gap` prop. If changing gap sizes is desired, all units of measure (space-seperated) are accepted, or a combination of both. Some examples include: `24px 32px`, `20%`, and `21px 82%`. `gap` defaults to `8px 16px`. This property is specified as a value for row gap followed optionally by a value for column gap. If column gap is omitted, it’s set to the same value as row gap.',
      },
    },
  },
  args: {
    'aria-label': 'List with a custom gap',
    gap: '24px 32px',
  },
};

export const SecondaryText: Story = {
  args: {
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
  },
};

export const Margin: Story = {
  args: {
    'aria-label': 'List with some margin',
    margin: '50px',
  },
};

export const Padding: Story = {
  args: {
    'aria-label': 'List with some padding',
    padding: '1rem',
  },
};
