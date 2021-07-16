import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Text } from '../../../src/components/Text';
import { Container } from '../../storyComponents/Container';
import md from './default.md';

const TextStory: React.FunctionComponent = () => {
  return (
    <Container
      containerStyles={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Text size="headline" useH1 marginBottom>
        headline. heading as h1
      </Text>
      <Text size="headline" marginBottom>
        headline. heading
      </Text>
      <Text size="body" marginBottom>
        body. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Text>
      <Text size="subbody" marginBottom>
        subbody. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Text>
      <Text size="table" marginBottom>
        table. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Text>
      <Text size="caption" marginBottom>
        caption. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Text>
      <Text size="button" marginBottom>
        button text
      </Text>
      <Text size="tooltip" marginBottom>
        tooltip text
      </Text>
      <Text size="code" marginBottom>
        code text
      </Text>

      <Text size="headline">Alignment</Text>
      <Text align="center">align center</Text>
      <Text align="left">align left</Text>
      <Text align="right">align right</Text>
      <Text align="justify">align justify</Text>
    </Container>
  );
};

storiesOf('Components/Text', module).add('Default', () => <TextStory />, {
  readme: { content: md },
});
