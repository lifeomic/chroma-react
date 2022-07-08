import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { List, ListItem, ListGroupHeading } from '../../../src/components/List';
import { Edit, HelpCircle, Trash } from '@lifeomic/chromicons';
import { Container } from '../../storyComponents/Container';
import defaultMd from './default.md';
import { Avatar } from '../../../src/components/Avatar';
import { Text } from '../../../src/components/Text';

const ListStory: React.FC = () => {
  return (
    <>
      <Container containerStyles={{ flex: 1, flexFlow: 'column' }}>
        <Container containerStyles={{ paddingBottom: 0 }}>
          <Text marginBottom={false} weight="bold">
            Clickable
          </Text>
        </Container>

        <Container containerStyles={{ paddingTop: 0 }}>
          <Container>
            <List
              aria-label="Chroma List options children"
              items={[
                <ListGroupHeading key={0}>First Section</ListGroupHeading>,
                <ListItem onClick={() => console.log('Option1')} key={1}>
                  Option1
                </ListItem>,
                <ListItem
                  text="Option2"
                  secondaryText="This is secondary text"
                  onClick={() => console.log('Option2')}
                  key={2}
                />,
                <ListGroupHeading key={3}>Second Section</ListGroupHeading>,
                <ListItem onClick={() => console.log('Option1')} key={4}>
                  Option1
                </ListItem>,
                <ListItem onClick={() => console.log('Option2')} key={5}>
                  Option2
                </ListItem>,
              ]}
            />
          </Container>

          <Container>
            <List
              aria-label="Chroma List options children"
              items={[
                <ListGroupHeading key={0}>First Section</ListGroupHeading>,
                <ListItem
                  onClick={() => console.log('Option1')}
                  key={1}
                  icon={Edit}
                >
                  Option1
                </ListItem>,
                <ListItem
                  text="Option2"
                  secondaryText="This is secondary text"
                  onClick={() => console.log('Option2')}
                  key={2}
                  icon={HelpCircle}
                />,
                <ListGroupHeading key={3}>Second Section</ListGroupHeading>,
                <ListItem
                  onClick={() => console.log('Option1')}
                  key={4}
                  icon={Trash}
                >
                  Option1
                </ListItem>,
                <ListItem
                  onClick={() => console.log('Option2')}
                  key={5}
                  icon={HelpCircle}
                >
                  Option2
                </ListItem>,
              ]}
            />
          </Container>

          <Container>
            <List
              aria-label="Chroma List options children"
              items={[
                <ListGroupHeading key={0}>First Section</ListGroupHeading>,
                <ListItem
                  onClick={() => console.log('Option1')}
                  key={1}
                  avatar={<Avatar name="Haley" useDefaultSrc />}
                >
                  Option1
                </ListItem>,
                <ListItem
                  text="Option2"
                  secondaryText="This is secondary text"
                  onClick={() => console.log('Option2')}
                  key={2}
                  avatar={<Avatar name="Haley" useDefaultSrc />}
                />,
                <ListGroupHeading key={3}>Second Section</ListGroupHeading>,
                <ListItem
                  onClick={() => console.log('Option1')}
                  key={4}
                  avatar={<Avatar name="Haley" useDefaultSrc />}
                >
                  Option1
                </ListItem>,
                <ListItem
                  onClick={() => console.log('Option2')}
                  key={5}
                  avatar={<Avatar name="Haley" useDefaultSrc />}
                >
                  Option2
                </ListItem>,
              ]}
            />
          </Container>
        </Container>

        <Container containerStyles={{ paddingBottom: 0 }}>
          <Text marginBottom={false} weight="bold">
            Readonly
          </Text>
        </Container>

        <Container containerStyles={{ paddingTop: 0 }}>
          <Container>
            <List
              aria-label="Chroma List options children"
              items={[
                <ListGroupHeading key={0}>First Section</ListGroupHeading>,
                <ListItem key={1}>Option1</ListItem>,
                <ListItem
                  text="Option2"
                  secondaryText="This is secondary text"
                  key={2}
                />,
                <ListGroupHeading key={3}>Second Section</ListGroupHeading>,
                <ListItem key={4}>Option1</ListItem>,
                <ListItem key={5}>Option2</ListItem>,
              ]}
            />
          </Container>

          <Container>
            <List
              aria-label="Chroma List options children"
              items={[
                <ListGroupHeading key={0}>First Section</ListGroupHeading>,
                <ListItem key={1} icon={Edit}>
                  Option1
                </ListItem>,
                <ListItem
                  text="Option2"
                  secondaryText="This is secondary text"
                  key={2}
                  icon={HelpCircle}
                />,
                <ListGroupHeading key={3}>Second Section</ListGroupHeading>,
                <ListItem key={4} icon={Trash}>
                  Option1
                </ListItem>,
                <ListItem key={5} icon={HelpCircle}>
                  Option2
                </ListItem>,
              ]}
            />
          </Container>

          <Container>
            <List
              aria-label="Chroma List options children"
              items={[
                <ListGroupHeading key={0}>First Section</ListGroupHeading>,
                <ListItem
                  key={1}
                  avatar={<Avatar name="Haley" useDefaultSrc />}
                >
                  Option1
                </ListItem>,
                <ListItem
                  text="Option2"
                  secondaryText="This is secondary text"
                  key={2}
                  avatar={<Avatar name="Haley" useDefaultSrc />}
                />,
                <ListGroupHeading key={3}>Second Section</ListGroupHeading>,
                <ListItem
                  key={4}
                  avatar={<Avatar name="Haley" useDefaultSrc />}
                >
                  Option1
                </ListItem>,
                <ListItem
                  key={5}
                  avatar={<Avatar name="Haley" useDefaultSrc />}
                >
                  Option2
                </ListItem>,
              ]}
            />
          </Container>
        </Container>
      </Container>
    </>
  );
};

storiesOf('Components/List', module).add('Default', () => <ListStory />, {
  readme: { content: defaultMd },
});
