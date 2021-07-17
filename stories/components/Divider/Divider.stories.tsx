import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Box } from '../../../src/components/Box';
import { Divider } from '../../../src/components/Divider';
import { IconButton } from '../../../src/components/IconButton';
import md from './default.md';
import { Container } from '../../storyComponents/Container';
import { Text } from '../../../src/components/Text';
import {
  AlignLeft,
  AlignJustify,
  AlignRight,
  Bold,
  Italic,
  Underline,
  Link,
  Image,
  Smile,
} from '@lifeomic/chromicons';

const DividerStory: React.FC = () => (
  <>
    <Container containerStyles={{ padding: 0, flexFlow: 'wrap' }}>
      <Container
        containerStyles={{
          alignItems: 'center',
          flex: 1,
          justifyContent: 'space-evenly',
          padding: '32px 0',
        }}
      >
        <Box direction="column">
          <Text size="subbody">Lorem ipsum dolor</Text>
          <Divider />
          <Text size="subbody">Vero illum at</Text>
          <Divider />
          <Text size="subbody">Autem neque consectetur</Text>
          <Divider />
          <Text size="subbody">Laudantium quisquam</Text>
        </Box>

        <Container containerStyles={{ height: 64, alignItems: 'center' }}>
          <IconButton icon={AlignLeft} aria-label="AlignLeft" size={0} />
          <IconButton icon={AlignJustify} aria-label="AlignJustify" size={0} />
          <IconButton icon={AlignRight} aria-label="AlignRight" size={0} />
          <Divider direction="row" />
          <IconButton icon={Bold} aria-label="Bold" size={0} />
          <IconButton icon={Italic} aria-label="Italic" size={0} />
          <IconButton icon={Underline} aria-label="Underline" size={0} />
          <Divider direction="row" />
          <IconButton icon={Link} aria-label="Link" size={0} />
          <IconButton icon={Image} aria-label="Image" size={0} />
          <IconButton icon={Smile} aria-label="Smile" size={0} />
        </Container>
      </Container>

      <Container
        containerStyles={{
          alignItems: 'center',
          background: '#006eb7',
          flex: 1,
          justifyContent: 'space-evenly',
          padding: '32px 0',
        }}
      >
        <Box direction="column">
          <Text size="subbody" color="inverse">
            Lorem ipsum dolor
          </Text>
          <Divider color="inverse" />
          <Text size="subbody" color="inverse">
            Vero illum at
          </Text>
          <Divider color="inverse" />
          <Text size="subbody" color="inverse">
            Autem neque consectetur
          </Text>
          <Divider color="inverse" />
          <Text size="subbody" color="inverse">
            Laudantium quisquam
          </Text>
        </Box>

        <Container
          containerStyles={{
            height: 64,
            alignItems: 'center',
          }}
        >
          <IconButton
            icon={AlignLeft}
            aria-label="AlignLeft"
            size={0}
            color="inverse"
          />
          <IconButton
            icon={AlignJustify}
            aria-label="AlignJustify"
            size={0}
            color="inverse"
          />
          <IconButton
            icon={AlignRight}
            aria-label="AlignRight"
            size={0}
            color="inverse"
          />
          <Divider color="inverse" direction="row" />
          <IconButton icon={Bold} aria-label="Bold" size={0} color="inverse" />
          <IconButton
            icon={Italic}
            aria-label="Italic"
            size={0}
            color="inverse"
          />
          <IconButton
            icon={Underline}
            aria-label="Underline"
            size={0}
            color="inverse"
          />
          <Divider color="inverse" direction="row" />
          <IconButton icon={Link} aria-label="Link" size={0} color="inverse" />
          <IconButton
            icon={Image}
            aria-label="Image"
            size={0}
            color="inverse"
          />
          <IconButton
            icon={Smile}
            aria-label="Smile"
            size={0}
            color="inverse"
          />
        </Container>
      </Container>
    </Container>
  </>
);

storiesOf('Layout/Divider', module).add('Default', () => <DividerStory />, {
  readme: { content: md },
});
