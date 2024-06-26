import { ChevronDown } from '@lifeomic/chromicons';
import { generateUniqueId } from '../_private/UniqueId';
import { motion, useReducedMotion } from 'framer-motion';
import { Portal } from 'reakit/Portal';
import { Rover, useRoverState } from 'reakit/Rover';
import { SelectOptionProps } from './SelectOption';
import { SelectProps, useStyles } from './Select';
import { Text } from '../Text';
import {
  buildDescribedBy,
  errorFor,
  FormErrorMessage,
  FormHelpMessage,
  helpFor,
} from '../_private/forms';
import {
  Popover as ReakitPopover,
  PopoverDisclosure,
  usePopoverState,
} from 'reakit/Popover';
import clsx from 'clsx';
import FocusLock from 'react-focus-lock';
import * as React from 'react';
import { Tooltip } from '../Tooltip';

const popoverVariants = {
  open: {
    opacity: 1,
    offsetTop: -2, // Popper.js (underlying Popover) requires `offSetTop` over `marginTop`
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
  closed: {
    opacity: 0,
    offsetTop: -18,
  },
};

const popoverVariantsReduced = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  closed: {
    opacity: 0,
  },
};

const listMotionVariants = {
  open: {
    transition: {
      delayChildren: 0.025,
      staggerChildren: 0.045,
      duration: 0.2,
    },
  },
  closed: {},
};

const listMotionVariantsReduced = {
  open: {},
  closed: {},
};

const listItemMotionVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: -16,
    opacity: 0,
  },
};

const listItemMotionVariantsReduced = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

export interface ComboBoxProps
  extends Omit<SelectProps, 'onChange' | 'selectedOptionDisplay' | 'value'> {
  onChange?: (values: Array<string>, meta: Array<string>) => void;
  selectedOptionDisplay?: (
    options: Array<SelectOptionProps>
  ) => string | null | undefined | React.ReactNode;
  value?: Array<string> | undefined;
  /** This property shows the required asterisk (*). Required validation needs to be implemented separately. */
  showRequiredLabel?: boolean;
  icon?: React.MemoExoticComponent<
    (props: React.SVGProps<SVGSVGElement>) => JSX.Element
  >;
  tooltipMessage?: string;
}

/**
 * A multi-select component. This component leverages styles and props from Select. If you need a single-select
 * component, see Select.
 *
 * ### Accessibility
 *
 * - The list of options has the `aria-multiselectable` attribute so that
 *   screenreaders can announce the number of options selected.
 * - When the select menu is open, the arrow keys on a user's keyboard can be used
 *   to navigate between options.
 * - The Escape key closes the open menu.
 * - Pressing the Enter key "clicks" the option.
 * - A checkmark is read with the selected menu option.
 * - The label and input are "connected" via a uniqueId and the `for` + `id`
 *   attributes.
 * - The label has the `aria-hidden` attribute so it cannot be focused by
 *   screenreaders. Instead, the input element receives the focus, and the label is
 *   read as part of the input.
 * - The component uses a uniqueId to link the input to the help and error messages
 *   via `aria-describedby`. This allows screenreaders to read the help and error
 *   messages.
 * - The icon has `aria-hidden` and `role="img"` attributes.
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Select/ComboBox.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/ComboBox/ComboBox.stories.tsx)
 */
