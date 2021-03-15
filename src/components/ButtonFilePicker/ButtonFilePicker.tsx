import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { generateUniqueId } from '../_private/UniqueId';
import { ButtonProps } from '../Button';
import 'focus-visible';

export const ButtonFilePickerStylesKey = 'ChromaButtonFilePicker';

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
      transition:
        'background-color 0.25s ease, color 0.25s ease, opacity 0.25s ease',
      userSelect: 'none',
      '&:hover, &:focus': {
        backgroundColor: theme.palette.primary[900],
        outline: 'none',
      },
      '&.focus.focus-visible, &:focus-within': {
        boxShadow: theme.boxShadows.focusVisible,
      },
    },
    inverse: {
      '&.focus.focus-visible, &:focus-within': {
        boxShadow: theme.boxShadows.focusVisibleInverse,
      },
    },
    rootDisabled: {
      cursor: 'default',
      pointerEvents: 'none',
      backgroundColor: theme.palette.primary.main,
      opacity: 0.44,
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
    },
    containedInverseDisabled: {
      backgroundColor: 'rgba(255, 255, 255, 0.45)',
      opacity: 1,
      color: theme.palette.text.secondary,
    },
    outlined: {
      backgroundColor: 'transparent',
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      transition: 'border 0.25s ease, color 0.25s ease',
      '&:hover, &:focus': {
        backgroundColor: 'transparent',
        border: `1px solid ${theme.palette.primary[900]}`,
        color: theme.palette.primary[900],
      },
    },
    outlinedDisabled: {
      backgroundColor: 'transparent',
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      opacity: 0.44,
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
    },
    outlinedInverseDisabled: {
      color: 'rgba(255, 255, 255, 0.45)',
      opacity: 1,
      borderColor: 'rgba(255, 255, 255, 0.45)',
    },
    text: {
      backgroundColor: 'transparent',
      border: 'unset',
      color: theme.palette.primary.main,
      transition: 'color 0.25s ease',
      '&:hover, &:focus': {
        backgroundColor: 'transparent',
        color: theme.palette.primary[900],
      },
    },
    textDisabled: {
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
      opacity: 0.44,
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
    },
    textInverseDisabled: {
      color: theme.palette.common.white,
      opacity: 0.44,
    },
    fullWidth: {
      width: '100%',
    },
    icon: {
      width: theme.spacing(2),
      height: theme.spacing(2),
      marginRight: theme.spacing(1),
    },
    input: {
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: 0,
      height: '100%',
      width: '100%',
      cursor: 'pointer',
    },
    disabled: {
      cursor: 'not-allowed',
    },
  }),
  { name: ButtonFilePickerStylesKey }
);

export type ButtonFilePickerClasses = GetClasses<typeof useStyles>;

export interface ButtonFilePickerProps {
  accept?: string;
  allowMultipleSelection?: boolean;
  children?: React.ReactNode;
  className?: string;
  color?: ButtonProps['color'];
  disabled?: boolean;
  fullWidth?: ButtonProps['fullWidth'];
  icon?: ButtonProps['icon'];
  id?: string;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  variant?: ButtonProps['variant'];
}

export const ButtonFilePicker = React.forwardRef<
  HTMLLabelElement,
  ButtonFilePickerProps
>(
  (
    {
      accept,
      allowMultipleSelection = false,
      children,
      className,
      color = 'default',
      disabled = false,
      fullWidth,
      icon: Icon,
      id: providedId,
      onChange,
      variant = 'contained',
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({});
    const [id] = React.useState<string>(
      () => providedId || generateUniqueId('filePicker-')
    );

    return (
      <label
        ref={ref}
        className={clsx(
          classes.root,
          // Variant classes
          {
            [classes.outlined]: variant === 'outlined',
            [classes.text]: variant === 'text',
          },
          // Variant + Color combination classes
          {
            [classes.containedInverse]:
              variant === 'contained' && color === 'inverse',
            [classes.outlinedInverse]:
              variant === 'outlined' && color === 'inverse',
            [classes.textInverse]: variant === 'text' && color === 'inverse',
          },
          color === 'inverse' && classes.inverse,
          // Root disabled class
          disabled && classes.rootDisabled,
          // Variant + Color Disabled combination classes
          {
            [classes.outlinedDisabled]:
              disabled && variant === 'outlined' && color === 'default',
            [classes.outlinedInverseDisabled]:
              disabled && variant === 'outlined' && color === 'inverse',
            [classes.textDisabled]:
              disabled && variant === 'text' && color === 'default',
            [classes.textInverseDisabled]:
              disabled && variant === 'text' && color === 'inverse',
            [classes.containedInverseDisabled]:
              disabled && variant === 'contained' && color === 'inverse',
          },
          fullWidth && classes.fullWidth,
          className
        )}
        htmlFor={id}
        {...rootProps}
      >
        {!!Icon && <Icon role="img" aria-hidden className={classes.icon} />}
        {children}
        <input
          id={id}
          disabled={disabled}
          tabIndex={0}
          className={clsx(classes.input, disabled && classes.disabled)}
          type="file"
          accept={accept}
          onChange={onChange}
          multiple={allowMultipleSelection}
        />
      </label>
    );
  }
);
