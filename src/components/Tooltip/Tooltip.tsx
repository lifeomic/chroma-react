import { fontSizes } from '../../styles/createTypography';
import { GetClasses } from '../../typeUtils';
import { makeStyles } from '../../styles';
import { motion, useReducedMotion } from 'framer-motion';
import { Portal } from 'reakit/Portal';
import {
  Tooltip as ReakitTooltip,
  TooltipProps as ReakitTooltipProps,
  TooltipReference,
  useTooltipState,
  TooltipInitialState,
} from 'reakit/Tooltip';
import clsx from 'clsx';
import * as React from 'react';

export const TooltipStylesKey = 'ChromaTooltip';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      backgroundColor: theme.palette.common.black,
      borderRadius: theme.pxToRem(4),
      boxShadow: theme.boxShadows.tooltip,
      color: theme.palette.common.white,
      fontFamily: theme.typography.fontFamily,
      fontSize: fontSizes.tooltip,
      letterSpacing: '0.021875em',
      maxWidth: theme.pxToRem(500),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.75),
      zIndex: 1300,
    },
  }),
  { name: TooltipStylesKey }
);

export type TooltipClasses = GetClasses<typeof useStyles>;

export interface TooltipProps
  extends Pick<ReakitTooltipProps, 'className' | 'hidden' | 'title'>,
    Pick<TooltipInitialState, 'placement' | 'gutter'> {
  children?: any;
  defaultVisible?: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  className,
  defaultVisible = false,
  placement = 'bottom',
  title = '',
  gutter,
  ...rootProps
}) => {
  const classes = useStyles({});

  const shouldReduceMotion = useReducedMotion();

  const tooltip = useTooltipState({
    placement,
    visible: defaultVisible,
    gutter,
  });

  React.useEffect(() => {
    tooltip.place(placement);
  }, [placement, tooltip]);

  return (
    <>
      <TooltipReference {...tooltip}>
        {(referenceProps) =>
          React.cloneElement(React.Children.only(children), referenceProps)
        }
      </TooltipReference>
      <Portal>
        <ReakitTooltip
          {...tooltip}
          as={motion.div}
          className={clsx(classes.root, className)}
          animate={
            tooltip.visible
              ? shouldReduceMotion
                ? { opacity: 1 }
                : {
                    opacity: 1,
                    transition: { delay: 0.75 },
                  }
              : {
                  opacity: 0,
                }
          }
          {...rootProps}
        >
          {title}
        </ReakitTooltip>
      </Portal>
    </>
  );
};
