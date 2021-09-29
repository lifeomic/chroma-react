import clsx from 'clsx';
import * as React from 'react';
import { TabPanel as BaseTabPanel } from 'reakit/Tab';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { TabsContext } from './TabsContext';
import { TabStop } from './types';

export const TabPanelStylesKey = 'ChromaTabPanel';

export const useStyles = makeStyles(
  (_theme) => ({
    root: {
      outline: 'none',
    },
  }),
  { name: TabPanelStylesKey }
);

export type TabPanelClasses = GetClasses<typeof useStyles>;

export interface TabPanelProps extends TabStop {
  className?: string;
}

export const TabPanel: React.FC<TabPanelProps> = ({
  className,
  // Reakit's TabPanel no longer requires a "stopId"
  // (in fact, it breaks things), so we destructure it out
  // for now
  stopId,
  ...rootProps
}) => {
  const classes = useStyles({});
  const tab = React.useContext(TabsContext);
  return (
    <BaseTabPanel
      {...tab}
      className={clsx(classes.root, className)}
      tabId={stopId}
      {...rootProps}
    />
  );
};
