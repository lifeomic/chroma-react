import clsx from 'clsx';
import * as React from 'react';
import {
  NavLink,
  NavLinkProps as RouterDomNavLinkProps,
} from 'react-router-dom';
import { newMakeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';

export const LinkStylesKey = 'ChromaLink';

export const useStyles = newMakeStyles(
  (theme) => ({
    root: {
      color: theme.hexToRgba(theme.palette.primary[900], 0.9),
      transition: 'color 0.25s ease',
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.primary[900],
        textDecoration: 'underline',
      },
    },
    inverse: {
      color: theme.hexToRgba(theme.palette.common.white, 0.9),
      '&:hover': {
        color: theme.palette.common.white,
      },
    },
    negative: {
      color: theme.palette.negative.main,
      '&:hover': {
        color: theme.palette.negative.dark,
      },
    },
    positive: {
      color: theme.palette.positive.main,
      '&:hover': {
        color: theme.palette.positive.dark,
      },
    },
  }),
  { name: LinkStylesKey }
);

export type LinkClasses = GetClasses<typeof useStyles>;

export interface LinkProps
  extends RouterDomNavLinkProps<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
  > {
  children?: React.ReactNode;
  color?: 'default' | 'inverse' | 'negative' | 'positive';
  ['data-testid']?: string;
  newTab?: boolean;
}

/**
 *
 */
export const Link: React.FC<LinkProps> = ({
  to,
  children,
  className,
  color = 'default',
  newTab,
  'data-testid': dataTestId,
  ...rootProps
}) => {
  const { classes } = useStyles();

  if (newTab) {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={to as string}
        className={clsx(
          classes.root,
          {
            [classes.inverse]: color === 'inverse',
            [classes.negative]: color === 'negative',
            [classes.positive]: color === 'positive',
          },
          className
        )}
        data-testid={dataTestId}
        onClick={
          rootProps.onClick
            ? (rootProps.onClick as
                | ((
                    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => void)
                | undefined)
            : undefined
        }
      >
        {children}
      </a>
    );
  }

  return (
    <NavLink
      to={to}
      className={clsx(
        classes.root,
        {
          [classes.inverse]: color === 'inverse',
          [classes.negative]: color === 'negative',
          [classes.positive]: color === 'positive',
        },
        className
      )}
      data-testid={dataTestId}
      {...rootProps}
    >
      {children}
    </NavLink>
  );
};
