import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Button } from '../../../src/components/Button';
import { Chip } from '../../../src/components/Chip';
import { Container } from '../../storyComponents/Container';
import defaultMd from './default.md';

const defaultChips = [
  { id: 'PHC', text: 'Precision Health Cloud' },
  { id: 'J1', text: 'JupiterOne' },
  { id: 'LX', text: 'LifeExtend' },
  { id: 'CNT', text: 'Connect' },
];

const ChipStory: React.FC = () => {
  const [chips, setChips] = React.useState([...defaultChips]);

  const getDeleteHandler = (id: string) => () => {
    setChips(chips.filter((c) => c.id !== id));
  };
  const handleReset = () => setChips([...defaultChips]);

  const disableDelete = boolean('disableDelete', false);

  return (
    <Container>
      <div style={{ padding: 30 }}>
        {chips.map((chip) => (
          <Chip
            key={chip.id}
            label={chip.text}
            disableDelete={disableDelete}
            onDelete={getDeleteHandler(chip.id)}
          />
        ))}
        {!disableDelete && (
          <div style={{ padding: '20px 0' }}>
            <Button onClick={handleReset}>Reset List</Button>
          </div>
        )}
      </div>
    </Container>
  );
};

storiesOf('Components/Chip', module).add('Default', () => <ChipStory />, {
  readme: { content: defaultMd },
});
