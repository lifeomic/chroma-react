import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles/index';
import { GetClasses } from '../../typeUtils';

export const IconTileBadgeStylesKey = 'ChromaIconTileBadge';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      width: theme.pxToRem(67),
      height: theme.pxToRem(67),
      position: 'absolute',
      top: 'calc(50% - 3.125rem)',
      left: 'calc(50% - 2.125rem)',
      backgroundColor: theme.palette.common.white,
      borderRadius: '100%',
      boxShadow: '0px 4px 34px rgba(0, 0, 0, 0.25)',
      color: theme.palette.primary.main,
    },
    icon: {
      height: '100%',
      display: 'flex',
      margin: '0 auto',
    },
  }),
  { name: IconTileBadgeStylesKey }
);

export interface IconTileBadgeOwnProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export type IconTileBadgeClasses = GetClasses<typeof useStyles>;

export interface IconTileBadgeProps extends IconTileBadgeOwnProps {}

export const IconTileBadge = React.forwardRef<
  HTMLDivElement,
  IconTileBadgeProps
>(({ children, className, icon: Icon, ...rootProps }, ref) => {
  const classes = useStyles({});

  return (
    <div ref={ref} className={clsx(classes.root, className)} {...rootProps}>
      {!!Icon && (
        <Icon
          className={classes.icon}
          role="img"
          aria-hidden
          width={24}
          height={24}
        />
      )}
      {children}
    </div>
  );
});
