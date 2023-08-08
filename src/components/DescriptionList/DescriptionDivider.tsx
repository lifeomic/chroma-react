import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';

export const DescriptionDividerStylesKey = 'ChromaDescriptionDivider';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      backgroundColor: theme.palette.divider,
      border: 'none',
      flexShrink: 0,
      gridColumn: '1/-1',
      margin: 0,
      height: 1,
      width: '100%',
    },
  }),
  { name: DescriptionDividerStylesKey }
);

export interface DescriptionDividerOwnProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {}

export type DescriptionDividerClasses = GetClasses<typeof useStyles>;

export interface DescriptionDividerProps extends DescriptionDividerOwnProps {}

/**
 * A `DescriptionDivider` is a thin line that groups content in description lists. The divider
 * renders as an `<li>`.
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/DescriptionDivider/DescriptionDivider.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/DescriptionDivider/DescriptionDivider.stories.tsx)
 */
export const DescriptionDivider = React.forwardRef<
  HTMLLIElement,
  DescriptionDividerProps
>(({ className, ...rootProps }, ref) => {
  const classes = useStyles({});

  return (
    <li ref={ref} className={clsx(classes.root, className)} {...rootProps} />
  );
});
