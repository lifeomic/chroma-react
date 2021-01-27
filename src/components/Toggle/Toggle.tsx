import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import {
  BaseFormElement,
  buildDescribedBy,
  errorFor,
  FormErrorMessage,
  FormHelpMessage,
  helpFor,
} from '../_private/forms';
import { generateUniqueId } from '../_private/UniqueId';
import { Text } from '../Text';
import { screenreaderOnlyStyles } from '../../styles/screenreaderOnly';

export const ToggleStylesKey = 'ChromaToggle';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      // Setup default ball styles
      '& > input[type="checkbox"]::after': {
        background: theme.palette.common.white,
        transform: 'translateX(0px)',
        transition:
          'transform .3s cubic-bezier(.2, .85, .32, 1.2), opacity .2s',
      },
      // Target the ball to move *and* change color to white
      '& > input[type="checkbox"]:checked::after': {
        background: theme.palette.common.white,
        transform: 'translateX(17px)',
      },
      // Targets the ball when the input is disabled and not checked
      '& > input[type="checkbox"]:disabled:not(:checked)::after': {
        opacity: 0.6,
      },
    },
    input: {
      background: 'rgba(132, 137, 166, 0.15)',
      border: '1px solid transparent',
      borderRadius: theme.pxToRem(11),
      cursor: 'pointer',
      display: 'inline-block',
      height: theme.pxToRem(21),
      margin: 0,
      MozAppearance: 'none',
      outline: 'none',
      position: 'relative',
      transition: 'background .3s, border-color .3s, box-shadow .2s',
      verticalAlign: 'top',
      WebkitAppearance: 'none',
      minWidth: theme.pxToRem(38),
      '&:after': {
        background: theme.palette.common.white,
        borderRadius: '50%',
        content: '" "',
        display: 'block',
        height: theme.pxToRem(15),
        left: theme.pxToRem(2),
        position: 'absolute',
        top: theme.pxToRem(2),
        width: theme.pxToRem(15),
      },
      '&:checked': {
        background: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
      },
      '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.625,
        // Ensure the label sibling cannot be clicked as well
        '& + label': {
          cursor: 'not-allowed',
        },
      },
      '&:focus': {
        boxShadow: '0 0 0 2px rgba(0, 150, 225, .3)',
      },
      '&:hover:not(:disabled):not(:checked)': {
        border: `1px solid ${theme.palette.primary[700]}`,
      },
    },
    inputInverse: {
      background: 'rgba(230, 231, 237, 0.25)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      mixBlendMode: 'hard-light',
      '&:checked': {
        background: theme.palette.secondary.main,
        border: `1px solid ${theme.palette.secondary.main}`,
      },
      '&:focus': {
        boxShadow: '0 0 0 2px rgba(255, 255, 255, .3)',
      },
      '&:hover:not(:disabled):not(:checked)': {
        border: `1px solid ${theme.palette.common.white}`,
      },
    },
    labelContainer: {
      flex: '0 auto',
      marginLeft: theme.spacing(1),
    },
    label: {
      cursor: 'pointer',
      display: 'inline-block',
      marginBottom: 0,
      marginTop: theme.spacing(0.25),
      verticalAlign: 'top',
      '& p': {
        lineHeight: 1.25,
      },
    },
    labelInverse: {
      color: theme.palette.common.white,
    },
    message: {},
    error: {
      border: `1px solid ${theme.palette.red.main}`,
    },
    rootRight: {
      flexFlow: 'row-reverse',
      justifyContent: 'flex-end',
    },
    labelContainerRight: {
      marginRight: theme.spacing(1),
      marginLeft: 0,
    },
    labelContainerFullWidth: {
      flex: 1,
    },
    labelFullWidth: {
      display: 'flex',
    },
    srOnly: {
      ...screenreaderOnlyStyles,
    },
  }),
  { name: ToggleStylesKey }
);

export type ToggleClasses = GetClasses<typeof useStyles>;

export interface ToggleProps extends BaseFormElement {
  fullWidth?: boolean;
  placement?: 'left' | 'right';
}

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      ['aria-label']: ariaLabel,
      checked,
      className,
      color = 'default',
      fullWidth,
      errorMessage,
      hasError,
      helpMessage,
      id,
      label,
      name,
      placement = 'left',
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({});

    const [uniqueId] = React.useState<string>(
      () => id || name || generateUniqueId('toggle-')
    );

    if (!label && !ariaLabel && process.env.NODE_ENV === 'development') {
      throw new Error(
        'If a "label" is not provided to Toggle, please provide "aria-label".'
      );
    }

    return (
      <div
        className={clsx(
          classes.root,
          { [classes.rootRight]: placement === 'right' },
          className
        )}
      >
        <input
          aria-describedby={buildDescribedBy({
            hasError,
            hasHelpMessage: !!helpMessage,
            uniqueId,
          })}
          className={clsx(classes.input, hasError && classes.error, {
            [classes.inputInverse]: color === 'inverse',
          })}
          ref={ref}
          type="checkbox"
          id={uniqueId}
          checked={checked}
          tabIndex={0}
          {...rootProps}
        />
        <div
          className={clsx(
            classes.labelContainer,
            fullWidth && classes.labelContainerFullWidth,
            {
              [classes.labelContainerRight]: placement === 'right',
            },
            !label && ariaLabel && classes.srOnly
          )}
        >
          <label
            className={clsx(classes.label, fullWidth && classes.labelFullWidth)}
            htmlFor={uniqueId}
          >
            <Text
              className={color === 'inverse' ? classes.labelInverse : undefined}
              size="subbody"
            >
              {label || ariaLabel}
            </Text>
          </label>
          {helpMessage && (
            <FormHelpMessage
              className={classes.message}
              color={color}
              rootElementId={uniqueId}
              describedById={helpFor(uniqueId)}
            >
              {helpMessage}
            </FormHelpMessage>
          )}
          {hasError && (
            <FormErrorMessage
              className={classes.message}
              color={color}
              rootElementId={uniqueId}
              describedById={errorFor(uniqueId)}
            >
              {errorMessage}
            </FormErrorMessage>
          )}
        </div>
      </div>
    );
  }
);
