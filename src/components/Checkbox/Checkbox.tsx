import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses, ClassOverrides } from '../../typeUtils';
import {
  BaseFormElementWithNodeLabel,
  buildDescribedBy,
  errorFor,
  FormErrorMessage,
  FormHelpMessage,
  helpFor,
} from '../_private/forms';
import { generateUniqueId } from '../_private/UniqueId';
import { Text } from '../Text';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import 'focus-visible';
import { screenreaderOnlyStyles } from '../../styles/screenreaderOnly';
import zIndex from '../../styles/utils/zIndex';

export const CheckboxStylesKey = 'ChromaCheckbox';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      // All values that are animated to/from need to be specified as css variables for the
      // framer-motion library to handle the animations correctly (no mix of hex/rgb + variables)
      '--checkbox-primary': theme.palette.primary.main,
      '--checkbox-emphasis': theme.palette.primary[900],
      '--checkbox-secondary': theme.palette.graphite[100],
      '--checkbox-secondary-emphasis': theme.palette.graphite[900],
      '--checkbox-error': theme.palette.error[900],
      '--checkbox-inverse': theme.palette.common.white,
      '--tick-primary': theme.palette.common.white,
      '--tick-disabled': theme.palette.black[400],
      display: 'flex',
      flexFlow: 'column',
      position: 'relative',
      '& > p': {
        marginLeft: theme.pxToRem(29),
      },
    },
    input: {
      cursor: 'pointer',
      height: theme.pxToRem(16),
      left: 0,
      opacity: 0,
      position: 'absolute',
      transition: '0.35s ease-in',
      top: 0,
      width: theme.pxToRem(16),
      '&:disabled, &:disabled + $labelContainer, &:disabled + $labelContainer *': {
        cursor: 'not-allowed',
      },
      '&:focus.focus-visible + $labelContainer $box': {
        stroke: theme.palette.primary.main,
        strokeOpacity: 0.5,
        strokeWidth: 2.5,
        transition: '0.35s ease-out',
      },
    },
    inputInverse: {
      '&:focus.focus-visible + $labelContainer $box': {
        stroke: theme.palette.common.white,
      },
    },
    labelContainer: {
      flex: 1,
      zIndex: zIndex.byValueUpTo20[2],
    },
    label: {
      cursor: 'pointer',
      display: 'inline-flex',
      marginBottom: 0,
      verticalAlign: 'top',
      '& p': {
        lineHeight: 1.25,
        marginTop: theme.spacing(0.25),
        marginLeft: theme.spacing(1),
      },
    },
    labelInverse: {
      color: theme.palette.common.white,
    },
    svg: {
      minWidth: theme.pxToRem(21),
      minHeight: theme.pxToRem(21),
      zIndex: zIndex.byValueUpTo20[2],
    },
    box: {},
    srOnly: {
      ...screenreaderOnlyStyles,
    },
    required: {
      color: theme.palette.error[500],
      margin: theme.spacing(0, 0.5),
    },
    requiredInverse: {
      color: theme.palette.common.white,
    },
  }),
  { name: CheckboxStylesKey }
);

const getBoxVariants = ({
  disabled,
  hasError,
  color,
}: {
  disabled: boolean | undefined;
  hasError: boolean | undefined;
  color: string;
}) => {
  if (disabled && color === 'default') {
    return disabledDefaultBoxVariants;
  }
  if (disabled && color === 'inverse') {
    return disabledInverseBoxVariants;
  }
  if (hasError && color === 'default') {
    return defaultHasErrorBoxVariants;
  }
  if (hasError && color === 'inverse') {
    return inverseHasErrorBoxVariants;
  }
  if (color === 'inverse') {
    return boxInverseVariants;
  }
  return boxVariants;
};

const getTickVariants = ({
  disabled,
  color,
  indeterminate,
}: {
  disabled: boolean | undefined;
  indeterminate: boolean | undefined;
  color: string;
}) => {
  if (disabled && color === 'inverse') {
    return disabledInverseTickVariants;
  }
  if (disabled && indeterminate) {
    return indeterminateDisabledTickVariants;
  }
  if (disabled) {
    return disabledDefaultTickVariants;
  }
  if (indeterminate) {
    return indeterminateDefaultTickVariants;
  }
  return tickVariants;
};

const tickVariants = {
  pressed: (isChecked: boolean) => ({
    pathLength: isChecked ? 0.85 : 0.2,
  }),
  checked: {
    pathLength: 1,
    stroke: 'var(--tick-primary)',
    strokeOpacity: 1,
  },
  unchecked: { pathLength: 0 },
};

