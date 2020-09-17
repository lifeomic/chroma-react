import * as React from 'react';
import { Text } from '../../../src/components/Text';
import { makeStyles } from '../../../src/styles';
import { Palette, PaletteItem } from './Palette';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(4),
  },
  grid: {
    display: 'grid',
    gridGap: `${theme.spacing(2)}px`,
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  },
}));

interface PaletteGridProps {
  palettes: PaletteItem[];
  title: string;
}

export const PaletteGrid: React.FunctionComponent<PaletteGridProps> = ({
  title,
  palettes,
}) => {
  const classes = useStyles({});

  return (
    <section className={classes.root}>
      <Text marginBottom>{title}</Text>
      <div className={classes.grid}>
        {palettes.map((palette) => (
          <Palette key={palette.name} palette={palette} />
        ))}
      </div>
    </section>
  );
};
