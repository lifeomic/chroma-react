import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { IconButtonFloat } from '../../../src/components/IconButtonFloat';
import { Edit, Plus, X } from '@lifeomic/chromicons';
import { Container } from '../../storyComponents/Container';
import defaultMd from './default.md';

const AllIconButtonFloatStory: React.FunctionComponent = () => (
  <Container
    containerStyles={{
      position: 'fixed',
      height: '100%',
      top: 0,
      bottom: 0,
      width: '100%',
    }}
  >
    <IconButtonFloat
      aria-label="Edit"
      justify="left"
      icon={Plus}
      disabled={boolean('disabled', false)}
    />
    <IconButtonFloat
      aria-label="Edit"
      justify="center"
      icon={Edit}
      size={1}
      disabled={boolean('disabled', false)}
    />
    <IconButtonFloat
      aria-label="X"
      justify="right"
      icon={X}
      size={0}
      disabled={boolean('disabled', false)}
    />
  </Container>
);

storiesOf('Old Components/IconButtonFloat', module).add(
  'Default',
  () => <AllIconButtonFloatStory />,
  {
    readme: { content: defaultMd },
  }
);
