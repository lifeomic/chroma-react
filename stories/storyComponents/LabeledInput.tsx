import * as React from 'react';
import { makeStyles } from '../../src/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(4),
  },
  input: {
    appearance: 'none',
    borderRadius: '0.25rem',
    border: `1px solid ${theme.palette.black[100]}`,
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
    boxShadow: `
      0 1px 3px 0 ${theme.hexToRgba(theme.palette.common.black, 0.1)}, 
      0 1px 2px 0 ${theme.hexToRgba(theme.palette.common.black, 0.06)}
    `,
  },
  label: {
    display: 'block',
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
    color: theme.palette.black[700],
  },
}));

interface LabeledInputProps {
  label?: string;
  value?: string;
  type?: string;
  onChange?: (e: any) => void;
}

export const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  value,
  type = 'number',
  onChange,
}) => {
  const classes = useStyles({});
  return (
    <div className={classes.root}>
      <label htmlFor={label} className={classes.label}>
        {label}
      </label>
      <input
        type={type}
        name={label}
        id={label}
        value={value}
        onInput={onChange}
        className={classes.input}
      />
    </div>
  );
};
