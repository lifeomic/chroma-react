import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles/index';
import { GetClasses } from '../../typeUtils';
import { Breadcrumb, BreadcrumbProps } from './Breadcrumb';
import { BreadcrumbNav } from './BreadcrumbNav';

export const BreadcrumbsStylesKey = 'ChromaBreadcrumbs';

export const useStyles = makeStyles(
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

/**
Breadcrumbs, or a breadcrumb navigation, can help to enhance how users navigate
to previous page levels of a website, especially if that website has many pages
or products.

***Requirement:** This component has a dependency on
react-router-dom. It must be wrapped by a `Router` of some sort.

### Accessibility

- The Breadcrumbs are rendered in a nav to denote that it's a navigation
  landmark.
- The Breadcrumb nav has aria-label set to breadcrumb.
- The links can be focused via the `Tab` key

### Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Breadcrumbs/Breadcrumbs.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Breadcrumbs/Breadcrumbs.stories.tsx)
 */
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