export const ComboBox: React.FC<ComboBoxProps> = ({
  ['aria-label']: ariaLabel,
  children,
  className,
  color = 'default',
  errorMessage,
  fullWidth,
  hasError,
  helpMessage,
  icon: Icon,
  id,
  label,
  secondaryLabel,
  onChange,
  placeholder,
  placement,
  popoverAriaLabel,
  selectedOptionDisplay,
  tooltipMessage,
  value,
  showRequiredLabel,
  ...rootProps
}) => {
  const classes = useStyles({});
  const popover = usePopoverState({ placement });
  const rover = useRoverState({ loop: true, orientation: 'vertical' });
  const shouldReduceMotion = useReducedMotion();

  const buttonRef = React.useRef<any>();

  // This width is used to determine the popover width when open,
  // as well as setting the `maxWidth` of the text inside to ensure
  // the element size doesn't shift when the selected option text
  // gets long.
  const [width, setWidth] = React.useState<number>(50);

  const [internalSelections, setInternalSelections] = React.useState<Array<
    SelectOptionProps
  > | null>(null);

  // A uniqueId is required to wire up aria-attributes
  const [uniqueId] = React.useState<string>(
    () => id || name || generateUniqueId('combobox-')
  );

  // Update the opened popover width when the window width changes
  // TODO: Review the best way to handle this without breaking
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    setWidth(buttonRef.current.getBoundingClientRect().width);
  });

  // Determine which of the child select option values are matches based on
  // the "value" prop.  If a select option value is included in the "value",
  // then we add it to the list of internal select options (which keep
  // track of which options are selected to apply classes)
  React.useEffect(() => {
    const matches: any = React.Children.toArray(children).filter((child) => {
      if (!React.isValidElement(child)) {
        return null;
      }

      return value?.includes(child.props.value);
    });

    if (matches.length === 0) {
      setInternalSelections([]);
      return;
    }

    setInternalSelections(matches.map((m: any) => m.props));
  }, [children, value]);

  const handleOptionSelected = (optionValue: string, meta: any) => {
    const isAlreadySelected = internalSelections?.find(
      (s) => s.value === optionValue
    );

    if (isAlreadySelected) {
      // Filter out the option the user selected from our list of internal selections
      // (so that it's removed), and then pass the values and meta arrays back
      // to the consumer.
      const filteredSelections =
        internalSelections?.filter((s) => s.value !== optionValue) || [];
      onChange?.(
        [...filteredSelections?.map((s) => s.value)],
        [...filteredSelections?.map((s) => s.meta)]
      );
      return;
    }

    // We are adding a selected option, so we collect all of the values
    // and meta arrays, add in our new selection, and return the updated
    // list to the consumer
    const valueOptions = internalSelections?.map((s) => s.value) || [];
    const metaOptions = internalSelections?.map((s) => s.meta) || [];
    onChange?.([...valueOptions, optionValue], [...metaOptions, meta]);
  };

  if (!label && !ariaLabel && process.env.NODE_ENV === 'development') {
    throw new Error(
      'If a "label" is not provided to ComboBox, please provide "aria-label".'
    );
  }

  return (
    <div className={clsx(classes.root, className)}>
      <label
        aria-hidden="true"
        className={clsx(
          classes.label,
          color === 'inverse' && classes.labelInverse,
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
        {secondaryLabel ? (
          <span
            className={clsx(
              classes.labelSecondary,
              color === 'inverse' && classes.labelInverse
            )}
          >
            {secondaryLabel}
          </span>
        ) : null}
      </label>
      <PopoverDisclosure
        className={clsx(
          classes.button,
          classes.comboxBoxOverflow,
          hasError && classes.buttonError,
          fullWidth && classes.buttonFullWidth,
          {
            [classes.buttonInverse]: color === 'inverse',
          }
        )}
        ref={buttonRef}
        aria-describedby={buildDescribedBy({
          hasError,
          hasHelpMessage: !!helpMessage,
          uniqueId,
        })}
        id={uniqueId}
        {...popover}
        {...rootProps}
      >
        <>
          {internalSelections?.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.2, ease: 'easeIn' },
              }}
            >
              <Text
                className={clsx(
                  classes.buttonText,
                  classes.placeholderText,
                  classes.comboBoxPlaceholder
                )}
                size="subbody"
              >
                {placeholder}
              </Text>
            </motion.div>
          )}
          {internalSelections &&
            internalSelections?.length > 0 &&
            !selectedOptionDisplay && (
              <Text
                className={clsx(classes.buttonText, classes.chipList)}
                size="subbody"
                style={fullWidth ? {} : { maxWidth: width - 42 }}
              >
                {internalSelections?.map((selectedOption, index) => (
                  <motion.span
                    key={index}
                    className={classes.chip}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: -8 }
                    }
                    animate={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : {
                            opacity: 1,
                            transition: { duration: 0.2, ease: 'easeOut' },
                            y: 0,
                          }
                    }
                  >
                    {selectedOption.title}
                  </motion.span>
                ))}
              </Text>
            )}
          {internalSelections &&
            internalSelections?.length > 0 &&
            selectedOptionDisplay && (
              <Text className={classes.buttonText} size="subbody">
                {selectedOptionDisplay(internalSelections)}
              </Text>
            )}
          <div className={classes.buttonArrowContainer} role="presentation">
            <ChevronDown
              className={clsx(
                classes.arrowIcon,
                popover.visible && classes.rotate
              )}
              aria-hidden
              role="img"
              width={18}
              height={18}
            />
          </div>
        </>
      </PopoverDisclosure>
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
      {/*
        A few things here:

        1) We want to always portal our select menu results so we don't
           run into weird layout issues (rendering inside Popover or Modal)
        2) We need to trap focus inside of the menu when it is open - <FocusLock /> handles this for us
        3) We need keyboard support via <Rover />

        Reference for #1 & #2: https://github.com/reakit/reakit/issues/566
      */}
      <Portal>
        <FocusLock>
          <ReakitPopover
            aria-label={label || ariaLabel || popoverAriaLabel}
            className={classes.popover}
            {...popover}
            style={{ width }}
            as={motion.div}
            animate={popover.visible ? 'open' : 'closed'}
            variants={
              shouldReduceMotion ? popoverVariantsReduced : popoverVariants
            }
          >
            <motion.ul
              className={classes.ul}
              variants={
                shouldReduceMotion
                  ? listMotionVariantsReduced
                  : listMotionVariants
              }
              role="listbox"
              aria-multiselectable={true}
            >
              {React.Children.map(children, (child) => {
                if (!React.isValidElement<SelectOptionProps>(child)) {
                  return null;
                }

                const option: React.ReactElement<SelectOptionProps> = child;
                return (
                  <Rover
                    {...rover}
                    aria-selected={value?.includes(option?.props?.value)}
                    className={classes.option}
                    as={motion.li}
                    disabled={child?.props?.disabled}
                    role="option"
                    value={option?.props?.value}
                    variants={
                      shouldReduceMotion
                        ? listItemMotionVariantsReduced
                        : listItemMotionVariants
                    }
                    onClick={() =>
                      handleOptionSelected(
                        option?.props?.value,
                        option?.props?.meta
                      )
                    }
                  >
                    {React.cloneElement<SelectOptionProps>(option, {
                      isChecked: value?.includes(option?.props?.value),
                      ...option.props,
                    })}
                  </Rover>
                );
              })}
            </motion.ul>
          </ReakitPopover>
        </FocusLock>
      </Portal>
    </div>
  );
};
