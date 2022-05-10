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

export const testIds = {
  root: 'slider-root',
  slider: 'slider-slider',
  thumb: 'slider-thumb',
};

export const SliderStylesKey = 'ChromaSlider';

export const useStyles = makeStyles(
  (theme) => ({
    slider: {
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
    },
    labelInverse: {
      color: theme.palette.common.white,
    },
    labelTop: {
      marginBottom: theme.spacing(0.625),
    },
    labelBottom: {
      marginTop: theme.spacing(0.625),
    },
    labelBottomTrailingMessage: {
      marginLeft: 0,
    },
    labelValuePair: {
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
  type?: 'point';
  defaultValue?: number;
  formatValue?: (value: number | undefined) => string;
  onValueChange?: (value: number) => void;
  value?: number;
}

interface RangeProps extends SliderOwnProps {
  type: 'range';
  defaultValue?: number[];
  formatValue?: (value: number[] | undefined) => string;
  onValueChange?: (value: number[]) => void;
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
  (props, ref) => {
    const {
      ['aria-label']: ariaLabel,
      className,
      color = 'default',
      disabled,
      errorMessage,
      hasError,
      helpMessage,
      id,
      label,
      labelPlacement = 'top',
      max,
      min,
      minStepsBetweenThumbs,
      name,
      showValue,
      valuePlacement = 'right',
    } = props;

    const sliderProps = {
      'aria-label': ariaLabel,
      defaultValue: getValueAsArray(props.defaultValue),
      disabled,
      max,
      min,
      minStepsBetweenThumbs,
      name,
      value: getValueAsArray(props.value),
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
      // Checking the `type` prop to make sure that the props are either of type PointProp or RangeProp and not of the union type SliderProps
      // https://github.com/microsoft/TypeScript/issues/23613
      if (props.type === 'range') {
        props.onValueChange?.(value);
      } else if (props.type === 'point') {
        props.onValueChange?.(value[0]);
      }
    };

    const formatValue = () => {
      if (!!props.formatValue) {
        // Checking the `type` prop to make sure that the props are either of type PointProp or RangeProp and not of the union type SliderProps
        // https://github.com/microsoft/TypeScript/issues/23613
        if (props.type === 'range') {
          return props.formatValue(props.value);
        } else if (props.type === 'point') {
          return props.formatValue(props.value);
        }
      } else return props.value;
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
          {
            [classes.labelTop]: labelPlacement === 'top',
            [classes.labelBottom]: labelPlacement === 'bottom',
          }
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
        {formatValue()}
      </Text>
    );

    const LabelContainer = () => {
      if (label && (showValue || !!props.formatValue)) {
        return (
          <Box
            align="baseline"
            className={classes.labelValuePair}
            justify="space-between"
          >
            <Label />
            <Value />
          </Box>
        );
      }

      if (label) {
        return <Label />;
      }

      if (showValue || !!props.formatValue) {
        return <Value />;
      }

      return null;
    };

    const HelpMessage = () => {
      if (!helpMessage) {
        return null;
      }
      return (
        <FormHelpMessage
          className={clsx(
            classes.helpMessage,
            color === 'inverse' && classes.helpMessageInverse,
            labelPlacement === 'top'
              ? classes.labelTop
              : classes.labelBottomTrailingMessage
          )}
          describedById={helpFor(uniqueId)}
          rootElementId={uniqueId}
        >
          {helpMessage}
        </FormHelpMessage>
      );
    };

    return (
      <div className={className} data-testid={testIds.root}>
        {labelPlacement === 'top' && (
          <>
            <LabelContainer />
            <HelpMessage />
          </>
        )}

        <SliderPrimitive.Slider
          aria-describedby={getDescribedBy()}
          aria-labelledby={sliderLabelId}
          className={classes.slider}
          data-testid={testIds.slider}
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
              data-testid={testIds.thumb}
              key={i}
            />
          ))}
        </SliderPrimitive.Slider>

        {labelPlacement === 'bottom' && (
          <>
            <LabelContainer />
            <HelpMessage />
          </>
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

// Setting default prop here since we don't destructure these props
Slider.defaultProps = {
  type: 'point',
};
