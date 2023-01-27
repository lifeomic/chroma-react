import clsx from 'clsx';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { newMakeStyles } from '../../styles/index';
import { GetClasses } from '../../typeUtils';

export const BreadcrumbStylesKey = 'ChromaBreadcrumb';

export const useStyles = newMakeStyles({ name: BreadcrumbStylesKey })(
  (theme) => ({
    root: {
      display: 'inline',
      margin: 0,
      padding: 0,
      '& + li:before': {
        display: 'inline-block',
        marginTop: 0,
        marginBottom: 0,
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        transform: 'rotate(15deg)',
        borderRight: `${theme.pxToRem(1)} solid ${theme.palette.text.dark}`,
        height: '0.75rem',
        content: `''`,
      },
    },
    rootInverse: {
      '& + li:before': {
        borderRight: `${theme.pxToRem(1)} solid ${theme.palette.common.white}`,
      },
    },
    link: {
      fontSize: theme.pxToRem(16),
      letterSpacing: theme.pxToRem(0.5),
      textDecoration: 'none',
      color: theme.palette.text.dark,
      transition: 'color 0.5s ease',
      '&:hover': {
        color: theme.palette.primary.main,
        textDecoration: 'underline',
      },
    },
    linkInverse: {
      color: theme.palette.common.white,
      transition: 'opacity 0.5s ease',
      opacity: 1,
      '&:hover': {
        color: theme.palette.common.white,
        opacity: 0.85,
      },
    },
  })
);

export type BreadcrumbClasses = GetClasses<typeof useStyles>;

export interface BreadcrumbProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  children?: React.ReactNode;
  color?: 'inverse' | 'default';
  isCurrentPage?: boolean;
  text: string;
  url: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  className,
  color = 'default',
  isCurrentPage = false,
  text,
  url,
  ...rootProps
}) => {
  const { classes } = useStyles();

  return (
    <li
      className={clsx(
        classes.root,
        {
          [classes.rootInverse]: color === 'inverse',
        },
        className
      )}
      {...rootProps}
    >
      <Link
        aria-current={isCurrentPage ? 'page' : undefined}
        className={clsx(classes.link, {
          [classes.linkInverse]: color === 'inverse',
        })}
        to={url}
      >
        {text}
      </Link>
    </li>
  );
};
