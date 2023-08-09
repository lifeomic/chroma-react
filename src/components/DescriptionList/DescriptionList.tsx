import * as React from 'react';
import { GetClasses } from '../../typeUtils';
import { makeStyles } from '../../styles';
import { DescriptionTermProps } from './DescriptionTerm';
import { DescriptionDetailsProps } from './DescriptionDetails';
import { DescriptionListGroupHeadingProps } from './DescriptionListGroupHeading';
import { Text } from '../Text';
import clsx from 'clsx';

export const DescriptionListStylesKey = 'ChromaDescriptionList';

export const useStyles = makeStyles<DescriptionListProps>(
  (theme) => {
    const stringOrThemeSpacing = (value: string | number | undefined) => {
      if (typeof value === 'string') return value;
      if (typeof value === 'number') return theme.spacing(value);
    };

    return {
      root: {
        display: 'grid',
        gap: theme.spacing(1),
        gridTemplateColumns: '1fr 3fr',
        maxHeight: theme.pxToRem(432),
        minWidth: theme.pxToRem(224),
        overflowY: 'auto',
        listStyle: 'none',
        paddingBottom: theme.spacing(1),
        paddingLeft: 0,
        paddingTop: theme.spacing(1),
      },
      title: {
        color: theme.palette.text.primary,
        gridColumn: '1/-1',
      },
      margin: { margin: ({ margin }) => stringOrThemeSpacing(margin) },
      marginLeft: {
        marginLeft: ({ marginLeft }) => stringOrThemeSpacing(marginLeft),
      },
      marginRight: {
        marginRight: ({ marginRight }) => stringOrThemeSpacing(marginRight),
      },
      marginTop: {
        marginTop: ({ marginTop }) => stringOrThemeSpacing(marginTop),
      },
      marginBottom: {
        marginBottom: ({ marginBottom }) => stringOrThemeSpacing(marginBottom),
      },
      marginX: {
        marginLeft: ({ marginX }) => stringOrThemeSpacing(marginX),
        marginRight: ({ marginX }) => stringOrThemeSpacing(marginX),
      },
      marginY: {
        marginTop: ({ marginY }) => stringOrThemeSpacing(marginY),
        marginBottom: ({ marginY }) => stringOrThemeSpacing(marginY),
      },
      padding: { padding: ({ padding }) => stringOrThemeSpacing(padding) },
      paddingLeft: {
        paddingLeft: ({ paddingLeft }) => stringOrThemeSpacing(paddingLeft),
      },
      paddingRight: {
        paddingRight: ({ paddingRight }) => stringOrThemeSpacing(paddingRight),
      },
      paddingTop: {
        paddingTop: ({ paddingTop }) => stringOrThemeSpacing(paddingTop),
      },
      paddingBottom: {
        paddingBottom: ({ paddingBottom }) =>
          stringOrThemeSpacing(paddingBottom),
      },
      paddingX: {
        paddingLeft: ({ paddingX }) => stringOrThemeSpacing(paddingX),
        paddingRight: ({ paddingX }) => stringOrThemeSpacing(paddingX),
      },
      paddingY: {
        paddingTop: ({ paddingY }) => stringOrThemeSpacing(paddingY),
        paddingBottom: ({ paddingY }) => stringOrThemeSpacing(paddingY),
      },
    };
  },
  { name: DescriptionListStylesKey }
);

export type DescriptionListClasses = GetClasses<typeof useStyles>;

export interface DescriptionListProps {
  ['aria-label']: string;
  children?: React.ReactNode;
  className?: string;
  items?: Array<
    | React.ReactElement<DescriptionTermProps>
    | React.ReactElement<DescriptionDetailsProps>
    | React.ReactElement<DescriptionListGroupHeadingProps>
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
  Description Lists are used to render groups of items with consistent styling. Can be split into multiple sections with Description List Group Headings. 

  ### Accessibility

  - The \<ul\> and \<li\> hierarchy is correct.
  - An aria-label is required.

  ### Links

  - [Component Source (Description List)](https://github.com/lifeomic/chroma-react/blob/master/src/components/DescriptionList/DescriptionList.tsx)
  - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/DescriptionList/DescriptionList.stories.tsx)
 */
export const DescriptionList: React.FC<DescriptionListProps> = (props) => {
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

  const classes = useStyles(props);

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
        <li className={classes.title}>
          <Text weight="bold" size="body">
            {title}
          </Text>
        </li>
      )}
      {items}
    </ul>
  );
};
