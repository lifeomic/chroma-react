import clsx from 'clsx';
import * as React from 'react';
import { TabList as BaseTabList } from 'reakit/Tab';
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
  }),
  { name: TabListStylesKey }
);

export type TabListClasses = GetClasses<typeof useStyles>;

export interface TabListProps {
  ['aria-label']: string;
  className?: string;
}

export const TabList: React.FC<TabListProps> = ({
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
      className={clsx(classes.root, className)}
      {...rootProps}
    />
  );
};
