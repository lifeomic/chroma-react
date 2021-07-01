import clsx from 'clsx';
import * as React from 'react';
import {
  BaseFormElement,
  buildDescribedBy,
  errorFor,
  FormErrorMessage,
  FormHelpMessage,
  helpFor,
} from '../_private/forms';
import { ButtonUnstyled } from '../ButtonUnstyled';
import { generateUniqueId } from '../_private/UniqueId';
import { GetClasses } from '../../typeUtils';
import { makeStyles, useTheme } from '../../styles';
import {
  Popover,
  PopoverItem,
  PopoverList,
  PopoverRenderProps,
} from '../Popover';
import { Tooltip } from '../Tooltip';
import { fade } from '@material-ui/core/styles/colorManipulator';
import 'focus-visible';

export const ColorPickerStylesKey = 'ChromaColorPicker';

export const useStyles = makeStyles(
  (theme) => ({
    root: {},
    label: {
      alignItems: 'center',
      color: theme.palette.black[800],
      display: 'flex',
      fontSize: theme.pxToRem(14),
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(1),
      '&:empty': {
        marginBottom: theme.spacing(0),
      },
    },
    labelIcon: {
      marginLeft: theme.spacing(0.75),
      color: theme.palette.primary.main,
    },
    labelIconInverse: {
      mixBlendMode: 'screen',
    },
    labelSecondary: {
      color: theme.palette.text.hint,
      fontSize: theme.pxToRem(11),
      display: 'inline-block',
      margin: theme.spacing(0, 0.75),
    },
    labelInverse: {
      color: theme.palette.common.white,
      '&$labelSecondary': {
        opacity: 0.9,
      },
    },
    input: {
      backgroundColor: 'rgba(132, 137, 166, 0.15)',
      border: `1px solid transparent`,
      borderRadius: theme.pxToRem(4),
      color: theme.palette.text.primary,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.pxToRem(14),
      minWidth: theme.pxToRem(175),
      lineHeight: 1.25,
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(1.25),
      paddingRight: theme.spacing(1.25),
      paddingTop: theme.spacing(1),
      transition: 'border 0.25s ease',
      '&:focus': {
        outline: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        border: `1px solid rgba(132, 137, 166, 0.45)`,
      },
      '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.625,
      },
      '&:read-only': {
        cursor: 'not-allowed',
        opacity: 0.9,
        '&:focus': {
          backgroundColor: 'rgba(132, 137, 166, 0.15)',
          border: `1px solid transparent`,
        },
      },
      '&::-webkit-input-placeholder': {
        color: theme.palette.black[400],
      },
      '&::-moz-placeholder': {
        color: theme.palette.black[400],
      },
      '&:-ms-input-placeholder': {
        color: theme.palette.black[400],
      },
      '&:-moz-placeholder': {
        color: theme.palette.black[400],
      },
    },
    inputInverse: {
      backgroundColor: 'rgba(230, 231, 237, 0.1)',
      color: theme.palette.common.white,
      '&:focus': {
        backgroundColor: 'rgba(230, 231, 237, 0.1)',
        border: `1px solid rgba(230, 231, 237, 0.55)`,
      },
      '&:read-only': {
        opacity: 1,
        '&:focus': {
          backgroundColor: 'rgba(230, 231, 237, 0.1)',
        },
      },
      '&::-webkit-input-placeholder': {
        color: 'rgba(255, 255, 255, 0.8)',
      },
      '&::-moz-placeholder': {
        color: 'rgba(255, 255, 255, 0.8)',
      },
      '&:-ms-input-placeholder': {
        color: 'rgba(255, 255, 255, 0.8)',
      },
      '&:-moz-placeholder': {
        color: 'rgba(255, 255, 255, 0.8)',
      },
    },
    hasTrailer: {
      marginBottom: theme.spacing(0.5),
    },
    inputContainer: {
      position: 'relative',
      width: 'fit-content',
    },
    inputError: {
      backgroundColor: 'rgba(230, 231, 237, 0.1)',
      border: `1px solid ${theme.palette.error.main}`,
      '&:focus': {
        border: `1px solid ${theme.palette.error.main}`,
      },
    },
    inputErrorInverse: {
      border: `1px solid ${theme.palette.error[700]}`,
    },
    inputFullWidth: {
      width: '100%',
    },
    trailerMessage: {
      marginTop: theme.spacing(0.875),
      marginLeft: 0,
    },
    errorMessage: {
      color: theme.palette.error.main,
      fontSize: theme.typography.caption.fontSize,
      fontWeight: theme.typography.fontWeightBold,
    },
    errorMessageInverse: {
      mixBlendMode: 'color-dodge',
    },
    helpMessage: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.palette.text.hint,
    },
    helpMessageInverse: {
      color: theme.palette.common.white,
    },
    tooltipContainer: {
      display: 'flex',
      outline: 'none',
    },
    valueDisplay: {
      alignItems: 'center',
      display: 'flex',
      height: theme.pxToRem(50),
      justifyContent: 'center',
      position: 'relative',
      '&::after': {
        background: fade(theme.palette.common.black, 0.25),
        bottom: 0,
        content: `''`,
        height: theme.pxToRem(1),
        position: 'absolute',
        width: '100%',
      },
    },
    swatchButton: {
      height: theme.pxToRem(20),
      width: theme.pxToRem(20),
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
    },
    popover: {
      minWidth: 'unset',
    },
    popoverList: {
      display: 'grid',
      gridGap: theme.spacing(1.5),
      gridTemplateColumns: `repeat(6, ${theme.pxToRem(20)})`,
      margin: theme.spacing(2),
      padding: 0,
      '& $color': {
        margin: 0,
      },
      '&:focus': {
        outline: 'none',
      },
      // We use this + a polyfill for older browser
      // to get accessible buttons for keyboard-users.
      // Users will not see these styles unless they use their keyboard
      // to focus the element
      '&:focus.focus-visible': {
        outline: `solid 2px ${theme.palette.primary.main}`,
        outlineOffset: theme.spacing(1),
      },
    },
    popoverItem: {
      padding: 0,
    },
    colorButton: {
      transition: 'transform 0.25s ease-in-out',
      transform: 'scale(1)',
      '&:hover,&:focus': {
        transform: 'scale(1.2)',
      },
    },
    color: {
      boxShadow: 'inset 0 0 3px rgb(38 44 50 / 20%)',
      display: 'block',
      height: theme.pxToRem(20),
      width: theme.pxToRem(20),
    },
    colorCircle: {
      borderRadius: theme.pxToRem(10),
    },
    colorSquare: {
      borderRadius: theme.pxToRem(4),
    },
  }),
  { name: ColorPickerStylesKey }
);

