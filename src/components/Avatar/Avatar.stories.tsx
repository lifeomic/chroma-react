import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from './Avatar';
import legoman from '../../assets/legoman.jpg';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    onClick: { action: 'clicked' },
    onError: { action: 'errored', control: false },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Tony',
};

export const Name = Template.bind({});
Name.parameters = {
  docs: {
    description: {
      story:
        'The Avatar component is used to represent a user. It displays a profile picture, their name initials, or fallback icon.',
    },
  },
};
Name.args = {
  name: 'Tony',
};

export const ProfilePicture = Template.bind({});
ProfilePicture.args = {
  name: 'Tony',
  src: legoman,
};
ProfilePicture.parameters = {
  docs: {
    description: {
      story: 'A profile picture can be displayed by providing a `src`.',
    },
  },
};

export const ImageLoadFailure = Template.bind({});
ImageLoadFailure.args = {
  name: 'Tony',
  src: 'https://this-image-does-not-exist.biz/123.jpg',
};
ImageLoadFailure.parameters = {
  docs: {
    description: {
      story:
        'An onError handler can be added to capture errors loading the `src` image. By default, when a `src` fails to load, the avatar will fallback to initials.',
    },
  },
};

export const UseDefaultSrc = Template.bind({});
UseDefaultSrc.args = {
  name: 'Tony',
  src: legoman,
  UseDefaultSrc: true,
};
UseDefaultSrc.parameters = {
  docs: {
    description: {
      story:
        'This prop is leveraged when the information about the user needs to be "masked".  When this prop is provided, a default image will be used. Although their name is required, it will not be used with this prop.',
    },
  },
};

export const Size = Template.bind({});
Size.args = {
  name: 'Tony',
  src: legoman,
  size: 2,
};
Size.parameters = {
  docs: {
    description: {
      story:
        'There are size options exposed. Choose one that fits the best for your needs.',
    },
  },
};
