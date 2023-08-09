import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { lighten } from '@mui/material/styles';

export const DescriptionListGroupHeadingStylesKey = 'ChromaListGroupHeading';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      borderBottom: `solid ${theme.pxToRem(3)} ${lighten(
        theme.palette.divider,
        0.4
      )}`,
      color: theme.palette.text.hint,
      fontSize: theme.pxToRem(10),
      fontWeight: theme.typography.fontWeightBold,
      gridColumn: '1/-1',
      letterSpacing: theme.pxToRem(1),
      padding: theme.spacing(1.25, 0),
      marginTop: theme.spacing(1),
      textTransform: 'uppercase',
      '&:first-child, &:nth-child(2)': {
        marginTop: 0,
        paddingTop: 0,
      },
    },
  }),
  { name: DescriptionListGroupHeadingStylesKey }
);

export type DescriptionListGroupHeadingClasses = GetClasses<typeof useStyles>;

export type DescriptionListGroupHeadingProps = {
  className?: string;
  children?: React.ReactNode;
};

export const DescriptionListGroupHeading: React.FC<DescriptionListGroupHeadingProps> = ({
  className,
  children,
}) => {
  const classes = useStyles({});
  return <li className={clsx(classes.root, className)}>{children}</li>;
};
