import clsx from 'clsx';
import * as React from 'react';
import { LinkProps } from 'react-router-dom';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { LinkOrExternalLink } from '../_private/LinkOrExternalLink';
import { ButtonProps } from '../Button';
import 'focus-visible';

export const ButtonLinkStylesKey = 'ChromaButtonLink';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      alignItems: 'center',
      background: theme.palette.primary.main,
      border: '0',
      borderRadius: theme.pxToRem(4),
      color: theme.palette.common.white,
      cursor: 'pointer',
      display: 'inline-flex',
      whiteSpace: 'nowrap',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.button.fontSize,
      fontWeight: theme.typography.fontWeightBold,
      justifyContent: 'center',
      letterSpacing: theme.pxToRem(0.5),
      lineHeight: 1.4,
      margin: 0,
      minHeight: theme.pxToRem(32),
      minWidth: theme.pxToRem(64),
      outline: 'none',
      paddingBottom: theme.pxToRem(8),
      paddingLeft: theme.pxToRem(11),
      paddingRight: theme.pxToRem(11),
      paddingTop: theme.pxToRem(8),
      position: 'relative',
      textDecoration: 'none',
      transition:
        'background-color 0.25s ease, color 0.25s ease, opacity 0.25s ease',
      userSelect: 'none',
      '&:hover, &:focus': {
        textDecoration: 'none',
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary[800],
        outline: 'none',
      },
      '&:focus.focus-visible': {
        boxShadow: theme.boxShadows.focusVisible,
      },
    },
    containedInverse: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.primary.main,
        opacity: 0.85,
      },
      '&:focus': {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.primary.main,
        opacity: 0.75,
      },
      '&:focus.focus-visible': {
        boxShadow: theme.boxShadows.focusVisibleInverse,
      },
    },
    outlined: {
      backgroundColor: 'transparent',
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      transition: 'border 0.25s ease, color 0.25s ease',
      '&:hover, &:focus': {
        backgroundColor: 'transparent',
        border: `1px solid ${theme.palette.primary[800]}`,
        color: theme.palette.primary[800],
      },
    },
    outlinedInverse: {
      borderColor: theme.palette.common.white,
      color: theme.palette.common.white,
      '&:hover': {
        color: theme.palette.common.white,
        opacity: 0.85,
        borderColor: 'rgba(255, 255, 255, 0.85)',
      },
      '&:focus': {
        color: theme.palette.common.white,
        opacity: 0.75,
        borderColor: 'rgba(255, 255, 255, 0.75)',
      },
      '&:focus.focus-visible': {
        boxShadow: theme.boxShadows.focusVisibleInverse,
      },
    },
    text: {
      backgroundColor: 'transparent',
      border: 'unset',
      color: theme.palette.primary.main,
      transition: 'color 0.25s ease',
      '&:hover, &:focus': {
        backgroundColor: 'transparent',
        color: theme.palette.primary[800],
      },
    },
    textInverse: {
      color: theme.palette.common.white,
      '&:hover': {
        color: theme.palette.common.white,
        opacity: 0.85,
      },
      '&:focus': {
        color: theme.palette.common.white,
        opacity: 0.75,
      },
      '&:focus.focus-visible': {
        boxShadow: theme.boxShadows.focusVisibleInverse,
      },
    },
    fullWidth: {
      width: '100%',
    },
    icon: {
      width: theme.spacing(2),
      height: theme.spacing(2),
      marginRight: theme.spacing(1),
    },

    disabled: {
      pointerEvents: 'none',
      color: theme.palette.grey[900],
      borderColor: theme.palette.grey[900],
    },
    disabledContained: {
      pointerEvents: 'none',
      color: theme.palette.grey[100],
      background: theme.palette.grey[900],
    },
    disabledInverse: {
      pointerEvents: 'none',
      color: theme.palette.grey[100],
      borderColor: theme.palette.grey[100],
    },
    disabledContainedInverse: {
      pointerEvents: 'none',
      color: theme.palette.grey[900],
      background: theme.palette.grey[100],
    },
  }),
  { name: ButtonLinkStylesKey }
);

export type ButtonLinkClasses = GetClasses<typeof useStyles>;

export interface ButtonLinkProps extends LinkProps {
  color?: ButtonProps['color'];
  disabled?: ButtonProps['disabled'];
  fullWidth?: ButtonProps['fullWidth'];
  icon?: ButtonProps['icon'];
  variant?: ButtonProps['variant'];
}

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      className,
      children,
      color,
      disabled,
      fullWidth,
      icon: Icon,
      rel,
      target,
      to,
      variant,
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({});

    variant = variant || 'contained';

    return (
      <LinkOrExternalLink
        disabled={disabled}
        innerRef={ref}
        target={target}
        rel={rel}
        className={clsx(
          classes.root,
          {
            [classes.outlined]: variant === 'outlined',
            [classes.text]: variant === 'text',
          },
          {
            [classes.containedInverse]:
              variant === 'contained' && color === 'inverse',
            [classes.outlinedInverse]:
              variant === 'outlined' && color === 'inverse',
            [classes.textInverse]: variant === 'text' && color === 'inverse',
          },
          fullWidth && classes.fullWidth,
          disabled &&
            color !== 'inverse' && {
              [classes.disabled]: variant === 'text' || variant === 'outlined',
              [classes.disabledContained]: variant === 'contained',
            },
          disabled &&
            color === 'inverse' && {
              [classes.disabledInverse]:
                variant === 'text' || variant === 'outlined',
              [classes.disabledContainedInverse]: variant === 'contained',
            },
          className
        )}
        to={to}
        {...rootProps}
      >
        {!!Icon && <Icon role="img" aria-hidden className={classes.icon} />}
        {children}
      </LinkOrExternalLink>
    );
  }
);
