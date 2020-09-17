import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Avatar } from '../../../src/components/Avatar';
import { Button } from '../../../src/components/Button';
import {
  Popover,
  PopoverActions,
  PopoverRenderProps,
} from '../../../src/components/Popover';
import { Container } from '../../storyComponents/Container';
import defaultMd from './default.md';

const Popover2PlaygroundStory: React.FC = () => {
  return (
    <>
      <Container containerStyles={{ paddingBottom: '8rem' }}>
        <Popover
          aria-label="Popover"
          anchorElement={
            <Button style={{ marginRight: '1rem' }}>Open Popover</Button>
          }
        >
          <p>Popover inner content only</p>
        </Popover>
        <Popover
          anchorElement={<Avatar name="Tony Ward" />}
          aria-label="Popover"
          className="foo-bar-baz"
        >
          {({ popover }: PopoverRenderProps) => (
            <>
              <div style={{ display: 'flex', padding: '1rem' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginRight: '0.5rem',
                  }}
                >
                  <Avatar name="Tony Ward" />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <p style={{ padding: 0, margin: 0 }}>
                    tony.ward@lifeomic.com
                  </p>
                  <p style={{ padding: 0, margin: 0 }}>Invitations: none</p>
                </div>
              </div>
              <PopoverActions justify="center">
                <Button onClick={() => popover.hide()}>Sign Out</Button>
              </PopoverActions>
            </>
          )}
        </Popover>
      </Container>
    </>
  );
};

storiesOf('Components/Popover', module).add(
  'Default',
  () => <Popover2PlaygroundStory />,
  { readme: { content: defaultMd } }
);