const disabledDefaultTickVariants = {
  checked: {
    stroke: 'var(--tick-disabled)',
    strokeOpacity: 0.65,
    pathLength: 1,
  },
  unchecked: {
    pathLength: 0,
    stroke: 'var(--tick-disabled)',
    strokeOpacity: 0.65,
  },
};

const disabledInverseTickVariants = {
  checked: {
    pathLength: 1,
    stroke: 'var(--tick-primary)',
    strokeOpacity: 0.65,
  },
  unchecked: {
    pathLength: 0,
    stroke: 'var(--tick-primary)',
    strokeOpacity: 0.65,
  },
};

const indeterminateDefaultTickVariants = {
  checked: {
    pathLength: 1,
    stroke: 'var(--tick-primary)',
  },
  unchecked: {
    pathLength: 0,
    stroke: 'var(--tick-primary)',
  },
};

const indeterminateDisabledTickVariants = {
  checked: {
    pathLength: 1,
    stroke: 'var(--tick-disabled)',
    strokeOpacity: 0.65,
  },
  unchecked: {
    pathLength: 0,
    stroke: 'var(--tick-disabled)',
    strokeOpacity: 0.65,
  },
};

const checkedBox = {
  fill: 'var(--checkbox-primary)',
  fillOpacity: 1,
  stroke: 'var(--checkbox-primary)',
  strokeWidth: 0,
};

const hoverBox = {
  strokeOpacity: 1,
  strokeWidth: 2,
};

const pressedBox = {
  fill: 'var(--checkbox-emphasis)',
  fillOpacity: 1,
  scale: 0.9,
  stroke: 'var(--checkbox-emphasis)',
};

const errorUncheckedBox = {
  fill: 'var(--checkbox-secondary)',
  fillOpacity: 0.25,
  stroke: 'var(--checkbox-error)',
  strokeOpacity: 1,
  strokeWidth: 1,
};

const disabledBox = {
  fill: 'var(--checkbox-secondary)',
  fillOpacity: 0.5,
  strokeWidth: 0,
};

const disabledInverseBox = {
  fill: 'var(--checkbox-secondary)',
  fillOpacity: 0.1,
  stroke: 'var(--checkbox-secondary)',
  strokeOpacity: 0.25,
  strokeWidth: 1,
};

const inverseBox = {
  fill: 'var(--checkbox-secondary)',
  fillOpacity: 0.1,
  stroke: 'var(--checkbox-secondary)',
  strokeOpacity: 0.55,
  strokeWidth: 1,
};

const boxVariants = {
  hover: {
    ...hoverBox,
    stroke: 'var(--checkbox-primary)',
  },
  pressed: pressedBox,
  checked: checkedBox,
  unchecked: {
    fill: 'var(--checkbox-secondary-emphasis)',
    fillOpacity: 0.15,
    stroke: 'var(--checkbox-primary)',
  },
};

const boxInverseVariants = {
  hover: { ...hoverBox, stroke: 'var(--checkbox-inverse)' },
  pressed: pressedBox,
  checked: inverseBox,
  unchecked: inverseBox,
};

const disabledDefaultBoxVariants = {
  checked: disabledBox,
  unchecked: disabledBox,
};

const disabledInverseBoxVariants = {
  checked: disabledInverseBox,
  unchecked: disabledInverseBox,
};

const defaultHasErrorBoxVariants = {
  hover: { ...hoverBox, stroke: 'var(--checkbox-error)' },
  pressed: pressedBox,
  checked: checkedBox,
  unchecked: errorUncheckedBox,
};

const inverseHasErrorBoxVariants = {
  hover: { ...hoverBox, stroke: 'var(--checkbox-error)' },
  pressed: pressedBox,
  checked: inverseBox,
  unchecked: errorUncheckedBox,
};

export type CheckboxClasses = GetClasses<typeof useStyles>;

export type CheckboxProps = BaseFormElementWithNodeLabel &
  ClassOverrides<CheckboxClasses> & {
    indeterminate?: boolean;
  };

