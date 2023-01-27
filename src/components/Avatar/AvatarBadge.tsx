import clsx from 'clsx';
import * as React from 'react';
import { newMakeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { useAvatarSize } from './AvatarSizeContext';

export const AvatarBadgeStylesKey = 'ChromaAvatarBadge';

export const useStyles = newMakeStyles({ name: AvatarBadgeStylesKey })(
  (theme) => ({
    root: {
      alignItems: 'center',
      backgroundColor: theme.palette.red.main,
      border: `${theme.pxToRem(1)} solid ${theme.palette.black[50]}`,
      borderRadius: 9999,
      bottom: 0,
      color: theme.palette.common.white,
      display: 'flex',
      fontWeight: theme.typography.fontWeightBold,
      justifyContent: 'center',
      position: 'absolute',
      right: 0,
      transform: 'translate(25%, 25%)',
      userSelect: 'none',
    },
    size0: {
      height: theme.pxToRem(12),
      width: theme.pxToRem(12),
    },
    size1: {
      fontSize: theme.pxToRem(8),
      height: theme.pxToRem(16),
      width: theme.pxToRem(16),
    },
    size2: {
      fontSize: theme.pxToRem(10),
      height: theme.pxToRem(20),
      width: theme.pxToRem(20),
    },
  })
);

export type AvatarBadgeClasses = GetClasses<typeof useStyles>;

export interface AvatarBadgeProps
  extends React.ComponentPropsWithoutRef<'span'> {
  count?: number;
  isVisible?: boolean;
}

export const AvatarBadge: React.FC<AvatarBadgeProps> = ({
  className,
  count,
  isVisible,
  ...rootProps
}) => {
  const { classes } = useStyles();
  const { size } = useAvatarSize();

  if (!count && !isVisible) {
    return null;
  }

  return (
    <span
      aria-label={
        count ? `${count} notifications available` : 'notifications available'
      }
      role="status"
      className={clsx(
        classes.root,
        {
          [classes.size0]: size === 0,
          [classes.size1]: size === 1,
          [classes.size2]: size === 2,
        },
        className
      )}
      {...rootProps}
    >
      {size !== 0 ? count : null}
    </span>
  );
};
