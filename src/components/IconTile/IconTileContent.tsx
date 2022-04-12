import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles/index';
import { GetClasses } from '../../typeUtils';
import { Text } from '../Text';

export const IconTileContentStylesKey = 'ChromaIconTileContent';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      width: '100%',
      height: '57%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      marginTop: theme.spacing(1),
      fontSize: theme.pxToRem(18),
      fontWeight: theme.typography.fontWeightBold,
      letterSpacing: 0.25,
    },
    caption: {
      color: theme.palette.black[500],
      textTransform: 'uppercase',
      letterSpacing: 2,
    },
  }),
  { name: IconTileContentStylesKey }
);

export interface IconTileContentOwnProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  caption?: string;
  children?: React.ReactNode;
  text?: string;
}

export type IconTileContentClasses = GetClasses<typeof useStyles>;

export interface IconTileContentProps extends IconTileContentOwnProps {}

export const IconTileContent = React.forwardRef<
  HTMLDivElement,
  IconTileContentProps
>(({ children, className, text, caption, ...rootProps }, ref) => {
  const classes = useStyles({});

  return (
    <div ref={ref} className={clsx(classes.root, className)} {...rootProps}>
      {!!text && <Text className={classes.text}>{text}</Text>}
      {!!caption && (
        <Text size="caption" className={classes.caption}>
          {caption}
        </Text>
      )}
      {children}
    </div>
  );
});
