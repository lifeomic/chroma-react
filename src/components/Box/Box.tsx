import clsx from 'clsx';
import * as React from 'react';
import { makeStyles, Theme, useTheme } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { warning } from '../../utils';
import colorOptions from '../../colors/colorOptions';

export const BoxStylesKey = 'ChromaBox';

export type BoxClasses = GetClasses<typeof useStyles>;

export interface BoxProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  ref?: React.Ref<HTMLDivElement>;
  children?: React.ReactNode;
  className?: string;
  flexChildren?: boolean;
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
  gap?: number | string;
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

const stringOrThemeSpacing = (
  theme: Theme,
  value: string | number | undefined
) => {
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return theme.spacing(value);
};

const stringOrThemeColor = (theme: Theme, value?: string) => {
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

// Spacing, sizing, and color props are applied as inline styles rather than
// prop-driven JSS rules: a prop-driven rule makes JSS attach a separate
// stylesheet to every Box instance, and inserting each one gets slower as the
// page grows. Their classes stay as empty markers for consumers that target
// them.
export const useStyles = makeStyles<BoxProps>(
  (theme) => ({
    root: { display: 'flex' },
    alignBaseline: { alignItems: 'baseline' },
    alignCenter: { alignItems: 'center' },
    alignStart: { alignItems: 'start' },
    flexChildren: {
      '& > *': {
        flex: 1,
      },
    },
    flexWrap: { flexWrap: 'wrap' },
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
    height: {},
    width: {},
    fullWidth: { width: '100%' },
    fullHeight: { height: '100%' },
    margin: {},
    marginLeft: {},
    marginRight: {},
    marginTop: {},
    marginBottom: {},
    marginX: {},
    marginY: {},
    padding: {},
    paddingLeft: {},
    paddingRight: {},
    paddingTop: {},
    paddingBottom: {},
    paddingX: {},
    paddingY: {},
    gap: {},
    borderRadius: { borderRadius: theme.shape.borderRadius },
    color: {},
    bgColor: {},
  }),
  { name: BoxStylesKey }
);

/**
 * Builds the inline style for the spacing, sizing, and color props. Follows
 * the precedence the old stylesheet had: falsy values (including `0`) are
 * ignored, axis props (`marginX`) win over side props (`marginLeft`), which win
 * over the shorthand (`margin`), and `fullWidth`/`fullHeight` win over
 * `width`/`height`.
 */
const getBoxStyle = (theme: Theme, props: BoxProps): React.CSSProperties => {
  const spacing = (value: string | number | undefined) =>
    stringOrThemeSpacing(theme, value);
  const style: React.CSSProperties = {};

  if (props.height && !props.fullHeight) style.height = spacing(props.height);
  if (props.width && !props.fullWidth) style.width = spacing(props.width);

  if (props.margin) style.margin = spacing(props.margin);
  if (props.marginLeft) style.marginLeft = spacing(props.marginLeft);
  if (props.marginRight) style.marginRight = spacing(props.marginRight);
  if (props.marginTop) style.marginTop = spacing(props.marginTop);
  if (props.marginBottom) style.marginBottom = spacing(props.marginBottom);
  if (props.marginX) {
    style.marginLeft = spacing(props.marginX);
    style.marginRight = spacing(props.marginX);
  }
  if (props.marginY) {
    style.marginTop = spacing(props.marginY);
    style.marginBottom = spacing(props.marginY);
  }

  if (props.padding) style.padding = spacing(props.padding);
  if (props.paddingLeft) style.paddingLeft = spacing(props.paddingLeft);
  if (props.paddingRight) style.paddingRight = spacing(props.paddingRight);
  if (props.paddingTop) style.paddingTop = spacing(props.paddingTop);
  if (props.paddingBottom) style.paddingBottom = spacing(props.paddingBottom);
  if (props.paddingX) {
    style.paddingLeft = spacing(props.paddingX);
    style.paddingRight = spacing(props.paddingX);
  }
  if (props.paddingY) {
    style.paddingTop = spacing(props.paddingY);
    style.paddingBottom = spacing(props.paddingY);
  }

  if (props.gap) style.gap = spacing(props.gap);
  if (props.color) style.color = stringOrThemeColor(theme, props.color);
  if (props.bgColor) {
    style.backgroundColor = stringOrThemeColor(theme, props.bgColor);
  }

  return style;
};

/**
The Box component is used as a presentational wrapper. It provides a div with
basic CSS and
[flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
options as props.

### Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Box/Box.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Box/Box.stories.tsx)

 */
export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const {
    children,
    align,
    direction,
    flexChildren,
    flexWrap,
    gap,
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
    style,
    ...rootProps
  } = props;

  const classes = useStyles(props);
  const theme = useTheme();

  return (
    <div
      ref={ref}
      className={clsx(
        classes.root,
        {
          [classes.flexChildren]: flexChildren,
        },
        {
          [classes.flexWrap]: flexWrap,
        },
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
        gap && classes.gap,
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
      style={{ ...getBoxStyle(theme, props), ...style }}
      {...rootProps}
    >
      {children}
    </div>
  );
});
