import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { Box } from '../Box';
import { StepConnector } from './StepConnector';

export const StepperStylesKey = 'ChromaStepper';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      backgroundColor: theme.palette.common.white,
    },
    innerRoot: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      listStyleType: 'none',
      margin: theme.spacing(4, 4, 0, 4),
      width: '100%',
    },
  }),
  { name: StepperStylesKey }
);

export type StepperClasses = GetClasses<typeof useStyles>;

export interface StepperProps {
  activeStep: number;
  as?: 'button' | 'div';
  children: any;
  className?: string;
  connectorClassName?: string;
  onClick?: (index: number) => void;
}

export const Stepper: React.FC<StepperProps> = ({
  activeStep,
  as = 'button',
  children,
  className,
  connectorClassName,
  onClick,
  ...rootProps
}) => {
  const classes = useStyles({});
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
    <Box fullWidth className={clsx(classes.root, className)} {...rootProps}>
      <ol className={classes.innerRoot}>{steps}</ol>
    </Box>
  );
};
