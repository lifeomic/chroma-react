import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Avatar, AvatarBadge } from '../../../src/components/Avatar';
import { Container } from '../../storyComponents/Container';
import { spacing } from '../../storyStyles';
import badgesMd from './badges.md';
import defaultMd from './default.md';
import legoman from './legoman.jpg';

const styles = {
  marginRight: spacing[1],
};

const AvatarTextStory: React.FC = () => (
  <Container>
    <Avatar size={0} name="Tony Ward" onClick={console.log} style={styles} />
    <Avatar size={1} name="Tony Ward" onClick={console.log} style={styles} />
    <Avatar size={2} name="Tony Ward" onClick={console.log} />
  </Container>
);

const AvatarImageStory: React.FC = () => (
  <Container>
    <Avatar size={0} src={legoman} name="foo" style={styles} />
    <Avatar size={1} src={legoman} name="foo" style={styles} />
    <Avatar
      size={2}
      src={legoman}
      name="foo"
      onClick={console.log}
      style={styles}
    />
    <Avatar
      size={2}
      src={legoman}
      name="foo"
      onClick={console.log}
      useDefaultSrc
      style={styles}
    />
    <Avatar
      size={1}
      src={legoman}
      name="foo"
      onClick={console.log}
      useDefaultSrc
      style={styles}
    />
    <Avatar
      size={0}
      src={legoman}
      name="foo"
      onClick={console.log}
      useDefaultSrc
    />
    <Avatar size={0} src={'/some-error-path.jpg'} name="Lego Man" />
    <Avatar size={1} src={'/some-error-path.jpg'} name="Lego Man" />
    <Avatar size={2} src={'/some-error-path.jpg'} name="Lego Man" />
  </Container>
);

const AvatarsWithBadges: React.FC = () => (
  <Container>
    <Avatar size={0} name="Tony Ward" onClick={console.log} style={styles}>
      <AvatarBadge isVisible />
    </Avatar>
    <Avatar size={1} name="Tony Ward" onClick={console.log} style={styles}>
      <AvatarBadge count={2} />
    </Avatar>
    <Avatar
      size={1}
      name="Tony Ward"
      onClick={console.log}
      style={styles}
      useDefaultSrc
    >
      <AvatarBadge count={2} />
    </Avatar>
    <Avatar size={2} name="Tony Ward" src={legoman} onClick={console.log}>
      <AvatarBadge count={4} />
    </Avatar>
  </Container>
);

storiesOf('Components/Avatar', module)
  .add('Letters', () => <AvatarTextStory />, {
    readme: { content: defaultMd },
  })
  .add('Images', () => <AvatarImageStory />, {
    readme: { content: defaultMd },
  })
  .add('Badges', () => <AvatarsWithBadges />, {
    readme: { content: badgesMd },
  });
