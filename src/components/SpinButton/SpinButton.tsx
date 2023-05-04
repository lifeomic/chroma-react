import * as React from 'react';
import clsx from 'clsx';
import { ChevronUp, ChevronDown } from '@lifeomic/chromicons';

import { makeStyles } from '../../styles';
import { Box } from '../Box';
import { IconButton } from '../IconButton';

export const SpinButtonStylesKey = 'ChromaSpinButton';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      alignItems: 'center',
      borderRadius: theme.pxToRem(4),
      color: theme.palette.common.white,
      cursor: 'pointer',
      display: 'inline-flex',
      whiteSpace: 'nowrap',
      margin: 0,
    },
    button: {
      borderRadius: theme.pxToRem(8),
      padding: theme.spacing(0, 0.5),
      '&:hover, &:focus': {
        background: theme.palette.graphite[50],
      },
    },
    size0: {
      '& > svg': {
        width: theme.pxToRem(24),
        height: theme.pxToRem(18),
      },
    },
  }),
  { name: SpinButtonStylesKey }
);

export interface SpinButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  onDecrement: (
    event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ) => void;
  onIncrement: (
    event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ) => void;
  ref?: React.Ref<HTMLDivElement>;
  decrementDisabled?: boolean;
  incrementDisabled?: boolean;
}

export const SpinButton = React.forwardRef<HTMLDivElement, SpinButtonProps>(
  (props, ref) => {
    const {
      onDecrement,
      onIncrement,
      decrementDisabled = false,
      incrementDisabled = false,
      ...rootProps
    } = props;
    const classes = useStyles({});
    return (
      <Box
        ref={ref}
        className={clsx(classes.root)}
        gap={0.125}
        direction="column"
        tabIndex={0}
        {...rootProps}
      >
        <IconButton
          type="button"
          className={clsx(classes.size0, classes.button)}
          icon={ChevronUp}
          aria-label="Up"
          tabIndex={-1}
          onClick={onIncrement}
          disabled={incrementDisabled}
        ></IconButton>
        <IconButton
          type="button"
          className={clsx(classes.size0, classes.button)}
          icon={ChevronDown}
          aria-label="Down"
          tabIndex={-1}
          onClick={onDecrement}
          disabled={decrementDisabled}
        ></IconButton>
      </Box>
    );
  }
);
