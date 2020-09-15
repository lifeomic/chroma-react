import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles/index';
import { GetClasses } from '../../typeUtils';
import { Breadcrumb, BreadcrumbProps } from './Breadcrumb';
import { BreadcrumbNav } from './BreadcrumbNav';

export const BreadcrumbsStylesKey = 'ChromaBreadcrumbs';

const useStyles = makeStyles(
  (_theme) => ({
    root: {},
    inverse: {},
  }),
  { name: BreadcrumbsStylesKey }
);

export type BreadcrumbsClasses = GetClasses<typeof useStyles>;

export interface BreadcrumbsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  color?: BreadcrumbProps['color'];
  crumbs: Array<BreadcrumbProps>;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  className,
  color,
  crumbs,
  ...rootProps
}) => {
  const classes = useStyles({});
  return (
    <BreadcrumbNav
      className={clsx(
        classes.root,
        { [classes.inverse]: color === 'inverse' },
        className
      )}
      {...rootProps}
    >
      {crumbs &&
        crumbs.map((c, i) => (
          <Breadcrumb
            key={i}
            text={c.text}
            url={c.url}
            color={color}
            isCurrentPage={i === crumbs.length - 1}
          />
        ))}
    </BreadcrumbNav>
  );
};
