import * as React from 'react';
import { GetClasses } from '../../typeUtils';
import { makeStyles } from '../../styles';
import { ListItemProps } from './ListItem';
import { ListGroupHeadingProps } from './ListGroupHeading';
import { Text } from '../Text';
import clsx from 'clsx';

export const ListStylesKey = 'ChromaList';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      backgroundColor: theme.palette.common.white,
      maxHeight: theme.pxToRem(432),
      minWidth: theme.pxToRem(224),
      overflowY: 'auto',
      paddingBottom: theme.spacing(1),
      paddingLeft: 0,
      paddingTop: theme.spacing(1),
    },
    title: {
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(2.5),
      paddingRight: theme.spacing(2.5),
    },
  }),
  { name: ListStylesKey }
);

export type ListClasses = GetClasses<typeof useStyles>;

export interface ListProps {
  ['aria-label']: string;
  children?: React.ReactNode;
  className?: string;
  items?: Array<
    | React.ReactElement<ListItemProps>
    | React.ReactElement<ListGroupHeadingProps>
  >;
  title?: string;
}

/**
  Lists are used to render groups of items with consistent styling. Can be split into multiple sections with List Group Headings. 

  ### Accessibility

  - The \<ul\> and \<li\> hierarchy is correct.
  - An aria-label is required.

  ### Links

  - [Component Source (List)](https://github.com/lifeomic/chroma-react/blob/master/src/components/List/List.tsx)
  - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/List/List.stories.tsx)
 */
export const List: React.FC<ListProps> = ({
  'aria-label': ariaLabel,
  children,
  className,
  items,
  title,
  ...rootProps
}) => {
  const classes = useStyles({});

  return (
    <ul
      aria-label={ariaLabel}
      className={clsx(classes.root, className)}
      {...rootProps}
    >
      {!!title && (
        <Text className={classes.title} weight="bold" size="subbody">
          {title}
        </Text>
      )}
      {items}
    </ul>
  );
};
