import * as React from 'react';
import { Text } from '../../../src/components/Text';
import { newMakeStyles } from '../../../src/styles';
import { ColorValue } from './ColorValue';

export interface PaletteItem {
  name: string;
  values: {
    [key: string]: string;
  };
}

const useStyles = newMakeStyles((theme) => ({
  palette: {
    borderRadius: theme.spacing(2),
    overflow: 'hidden',
  },
}));

interface PaletteProps {
  palette: PaletteItem;
}

export const Palette: React.FunctionComponent<PaletteProps> = ({ palette }) => {
  const { classes } = useStyles();
  const {
    main,
    primary,
    light,
    dark,
    contrastText,
    ...colorMap
  } = palette.values;

  return (
    <article>
      <header>
        <Text marginBottom>{palette.name}</Text>
      </header>
      <div className={classes.palette}>
        {Boolean(main) && <ColorValue isMain value={main} name="main" />}
        {Boolean(primary) && (
          <ColorValue isMain value={primary} name="primary" />
        )}
        {Boolean(light) && <ColorValue value={light} name="light" />}
        {Boolean(dark) && <ColorValue value={dark} name="dark" />}
        {Object.keys(colorMap).map((key) => {
          return <ColorValue key={key} value={colorMap[key]} name={key} />;
        })}
      </div>
    </article>
  );
};
