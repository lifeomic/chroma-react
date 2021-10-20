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
        height: 20,
      },

      '&[data-orientation="vertical"]': {
        flexDirection: 'column',
        height: 100,
        width: 20,
      },
    },
    track: {
      backgroundColor: theme.palette.graphite.main,
      borderRadius: 2,
      cursor: 'pointer',
      flexGrow: 1,
      position: 'relative',

      '&[data-orientation="horizontal"]': {
        height: 3,
      },

      '&[data-orientation="vertical"]': {
        width: 3,
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
      height: 12,
      width: 12,

      '&[data-disabled]': {
        borderColor: theme.palette.graphite[600],
      },
      // '&:hover': {
      //   boxShadow: '0 0 0 5px' + theme.palette.common.black,
      // },
      // '&:focus': {
      //   boxShadow: `0 0 0 5px ${theme.palette.common.black}`,
      // },
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
      marginTop: theme.spacing(1),
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
  orientation?: 'horizontal' | 'vertical';
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
      minStepsBetweenThumbs = 1,
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
      <Text className={classes.value} id={uniqueId} size="subbody">
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
      <>
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
          minStepsBetweenThumbs={minStepsBetweenThumbs}
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
      </>
    );
  }
);
