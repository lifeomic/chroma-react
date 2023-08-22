import { StoryObj, Meta } from '@storybook/react';

import { Avatar } from './Avatar';
import legoman from '../../../stories/assets/legoman.jpg';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  args: {
    name: 'Tony',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    onError: { action: 'errored', control: false },
  },
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const Name: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The Avatar component is used to represent a user. It displays a profile picture, their name initials, or fallback icon.',
      },
    },
  },
};

export const ProfilePicture: Story = {
  args: {
    src: legoman,
  },
  parameters: {
    docs: {
      description: {
        story: 'A profile picture can be displayed by providing a `src`.',
      },
    },
  },
};

export const ImageLoadFailure: Story = {
  args: {
    src: 'https://this-image-does-not-exist.biz/123.jpg',
  },
  parameters: {
    docs: {
      description: {
        story:
          'An onError handler can be added to capture errors loading the `src` image. By default, when a `src` fails to load, the avatar will fallback to initials.',
      },
    },
  },
};

export const UseDefaultSrc: Story = {
  args: {
    src: legoman,
    useDefaultSrc: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'This prop is leveraged when the information about the user needs to be "masked".  When this prop is provided, a default image will be used. Although their name is required, it will not be used with this prop.',
      },
    },
  },
};

export const Size: Story = {
  args: {
    src: legoman,
    size: 2,
  },
  parameters: {
    docs: {
      description: {
        story:
          'There are size options exposed. Choose one that fits the best for your needs.',
      },
    },
  },
};
