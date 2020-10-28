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
import { Tooltip } from '../Tooltip';

export const TextAreaStylesKey = 'ChromaTextArea';

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
    labelInverse: {
      color: theme.palette.common.white,
    },
    labelIcon: {
      marginLeft: theme.spacing(0.75),
      color: theme.palette.primary.main,
    },
    labelIconInverse: {
      mixBlendMode: 'screen',
    },
    labelSecondary: {
      fontSize: theme.pxToRem(11),
      display: 'inline-block',
      margin: theme.spacing(0, 0.75),
      opacity: 0.65,
    },
    textarea: {
      backgroundColor: 'rgba(132, 137, 166, 0.15)',
      border: `1px solid transparent`,
      borderRadius: theme.pxToRem(4),
      color: theme.palette.text.primary,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.pxToRem(14),
      lineHeight: 1.25,
      maxHeight: '6rem',
      maxWidth: '100%',
      minHeight: '2.5rem',
      minWidth: theme.pxToRem(175),
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
        opacity: 0.625,
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
    textareaInverse: {
      backgroundColor: 'rgba(230, 231, 237, 0.25)',
      color: theme.palette.common.white,
      '&:focus': {
        backgroundColor: 'rgba(230, 231, 237, 0.35)',
        border: `1px solid rgba(230, 231, 237, 0.55)`,
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
    textareaError: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      border: `1px solid ${theme.palette.error.main}`,
      '&:focus': {
        border: `1px solid ${theme.palette.error.main}`,
      },
    },
    fullWidth: {
      width: '100%',
    },
    message: {
      marginLeft: 0,
    },
    tooltipContainer: {
      display: 'flex',
      outline: 'none',
    },
  }),
  { name: TextAreaStylesKey }
);

export type TextAreaClasses = GetClasses<typeof useStyles>;

export interface TextAreaProps
  extends React.ComponentPropsWithoutRef<'textarea'> {
  color?: BaseFormElement['color'];
  hasError?: BaseFormElement['hasError'];
  errorMessage?: BaseFormElement['errorMessage'];
  helpMessage?: BaseFormElement['helpMessage'];
  label?: BaseFormElement['label'];
  fullWidth?: boolean;
  secondaryLabel?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  tooltipMessage?: string;
  textAreaClassName?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className,
      color,
      errorMessage,
      fullWidth,
      hasError,
      helpMessage,
      icon: Icon,
      id,
      label,
      name,
      secondaryLabel,
      textAreaClassName,
      tooltipMessage,
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({});

    const [uniqueId] = React.useState<string>(
      () => id || name || generateUniqueId('textArea-')
    );

    return (
      <div className={clsx(classes.root, className)}>
        <label
          aria-hidden="true"
          className={clsx(classes.label, {
            [classes.labelInverse]: color === 'inverse',
          })}
          htmlFor={uniqueId}
        >
          {label}
          {!!Icon && tooltipMessage && (
            <Tooltip title={tooltipMessage}>
              <span className={classes.tooltipContainer}>
                <Icon
                  className={clsx(
                    classes.labelIcon,
                    color === 'inverse' && classes.labelIconInverse
                  )}
                  width={16}
                  height={16}
                  role="img"
                  aria-hidden
                />
              </span>
            </Tooltip>
          )}
          {secondaryLabel && (
            <span className={classes.labelSecondary}>{secondaryLabel}</span>
          )}
        </label>
        <textarea
          aria-describedby={buildDescribedBy(uniqueId)}
          className={clsx(
            classes.textarea,
            { [classes.textareaInverse]: color === 'inverse' },
            fullWidth && classes.fullWidth,
            hasError && classes.textareaError,
            textAreaClassName
          )}
          cols={1}
          id={uniqueId}
          ref={ref}
          name={name}
          {...rootProps}
        />
        {helpMessage && (
          <FormHelpMessage
            color={color}
            className={classes.message}
            rootElementId={uniqueId}
            describedById={helpFor(uniqueId)}
          >
            {helpMessage}
          </FormHelpMessage>
        )}
        {hasError && errorMessage && (
          <FormErrorMessage
            color={color}
            className={classes.message}
            rootElementId={uniqueId}
            describedById={errorFor(uniqueId)}
          >
            {errorMessage}
          </FormErrorMessage>
        )}
      </div>
    );
  }
);
