import clsx from 'clsx';
import * as React from 'react';
import { Tab as BaseTab, TabOptions } from 'reakit/Tab';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { TabsContext } from './TabsContext';
import { TabStop } from './types';

export const TabStylesKey = 'ChromaTab';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      alignItems: 'center',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.subtitle1.fontSize,
      fontWeight: theme.typography.fontWeightRegular,
      justifyContent: 'center',
      letterSpacing: '0.03125em',
      margin: 0,
      minHeight: theme.pxToRem(48),
      outline: 'none',
      overflow: 'hidden',
      paddingBottom: theme.spacing(0.75),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingTop: theme.spacing(0.75),
      transition: 'border-bottom 0.25s ease, color 0.5s ease',
      userSelect: 'none',
      verticalAlign: 'middle',
      '&:hover': {
        color: theme.palette.black[500],
      },
      '&:focus': {
        outline: 'none',
      },
      '&[aria-selected="true"]': {
        color: theme.palette.black[900],
        borderBottom: `4px solid ${theme.palette.primary.main}`,
      },
      '&[aria-disabled="true"]': {
        color: theme.palette.black[400],
        cursor: 'initial',
        opacity: 0.4,
      },
    },
    pill: {
      borderBottom: 'none',
      borderRadius: '50px',
      backgroundColor: theme.palette.grey[500],
      '&[aria-selected="true"]': {
        borderBottom: 'none',
        borderRadius: '50px',
        backgroundColor: theme.palette.blue[500],
      },
      '&:hover': {
        color: theme.palette.red[500],
      },
      '&:focus': {
        outline: 'none',
      },
      '&[aria-disabled="true"]': {
        color: theme.palette.red[400],
        cursor: 'initial',
        opacity: 0.4,
      },
    },
  }),
  { name: TabStylesKey }
);

export type TabClasses = GetClasses<typeof useStyles>;

export interface TabProps extends TabStop {
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Tab: React.FC<TabProps & Partial<TabOptions>> = ({
  className,
  disabled,
  onClick,
  stopId,
  ...rootProps
}) => {
  const classes = useStyles({});
  const { variant, tabState } = React.useContext(TabsContext);
  return (
    <BaseTab
      {...tabState}
      className={clsx(classes.root, className, {
        [classes.pill]: variant === 'pill',
      })}
      disabled={disabled}
      onClick={onClick}
      id={stopId}
      {...rootProps}
    />
  );
};
