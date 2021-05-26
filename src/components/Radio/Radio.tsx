import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import {
  BaseFormElement,
  buildDescribedBy,
  FormHelpMessage,
  helpFor,
} from '../_private/forms';
import { generateUniqueId } from '../_private/UniqueId';
import { Text } from '../Text';
import { useRadioGroup } from './useRadioGroup';

export const RadioStylesKey = 'ChromaRadio';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      '& > input[type="radio"]::after': {
        opacity: 0,
        transition:
          'transform .3s cubic-bezier(.2, .85, .32, 1.2), opacity .2s',
      },
      '& > input[type="radio"]:checked::after': {
        opacity: 1,
      },
    },
    input: {
      background: 'rgba(132, 137, 166, 0.15)',
      border: '1px solid transparent',
      borderRadius: '50%',
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
      width: theme.pxToRem(21),
      '&:after': {
        background: theme.palette.common.white,
        borderRadius: '50%',
        content: '" "',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        transform: 'scale(0.5)',
        height: theme.pxToRem(19),
        width: theme.pxToRem(19),
      },
      '&:checked': {
        background: theme.palette.primary.main,
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
      backgroundColor: 'rgba(230, 231, 237, 0.1)',
      '&:checked': {
        backgroundColor: 'rgba(230, 231, 237, 0.1)',
        border: `1px solid rgba(230, 231, 237, 0.55)`,
      },
      '&:focus': {
        boxShadow: '0 0 0 2px rgba(255, 255, 255, .3)',
      },
      '&:hover:not(:disabled):not(:checked)': {
        border: `1px solid ${theme.palette.common.white}`,
      },
    },
    labelContainer: {
      flex: 1,
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
  }),
  { name: RadioStylesKey }
);

export type RadioClasses = GetClasses<typeof useStyles>;

export interface RadioProps extends BaseFormElement {}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      ['aria-label']: ariaLabel,
      className,
      children,
      checked = false,
      color,
      helpMessage,
      id,
      label,
      value,
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({});

    const [uniqueId] = React.useState<string>(
      () => id || generateUniqueId('radio-')
    );

    const {
      color: colorFromContext,
      name: nameFromContext,
      value: valueFromContext,
      onChange: onChangeFromContext,
    } = useRadioGroup();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChangeFromContext && onChangeFromContext(e);
    };

    if (!label && !ariaLabel && process.env.NODE_ENV === 'development') {
      throw new Error(
        'If a "label" is not provided to Radio, please provide "aria-label".'
      );
    }

    return (
      <div className={clsx(classes.root, className)}>
        <input
          aria-describedby={buildDescribedBy({
            hasHelpMessage: !!helpMessage,
            uniqueId,
          })}
          aria-label={ariaLabel}
          className={clsx(classes.input, {
            [classes.inputInverse]:
              color === 'inverse' || colorFromContext === 'inverse',
          })}
          ref={ref}
          role="radio"
          type="radio"
          id={uniqueId}
          tabIndex={0}
          name={nameFromContext}
          value={value}
          onChange={handleChange}
          checked={
            checked || valueFromContext
              ? valueFromContext === value || checked
              : undefined
          }
          {...rootProps}
        />
        <div className={classes.labelContainer}>
          {label && (
            <label className={classes.label} htmlFor={uniqueId}>
              <Text
                size="subbody"
                className={
                  color === 'inverse' || colorFromContext === 'inverse'
                    ? classes.labelInverse
                    : undefined
                }
              >
                {label}
              </Text>
            </label>
          )}
          {helpMessage && (
            <FormHelpMessage
              color={color || colorFromContext}
              rootElementId={uniqueId}
              describedById={helpFor(uniqueId)}
            >
              {helpMessage}
            </FormHelpMessage>
          )}
        </div>
        {children}
      </div>
    );
  }
);
