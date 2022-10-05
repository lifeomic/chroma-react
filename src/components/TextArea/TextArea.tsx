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
import { screenreaderOnlyStyles } from '../../styles/screenreaderOnly';

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
    textarea: {
      backgroundColor: theme.hexToRgba(theme.palette.graphite[900], 0.15),
      border: `1px solid transparent`,
      borderRadius: theme.pxToRem(4),
      color: theme.palette.text.primary,
      display: 'block',
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
        backgroundColor: theme.hexToRgba(theme.palette.common.white, 0.5),
        border: `1px solid ${theme.hexToRgba(
          theme.palette.graphite[900],
          0.45
        )}`,
      },
      '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.625,
      },
      '&:read-only': {
        cursor: 'not-allowed',
        opacity: 0.9,
        '&:focus': {
          backgroundColor: theme.hexToRgba(theme.palette.graphite[900], 0.15),
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
    textareaInverse: {
      backgroundColor: theme.hexToRgba(theme.palette.graphite[100], 0.1),
      color: theme.palette.common.white,
      '&:focus': {
        backgroundColor: theme.hexToRgba(theme.palette.graphite[100], 0.1),
        border: `1px solid ${theme.hexToRgba(
          theme.palette.graphite[100],
          0.55
        )}`,
      },
      '&:read-only': {
        opacity: 1,
        '&:focus': {
          backgroundColor: theme.hexToRgba(theme.palette.graphite[100], 0.1),
        },
      },
      '&::-webkit-input-placeholder': {
        color: theme.hexToRgba(theme.palette.common.white, 0.8),
      },
      '&::-moz-placeholder': {
        color: theme.hexToRgba(theme.palette.common.white, 0.8),
      },
      '&:-ms-input-placeholder': {
        color: theme.hexToRgba(theme.palette.common.white, 0.8),
      },
      '&:-moz-placeholder': {
        color: theme.hexToRgba(theme.palette.common.white, 0.8),
      },
    },
    textareaError: {
      backgroundColor: theme.hexToRgba(theme.palette.graphite[100], 0.1),
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
    required: {
      color: theme.palette.error[500],
      margin: theme.spacing(0, 0.5),
    },
    requiredInverse: {
      color: theme.palette.common.white,
    },
    srOnly: {
      ...screenreaderOnlyStyles,
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
  /** This property shows the required asterisk (*). Required validation needs to be implemented separately. */
  showRequiredLabel?: boolean;
}

/**
 * An textarea component for form usage.
 *
 * ### Accessibility
 *
 * - The label and textarea are "connected" via a uniqueId and the `for` + `id`
 *   attributes.
 * - The label has the `aria-hidden` attribute so it cannot be focused by
 *   screenreaders. Instead, the textarea element receives the focus, and the label
 *   is read as part of the textarea.
 * - The component uses a uniqueId to link the textarea to the help and error
 *   messages via `aria-describedby`. This allows screenreaders to read the help
 *   and error messages.
 * - The icon has `aria-hidden` and `role="img"` attributes.
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/TextArea/TextArea.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/TextArea/TextArea.stories.tsx)
 */
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      ['aria-label']: ariaLabel,
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
      showRequiredLabel,
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({});

    const [uniqueId] = React.useState<string>(
      () => id || name || generateUniqueId('textArea-')
    );

    if (!label && !ariaLabel && process.env.NODE_ENV === 'development') {
      throw new Error(
        'If a "label" is not provided to TextArea, please provide "aria-label".'
      );
    }

    return (
      <div className={clsx(classes.root, className)}>
        <label
          className={clsx(
            classes.label,
            {
              [classes.labelInverse]: color === 'inverse',
            },
            !label && ariaLabel && classes.srOnly
          )}
          htmlFor={uniqueId}
        >
          {showRequiredLabel && (
            <span
              className={clsx(
                classes.required,
                color === 'inverse' && classes.requiredInverse
              )}
            >
              &#42;
            </span>
          )}
          {label || ariaLabel}
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
        <textarea
          aria-describedby={buildDescribedBy({
            hasError,
            hasHelpMessage: !!helpMessage,
            uniqueId,
          })}
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
