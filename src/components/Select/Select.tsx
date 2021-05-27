import clsx from 'clsx';
import * as React from 'react';
import FocusLock from 'react-focus-lock';
import {
  Popover as ReakitPopover,
  PopoverDisclosure,
  usePopoverState,
} from 'reakit/Popover';
import { Portal } from 'reakit/Portal';
import { ChevronDown } from '../../icons/lined';
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
import { SelectOptionProps } from './SelectOption';
import { motion, useReducedMotion } from 'framer-motion';
import { RoverOption } from './RoverOption';
import { useRoverState } from 'reakit/Rover';
import { getTestProps } from '../../testUtils/getTestProps';
import { screenreaderOnlyStyles } from '../../styles/screenreaderOnly';
import { Tooltip } from '../Tooltip';

export const testIds = {
  placeholderText: 'select-placeholderText',
};

export const SelectStylesKey = 'ChromaSelect';

export const useStyles = makeStyles(
  (theme) => ({
    root: {},
    popover: {
      background: theme.palette.common.white,
      borderRadius: theme.pxToRem(10),
      boxShadow: theme.boxShadows.popover,
      minWidth: theme.pxToRem(224),
      overflow: 'hidden',
      zIndex: 1300, // Has to go above the Modal z-index
      '&:focus': {
        outline: 'none',
      },
    },
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
    labelSecondary: {
      fontSize: theme.pxToRem(11),
      display: 'inline-block',
      margin: theme.spacing(0, 0.75),
      color: theme.palette.text.hint,
    },
    labelInverse: {
      color: theme.palette.common.white,
      '&$labelSecondary': {
        opacity: 0.9,
      },
    },
    labelIcon: {
      marginLeft: theme.spacing(0.75),
      color: theme.palette.primary.main,
    },
    labelIconInverse: {
      mixBlendMode: 'screen',
    },
    tooltipContainer: {
      display: 'flex',
      outline: 'none',
    },
    button: {
      alignItems: 'center',
      backgroundColor: 'rgba(132, 137, 166, 0.15)',
      border: 'solid 1px transparent',
      borderRadius: theme.pxToRem(4),
      color: theme.palette.text.primary,
      cursor: 'pointer',
      display: 'block',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.pxToRem(14),
      maxHeight: theme.pxToRem(84),
      minHeight: theme.pxToRem(35),
      margin: 0,
      minWidth: theme.pxToRem(175),
      outline: 'none',
      overflow: 'hidden',
      padding: theme.spacing(0.5, 3.75, 0.5, 1.25),
      position: 'relative',
      transition: 'border 0.5s ease',
      '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.625,
      },
      '&:focus': {
        boxShadow: '0 0 0 2px rgba(0, 150, 225, .3)',
        outline: 'none',
      },
      '&::-moz-focus-inner': {
        border: 'none',
      },
    },
    buttonInverse: {
      backgroundColor: 'rgba(230, 231, 237, 0.1)',
      color: theme.palette.common.white,
      '&:focus': {
        boxShadow: '0 0 0 2px rgba(255, 255, 255, .3)',
      },
      '& $chip': {
        background: 'rgba(255, 255, 255, 0.5)',
        color: theme.palette.text.primary,
      },
      '& $buttonText$placeholderText': {
        color: theme.palette.common.white,
      },
    },
    buttonError: {
      backgroundColor: 'rgba(230, 231, 237, 0.1)',
      border: `1px solid ${theme.palette.error.main}`,
      '&:focus': {
        border: `1px solid ${theme.palette.error.main}`,
      },
    },
    buttonArrowContainer: {
      alignItems: 'center',
      display: 'flex',
      flexFlow: 'column',
      minHeight: theme.pxToRem(32),
      height: theme.pxToRem(32),
      justifyContent: 'center',
      position: 'absolute',
      right: theme.pxToRem(-6),
      textAlign: 'center',
      top: theme.pxToRem(1),
      width: '2rem',
    },
    buttonText: {
      color: 'inherit',
      marginTop: theme.spacing(0.125),
      overflow: 'hidden',
      textAlign: 'left',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: '100%',
      '&$placeholderText': {
        color: theme.palette.text.hint,
      },
    },
    placeholderText: {},
    comboBoxPlaceholder: {
      marginTop: theme.spacing(0.25),
    },
    comboxBoxOverflow: {
      overflowY: 'auto',
    },
    buttonFullWidth: {
      width: '100%',
    },
    arrowIcon: {
      alignSelf: 'flex-start',
      position: 'sticky',
      transition: 'transform 0.25s ease',
      strokeOpacity: 0.6,
      top: theme.spacing(0.5),
    },
    rotate: {
      transform: 'rotate(180deg)',
      top: theme.spacing(0.375),
    },
    ul: {
      display: 'block',
      listStyle: 'none',
      margin: 0,
      maxHeight: theme.pxToRem(168),
      overflowY: 'auto',
      padding: theme.spacing(1, 0),
    },
    option: {
      alignItems: 'center',
      backgroundColor: theme.palette.common.white,
      cursor: 'pointer',
      display: 'flex',
      minHeight: theme.pxToRem(26),
      outline: 'none',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      transition: 'background-color 0.25s ease',
      '&:hover, &:focus': {
        backgroundColor: 'rgba(222,244,252, 0.6)',
      },
    },
    chipList: {
      display: 'flex',
      flexFlow: 'wrap',
      margin: theme.spacing(0, -0.5),
    },
    chip: {
      alignItems: 'center',
      background: theme.palette.primary.main,
      borderRadius: theme.pxToRem(3),
      color: theme.palette.common.white,
      display: 'inline-block',
      height: theme.pxToRem(22),
      fontSize: theme.pxToRem(12),
      margin: theme.spacing(0.25),
      overflow: 'hidden',
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    message: {
      marginTop: theme.spacing(0.875),
      marginLeft: 0,
    },
    srOnly: {
      ...screenreaderOnlyStyles,
    },
  }),
  { name: SelectStylesKey }
);

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

