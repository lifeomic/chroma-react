import { FormControl } from '@mui/material';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Paper } from '../../../src/components/Paper';
import { Container } from '../../storyComponents/Container';
import { makeStyles, Theme } from '../../../src/styles';
import md from './default.md';

const useStyles = makeStyles((theme: Theme) => ({
  formControl: {
    marginBottom: theme.spacing(4),
  },
}));

const PaperStory: React.FC = () => {
  const classes = useStyles({});

  return (
    <Container
      containerStyles={{ display: 'flex', justifyContent: 'space-around' }}
    >
      <Paper padding={select('padding', [0, 1, 2], 2)}>
        <FormControl className={classes.formControl}>asjkdgk</FormControl>
        <p>Your content here</p>
      </Paper>
    </Container>
  );
};
storiesOf('Components/Paper', module).add('Default', () => <PaperStory />, {
  readme: { content: md },
});
