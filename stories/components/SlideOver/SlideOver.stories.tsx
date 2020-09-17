import {
  Actions,
  Body,
  Header,
  SlideOver,
} from '../../../src/components/SlideOver';
import { Box } from '../../../src/components/Box';
import { Button } from '../../../src/components/Button';
import { Toggle } from '../../../src/components/Toggle';
import { Container } from '../../storyComponents/Container';
import { storiesOf } from '@storybook/react';
import { Text } from '../../../src/components/Text';
import * as React from 'react';
import defaultMd from './default.md';

const SlideOverStory: React.FC = () => {
  const [isSlideOverOpen, setIsSlideOverOpen] = React.useState<boolean>(false);
  const [includeActions, setIncludeActions] = React.useState<boolean>(false);

  return (
    <Container>
      <Box direction="column" align="center">
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
      </Box>

      <SlideOver isOpen={isSlideOverOpen}>
        <Header
          title="Panel Title"
          onClose={() => setIsSlideOverOpen(!isSlideOverOpen)}
        />
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
