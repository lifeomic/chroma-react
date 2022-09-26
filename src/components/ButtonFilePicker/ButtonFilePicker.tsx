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
      background: theme.palette.primary.main,
      border: `1px solid transparent`,
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
      textOverflow: 'ellipsis',
      transition:
        'background-color 0.25s ease, color 0.25s ease, opacity 0.25s ease',
      userSelect: 'none',
      verticalAlign: 'middle',
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
      backgroundColor: theme.hexToRgba(theme.palette.common.white, 0.45),
      opacity: 1,
      color: theme.palette.text.secondary,
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
    outlinedDisabled: {
      backgroundColor: 'transparent',
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      opacity: 0.44,
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
    },
    outlinedInverseDisabled: {
      color: theme.hexToRgba(theme.palette.common.white, 0.45),
      opacity: 1,
      borderColor: theme.hexToRgba(theme.palette.common.white, 0.45),
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
      height: theme.spacing(2),
      marginRight: theme.spacing(1),
      position: 'relative',
      top: theme.pxToRem(-1),
      verticalAlign: 'middle',
      width: theme.spacing(2),
    },
    input: {
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: 0,
      height: '100%',
      width: '100%',
      cursor: 'pointer',
      '&::-webkit-file-upload-button:hover': {
        cursor: 'pointer',
      },
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

/**
An element that appears as a Button component, but is used for file selection.

### A Direct Button Extension

This component is a direct extension of the Button component. The following
props are also available to Button File Picker:

- variant
- children
- icon
- color
- disabled
- className
- fullWidth

### Accessibility

- The label and input utilize the `for` and `id`.
- The input can receive focus via the `Tab` key.
- Pressing `Space` or `Enter` triggers the click action.

### Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/ButtonFilePicker/ButtonFilePicker.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/ButtonFilePicker/ButtonFilePicker.stories.tsx)
 */
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
