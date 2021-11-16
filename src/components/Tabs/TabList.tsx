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
    pill: {
      background: 'rgba(132, 137, 166, 0.15)',
      borderRadius: theme.pxToRem(20),
      border: 'solid 1px transparent',
      display: 'inline-flex',
      flexDirection: 'row',
      margin: 0,
      maxHeight: theme.pxToRem(35),
      overflow: 'hidden',
      padding: theme.spacing(0.25),
      width: 'auto',
    },
    fullWidth: {
      width: '100%',
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
  const { variant, fullWidth, tabState } = React.useContext(TabsContext);
  return (
    <BaseTabList
      {...tabState}
      aria-label={ariaLabel}
      className={clsx(classes.root, className, {
        [classes.pill]: variant === 'pill',
        [classes.fullWidth]: fullWidth,
      })}
      {...rootProps}
    />
  );
};
