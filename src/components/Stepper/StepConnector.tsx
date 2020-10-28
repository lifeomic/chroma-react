import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';

export const StepConnectorStylesKey = 'ChromaStepConnector';

export const useStyles = makeStyles(
  (theme) => ({
    connectorRoot: {
      flex: 1,
      position: 'relative',
      top: theme.pxToRem(-23),

      '@media screen and (max-width: 850px)': {
        display: 'none',
      },
    },
    subTitle: {
      top: theme.pxToRem(-33),
    },
    subTitlePill: {
      top: theme.pxToRem(-38),
    },
    line: {
      border: `1px solid ${theme.palette.black[200]}`,
      display: 'block',
      position: 'absolute',
      right: theme.pxToRem(-16),
      transition: 'border .5s ease',
      width: `calc(100% + ${theme.pxToRem(32)})`,
    },
    activeLine: {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  }),
  { name: StepConnectorStylesKey }
);

export type StepConnectorClasses = GetClasses<typeof useStyles>;

export interface StepConnectorProps {
  active?: boolean;
  className?: string;
  completed?: boolean;
  hasSubTitle?: boolean;
  hasSubTitlePill?: boolean;
}

export const StepConnector: React.FC<StepConnectorProps> = ({
  active,
  className,
  completed,
  hasSubTitle,
  hasSubTitlePill,
  ...rootProps
}) => {
  const classes = useStyles({});
  return (
    <div
      className={clsx(
        classes.connectorRoot,
        hasSubTitle && classes.subTitle,
        hasSubTitlePill && classes.subTitlePill,
        className
      )}
      role="presentation"
      {...rootProps}
    >
      <span
        className={clsx(
          classes.line,
          (active || completed) && classes.activeLine
        )}
      />
    </div>
  );
};
