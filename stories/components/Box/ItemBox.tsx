import * as React from 'react';
import { Box } from '../../../src/components/Box';
import { boolean } from '@storybook/addon-knobs';
import selectSpacing from './selectSpacing';
import selectColor from './selectColor';

export const ItemBox = ({ count }: { count: number }) => {
  const knobGroup = 'Item Boxes';

  const height = selectSpacing('height', knobGroup);
  const width = selectSpacing('width', knobGroup);

  const fullHeight = boolean('fullHeight', false, knobGroup);
  const fullWidth = boolean('fullWidth', false, knobGroup);

  const margin = selectSpacing('margin', knobGroup, 2);
  const marginTop = selectSpacing('marginTop', knobGroup);
  const marginBottom = selectSpacing('marginBottom', knobGroup);
  const marginLeft = selectSpacing('marginLeft', knobGroup);
  const marginRight = selectSpacing('marginRight', knobGroup);
  const marginX = selectSpacing('marginX', knobGroup);
  const marginY = selectSpacing('marginY', knobGroup);

  const padding = selectSpacing('padding', knobGroup, 5);
  const paddingTop = selectSpacing('paddingTop', knobGroup);
  const paddingBottom = selectSpacing('paddingBottom', knobGroup);
  const paddingLeft = selectSpacing('paddingLeft', knobGroup);
  const paddingRight = selectSpacing('paddingRight', knobGroup);
  const paddingX = selectSpacing('paddingX', knobGroup);
  const paddingY = selectSpacing('paddingY', knobGroup);
  const color = selectColor('color', knobGroup, 'text.dark');
  const bgColor = selectColor('bgColor', knobGroup, 'common.white');

  const borderRadius = boolean('borderRadius', true, knobGroup);

  return (
    <Box
      height={height}
      width={width}
      fullHeight={fullHeight}
      fullWidth={fullWidth}
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginX={marginX}
      marginY={marginY}
      padding={padding}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingX={paddingX}
      paddingY={paddingY}
      color={color}
      bgColor={bgColor}
      borderRadius={borderRadius}
    >
      Item Box {count + 1}
    </Box>
  );
};