/**
A checkbox component for form usage. Under the covers, this is an input element with `type="checkbox"`.

### Accessibility

- The label and input are "connected" via a uniqueId and the `for` \+ `id` attributes.
- The component has `type="checkbox"`.
- The component uses a uniqueId to link the input to the help and error messages
  via `aria-describedby`. This allows screenreaders to read the help and error
  messages.

### Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Checkbox/Checkbox.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Checkbox/Checkbox.stories.tsx)
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      ['aria-label']: ariaLabel,
      checked,
      className,
      classes: additionalClasses,
      color = 'default',
      disabled = false,
      errorMessage,
      hasError,
      helpMessage,
      indeterminate = false,
      id,
      label,
      name,
      showRequiredLabel,
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({ classes: additionalClasses });

    const [uniqueId] = React.useState<string>(
      () => id || name || generateUniqueId('checkbox-')
    );

    const pathLength = useMotionValue(0);
    const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

    if (!label && !ariaLabel && process.env.NODE_ENV === 'development') {
      throw new Error(
        'If a "label" is not provided to Checkbox, please provide "aria-label".'
      );
    }

    const variant = [
      checked ? 'checked' : 'unchecked',
      disabled ? 'disabled' : 'enabled',
    ];

    return (
      <motion.div
        className={clsx(classes.root, className)}
        animate={variant}
        initial={false}
        whileHover="hover"
        whileTap="pressed"
      >
        <input
          aria-describedby={buildDescribedBy({
            hasError,
            hasHelpMessage: !!helpMessage,
            uniqueId,
          })}
          aria-checked={
            checked && !indeterminate
              ? 'true'
              : !checked && !indeterminate
              ? 'false'
              : !checked && indeterminate
              ? 'mixed'
              : 'false'
          }
          className={clsx(classes.input, {
            [classes.inputInverse]: color === 'inverse',
          })}
          ref={ref}
          type="checkbox"
          id={uniqueId}
          name={name}
          checked={checked}
          disabled={disabled}
          tabIndex={0}
          {...rootProps}
        />
        <div className={classes.labelContainer}>
          <motion.label
            className={classes.label}
            htmlFor={uniqueId}
            animate={variant}
            whileHover="hover"
            whileTap="pressed"
          >
            <motion.svg
              className={classes.svg}
              width="21"
              height="21"
              viewBox="0 0 21 21"
            >
              <motion.path
                className={classes.box}
                d="M1,5.524A4.523,4.523,0,0,1,5.524,1h9.952A4.523,4.523,0,0,1,20,5.524v9.952A4.523,4.523,0,0,1,15.476,20H5.524A4.523,4.523,0,0,1,1,15.476Z"
                fill="transparent"
                stroke="var(--checkbox-secondary-emphasis)"
                strokeOpacity="0"
                strokeMiterlimit="10"
                strokeWidth="2"
                variants={getBoxVariants({
                  disabled,
                  hasError,
                  color,
                })}
              />
              {indeterminate && disabled ? (
                <motion.path
                  d="M6.5,10.458h8"
                  fill="transparent"
                  strokeWidth="2.25"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ pathLength, opacity }}
                  custom={checked}
                  variants={getTickVariants({
                    disabled,
                    indeterminate,
                    color,
                  })}
                />
              ) : indeterminate ? (
                <>
                  <motion.path
                    d="M10.5,10.458h-4"
                    fill="transparent"
                    strokeWidth="2.25"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ pathLength, opacity }}
                    custom={checked}
                    variants={getTickVariants({
                      disabled,
                      indeterminate,
                      color,
                    })}
                  />
                  <motion.path
                    d="M10.5,10.458h4"
                    fill="transparent"
                    strokeWidth="2.25"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ pathLength, opacity }}
                    custom={checked}
                    variants={getTickVariants({
                      disabled,
                      indeterminate,
                      color,
                    })}
                  />
                </>
              ) : (
                <motion.path
                  d="M5.761,11.962l2.187,2.187,7.291-7.3"
                  fill="transparent"
                  strokeWidth="2.25"
                  stroke="#FFFFFF"
                  strokeOpacity="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ pathLength, opacity }}
                  custom={checked}
                  variants={getTickVariants({ disabled, indeterminate, color })}
                />
              )}
            </motion.svg>
            <Text
              size="subbody"
              className={clsx(
                color === 'inverse' ? classes.labelInverse : undefined,
                !label && ariaLabel && classes.srOnly
              )}
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
            </Text>
          </motion.label>
        </div>
        {helpMessage && (
          <FormHelpMessage
            color={color}
            rootElementId={uniqueId}
            describedById={helpFor(uniqueId)}
          >
            {helpMessage}
          </FormHelpMessage>
        )}
        {hasError && (
          <FormErrorMessage
            color={color}
            rootElementId={uniqueId}
            describedById={errorFor(uniqueId)}
          >
            {errorMessage}
          </FormErrorMessage>
        )}
      </motion.div>
    );
  }
);
