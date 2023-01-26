import { GetClasses } from '../../typeUtils';
import { IconButton } from '../IconButton';
import { newMakeStyles } from '../../styles';
import { Text } from '../Text';
import { X } from '@lifeomic/chromicons';
import * as React from 'react';
import clsx from 'clsx';

export const HeaderStylesKey = 'ChromaSlideOverHeader';

export const useStyles = newMakeStyles(
  (theme) => ({
    root: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: theme.palette.black[50],
      padding: theme.spacing(2),
    },
  }),
  { name: HeaderStylesKey }
);

export type HeaderClasses = GetClasses<typeof useStyles>;

export interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
  onClose: () => any;
  title?: string;
  classes?: {
    root?: string;
    text?: string;
    button?: string;
  };
}

export const Header: React.FC<HeaderProps> = ({
  children,
  classes: additionalClasses,
  className,
  onClose,
  title,
  ...rootProps
}) => {
  const { classes } = useStyles();
  return (
    <div
      className={clsx(classes.root, additionalClasses?.root, className)}
      {...rootProps}
    >
      {children}
      {title && (
        <Text
          className={clsx(additionalClasses?.text)}
          size="body"
          weight="bold"
        >
          {title}
        </Text>
      )}
      <IconButton
        className={additionalClasses?.button}
        aria-label="Close panel"
        icon={X}
        onClick={onClose}
        size={0}
      />
    </div>
  );
};
