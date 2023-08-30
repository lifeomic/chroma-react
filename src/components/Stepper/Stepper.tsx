import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { Box } from '../Box';
import { StepConnector } from './StepConnector';
import { warning } from '../../utils';
import colorOptions from '../../colors/colorOptions';

export const StepperStylesKey = 'ChromaStepper';

export type StepperClasses = GetClasses<typeof useStyles>;

export const useStyles = makeStyles<StepperProps>(
  (theme) => {
    const stringOrThemeSpacing = (value: string | number | undefined) => {
      if (typeof value === 'string') return value;
      if (typeof value === 'number') return theme.spacing(value);
    };

    const stringOrThemeColor = (value?: string) => {
      if (!value) return;
      const palette: any = theme.palette;

      const valueParts = value.split('.');
      if (valueParts.length > 1) {
        if (colorOptions.includes(value)) {
          return palette[valueParts[0]][valueParts[1]];
        } else {
          warning(true, `Stepper color property ${value} is invalid`);
        }
      }

      return value;
    };

    return {
      root: {
        backgroundColor: theme.palette.common.white,
      },
      bgColor: {
        backgroundColor: ({ bgColor }) => stringOrThemeColor(bgColor),
      },
      innerRoot: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        listStyleType: 'none',
        margin: theme.spacing(4, 4, 0, 4),
        padding: 0,
        width: '100%',
      },
      height: { height: ({ height }) => stringOrThemeSpacing(height) },
      width: { width: ({ width }) => stringOrThemeSpacing(width) },
      margin: { margin: ({ margin }) => stringOrThemeSpacing(margin) },
      marginLeft: {
        marginLeft: ({ marginLeft }) => stringOrThemeSpacing(marginLeft),
      },
      marginRight: {
        marginRight: ({ marginRight }) => stringOrThemeSpacing(marginRight),
      },
      marginTop: {
        marginTop: ({ marginTop }) => stringOrThemeSpacing(marginTop),
      },
      marginBottom: {
        marginBottom: ({ marginBottom }) => stringOrThemeSpacing(marginBottom),
      },
      marginX: {
        marginLeft: ({ marginX }) => stringOrThemeSpacing(marginX),
        marginRight: ({ marginX }) => stringOrThemeSpacing(marginX),
      },
      marginY: {
        marginTop: ({ marginY }) => stringOrThemeSpacing(marginY),
        marginBottom: ({ marginY }) => stringOrThemeSpacing(marginY),
      },
      padding: { padding: ({ padding }) => stringOrThemeSpacing(padding) },
      paddingLeft: {
        paddingLeft: ({ paddingLeft }) => stringOrThemeSpacing(paddingLeft),
      },
      paddingRight: {
        paddingRight: ({ paddingRight }) => stringOrThemeSpacing(paddingRight),
      },
      paddingTop: {
        paddingTop: ({ paddingTop }) => stringOrThemeSpacing(paddingTop),
      },
      paddingBottom: {
        paddingBottom: ({ paddingBottom }) =>
          stringOrThemeSpacing(paddingBottom),
      },
      paddingX: {
        paddingLeft: ({ paddingX }) => stringOrThemeSpacing(paddingX),
        paddingRight: ({ paddingX }) => stringOrThemeSpacing(paddingX),
      },
      paddingY: {
        paddingTop: ({ paddingY }) => stringOrThemeSpacing(paddingY),
        paddingBottom: ({ paddingY }) => stringOrThemeSpacing(paddingY),
      },
    };
  },
  { name: StepperStylesKey }
);

export interface StepperProps {
  activeStep: number;
  as?: 'button' | 'div';
  children: any;
  className?: string;
  connectorClassName?: string;
  onClick?: (index: number) => void;
  ref?: React.Ref<HTMLDivElement>;
  bgColor?: string;
  height?: number | string;
  width?: number | string;
  margin?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginX?: number | string;
  marginY?: number | string;
  padding?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingX?: number | string;
  paddingY?: number | string;
}

/**
 * A Stepper component to display progress.
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Stepper/Stepper.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Stepper/Stepper.stories.tsx)
 */
export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (props, ref) => {
    const {
      activeStep,
      as = 'button',
      children,
      className,
      connectorClassName,
      bgColor,
      height,
      width,
      margin,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      marginY,
      marginX,
      padding,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingY,
      paddingX,
      onClick,
      ...rootProps
    } = props;

    const classes = useStyles(props);
    const childrenArray = Array.isArray(children)
      ? children
      : React.Children.toArray(children);

    const steps = childrenArray.map((child: any, index: number) => {
      const childrenProps = {
        active: false,
        as,
        completed: false,
        index,
        onClick,
      };

      if (activeStep === index) {
        childrenProps.active = true;
      } else if (activeStep > index) {
        childrenProps.completed = true;
      }

      const connector = <StepConnector />;

      return [
        index !== 0 &&
          React.cloneElement(connector, {
            className: connectorClassName,
            hasSubTitle: child.props.subTitle,
            hasSubTitlePill: child.props.subTitlePillLabel,
            key: `connector-${index}`,
            ...childrenProps,
          }),
        React.cloneElement(child, {
          key: `step-${index}`,
          numberOfSteps: childrenArray.length,
          ...childrenProps,
        }),
      ];
    });

    return (
      <Box
        fullWidth
        className={clsx(
          classes.root,
          height && classes.height,
          width && classes.width,
          bgColor && classes.bgColor,
          className
        )}
        ref={ref}
        role="group"
        {...rootProps}
      >
        <ol
          className={clsx(
            classes.innerRoot,
            margin && classes.margin,
            marginTop && classes.marginTop,
            marginBottom && classes.marginBottom,
            marginLeft && classes.marginLeft,
            marginRight && classes.marginRight,
            marginX && classes.marginX,
            marginY && classes.marginY,
            padding && classes.padding,
            paddingTop && classes.paddingTop,
            paddingBottom && classes.paddingBottom,
            paddingLeft && classes.paddingLeft,
            paddingRight && classes.paddingRight,
            paddingX && classes.paddingX,
            paddingY && classes.paddingY
          )}
        >
          {steps}
        </ol>
      </Box>
    );
  }
);
