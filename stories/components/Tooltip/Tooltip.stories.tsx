import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Button } from '../../../src/components/Button';
import { Tooltip } from '../../../src/components/Tooltip';
import { Container } from '../../storyComponents/Container';
import md from './default.md';

const TooltipStory: React.FunctionComponent = () => (
  <React.Fragment>
    <Container
      containerStyles={{
        // Give the tooltip enough room when `placement` is "top"
        paddingTop: '5rem',
        paddingBottom: '5rem',
      }}
    >
      <Tooltip
        title={text('title', 'Chroma tooltip!')}
        placement={select(
          'placement',
          [
            'top-start',
            'top',
            'top-end',
            'right-start',
            'right',
            'right-end',
            'bottom-end',
            'bottom',
            'bottom-start',
            'left-end',
            'left',
            'left-start',
          ],
          'bottom'
        )}
      >
        <Button variant="outlined">Mouse over to see a tooltip</Button>
      </Tooltip>
    </Container>
  </React.Fragment>
);

storiesOf('Components/Tooltip', module).add('Default', () => <TooltipStory />, {
  readme: {
    content: md,
  },
});
