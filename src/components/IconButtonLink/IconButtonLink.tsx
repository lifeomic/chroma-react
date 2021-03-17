import clsx from 'clsx';
import * as React from 'react';
import { LinkProps } from 'react-router-dom';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { LinkOrExternalLink } from '../_private/LinkOrExternalLink';
import { IconButtonProps } from '../IconButton';
import 'focus-visible';

export const IconButtonLinkStylesKey = 'ChromaIconButtonLink';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      alignItems: 'center',
      backgroundColor: 'transparent',
      border: 0,
      color: theme.palette.black[500],
      cursor: 'pointer',
      display: 'inline-flex',
      flex: '0 0 auto',
      justifyContent: 'center',
      margin: 0,
      outline: 'none',
      padding: theme.spacing(1.5),
      position: 'relative',
      transition: 'color 0.25s ease, opacity 0.25s ease',
      userSelect: 'none',
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.primary.main,
      },
      '&:focus': {
        borderRadius: '9999px',
        color: theme.palette.primary.main,
        outline: 'none',
        '&.focus-visible': {
          boxShadow: theme.boxShadows.focusVisible,
        },
      },
    },
    inverse: {
      background: 'transparent',
      color: theme.palette.common.white,
      '&:hover': {
        color: theme.palette.common.white,
        opacity: 0.85,
      },
      '&:focus': {
        color: theme.palette.common.white,
        opacity: 0.75,
        '&.focus-visible': {
          boxShadow: theme.boxShadows.focusVisibleInverse,
        },
      },
    },
    size0: {
      '& > svg': {
        width: 18,
        height: 18,
      },
    },
    size1: {
      '& > svg': {
        width: 24,
        height: 24,
      },
    },
    paddingTop0: {
      paddingTop: 0,
    },
    paddingTop1: {
      paddingTop: theme.spacing(0.5),
    },
    paddingTop2: {
      paddingTop: theme.spacing(1),
    },
    paddingTop3: {
      paddingTop: theme.spacing(1.5),
    },
    paddingBottom0: {
      paddingBottom: 0,
    },
    paddingBottom1: {
      paddingBottom: theme.spacing(0.5),
    },
    paddingBottom2: {
      paddingBottom: theme.spacing(1),
    },
    paddingBottom3: {
      paddingBottom: theme.spacing(1.5),
    },
    paddingLeft0: {
      paddingLeft: 0,
    },
    paddingLeft1: {
      paddingLeft: theme.spacing(0.5),
    },
    paddingLeft2: {
      paddingLeft: theme.spacing(1),
    },
    paddingLeft3: {
      paddingLeft: theme.spacing(1.5),
    },
    paddingRight0: {
      paddingRight: 0,
    },
    paddingRight1: {
      paddingRight: theme.spacing(0.5),
    },
    paddingRight2: {
      paddingRight: theme.spacing(1),
    },
    paddingRight3: {
      paddingRight: theme.spacing(1.5),
    },
  }),
  { name: IconButtonLinkStylesKey }
);

export type IconButtonLinkClasses = GetClasses<typeof useStyles>;

export interface IconButtonLinkProps extends LinkProps {
  ['aria-label']: IconButtonProps['aria-label'];
  color?: IconButtonProps['color'];
  icon: IconButtonProps['icon'];
  size?: IconButtonProps['size'];
  paddingTop?: IconButtonProps['paddingTop'];
  paddingBottom?: IconButtonProps['paddingBottom'];
  paddingLeft?: IconButtonProps['paddingLeft'];
  paddingRight?: IconButtonProps['paddingRight'];
}

export const IconButtonLink = React.forwardRef<
  HTMLAnchorElement,
  IconButtonLinkProps
>(
  (
    {
      'aria-label': ariaLabel,
      className,
      color,
      icon: Icon,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      rel,
      size,
      target,
      to,
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({});

    return (
      <LinkOrExternalLink
        innerRef={ref}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
        className={clsx(
          classes.root,
          { [classes.size0]: size === 0 },
          {
            [classes.inverse]: color === 'inverse',
          },
          {
            [classes.paddingTop0]: paddingTop === 0,
            [classes.paddingTop1]: paddingTop === 1,
            [classes.paddingTop2]: paddingTop === 2,
            [classes.paddingTop3]: paddingTop === 3,
          },
          {
            [classes.paddingBottom0]: paddingBottom === 0,
            [classes.paddingBottom1]: paddingBottom === 1,
            [classes.paddingBottom2]: paddingBottom === 2,
            [classes.paddingBottom3]: paddingBottom === 3,
          },
          {
            [classes.paddingLeft0]: paddingLeft === 0,
            [classes.paddingLeft1]: paddingLeft === 1,
            [classes.paddingLeft2]: paddingLeft === 2,
            [classes.paddingLeft3]: paddingLeft === 3,
          },
          {
            [classes.paddingRight0]: paddingRight === 0,
            [classes.paddingRight1]: paddingRight === 1,
            [classes.paddingRight2]: paddingRight === 2,
            [classes.paddingRight3]: paddingRight === 3,
          },
          className
        )}
        to={to}
        {...rootProps}
      >
        <Icon role="img" aria-hidden />
      </LinkOrExternalLink>
    );
  }
);
