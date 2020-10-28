import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { Text } from '../Text';

export const SmallTileFooterStylesKey = 'ChromaSmallTileFooter';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      padding: theme.spacing(1.375, 1.375, 1.375, 1.5),
      borderTop: `1px solid ${theme.palette.divider}`,
    },
    text: {
      color: theme.palette.black[400],
      letterSpacing: 'unset',
      lineHeight: 1.5,
    },
    justifyStart: {
      justifyContent: 'flex-start',
    },
    justifyEnd: {
      justifyContent: 'flex-end',
    },
    justifyCenter: {
      justifyContent: 'center',
    },
    justifyBetween: {
      justifyContent: 'space-between',
    },
  }),
  { name: SmallTileFooterStylesKey }
);

export interface SmallTileFooterOwnProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  text?: string;
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
}

export type SmallTileFooterClasses = GetClasses<typeof useStyles>;

export interface SmallTileFooterProps extends SmallTileFooterOwnProps {}

export const SmallTileFooter = React.forwardRef<
  HTMLDivElement,
  SmallTileFooterProps
>(
  (
    { children, className, justify = 'space-between', text, ...rootProps },
    ref
  ) => {
    const classes = useStyles({});

    return (
      <div
        ref={ref}
        className={clsx(
          classes.root,
          {
            [classes.justifyBetween]: justify === 'space-between',
            [classes.justifyCenter]: justify === 'center',
            [classes.justifyEnd]: justify === 'flex-end',
            [classes.justifyStart]: justify === 'flex-start',
          },
          className
        )}
        {...rootProps}
      >
        {!!text && (
          <Text size="caption" className={classes.text}>
            {text}
          </Text>
        )}
        {children}
      </div>
    );
  }
);
