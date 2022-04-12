import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { Text } from '../Text';

export const SmallTileContentStylesKey = 'ChromaSmallTileContent';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      height: theme.pxToRem(77),
    },
    text: {
      fontWeight: theme.typography.fontWeightBold,
      letterSpacing: '0.4px',
      wordBreak: 'break-word',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      lineHeight: 1.66,
    },
    fullHeight: {
      height: '100%',
    },
  }),
  { name: SmallTileContentStylesKey }
);

export interface SmallTileContentOwnProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
  text?: string;
  fullHeight?: boolean;
}

export type SmallTileContentClasses = GetClasses<typeof useStyles>;

export interface SmallTileContentProps extends SmallTileContentOwnProps {}

export const SmallTileContent = React.forwardRef<
  HTMLDivElement,
  SmallTileContentProps
>(({ fullHeight = false, className, children, text, ...rootProps }, ref) => {
  const classes = useStyles({});

  return (
    <div
      ref={ref}
      className={clsx(
        classes.root,
        fullHeight && classes.fullHeight,
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
});
