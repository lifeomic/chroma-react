import * as React from 'react';
import { GetClasses } from '../../typeUtils';
import { newMakeStyles } from '../../styles';
import { ListItemProps } from './ListItem';
import { ListGroupHeadingProps } from './ListGroupHeading';
import { Text } from '../Text';
import clsx from 'clsx';

export const ListStylesKey = 'ChromaList';

export const useStyles = newMakeStyles<ListProps>({ name: ListStylesKey })(
  (theme, props) => {
    const stringOrThemeSpacing = (value: string | number | undefined) => {
      if (typeof value === 'string') return value;
      if (typeof value === 'number') return theme.spacing(value);
    };

    return {
      root: {
        backgroundColor: theme.palette.common.white,
        maxHeight: theme.pxToRem(432),
        minWidth: theme.pxToRem(224),
        overflowY: 'auto',
        listStyle: 'none',
        paddingBottom: theme.spacing(1),
        paddingLeft: 0,
        paddingTop: theme.spacing(1),
      },
      title: {
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(2.5),
        paddingRight: theme.spacing(2.5),
      },
      margin: { margin: stringOrThemeSpacing(props.margin) },
      marginLeft: {
        marginLeft: stringOrThemeSpacing(props.marginLeft),
      },
      marginRight: {
        marginRight: stringOrThemeSpacing(props.marginRight),
      },
      marginTop: {
        marginTop: stringOrThemeSpacing(props.marginTop),
      },
      marginBottom: {
        marginBottom: stringOrThemeSpacing(props.marginBottom),
      },
      marginX: {
        marginLeft: stringOrThemeSpacing(props.marginX),
        marginRight: stringOrThemeSpacing(props.marginX),
      },
      marginY: {
        marginTop: stringOrThemeSpacing(props.marginY),
        marginBottom: stringOrThemeSpacing(props.marginY),
      },
      padding: { padding: stringOrThemeSpacing(props.padding) },
      paddingLeft: {
        paddingLeft: stringOrThemeSpacing(props.paddingLeft),
      },
      paddingRight: {
        paddingRight: stringOrThemeSpacing(props.paddingRight),
      },
      paddingTop: {
        paddingTop: stringOrThemeSpacing(props.paddingTop),
      },
      paddingBottom: {
        paddingBottom: stringOrThemeSpacing(props.paddingBottom),
      },
      paddingX: {
        paddingLeft: stringOrThemeSpacing(props.paddingX),
        paddingRight: stringOrThemeSpacing(props.paddingX),
      },
      paddingY: {
        paddingTop: stringOrThemeSpacing(props.paddingY),
        paddingBottom: stringOrThemeSpacing(props.paddingY),
      },
    };
  }
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
  margin?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginX?: number | string;
  marginY?: number | string;
  padding?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingX?: number | string;
  paddingY?: number | string;
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
export const List: React.FC<ListProps> = (props) => {
  const {
    'aria-label': ariaLabel,
    children,
    className,
    items,
    title,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginY,
    marginX,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingY,
    paddingX,
    ...rootProps
  } = props;

  const { classes } = useStyles(props);

  return (
    <ul
      aria-label={ariaLabel}
      className={clsx(
        classes.root,
        className,
        margin && classes.margin,
        marginTop && classes.marginTop,
        marginBottom && classes.marginBottom,
        marginLeft && classes.marginLeft,
        marginRight && classes.marginRight,
        marginX && classes.marginX,
        marginY && classes.marginY,
        padding && classes.padding,
        paddingTop && classes.paddingTop,
        paddingBottom && classes.paddingBottom,
        paddingLeft && classes.paddingLeft,
        paddingRight && classes.paddingRight,
        paddingX && classes.paddingX,
        paddingY && classes.paddingY
      )}
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
