import clsx from 'clsx';
import * as React from 'react';
import { fontSizes, makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';

export const TextStylesKey = 'ChromaText';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      color: theme.palette.black.main,
      fontFamily: theme.typography.fontFamilyPrimary,
      margin: 0,
    },
    inverseColor: {
      color: theme.palette.common.white,
    },
    negativeColor: {
      color: theme.palette.negative.main,
    },
    positiveColor: {
      color: theme.palette.positive.main,
    },
    headline: {
      fontSize: theme.pxToRem(20),
      letterSpacing: theme.pxToRem(0.5),
      lineHeight: theme.pxToRem(28),
    },
    body: {
      fontSize: fontSizes.body,
      lineHeight: theme.pxToRem(26),
    },
    subbody: {
      fontSize: theme.pxToRem(14),
      lineHeight: theme.pxToRem(22),
    },
    table: {
      fontSize: theme.pxToRem(14),
      lineHeight: theme.pxToRem(22),
    },
    caption: {
      fontSize: fontSizes.caption,
      letterSpacing: theme.pxToRem(0.5),
      lineHeight: theme.pxToRem(20),
    },
    button: {
      fontSize: fontSizes.button,
      letterSpacing: theme.pxToRem(0.5),
    },
    tooltip: {
      fontSize: fontSizes.tooltip,
      letterSpacing: theme.pxToRem(0.5),
      lineHeight: theme.pxToRem(18),
    },
    code: {
      fontFamily: theme.typography.fontFamilyMonospace,
      fontSize: fontSizes.body,
      lineHeight: theme.pxToRem(26),
      letterSpacing: 'normal',
    },
    familySecondary: {
      fontFamily: theme.typography.fontFamilySecondary,
    },
    familyMonospace: {
      fontFamily: theme.typography.fontFamilyMonospace,
    },
    weightLight: {
      fontWeight: theme.typography.fontWeightLight,
    },
    weightRegular: {
      fontWeight: theme.typography.fontWeightRegular,
    },
    weightBold: {
      fontWeight: theme.typography.fontWeightBold,
    },
    marginBottom: {
      marginBottom: theme.spacing(1),
    },
    alignCenter: {
      textAlign: 'center',
    },
    alignJustify: {
      textAlign: 'justify',
    },
    alignLeft: {
      textAlign: 'left',
    },
    alignRight: {
      textAlign: 'right',
    },
  }),
  { name: TextStylesKey }
);

export interface TextOwnProps extends React.HTMLAttributes<HTMLElement> {
  align?: 'center' | 'justify' | 'left' | 'right';
  children?: React.ReactNode;
  size?:
    | 'headline'
    | 'body'
    | 'subbody'
    | 'table'
    | 'caption'
    | 'button'
    | 'tooltip'
    | 'code';
  family?: 'primary' | 'secondary' | 'monospace';
  weight?: 'light' | 'regular' | 'bold';
  marginBottom?: boolean;
  /**
   * There may be cases where the text needs to be an `h1` tag. The `useH1` prop can
   * be provided to set this. Be careful not to have too many `h1` tags for
   * accessibility reasons.
   */
  useH1?: boolean;
  color?: 'default' | 'inverse' | 'negative' | 'positive';
}

export type TextClasses = GetClasses<typeof useStyles>;

export interface TextProps extends TextOwnProps {}

/**
 * Component for styling text. Replaces p and h[1-6]
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Text/Text.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Text/Text.stories.tsx)
 */
export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      align,
      children,
      className,
      color = 'default',
      family = 'primary',
      marginBottom,
      size = 'body',
      useH1 = false,
      weight = 'regular',
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({});

    const Component = useH1 ? 'h1' : size === 'headline' ? 'h6' : 'p';

    return (
      <Component
        className={clsx(
          classes.root,
          {
            [classes.headline]: size === 'headline',
            [classes.body]: size === 'body',
            [classes.subbody]: size === 'subbody',
            [classes.table]: size === 'table',
            [classes.caption]: size === 'caption',
            [classes.button]: size === 'button',
            [classes.tooltip]: size === 'tooltip',
            [classes.code]: size === 'code',
          },
          {
            [classes.familySecondary]: family === 'secondary',
            [classes.familyMonospace]: family === 'monospace',
          },
          {
            [classes.weightLight]: weight === 'light',
            [classes.weightRegular]: weight === 'regular',
            [classes.weightBold]: weight === 'bold' || size === 'button',
          },
          {
            [classes.inverseColor]: color === 'inverse',
            [classes.negativeColor]: color === 'negative',
            [classes.positiveColor]: color === 'positive',
          },
          marginBottom && classes.marginBottom,
          {
            [classes.alignCenter]: align === 'center',
            [classes.alignJustify]: align === 'justify',
            [classes.alignLeft]: align === 'left',
            [classes.alignRight]: align === 'right',
          },
          className
        )}
        ref={ref}
        {...rootProps}
      >
        {children}
      </Component>
    );
  }
);
