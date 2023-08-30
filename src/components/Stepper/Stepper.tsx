import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { Box } from '../Box';
import { StepConnector } from './StepConnector';
import { warning } from '../../utils';
import colorOptions from './colorOptions';

export const StepperStylesKey = 'ChromaStepper';

export type StepperClasses = GetClasses<typeof useStyles>;

export const useStyles = makeStyles<StepperProps>(
  (theme) => {
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
        className={clsx(classes.root, bgColor && classes.bgColor, className)}
        ref={ref}
        role="group"
        {...rootProps}
      >
        <ol className={classes.innerRoot}>{steps}</ol>
      </Box>
    );
  }
);
