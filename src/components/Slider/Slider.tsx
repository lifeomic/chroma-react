import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import clsx from 'clsx';
import { Box } from '../Box';
import {
  buildDescribedBy,
  errorFor,
  FormErrorMessage,
  FormHelpMessage,
  helpFor,
} from '../_private/forms';
import { generateUniqueId } from '../_private/UniqueId';
import { GetClasses } from '../../typeUtils';
import { makeStyles } from '../../styles';
import { Text } from '../Text';

export const SliderStylesKey = 'ChromaSlider';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      userSelect: 'none',
      touchAction: 'none',

      '&[data-orientation="horizontal"]': {
        height: theme.pxToRem(20),
      },
    },
    track: {
      backgroundColor: 'rgba(132, 137, 166, 0.15)',
      borderRadius: 2,
      cursor: 'pointer',
      flexGrow: 1,
      position: 'relative',

      '&[data-orientation="horizontal"]': {
        height: theme.pxToRem(3),
      },
    },
    range: {
      position: 'absolute',
      backgroundColor: theme.palette.primary.main,
      height: '100%',

      '&[data-disabled]': {
        backgroundColor: theme.palette.graphite[600],
      },
    },
    thumb: {
      all: 'unset',
      cursor: 'pointer',
      display: 'block',
      backgroundColor: theme.palette.common.white,
      border: `4px solid ${theme.palette.primary.main}`,
      borderRadius: '100%',
      height: theme.pxToRem(12),
      width: theme.pxToRem(12),

      '&[data-disabled]': {
        borderColor: theme.palette.graphite[600],
      },

      '&:hover': {
        boxShadow: '0 0 0 5px rgba(132, 137, 166, 0.08)',
      },

      '&:focus': {
        boxShadow: '0 0 0 5px rgba(132, 137, 166, 0.08)',
      },
    },
    thumbError: {
      border: `4px solid ${theme.palette.red.main}`,
    },
    label: {
      alignItems: 'center',
      color: theme.palette.black[800],
      display: 'flex',
      fontSize: theme.pxToRem(14),
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(0.625),
    },
    labelInverse: {
      color: theme.palette.common.white,
    },
    labelBottom: {
      margingBottom: 0,
      marginTop: theme.spacing(0.625),
    },
    labelMargin: {
      marginTop: 0,
    },
    labelBottomTrailerMessage: {
      marginLeft: 0,
    },
    labelValuePair: {
      marginTop: theme.spacing(0.625),
      '& > *': {
        lineHeight: 1.25,
      },
    },
    value: {
      color: theme.palette.black[500],
      textAlign: 'right',
    },
    trailerMessage: {
      marginTop: theme.spacing(0.875),
      marginLeft: 0,
    },
    helpMessage: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.palette.text.hint,
    },
    helpMessageInverse: {
      color: theme.palette.common.white,
    },
  }),
  { name: SliderStylesKey }
);

export type SliderClasses = GetClasses<typeof useStyles>;

export interface SliderProps {
  'aria-label'?: string;
  className?: string;
  defaultValue?: number[] | undefined;
  disabled?: boolean;
  errorMessage?: string;
  formatValue?: (value: number[] | undefined) => string;
  hasError?: boolean;
  helpMessage?: string;
  label?: string;
  labelPosition?: 'bottom' | 'top';
  max?: number;
  min?: number;
  minStepsBetweenThumbs?: number;
  name?: string;
  onChange: (value: number[]) => void;
  showValue?: boolean;
  step?: number;
  value?: number[] | undefined;
  type?: 'point' | 'range';
}

export const Slider = React.forwardRef<HTMLElement, SliderProps>(
  (
    {
      ['aria-label']: ariaLabel,
      className,
      errorMessage,
      formatValue,
      hasError,
      helpMessage,
      label,
      labelPosition = 'top',
      name,
      onChange,
      showValue,
      type = 'point',
      value,
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({});

    const [uniqueId] = React.useState<string>(
      () => name || generateUniqueId('slider-')
    );

    /* istanbul ignore next */
    if (!label && !ariaLabel && process.env.NODE_ENV === 'development') {
      throw new Error(
        'If a "label" is not provided to Slider, please provide "aria-label".'
      );
    }

    const Label = () => (
      <span
        className={clsx(
          classes.label,
          labelPosition === 'bottom' && classes.labelBottom
        )}
      >
        {label}
      </span>
    );

    const Value = () => (
      <Text className={classes.value} size="subbody">
        {!!formatValue ? formatValue(value) : value}
      </Text>
    );

    const LabelContainer = () => {
      if (label && showValue) {
        return (
          <Box className={classes.labelValuePair} justify="space-between">
            <Label />
            <Value />
          </Box>
        );
      }

      if (label) {
        return <Label />;
      }

      if (showValue) {
        return <Value />;
      }

      return null;
    };

    return (
      <div>
        {labelPosition === 'top' && <LabelContainer />}

        <SliderPrimitive.Root
          aria-describedby={buildDescribedBy({
            hasError,
            hasHelpMessage: !!helpMessage,
            uniqueId,
          })}
          aria-label={ariaLabel}
          className={clsx(classes.root, className)}
          id={uniqueId}
          onValueChange={onChange}
          ref={ref}
          value={value}
          {...rootProps}
        >
          <SliderPrimitive.Track className={classes.track}>
            <SliderPrimitive.Range className={classes.range} />
          </SliderPrimitive.Track>

          {(type === 'point' ? [''] : ['', '']).map((_, index) => (
            <SliderPrimitive.Thumb
              className={clsx(classes.thumb, hasError && classes.thumbError)}
              data-testid="ChromaSlider-thumb"
              key={index}
            />
          ))}
        </SliderPrimitive.Root>

        {labelPosition === 'bottom' && <LabelContainer />}

        {helpMessage && (
          <FormHelpMessage
            className={clsx(
              classes.helpMessage,
              labelPosition === 'top'
                ? classes.trailerMessage
                : classes.labelBottomTrailerMessage
            )}
            describedById={helpFor(uniqueId)}
            rootElementId={uniqueId}
          >
            {helpMessage}
          </FormHelpMessage>
        )}
        {hasError && errorMessage && (
          <FormErrorMessage
            className={clsx(
              labelPosition === 'top'
                ? classes.trailerMessage
                : classes.labelBottomTrailerMessage
            )}
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
