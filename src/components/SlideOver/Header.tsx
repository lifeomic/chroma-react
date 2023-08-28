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
      minHeight: theme.pxToRem(22),
      minWidth: theme.pxToRem(22),
      height: theme.pxToRem(22),
      width: theme.pxToRem(22),
    },
    overflow: {
      flex: 1,
      overflow: 'hidden',
    },
    text: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
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
      gap={1}
      justify="space-between"
      padding={2}
      className={clsx(classes.root, additionalClasses?.root, className)}
      {...rootProps}
    >
      {title && (
        <Box align="center" gap={1} className={classes.overflow}>
          {!!TitleIcon && (
            <TitleIcon role="img" aria-hidden className={classes.titleIcon} />
          )}
          <Text
            className={clsx(classes.text, additionalClasses?.text)}
            size="body"
            weight="bold"
          >
            {title}
          </Text>
        </Box>
      )}
      <Box align="center" gap={1}>
        <Box justify="flex-end" align="center" gap={1}>
          {children}
        </Box>
        <IconButton
          className={clsx(classes.button, additionalClasses?.button)}
          aria-label="Close panel"
          icon={X}
          onClick={onClose}
          size={0}
        />
      </Box>
    </Box>
  );
};
