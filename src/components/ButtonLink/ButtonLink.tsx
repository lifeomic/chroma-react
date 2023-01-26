import clsx from 'clsx';
import * as React from 'react';
import { LinkProps } from 'react-router-dom';
import { newMakeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { LinkOrExternalLink } from '../_private/LinkOrExternalLink';
import { ButtonProps } from '../Button';
import 'focus-visible';

export const ButtonLinkStylesKey = 'ChromaButtonLink';

export const useStyles = newMakeStyles(
  (theme) => ({
    root: {
      background: theme.palette.primary.main,
      border: `${theme.pxToRem(1)} solid transparent`,
      borderRadius: theme.pxToRem(4),
      color: theme.palette.common.white,
      cursor: 'pointer',
      display: 'inline-block',
      whiteSpace: 'nowrap',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.button.fontSize,
      fontWeight: theme.typography.fontWeightBold,
      letterSpacing: theme.pxToRem(0.5),
      lineHeight: theme.pxToRem(19),
      margin: 0,
      maxHeight: theme.pxToRem(35),
      minWidth: theme.pxToRem(64),
      outline: 'none',
      overflow: 'hidden',
      paddingBottom: theme.pxToRem(7),
      paddingLeft: theme.pxToRem(11),
      paddingRight: theme.pxToRem(11),
      paddingTop: theme.pxToRem(7),
      position: 'relative',
      textAlign: 'center',
      textDecoration: 'none',
      textOverflow: 'ellipsis',
      transition:
        'background-color 0.25s ease, color 0.25s ease, opacity 0.25s ease',
      userSelect: 'none',
      verticalAlign: 'middle',
      '&:hover, &:focus': {
        textDecoration: 'none',
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary[900],
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
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      transition: 'border 0.25s ease, color 0.25s ease',
      '&:hover, &:focus': {
        backgroundColor: 'transparent',
        borderColor: theme.palette.primary[900],
        color: theme.palette.primary[900],
      },
    },
    outlinedInverse: {
      borderColor: theme.palette.common.white,
      color: theme.palette.common.white,
      '&:hover': {
        color: theme.palette.common.white,
        opacity: 0.85,
        borderColor: theme.hexToRgba(theme.palette.common.white, 0.85),
      },
      '&:focus': {
        color: theme.palette.common.white,
        opacity: 0.75,
        borderColor: theme.hexToRgba(theme.palette.common.white, 0.75),
      },
      '&:focus.focus-visible': {
        boxShadow: theme.boxShadows.focusVisibleInverse,
      },
    },
    text: {
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
      transition: 'color 0.25s ease',
      '&:hover, &:focus': {
        backgroundColor: 'transparent',
        color: theme.palette.primary[900],
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
    containedNegative: {
      backgroundColor: theme.palette.negative.main,
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.negative.dark,
      },
      '&:disabled, &[disabled]': {
        backgroundColor: theme.palette.negative.main,
        color: theme.palette.common.white,
      },
    },
    containedPositive: {
      backgroundColor: theme.palette.positive.main,
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.positive.dark,
      },
      '&:disabled, &[disabled]': {
        backgroundColor: theme.palette.positive.main,
        color: theme.palette.common.white,
      },
    },
    outlinedNegative: {
      borderColor: theme.palette.negative.main,
      color: theme.palette.negative.main,
      '&:hover': {
        borderColor: theme.palette.negative.dark,
        color: theme.palette.negative.dark,
      },
      '&:disabled, &[disabled]': {
        borderColor: theme.palette.negative.main,
        color: theme.palette.negative.main,
      },
    },
    outlinedPositive: {
      borderColor: theme.palette.positive.main,
      color: theme.palette.positive.main,
      '&:hover': {
        borderColor: theme.palette.positive.dark,
        color: theme.palette.positive.dark,
      },
      '&:disabled, &[disabled]': {
        borderColor: theme.palette.positive.main,
        color: theme.palette.positive.main,
      },
    },
    textNegative: {
      color: theme.palette.negative.main,
      '&:hover': {
        color: theme.palette.negative.dark,
      },
      '&:disabled': {
        color: theme.palette.negative.main,
      },
    },
    textPositive: {
      color: theme.palette.positive.main,
      '&:hover': {
        color: theme.palette.positive.dark,
      },
      '&:disabled': {
        color: theme.palette.positive.main,
      },
    },
    fullWidth: {
      width: '100%',
    },
    icon: {
      height: theme.spacing(2),
      marginRight: theme.spacing(1),
      position: 'relative',
      top: theme.pxToRem(-1),
      verticalAlign: 'middle',
      width: theme.spacing(2),
    },
    trailingIcon: {
      marginRight: 0,
      marginLeft: theme.spacing(1),
    },
    disabled: {
      opacity: 0.44,
      pointerEvents: 'none',
    },
    disabledContained: {
      opacity: 0.44,
      pointerEvents: 'none',
    },
    disabledInverse: {
      opacity: 0.44,
      pointerEvents: 'none',
    },
    disabledContainedInverse: {
      color: theme.palette.text.secondary,
      opacity: 0.44,
      pointerEvents: 'none',
    },
  }),
  { name: ButtonLinkStylesKey }
);

export type ButtonLinkClasses = GetClasses<typeof useStyles>;

export interface ButtonLinkProps extends LinkProps {
  children?: React.ReactNode;
  color?: ButtonProps['color'];
  disabled?: ButtonProps['disabled'];
  fullWidth?: ButtonProps['fullWidth'];
  icon?: ButtonProps['icon'];
  trailingIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  variant?: ButtonProps['variant'];
}

/**
 * An element that appears as a Button component, but is a link. It has the same
 * properties as Button.
 *
 * **Requirement:** This component has a dependency on
 * react-router-dom. It must be wrapped by a `Router` of some sort.
 *
 * **Note:** All required props for Icon Button are also required for Icon Button
 * Link.
 *
 * ### Props
 *
 * The following props are available to Button Link:
 *
 * - className
 * - color
 * - disabled
 * - fullWidth
 * - icon
 * - trailingIcon
 * - variant
 *
 * ### Accessibility
 *
 * - The element is an `<a>` tag.
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/ButtonLink/ButtonLink.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/ButtonLink/ButtonLink.stories.tsx)
 */
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
      trailingIcon: TrailingIcon,
      variant,
      ...rootProps
    },
    ref
  ) => {
    const { classes } = useStyles();

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
            [classes.containedNegative]:
              variant === 'contained' && color === 'negative',
            [classes.outlinedNegative]:
              variant === 'outlined' && color === 'negative',
            [classes.textNegative]: variant === 'text' && color === 'negative',
            [classes.containedPositive]:
              variant === 'contained' && color === 'positive',
            [classes.outlinedPositive]:
              variant === 'outlined' && color === 'positive',
            [classes.textPositive]: variant === 'text' && color === 'positive',
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
        {!!TrailingIcon && (
          <TrailingIcon
            role="img"
            aria-hidden
            className={clsx(classes.icon, classes.trailingIcon)}
          />
        )}
      </LinkOrExternalLink>
    );
  }
);
