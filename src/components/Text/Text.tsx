import clsx from 'clsx';
import * as React from 'react';
import { fontSizes, makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';

export const TextStylesKey = 'ChromaText';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      color: theme.palette.black.main,
      fontFamily: theme.typography.fontFamily,
      margin: 0,
    },
    inverseColor: {
      color: theme.palette.common.white,
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
  }),
  { name: TextStylesKey }
);

export interface TextOwnProps extends React.HTMLAttributes<HTMLElement> {
  size?:
    | 'headline'
    | 'body'
    | 'subbody'
    | 'table'
    | 'caption'
    | 'button'
    | 'tooltip'
    | 'code';
  family?: 'default' | 'monospace';
  weight?: 'light' | 'regular' | 'bold';
  marginBottom?: boolean;
  useH1?: boolean;
  color?: 'default' | 'inverse';
}

export type TextClasses = GetClasses<typeof useStyles>;

export interface TextProps extends TextOwnProps {}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      children,
      className,
      color = 'default',
      family = 'default',
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
            [classes.familyMonospace]: family === 'monospace',
          },
          {
            [classes.weightLight]: weight === 'light',
            [classes.weightRegular]: weight === 'regular',
            [classes.weightBold]: weight === 'bold' || size === 'button',
          },
          {
            [classes.inverseColor]: color === 'inverse',
          },
          marginBottom && classes.marginBottom,
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
