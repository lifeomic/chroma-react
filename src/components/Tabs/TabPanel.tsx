import clsx from 'clsx';
import * as React from 'react';
import { TabPanel as BaseTabPanel } from 'reakit/Tab';
import { newMakeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { TabsContext } from './TabsContext';
import { TabStop } from './types';

export const TabPanelStylesKey = 'ChromaTabPanel';

export const useStyles = newMakeStyles({ name: TabPanelStylesKey })(
  (_theme) => ({
    root: {
      outline: 'none',
    },
  })
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
  const { classes } = useStyles();
  const { tabState } = React.useContext(TabsContext);
  return (
    <BaseTabPanel
      {...tabState}
      className={clsx(classes.root, className)}
      {...rootProps}
    />
  );
};
