import { GetClasses } from '../../typeUtils';
import { IconButton } from '../IconButton';
import { makeStyles } from '../../styles';
import { Text } from '../Text';
import { X } from '@lifeomic/chromicons';
import * as React from 'react';
import clsx from 'clsx';
import { Box } from '../Box';

export const HeaderStylesKey = 'ChromaSlideOverHeader';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      backgroundColor: theme.palette.black[50],
    },
    titleIcon: {
      color: theme.palette.text.hint,
      height: theme.pxToRem(22),
      width: theme.pxToRem(22),
    },
    button: {
      marginRight: theme.pxToRem(-10),
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
  titleIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
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
  titleIcon: TitleIcon,
  ...rootProps
}) => {
  const classes = useStyles({});
  return (
    <Box
      align="center"
      justify="space-between"
      padding={2}
      className={clsx(classes.root, additionalClasses?.root, className)}
      {...rootProps}
    >
      {children}
      {title && (
        <Box align="center" gap={1}>
          {!!TitleIcon && (
            <TitleIcon role="img" aria-hidden className={classes.titleIcon} />
          )}
          <Text
            className={clsx(additionalClasses?.text)}
            size="body"
            weight="bold"
          >
            {title}
          </Text>
        </Box>
      )}
      <IconButton
        className={clsx(classes.button, additionalClasses?.button)}
        aria-label="Close panel"
        icon={X}
        onClick={onClose}
        size={0}
      />
    </Box>
  );
};
