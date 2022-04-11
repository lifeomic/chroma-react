import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles/index';
import { GetClasses } from '../../typeUtils';

export const BreadcrumbNavStylesKey = 'ChromaBreadcrumbNav';

export const useStyles = makeStyles(
  (theme) => ({
    root: {},
    ol: {
      margin: theme.spacing(0),
      paddingLeft: theme.spacing(0),
      listStyle: 'none',
    },
  }),
  { name: BreadcrumbNavStylesKey }
);

export type BreadcrumbNavClasses = GetClasses<typeof useStyles>;

export interface BreadcrumbNavProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children?: React.ReactNode;
}

export const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({
  className,
  children,
  ...rootProps
}) => {
  const classes = useStyles({});
  return (
    <nav
      aria-label="Breadcrumb"
      className={clsx(classes.root, className)}
      {...rootProps}
    >
      <ol className={classes.ol}>{children}</ol>
    </nav>
  );
};
