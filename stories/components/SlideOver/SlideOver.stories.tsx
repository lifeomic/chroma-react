import {
  Actions,
  Body,
  Header,
  SlideOver,
} from '../../../src/components/SlideOver';
import { Avatar } from '../../../src/components/Avatar';
import { Button } from '../../../src/components/Button';
import { FormBox } from '../../../src/components/FormBox';
import { Toggle } from '../../../src/components/Toggle';
import { Container } from '../../storyComponents/Container';
import { storiesOf } from '@storybook/react';
import { Text } from '../../../src/components/Text';
import * as React from 'react';
import defaultMd from './default.md';

const SlideOverStory: React.FC = () => {
  const [isSlideOverOpen, setIsSlideOverOpen] = React.useState<boolean>(false);
  const [includeActions, setIncludeActions] = React.useState<boolean>(false);
  const [withCustomHeader, setWithCustomHeader] = React.useState<boolean>(
    false
  );

  return (
    <Container>
      <FormBox direction="column" align="center">
        <Button
          variant="text"
          onClick={() => setIsSlideOverOpen(!isSlideOverOpen)}
        >
          Toggle Slideover
        </Button>
        <Toggle
          label="Include actions"
          checked={includeActions}
          onChange={(e) => setIncludeActions(e.target.checked)}
        />
        <Toggle
          label="With custom header"
          checked={withCustomHeader}
          onChange={(e) => setWithCustomHeader(e.target.checked)}
        />
      </FormBox>

      <SlideOver isOpen={isSlideOverOpen}>
        {!withCustomHeader && (
          <Header
            title="Panel Title"
            onClose={() => setIsSlideOverOpen(!isSlideOverOpen)}
          />
        )}
        {withCustomHeader && (
          <Header onClose={() => setIsSlideOverOpen(!isSlideOverOpen)}>
            <Avatar name="Tony" />
            <Text>Custom Header</Text>
          </Header>
        )}
        <Body>
          <Text>your content</Text>
        </Body>
        {includeActions && (
          <Actions justify="flex-end">
            <Button variant="text">Cancel</Button>
            <Button>Save</Button>
          </Actions>
        )}
      </SlideOver>
    </Container>
  );
};

storiesOf('Components/SlideOver', module).add(
  'Default',
  () => <SlideOverStory />,
  {
    readme: { content: defaultMd },
  }
);
