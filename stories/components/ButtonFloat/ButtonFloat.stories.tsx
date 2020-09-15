import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ButtonFloat } from '../../../src/components/ButtonFloat';
import { Edit, Plus, ChevronDown } from '../../../src/icons/lined';
import { Container } from '../../storyComponents/Container';
import defaultMd from './default.md';

const AllButtonFloatStory: React.FunctionComponent = () => (
  <Container
    containerStyles={{
      position: 'fixed',
      height: '100%',
      top: 0,
      bottom: 0,
      width: '100%',
    }}
  >
    <ButtonFloat
      justify="left"
      icon={Plus}
      disabled={boolean('disabled', false)}
    >
      Button Float
    </ButtonFloat>
    <ButtonFloat
      justify="center"
      icon={Edit}
      size={1}
      disabled={boolean('disabled', false)}
    >
      Button Float
    </ButtonFloat>
    <ButtonFloat
      justify="right"
      size={0}
      disabled={boolean('disabled', false)}
      trailingIcon={ChevronDown}
    >
      Button Float
    </ButtonFloat>
  </Container>
);

storiesOf('Components/ButtonFloat', module).add(
  'Default',
  () => <AllButtonFloatStory />,
  {
    readme: { content: defaultMd },
  }
);
