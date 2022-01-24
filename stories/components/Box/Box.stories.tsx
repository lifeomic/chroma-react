import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Box } from '../../../src/components/Box';
import { Button } from '../../../src/components/Button';
import md from './default.md';
import { boolean, select } from '@storybook/addon-knobs';
import { ItemBox } from './ItemBox';
import selectSpacing from './selectSpacing';
import selectColor from './selectColor';

const containerGroup = 'Container Box';

const BoxStory: React.FC = () => {
  const [itemBoxes, setItemBoxes] = React.useState([null, null, null]);

  const direction = select(
    'direction',
    { undefined: undefined, 'row (default)': 'row', column: 'column' },
    undefined,
    containerGroup
  );

  const align = select(
    'align',
    {
      undefined: undefined,
      'stretch (default)': 'stretch',
      baseline: 'baseline',
      center: 'center',
      'flex-start': 'flex-start',
      'flex-end': 'flex-end',
    },
    undefined,
    containerGroup
  );

  const justify = select(
    'justify',
    {
      undefined: undefined,
      'flex-start (default)': 'flex-start',
      center: 'center',
      'space-between': 'space-between',
      'space-evenly': 'space-evenly',
      'flex-end': 'flex-end',
    },
    undefined,
    containerGroup
  );

  const height = selectSpacing('height', containerGroup);
  const width = selectSpacing('width', containerGroup);
  const fullHeight = boolean('fullHeight', true, containerGroup);
  const fullWidth = boolean('fullWidth', true, containerGroup);

  const margin = selectSpacing('margin', containerGroup);
  const padding = selectSpacing('padding', containerGroup, 4);
  const gap = selectSpacing('gap', containerGroup, 2);

  const borderRadius = boolean('borderRadius', true, containerGroup);

  const color = selectColor('color', containerGroup);
  const bgColor = selectColor('bgColor', containerGroup, 'grey.300');

  const handleAddItemBox = () =>
    setItemBoxes((prevBoxes: any) => {
      prevBoxes.push(null);
      return [...prevBoxes];
    });

  const handleRemoveItemBox = () =>
    setItemBoxes((prevBoxes: any) => {
      if (prevBoxes.length >= 1) prevBoxes.pop();
      return [...prevBoxes];
    });

  return (
    <Box margin={1} direction="column" padding={1} height={50}>
      <Box margin={0.5}>Container Box</Box>
      <Box fullHeight fullWidth align="baseline">
        <Box
          direction={direction}
          align={align}
          justify={justify}
          height={height}
          width={width}
          fullHeight={fullHeight}
          fullWidth={fullWidth}
          gap={gap}
          margin={margin}
          padding={padding}
          color={color}
          bgColor={bgColor}
          borderRadius={borderRadius}
        >
          {itemBoxes.map((_, index) => (
            <ItemBox key={index} count={index} />
          ))}
        </Box>
      </Box>
      <Box padding={1}>
        <Box margin={2}>
          <Button variant="outlined" onClick={handleAddItemBox}>
            Add Item Box
          </Button>
        </Box>
        <Box margin={2}>
          <Button variant="outlined" onClick={handleRemoveItemBox}>
            Remove Item Box
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

storiesOf('Layout/Box', module).add('Default', () => <BoxStory />, {
  readme: { content: md },
});
