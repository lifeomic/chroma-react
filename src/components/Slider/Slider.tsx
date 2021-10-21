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
      alignItems: 'center',
      display: 'flex',
      position: 'relative',
      touchAction: 'none',
      userSelect: 'none',

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
      backgroundColor: theme.palette.primary.main,
      height: '100%',
      position: 'absolute',

      '&[data-disabled]': {
        backgroundColor: theme.palette.graphite[600],
      },
    },
    thumb: {
      all: 'unset',
      cursor: 'pointer',
      backgroundColor: theme.palette.common.white,
      border: `4px solid ${theme.palette.primary.main}`,
      borderRadius: '100%',
      display: 'block',
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
      color: theme.palette.text.hint,
    },
    valueLeft: {
      textAlign: 'left',
    },
    valueCenter: {
      textAlign: 'center',
    },
    valueRight: {
      textAlign: 'right',
    },
    trailerMessage: {
      marginLeft: 0,
      marginTop: theme.spacing(0.875),
    },
    helpMessage: {
      color: theme.palette.text.hint,
      fontSize: theme.typography.caption.fontSize,
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
  defaultValue?: number[];
  disabled?: boolean;
  errorMessage?: string;
  formatValue?: (value: number[] | undefined) => string;
  hasError?: boolean;
  helpMessage?: string;
  id?: string;
  label?: string;
  labelPlacement?: 'bottom' | 'top';
  max?: number;
  min?: number;
  minStepsBetweenThumbs?: number;
  name?: string;
  onValueChange?: (value: number[]) => void;
  showValue?: boolean;
  step?: number;
  type?: 'point' | 'range';
  value?: number[];
  valuePlacement?: 'left' | 'center' | 'right';
}

const getValueAsArray = (value: undefined | number | number[]) => {
  if (value === undefined) {
    return undefined;
  }
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
};

export const Slider = React.forwardRef<HTMLElement, SliderProps>(
  (
    {
      ['aria-label']: ariaLabel,
      className,
      defaultValue,
      disabled,
      errorMessage,
      formatValue,
      hasError,
      helpMessage,
      id,
      label,
      labelPlacement = 'top',
      max,
      min,
      minStepsBetweenThumbs,
      name,
      onValueChange,
      showValue,
      type = 'point',
      value: val,
      valuePlacement = 'right',
    },
    ref
  ) => {
    const sliderProps = {
      'aria-label': ariaLabel,
      defaultValue: getValueAsArray(defaultValue),
      disabled,
      max,
      min,
      minStepsBetweenThumbs,
      name,
      onValueChange,
      value: getValueAsArray(val),
    };
    const classes = useStyles({});
    const value = sliderProps.value || sliderProps.defaultValue;

    const [uniqueId] = React.useState<string>(
      () => id || name || generateUniqueId('slider-')
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
          labelPlacement === 'bottom' && classes.labelBottom
        )}
      >
        {label}
      </span>
    );

    const Value = () => (
      <Text
        className={clsx(classes.value, {
          [classes.valueLeft]: valuePlacement === 'left',
          [classes.valueCenter]: valuePlacement === 'center',
          [classes.valueRight]: valuePlacement === 'right',
        })}
        size="subbody"
      >
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
        {labelPlacement === 'top' && <LabelContainer />}

        <SliderPrimitive.Slider
          aria-describedby={buildDescribedBy({
            hasError,
            hasHelpMessage: !!helpMessage,
            uniqueId,
          })}
          className={clsx(classes.root, className)}
          id={uniqueId}
          {...sliderProps}
          ref={ref}
        >
          <SliderPrimitive.Track className={classes.track}>
            <SliderPrimitive.Range className={classes.range} />
          </SliderPrimitive.Track>
          {(type === 'point' ? [''] : ['', '']).map((_: string, i: number) => (
            <SliderPrimitive.Thumb
              className={clsx(classes.thumb, hasError && classes.thumbError)}
              key={i}
            />
          ))}
        </SliderPrimitive.Slider>

        {labelPlacement === 'bottom' && <LabelContainer />}

        {helpMessage && (
          <FormHelpMessage
            className={clsx(
              classes.helpMessage,
              labelPlacement === 'top'
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
              labelPlacement === 'top'
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
