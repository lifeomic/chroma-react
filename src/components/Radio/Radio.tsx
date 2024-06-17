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
import mergeRefs from 'react-merge-refs';
import { Tooltip } from '../Tooltip';

export const RadioStylesKey = 'ChromaRadio';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      cursor: 'pointer',
      display: 'flex',
      '& > input[type="radio"]::after': {
        opacity: 0,
        transition:
          'transform 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2), opacity 0.2s',
      },
      '& > input[type="radio"]:checked::after': {
        opacity: 1,
      },
    },
    input: {
      background: theme.hexToRgba(theme.palette.graphite[900], 0.15),
      border: '1px solid transparent',
      borderRadius: '50%',
      cursor: 'pointer',
      display: 'inline-block',
      height: theme.pxToRem(21),
      margin: 0,
      MozAppearance: 'none',
      outline: 'none',
      position: 'relative',
      transition: 'background 0.3s, border-color 0.3s, box-shadow 0.2s',
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
        boxShadow: `0 0 0 2px ${theme.hexToRgba(
          theme.palette.primary[600],
          0.3
        )}`,
      },
      '&:hover:not(:disabled):not(:checked)': {
        border: `1px solid ${theme.palette.primary[700]}`,
      },
    },
    inputInverse: {
      backgroundColor: theme.hexToRgba(theme.palette.graphite[100], 0.1),
      '&:checked': {
        backgroundColor: theme.hexToRgba(theme.palette.graphite[100], 0.1),
        border: `1px solid ${theme.hexToRgba(
          theme.palette.graphite[100],
          0.55
        )}`,
      },
      '&:focus': {
        boxShadow: `0 0 0 2px ${theme.hexToRgba(
          theme.palette.common.white,
          0.3
        )}`,
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
    icon: {
      height: theme.pxToRem(16),
      width: theme.pxToRem(16),
    },
    iconWithLabel: {
      marginRight: theme.spacing(0.5),
    },
    tooltipContainer: {
      display: 'flex',
      outline: 'none',
    },
    tooltipContent: {
      display: 'flex',
      height: theme.pxToRem(16),
    },
  }),
  { name: RadioStylesKey }
);

export type RadioClasses = GetClasses<typeof useStyles>;

export interface RadioProps extends BaseFormElement {
  children?: React.ReactNode;
  icon?: React.MemoExoticComponent<
    (props: React.SVGProps<SVGSVGElement>) => JSX.Element
  >;
}

/**
 * A basic Radio component. The recommended use case is to always use this with RadioGroup.
 *
 * ### Color
 *
 * If using RadioGroup, provide the `color` to the RadioGroup instead. You do not
 * need to provide the color prop yourself.
 *
 * ### Children
 *
 * The Radio component supports children to be rendered; however, this should be
 * used sparingly and deeply considered to not negatively affect accessibility.
 *
 * ### Accessibility
 *
 * - The label and input are "connected" via a uniqueId and the `for` + `id`
 *   attributes.
 * - The component has `type="radio"` and `role="radio"` attributes.
 * - The component uses a uniqueId to link the input to the help message via
 *   `aria-describedby`. This allows screenreaders to read the help message.
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Radio/Radio.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Radio/Radio.stories.tsx)
 */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      ['aria-label']: ariaLabel,
      className,
      children,
      checked = false,
      color,
      helpMessage,
      icon: Icon,
      id,
      label,
      value,
      ...rootProps
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
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

    const renderIcon = () =>
      Icon && (
        <Icon
          className={clsx(
            classes.icon,
            label && classes.iconWithLabel,
            color === 'inverse' || colorFromContext === 'inverse'
              ? classes.labelInverse
              : undefined
          )}
        />
      );

    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        className={clsx(classes.root, className)}
        onClick={() => inputRef?.current?.click()}
      >
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
          ref={mergeRefs([inputRef, ref])}
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
          {Icon && (
            <>
              {label ? (
                renderIcon()
              ) : (
                <Tooltip className={classes.tooltipContainer} title={ariaLabel}>
                  <span className={classes.tooltipContent}>{renderIcon()}</span>
                </Tooltip>
              )}
            </>
          )}

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
