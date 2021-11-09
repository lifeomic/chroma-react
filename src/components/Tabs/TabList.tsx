import clsx from 'clsx';
import * as React from 'react';
import { TabList as BaseTabList, TabListOptions } from 'reakit/Tab';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { TabsContext } from './TabsContext';

export const TabListStylesKey = 'ChromaTabList';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'row',
      borderBottom: `1px solid ${theme.palette.divider}`,
      width: '100%',
      overflow: 'hidden',
    },
    rootPill: {
      display: 'flex',
      flexDirection: 'row',
      borderBottom: `1px solid ${theme.palette.divider}`,
      width: '100%',
      overflow: 'hidden',
      '& button': {
        borderBottom: 'none',
        borderRadius: '50px',
        backgroundColor: theme.palette.grey[500],
      },
      '& button[aria-selected="true"]': {
        borderBottom: 'none',
        borderRadius: '50px',
        backgroundColor: theme.palette.blue[500],
      },
      '& button:hover': {
        color: theme.palette.red[500],
      },
      '& button:focus': {
        outline: 'none',
      },
      '& button[aria-disabled="true"]': {
        color: theme.palette.red[400],
        cursor: 'initial',
        opacity: 0.4,
      },
    },
  }),
  { name: TabListStylesKey }
);

export type TabListClasses = GetClasses<typeof useStyles>;

export interface TabListProps {
  ['aria-label']: string;
  className?: string;
  variant?: 'default' | 'pill';
}

export const TabList: React.FC<TabListProps & Partial<TabListOptions>> = ({
  variant = 'default',
  'aria-label': ariaLabel,
  className,
  ...rootProps
}) => {
  const classes = useStyles({});
  const tab = React.useContext(TabsContext);
  return (
    <BaseTabList
      {...tab}
      aria-label={ariaLabel}
      className={clsx(
        variant === 'pill' ? classes.rootPill : classes.root,
        className
      )}
      variant={variant}
      {...rootProps}
    />
  );
};
