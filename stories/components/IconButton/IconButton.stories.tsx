import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { IconButton } from '../../../src/components/IconButton';
import { Text } from '../../../src/components/Text';
import { Edit, X } from '@lifeomic/chromicons';
import { Container } from '../../storyComponents/Container';
import { spacing } from '../../storyStyles';
import defaultMd from './default.md';

interface WrappedContainerProps {
  additionalStyles?: React.CSSProperties;
  children: React.ReactNode;
}

const WrappedContainer: React.FC<WrappedContainerProps> = ({
  additionalStyles,
  children,
}) => (
  <Container
    containerStyles={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      ...additionalStyles,
    }}
  >
    {children}
  </Container>
);

const InversedColorStory: React.FunctionComponent = () => (
  <WrappedContainer additionalStyles={{ background: '#384049' }}>
    <div style={{ marginRight: spacing[4] }}>
      <IconButton
        aria-label="Edit"
        icon={Edit}
        color="inverse"
        disabled={boolean('disabled', false)}
      />
      <Text size="caption" style={{ color: 'white' }}>
        Default
      </Text>
    </div>
    <div>
      <IconButton
        aria-label="Edit"
        icon={Edit}
        size={0}
        color="inverse"
        disabled={boolean('disabled', false)}
      />
      <Text size="caption" style={{ color: 'white' }}>
        Small
      </Text>
    </div>
  </WrappedContainer>
);
const NegativeColorStory: React.FunctionComponent = () => (
  <WrappedContainer>
    <div style={{ marginRight: spacing[4] }}>
      <IconButton
        aria-label="Edit"
        icon={Edit}
        color="negative"
        disabled={boolean('disabled', false)}
      />
      <Text size="caption">Default</Text>
    </div>
    <div>
      <IconButton
        aria-label="Edit"
        icon={Edit}
        size={0}
        color="negative"
        disabled={boolean('disabled', false)}
      />
      <Text size="caption">Small</Text>
    </div>
  </WrappedContainer>
);
const PositiveColorStory: React.FunctionComponent = () => (
  <WrappedContainer>
    <div style={{ marginRight: spacing[4] }}>
      <IconButton
        aria-label="Edit"
        icon={Edit}
        color="positive"
        disabled={boolean('disabled', false)}
      />
      <Text size="caption">Default</Text>
    </div>
    <div>
      <IconButton
        aria-label="Edit"
        icon={Edit}
        size={0}
        color="positive"
        disabled={boolean('disabled', false)}
      />
      <Text size="caption">Small</Text>
    </div>
  </WrappedContainer>
);

const AllIconsButtonStory: React.FunctionComponent = () => (
  <WrappedContainer>
    <div style={{ marginRight: spacing[4] }}>
      <IconButton
        aria-label="Edit"
        icon={Edit}
        disabled={boolean('disabled', false)}
      />
      <Text size="caption">Default</Text>
    </div>
    <div>
      <IconButton
        aria-label="X"
        icon={X}
        size={0}
        disabled={boolean('disabled', false)}
      />
      <Text size="caption">Small</Text>
    </div>
  </WrappedContainer>
);

storiesOf('Components/IconButton', module)
  .add('Default', () => <AllIconsButtonStory />, {
    readme: { content: defaultMd },
  })
  .add('Inverse Color', () => <InversedColorStory />, {
    readme: { content: defaultMd },
  })
  .add('Negative Color', () => <NegativeColorStory />, {
    readme: { content: defaultMd },
  })
  .add('Positive Color', () => <PositiveColorStory />, {
    readme: { content: defaultMd },
  });