export const isValidHexColor = (color: string) => {
  const hexRegex = new RegExp(/^#[0-9A-F]{6}$/i);
  const shortHandHexRegex = new RegExp(/^#([0-9A-F]{3}){1,2}$/i);
  return hexRegex.test(color) || shortHandHexRegex.test(color);
};

export type ColorPickerClasses = GetClasses<typeof useStyles>;

export interface ColorPickerProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange'> {
  color?: BaseFormElement['color'];
  colorSuggestions?: Array<string>;
  errorMessage?: BaseFormElement['errorMessage'];
  fullWidth?: boolean;
  hasError?: BaseFormElement['hasError'];
  helpMessage?: BaseFormElement['helpMessage'];
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  invalidColorText?: string;
  label?: BaseFormElement['label'];
  onChange?: (color: string) => void;
  secondaryLabel?: string;
  tooltipMessage?: string;
  value?: string;
  variant?: 'square' | 'circle';
}

export const ColorPicker = React.forwardRef<HTMLInputElement, ColorPickerProps>(
  (
    {
      ['aria-label']: ariaLabel,
      className,
      color = 'default',
      colorSuggestions,
      disabled,
      errorMessage,
      fullWidth,
      hasError,
      helpMessage,
      icon: Icon,
      id,
      invalidColorText = 'Invalid Color',
      label,
      name,
      onChange,
      readOnly,
      secondaryLabel,
      tooltipMessage,
      value = '',
      variant = 'square',
      ...rootProps
    },
    ref
  ) => {
    const [colorValue, setColorValue] = React.useState<string>(value);

    const classes = useStyles({});
    const { palette } = useTheme();

    const colors = colorSuggestions?.length
      ? colorSuggestions
      : ([
          palette.red.main,
          palette.red.light,
          palette.orange.main,
          palette.orange.light,
          palette.yellow.main,
          palette.yellow.light,
          palette.green.main,
          palette.green.light,
          palette.blue.main,
          palette.blue.light,
          palette.purple.main,
          palette.purple.light,
          palette.black.main,
          palette.black.light,
          palette.common.white,
        ] as Array<string>);

    const isValidColor = isValidHexColor(colorValue);

    const [uniqueId] = React.useState<string>(
      () => id || name || generateUniqueId('ColorPicker-')
    );

    // istanbul ignore if - not testing dev errors
    if (!label && !ariaLabel && process.env.NODE_ENV === 'development') {
      throw new Error(
        'If a "label" is not provided to ColorPicker, please provide "aria-label".'
      );
    }

    const Color = ({
      className,
      color,
    }: {
      className?: string;
      color: string;
    }) => (
      <span
        className={clsx(
          className,
          classes.color,
          variant === 'circle' && classes.colorCircle,
          variant === 'square' && classes.colorSquare
        )}
        style={{
          backgroundColor: isValidHexColor(color) ? color : '#000000',
        }}
      />
    );

    const handleChange = (color: string) => {
      setColorValue(color);
      // istanbul ignore next - not a great way to test not calling onChange
      onChange?.(color);
    };

    return (
      <div className={clsx(classes.root, className)}>
        {label && (
          <label
            className={clsx(
              classes.label,
              color === 'inverse' && classes.labelInverse
            )}
            htmlFor={uniqueId}
          >
            {label}
            {!!Icon && tooltipMessage && (
              <Tooltip title={tooltipMessage}>
                <span className={classes.tooltipContainer}>
                  <Icon
                    aria-hidden
                    className={clsx(
                      classes.labelIcon,
                      color === 'inverse' && classes.labelIconInverse
                    )}
                    height={16}
                    width={16}
                    role="img"
                  />
                </span>
              </Tooltip>
            )}
            {secondaryLabel && (
              <span
                className={clsx(
                  classes.labelSecondary,
                  color === 'inverse' && classes.labelInverse
                )}
              >
                {secondaryLabel}
              </span>
            )}
          </label>
        )}
        <div
          className={clsx(
            classes.inputContainer,
            fullWidth && classes.inputFullWidth
          )}
        >
          <input
            aria-describedby={buildDescribedBy({
              hasError,
              hasHelpMessage: !!helpMessage,
              uniqueId,
            })}
            aria-label={ariaLabel}
            className={clsx(
              classes.input,
              fullWidth && classes.inputFullWidth,
              hasError && classes.inputError,
              hasError && color === 'inverse' && classes.inputErrorInverse,
              { [classes.inputInverse]: color === 'inverse' }
            )}
            disabled={disabled}
            id={uniqueId}
            name={name}
            onChange={(e) => handleChange(e.target.value)}
            readOnly={readOnly}
            ref={ref}
            type="text"
            value={colorValue}
            {...rootProps}
          />

          <Popover
            anchorElement={
              <ButtonUnstyled
                className={classes.swatchButton}
                aria-label="Pick color"
                disabled={disabled || readOnly}
              >
                <Color color={colorValue} />
              </ButtonUnstyled>
            }
            aria-label="Color Picker"
            className={classes.popover}
          >
            {({ popover }: PopoverRenderProps) => (
              <>
                <div
                  className={classes.valueDisplay}
                  style={{
                    backgroundColor: isValidColor
                      ? value
                      : palette.common.black,
                    color: isValidHexColor(value)
                      ? palette.getContrastText(value)
                      : palette.common.white,
                  }}
                >
                  {isValidColor ? value : invalidColorText}
                </div>

                <PopoverList className={classes.popoverList}>
                  {colors.map((color: string, index: number) => (
                    <PopoverItem className={classes.popoverItem} key={index}>
                      <ButtonUnstyled
                        aria-label={`Pick ${color}`}
                        className={classes.colorButton}
                        onClick={() => {
                          // istanbul ignore next - not a great way to test not calling onChange
                          handleChange?.(color);
                          popover.hide();
                        }}
                      >
                        <Color color={color} />
                      </ButtonUnstyled>
                    </PopoverItem>
                  ))}
                </PopoverList>
              </>
            )}
          </Popover>
        </div>

        {helpMessage && (
          <FormHelpMessage
            color={color}
            className={clsx(
              classes.trailerMessage,
              classes.helpMessage,
              color === 'inverse' && classes.helpMessageInverse
            )}
            describedById={helpFor(uniqueId)}
            rootElementId={uniqueId}
          >
            {helpMessage}
          </FormHelpMessage>
        )}
        {hasError && errorMessage && (
          <FormErrorMessage
            className={clsx(classes.trailerMessage)}
            color={color}
            describedById={errorFor(uniqueId)}
            rootElementId={uniqueId}
          >
            {errorMessage}
          </FormErrorMessage>
        )}
      </div>
    );
  }
);
