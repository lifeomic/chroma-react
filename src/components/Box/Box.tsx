import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { warning } from '../../utils';
import colorOptions from './colorOptions';

export const BoxStylesKey = 'ChromaBox';

export type BoxClasses = GetClasses<typeof useStyles>;

export interface BoxProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  ref?: React.Ref<HTMLDivElement>;
  className?: string;
  flexWrap?: boolean;
  align?:
    | 'stretch'
    | 'baseline'
    | 'center'
    | 'start'
    | 'flex-start'
    | 'end'
    | 'flex-end';
  direction?: 'row' | 'column';
  justify?:
    | 'center'
    | 'flex-start'
    | 'space-between'
    | 'space-evenly'
    | 'flex-end';
  height?: number | string;
  width?: number | string;
  fullHeight?: boolean;
  fullWidth?: boolean;
  margin?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginX?: number | string;
  marginY?: number | string;
  padding?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingX?: number | string;
  paddingY?: number | string;
  borderRadius?: boolean;
  color?: string;
  bgColor?: string;
}

export const useStyles = makeStyles<BoxProps>(
  (theme) => {
    const stringOrThemeSpacing = (value: string | number | undefined) => {
      if (typeof value === 'string') return value;
      if (typeof value === 'number') return theme.spacing(value);
    };

    const stringOrThemeColor = (value?: string) => {
      if (!value) return;
      const palette: any = theme.palette;

      const valueParts = value.split('.');
      if (valueParts.length > 1) {
        if (colorOptions.includes(value)) {
          return palette[valueParts[0]][valueParts[1]];
        } else {
          warning(true, `Box color property ${value} is invalid`);
        }
      }

      return value;
    };

    return {
      root: { display: 'flex' },
      alignBaseline: { alignItems: 'baseline' },
      alignCenter: { alignItems: 'center' },
      alignStart: { alignItems: 'start' },
      alignFlexStart: { alignItems: 'flex-start' },
      alignEnd: { alignItems: 'end' },
      alignFlexEnd: { alignItems: 'flex-end' },
      directionRow: { flexDirection: 'row' },
      directionColumn: { flexDirection: 'column' },
      justifyStart: { justifyContent: 'flex-start' },
      justifyEnd: { justifyContent: 'flex-end' },
      justifyEvenly: { justifyContent: 'space-evenly' },
      justifyBetween: { justifyContent: 'space-between' },
      justifyCenter: { justifyContent: 'center' },
      height: { height: ({ height }) => stringOrThemeSpacing(height) },
      width: { width: ({ width }) => stringOrThemeSpacing(width) },
      fullWidth: { width: '100%' },
      fullHeight: { height: '100%' },
      margin: { margin: ({ margin }) => stringOrThemeSpacing(margin) },
      marginLeft: {
        marginLeft: ({ marginLeft }) => stringOrThemeSpacing(marginLeft),
      },
      marginRight: {
        marginRight: ({ marginRight }) => stringOrThemeSpacing(marginRight),
      },
      marginTop: {
        marginTop: ({ marginTop }) => stringOrThemeSpacing(marginTop),
      },
      marginBottom: {
        marginBottom: ({ marginBottom }) => stringOrThemeSpacing(marginBottom),
      },
      marginX: {
        marginLeft: ({ marginX }) => stringOrThemeSpacing(marginX),
        marginRight: ({ marginX }) => stringOrThemeSpacing(marginX),
      },
      marginY: {
        marginTop: ({ marginY }) => stringOrThemeSpacing(marginY),
        marginBottom: ({ marginY }) => stringOrThemeSpacing(marginY),
      },
      padding: { padding: ({ padding }) => stringOrThemeSpacing(padding) },
      paddingLeft: {
        paddingLeft: ({ paddingLeft }) => stringOrThemeSpacing(paddingLeft),
      },
      paddingRight: {
        paddingRight: ({ paddingRight }) => stringOrThemeSpacing(paddingRight),
      },
      paddingTop: {
        paddingTop: ({ paddingTop }) => stringOrThemeSpacing(paddingTop),
      },
      paddingBottom: {
        paddingBottom: ({ paddingBottom }) =>
          stringOrThemeSpacing(paddingBottom),
      },
      paddingX: {
        paddingLeft: ({ paddingX }) => stringOrThemeSpacing(paddingX),
        paddingRight: ({ paddingX }) => stringOrThemeSpacing(paddingX),
      },
      paddingY: {
        paddingTop: ({ paddingY }) => stringOrThemeSpacing(paddingY),
        paddingBottom: ({ paddingY }) => stringOrThemeSpacing(paddingY),
      },
      borderRadius: { borderRadius: theme.shape.borderRadius },
      color: { color: ({ color }) => stringOrThemeColor(color) },
      bgColor: {
        backgroundColor: ({ bgColor }) => stringOrThemeColor(bgColor),
      },
    };
  },
  { name: BoxStylesKey }
);

export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const {
    children,
    align,
    direction,
    justify,
    height,
    width,
    fullHeight,
    fullWidth,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginY,
    marginX,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingY,
    paddingX,
    borderRadius,
    color,
    bgColor,
    className,
    ...rootProps
  } = props;

  const classes = useStyles(props);

  return (
    <div
      ref={ref}
      className={clsx(
        classes.root,
        {
          [classes.directionRow]: direction === 'row',
          [classes.directionColumn]: direction === 'column',
        },
        {
          [classes.alignBaseline]: align === 'baseline',
          [classes.alignCenter]: align === 'center',
          [classes.alignStart]: align === 'start',
          [classes.alignFlexStart]: align === 'flex-start',
          [classes.alignEnd]: align === 'end',
          [classes.alignFlexEnd]: align === 'flex-end',
        },
        {
          [classes.justifyBetween]: justify === 'space-between',
          [classes.justifyEnd]: justify === 'flex-end',
          [classes.justifyEvenly]: justify === 'space-evenly',
          [classes.justifyStart]: justify === 'flex-start',
          [classes.justifyCenter]: justify === 'center',
        },
        height && classes.height,
        width && classes.width,
        fullWidth && classes.fullWidth,
        fullHeight && classes.fullHeight,
        margin && classes.margin,
        marginTop && classes.marginTop,
        marginBottom && classes.marginBottom,
        marginLeft && classes.marginLeft,
        marginRight && classes.marginRight,
        marginX && classes.marginX,
        marginY && classes.marginY,
        padding && classes.padding,
        paddingTop && classes.paddingTop,
        paddingBottom && classes.paddingBottom,
        paddingLeft && classes.paddingLeft,
        paddingRight && classes.paddingRight,
        paddingX && classes.paddingX,
        paddingY && classes.paddingY,
        borderRadius && classes.borderRadius,
        color && classes.color,
        bgColor && classes.bgColor,
        className
      )}
      {...rootProps}
    >
      {children}
    </div>
  );
});
