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

      '&:focus': {
        boxShadow: theme.boxShadows.focusVisible,
        outline: 'none',
      },
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
    trackInverse: {
      backgroundColor: 'rgba(230, 231, 237, 0.1)',
    },
    range: {
      backgroundColor: theme.palette.primary.main,
      height: '100%',
      position: 'absolute',

      '&[data-disabled]': {
        backgroundColor: theme.palette.graphite[600],
      },
    },
    rangeInverse: {
      backgroundColor: theme.palette.common.white,
      opacity: 0.5,
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
      '&:hover, &:focus': {
        boxShadow: '0 0 0 5px rgba(132, 137, 166, 0.08)',
      },
    },
    thumbInverse: {
      backgroundColor: theme.palette.graphite[100],
      borderColor: theme.palette.common.white,
      '&:hover, &:focus': {
        boxShadow: '0 0 0 5px rgba(255, 255, 255, 0.09)',
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
    labelBottomTrailingMessage: {
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
    valueInverse: {
      color: theme.palette.common.white,
      opacity: 0.9,
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
    trailingMessage: {
      marginLeft: 0,
      marginTop: theme.spacing(0.875),
    },
    helpMessage: {
      color: theme.palette.text.hint,
      fontSize: theme.typography.caption.fontSize,
    },
    helpMessageInverse: {
      color: theme.palette.common.white,
      opacity: 0.9,
    },
    errorMessageInverse: {
      color: theme.palette.common.white,
      opacity: 0.9,
    },
  }),
  { name: SliderStylesKey }
);

export type SliderClasses = GetClasses<typeof useStyles>;

export interface SliderOwnProps {
  'aria-label'?: string;
  className?: string;
  color?: 'default' | 'inverse';
  disabled?: boolean;
  errorMessage?: string;
  hasError?: boolean;
  helpMessage?: string;
  id?: string;
  label?: string;
  labelPlacement?: 'bottom' | 'top';
  max?: number;
  min?: number;
  minStepsBetweenThumbs?: number;
  name?: string;
  showValue?: boolean;
  step?: number;
  valuePlacement?: 'left' | 'center' | 'right';
}

interface PointProps extends SliderOwnProps {
  type: 'point';
  defaultValue?: number;
  formatValue?: (value: any) => string;
  onValueChange?: (value: any) => void;
  value?: number;
}

interface RangeProps extends SliderOwnProps {
  type: 'range';
  defaultValue?: number[];
  formatValue?: (value: any) => string;
  onValueChange?: (value: any) => void;
  value?: number[];
}

export type SliderProps = PointProps | RangeProps;

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
      color = 'default',
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
      value,
      valuePlacement = 'right',
      ...rootProps
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
      value: getValueAsArray(value),
    };
    const classes = useStyles({});
    const arrayValue = sliderProps.value || sliderProps.defaultValue;

    const [uniqueId] = React.useState<string>(
      () => id || name || generateUniqueId('slider-')
    );
    const sliderLabelId = generateUniqueId('slider-label-');
    const sliderValueId = generateUniqueId('slider-value-');

    /* istanbul ignore next */
    if (!label && !ariaLabel && process.env.NODE_ENV === 'development') {
      throw new Error(
        'If a "label" is not provided to Slider, please provide "aria-label".'
      );
    }

    const onChange = (value: number[]) => {
      let newValue;

      if (type === 'range') {
        newValue = value;
      } else if (type === 'point') {
        newValue = value[0];
      }

      onValueChange?.(newValue);
    };

    const getDescribedBy = () => {
      const builtDescribedBy = buildDescribedBy({
        hasError,
        hasHelpMessage: !!helpMessage,
        uniqueId,
      });

      if (builtDescribedBy) {
        return `${sliderValueId} ${builtDescribedBy}`;
      }
      return sliderValueId;
    };

    const Label = () => (
      <span
        className={clsx(
          classes.label,
          color === 'inverse' && classes.labelInverse,
          labelPlacement === 'bottom' && classes.labelBottom
        )}
        id={sliderLabelId}
      >
        {label}
      </span>
    );

    const Value = () => (
      <Text
        className={clsx(
          classes.value,
          {
            [classes.valueLeft]: valuePlacement === 'left',
            [classes.valueCenter]: valuePlacement === 'center',
            [classes.valueRight]: valuePlacement === 'right',
          },
          color === 'inverse' && classes.valueInverse
        )}
        id={sliderValueId}
        size="subbody"
      >
        {formatValue?.(value) || value}
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
      <div {...rootProps}>
        {labelPlacement === 'top' && <LabelContainer />}

        <SliderPrimitive.Slider
          aria-describedby={getDescribedBy()}
          aria-labelledby={sliderLabelId}
          className={clsx(classes.root, className)}
          data-testid="ChromaSlider-slider"
          id={uniqueId}
          onValueChange={onChange}
          tabIndex={0}
          {...sliderProps}
          ref={ref}
        >
          <SliderPrimitive.Track
            className={clsx(
              classes.track,
              color === 'inverse' && classes.trackInverse
            )}
          >
            <SliderPrimitive.Range
              className={clsx(
                classes.range,
                color === 'inverse' && classes.rangeInverse
              )}
            />
          </SliderPrimitive.Track>
          {arrayValue?.map((_: number, i: number) => (
            <SliderPrimitive.Thumb
              className={clsx(
                classes.thumb,
                hasError && classes.thumbError,
                color === 'inverse' && classes.thumbInverse
              )}
              data-testid="ChromaSlider-thumb"
              key={i}
            />
          ))}
        </SliderPrimitive.Slider>

        {labelPlacement === 'bottom' && <LabelContainer />}

        {helpMessage && (
          <FormHelpMessage
            className={clsx(
              classes.helpMessage,
              color === 'inverse' && classes.helpMessageInverse,
              labelPlacement === 'top'
                ? classes.trailingMessage
                : classes.labelBottomTrailingMessage
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
              color === 'inverse' && classes.errorMessageInverse,
              labelPlacement === 'top'
                ? classes.trailingMessage
                : classes.labelBottomTrailingMessage
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
