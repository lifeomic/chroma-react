import * as React from 'react';
import md from './default.md';
import { Alert, AlertBody, AlertIcon } from '../../../src/components/Alert';
import { ButtonUnstyled } from '../../../src/components/ButtonUnstyled';
import { Container } from '../../storyComponents/Container';
import { Info } from '../../../src/icons/lined';
import { storiesOf } from '@storybook/react';
import { Text } from '../../../src/components/Text';

const ButtonUnstyledStory: React.FC = () => {
  return (
    <Container
      containerStyles={{
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
      }}
    >
      <Container containerStyles={{ flex: 1, alignContent: 'center' }}>
        <ButtonUnstyled>Button</ButtonUnstyled>
      </Container>
      <Container containerStyles={{ flex: 1, alignContent: 'center' }}>
        <ButtonUnstyled>
          <Alert>
            <AlertIcon icon={Info} />
            <AlertBody>
              <Text size="subbody">This is the latest version of Chroma.</Text>
            </AlertBody>
          </Alert>
        </ButtonUnstyled>
      </Container>
    </Container>
  );
};

storiesOf('Components/ButtonUnstyled', module).add(
  'Default',
  () => <ButtonUnstyledStory />,
  {
    readme: {
      content: md,
    },
  }
);
