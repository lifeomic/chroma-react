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

type Sides = [
  top: string | undefined,
  right: string | undefined,
  bottom: string | undefined,
  left: string | undefined
];

/** Splits on whitespace outside parentheses so `calc(1px + 2px)` stays whole. */
const splitCssValue = (value: string) => {
  const parts: string[] = [];
  let current = '';
  let depth = 0;
  for (const char of value.trim()) {
    if (char === '(') depth += 1;
    if (char === ')') depth -= 1;
    if (/\s/.test(char) && depth === 0) {
      if (current) parts.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  if (current) parts.push(current);
  return parts;
};

/** Expands a CSS box shorthand ("8px", "0 auto", "1px 2px 3px") into sides. */
export const expandShorthand = (value: string | undefined): Sides => {
  if (value === undefined) return [undefined, undefined, undefined, undefined];
  const parts = splitCssValue(value);
  const [top, right = top, bottom = top, left = right] = parts;
  return parts.length > 4
    ? [value, value, value, value]
    : [top, right, bottom, left];
};

/**
 * Builds the inline style for the spacing, sizing, and color props. Follows
 * the precedence the old stylesheet had: falsy values (including `0`) are
 * ignored, axis props (`marginX`) win over side props (`marginLeft`), which win
 * over the shorthand (`margin`), and `fullWidth`/`fullHeight` win over
 * `width`/`height`.
 *
 * `margin` and `padding` are always emitted as longhands: React does not
 * reapply an unchanged shorthand when a longhand next to it is removed, so
 * mixing the two would zero a side whenever a side prop is dropped.
 */
const getBoxStyle = (theme: Theme, props: BoxProps): React.CSSProperties => {
  const spacing = (value: string | number | undefined) =>
    stringOrThemeSpacing(theme, value);
  const sides = (
    all: string | number | undefined,
    top: string | number | undefined,
    right: string | number | undefined,
    bottom: string | number | undefined,
    left: string | number | undefined,
    x: string | number | undefined,
    y: string | number | undefined
  ): Sides => {
    const result = expandShorthand(all ? spacing(all) : undefined);
    if (top) result[0] = spacing(top);
    if (right) result[1] = spacing(right);
    if (bottom) result[2] = spacing(bottom);
    if (left) result[3] = spacing(left);
    if (x) result[1] = result[3] = spacing(x);
    if (y) result[0] = result[2] = spacing(y);
    return result;
  };
  const style: React.CSSProperties = {};

  if (props.height && !props.fullHeight) style.height = spacing(props.height);
  if (props.width && !props.fullWidth) style.width = spacing(props.width);

  const [marginTop, marginRight, marginBottom, marginLeft] = sides(
    props.margin,
    props.marginTop,
    props.marginRight,
    props.marginBottom,
    props.marginLeft,
    props.marginX,
    props.marginY
  );
  if (marginTop) style.marginTop = marginTop;
  if (marginRight) style.marginRight = marginRight;
  if (marginBottom) style.marginBottom = marginBottom;
  if (marginLeft) style.marginLeft = marginLeft;

  const [paddingTop, paddingRight, paddingBottom, paddingLeft] = sides(
    props.padding,
    props.paddingTop,
    props.paddingRight,
    props.paddingBottom,
    props.paddingLeft,
    props.paddingX,
    props.paddingY
  );
  if (paddingTop) style.paddingTop = paddingTop;
  if (paddingRight) style.paddingRight = paddingRight;
  if (paddingBottom) style.paddingBottom = paddingBottom;
  if (paddingLeft) style.paddingLeft = paddingLeft;

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
