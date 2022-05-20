import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { IconButton } from '../../../src/components/IconButton';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuGroupHeading,
} from '../../../src/components/Menu';
import {
  ChevronDown,
  Edit,
  HelpCircle,
  MoreHorizontal,
  Trash,
} from '@lifeomic/chromicons';
import { Container } from '../../storyComponents/Container';
import defaultMd from './default.md';
import menuButtonMd from './menuButton.md';

const MenuStory: React.FC = () => {
  return (
    <>
      <Container>
        <Menu
          aria-label="Chroma menu options"
          anchorElement={
            <IconButton aria-label="Click to open menu" icon={MoreHorizontal} />
          }
          items={[
            <MenuItem
              text="Request Download Link"
              icon={HelpCircle}
              onClick={() => console.log('Request Download Link')}
              key={0}
            />,
            <MenuItem
              text="Edit"
              icon={Edit}
              onClick={() => console.log('Edit')}
              key={1}
            />,
            <MenuItem
              text="Delete"
              icon={Trash}
              onClick={() => console.log('Delete')}
              key={2}
            />,
          ]}
        />
        <Container>
          <Menu
            aria-label="Chroma menu options text"
            anchorElement={
              <IconButton
                aria-label="Click to open text only menu"
                icon={MoreHorizontal}
              />
            }
            items={[
              <MenuItem
                text="Request Download Link"
                onClick={() => console.log('Request Download Link')}
                key={0}
              />,
              <MenuItem
                text="Edit"
                onClick={() => console.log('Edit')}
                key={1}
              />,
              <MenuItem
                text="Delete"
                onClick={() => console.log('Delete')}
                key={2}
              />,
            ]}
          />
        </Container>
        <Container>
          <Menu
            aria-label="Chroma menu options children"
            anchorElement={
              <IconButton
                aria-label="Click to open children only menu"
                icon={MoreHorizontal}
              />
            }
            items={[
              <MenuItem onClick={() => console.log('Option1')} key={0}>
                Option1
              </MenuItem>,
              <MenuItem onClick={() => console.log('Option2')} key={1}>
                Option2
              </MenuItem>,
            ]}
          />
        </Container>
        <Container>
          <Menu
            aria-label="Chroma menu options children"
            anchorElement={
              <IconButton
                aria-label="Click to open children only menu"
                icon={MoreHorizontal}
              />
            }
            items={[
              <MenuGroupHeading>First Section</MenuGroupHeading>,
              <MenuItem onClick={() => console.log('Option1')} key={0}>
                Option1
              </MenuItem>,
              <MenuItem onClick={() => console.log('Option2')} key={1}>
                Option2
              </MenuItem>,
              <MenuGroupHeading>Second Section</MenuGroupHeading>,
              <MenuItem onClick={() => console.log('Option1')} key={0}>
                Option1
              </MenuItem>,
              <MenuItem onClick={() => console.log('Option2')} key={1}>
                Option2
              </MenuItem>,
            ]}
          />
        </Container>
        <Container>
          <Menu
            aria-label="Chroma menu options children"
            anchorElement={
              <IconButton
                aria-label="Click to open children only menu"
                icon={MoreHorizontal}
              />
            }
            items={[
              <MenuGroupHeading>First Section</MenuGroupHeading>,
              <MenuItem
                onClick={() => console.log('Option1')}
                key={0}
                icon={Edit}
              >
                Option1
              </MenuItem>,
              <MenuItem
                onClick={() => console.log('Option2')}
                key={1}
                icon={HelpCircle}
              >
                Option2
              </MenuItem>,
              <MenuGroupHeading>Second Section</MenuGroupHeading>,
              <MenuItem
                onClick={() => console.log('Option1')}
                key={0}
                icon={Trash}
              >
                Option1
              </MenuItem>,
              <MenuItem
                onClick={() => console.log('Option2')}
                key={1}
                icon={HelpCircle}
              >
                Option2
              </MenuItem>,
            ]}
          />
        </Container>
      </Container>
    </>
  );
};

const MenuButtonStory: React.FC = () => (
  <Container>
    <Menu
      aria-label="Menu Button example"
      anchorElement={
        <MenuButton variant="text" icon={Edit} trailingIcon={ChevronDown}>
          User Actions
        </MenuButton>
      }
      items={[
        <MenuItem onClick={() => console.log('Option1')} key={0}>
          Send Invite
        </MenuItem>,
        <MenuItem onClick={() => console.log('Option2')} key={1}>
          Delete User
        </MenuItem>,
      ]}
    />
  </Container>
);

storiesOf('Components/Menu', module)
  .add('Default', () => <MenuStory />, {
    readme: { content: defaultMd },
  })
  .add('Menu Button', () => <MenuButtonStory />, {
    readme: { content: menuButtonMd },
  });