export type SelectClasses = GetClasses<typeof useStyles>;

const isHeadingElement = (element: React.ReactElement) => {
  return element.props['data-select-role'] === 'heading';
};

export interface SelectProps
  extends Pick<
      BaseFormElement,
      'color' | 'hasError' | 'errorMessage' | 'helpMessage' | 'label'
    >,
    Pick<React.ComponentPropsWithoutRef<'input'>, 'disabled'>,
    Pick<
      React.ComponentPropsWithoutRef<'select'>,
      'className' | 'id' | 'value'
    > {
  ['aria-label']?: string;
  secondaryLabel?: string;
  fullWidth?: boolean;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onChange?: (value: string, meta: any) => void;
  placeholder?: string;
  placement?:
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'bottom-end'
    | 'bottom'
    | 'bottom-start'
    | 'left-end'
    | 'left'
    | 'left-start';
  popoverAriaLabel?: string;
  selectedOptionDisplay?: (
    option: SelectOptionProps
  ) => string | null | undefined | React.ReactNode;
  tooltipMessage?: string;
}

export const Select: React.FC<SelectProps> = ({
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
  ...rootProps
}) => {
  const classes = useStyles({});
  const popover = usePopoverState({ placement });
  const shouldReduceMotion = useReducedMotion();

  const buttonRef = React.useRef<any>(); // TODO: Need to type this properly...
  const [width, setWidth] = React.useState<number>(50);

  const [
    internalSelection,
    setInternalSelection,
  ] = React.useState<SelectOptionProps | null>(null);

  const [uniqueId] = React.useState<string>(
    () => id || name || generateUniqueId('select-')
  );

  const rover = useRoverState({ loop: true, orientation: 'vertical' });

  // Update the opened popover width any time the button width changes
  // TODO: Review the best way to handle this without breaking
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    setWidth(buttonRef.current.getBoundingClientRect().width);
  });

  React.useEffect(() => {
    // TODO: Need to type this properly as well...
    const match: any = React.Children.toArray(children).find((child) => {
      if (!React.isValidElement(child)) {
        return null;
      }

      if (isHeadingElement(child)) {
        return null;
      }

      return child.props.value === value;
    });

    // If there is no match, set internalSelection to null so placeholder will be shown
    setInternalSelection(match ? match.props : null);
  }, [children, value]);

  const hidePopover = popover.hide;
  const handleOptionSelected = React.useCallback(
    (optionValue: string, meta: any) => {
      hidePopover();
      onChange?.(optionValue, meta);
    },
    [hidePopover, onChange]
  );

  if (!label && !ariaLabel && process.env.NODE_ENV === 'development') {
    throw new Error(
      'If a "label" is not provided to Select, please provide "aria-label".'
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
          {!internalSelection && (
            <Text
              className={clsx(classes.placeholderText, classes.buttonText)}
              size="subbody"
              {...getTestProps(testIds.placeholderText)}
            >
              {placeholder}
            </Text>
          )}
          {internalSelection && !selectedOptionDisplay && (
            <Text className={classes.buttonText} size="subbody">
              {internalSelection.title}
            </Text>
          )}
          {internalSelection && selectedOptionDisplay && (
            <Text className={classes.buttonText} size="subbody">
              {selectedOptionDisplay(internalSelection)}
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
              role="listbox"
              variants={
                shouldReduceMotion
                  ? listMotionVariantsReduced
                  : listMotionVariants
              }
            >
              {popover.visible &&
                React.Children.map(children, (child) => {
                  if (!React.isValidElement(child)) {
                    return null;
                  }

                  if (isHeadingElement(child)) {
                    return child;
                  }

                  const option: React.ReactElement<SelectOptionProps> = child;

                  return (
                    <RoverOption
                      rover={rover}
                      value={value}
                      option={option}
                      handleOptionSelect={handleOptionSelected}
                      variants={
                        shouldReduceMotion
                          ? listItemMotionVariantsReduced
                          : listItemMotionVariants
                      }
                      disabled={child?.props?.disabled}
                    />
                  );
                })}
            </motion.ul>
          </ReakitPopover>
        </FocusLock>
      </Portal>
    </div>
  );
};
