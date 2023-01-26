import * as React from 'react';
import { newMakeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import clsx from 'clsx';

export const AlertBodyStylesKey = 'ChromaAlertBody';

export const useStyles = newMakeStyles(
  () => ({
    root: {
      color: 'inherit',
      flex: '1 1 0%',
      '& > *': {
        color: 'inherit',
      },
      '& button': {
        color: 'inherit',
      },
      '& a': {
        color: 'inherit',
      },
      '& > p': {
        color: 'inherit',
      },
      '& > ul': {
        marginTop: '0.25rem',
        marginBottom: '0.25rem',
        paddingLeft: '1.25rem',
        paddingRight: '1.25rem',
      },
      '& p + a, & p + button, & ul + a, & ul + button': {
        marginLeft: '0.75rem',
      },
    },
    spaceBetween: {
      justifyContent: 'space-between',
      display: 'flex',
      '& a, & button': {
        minHeight: 'unset',
        padding: 0,
      },
      '@media screen and (max-width: 480px)': {
        alignItems: 'flex-start',
        '& button': {
          textAlign: 'left',
          justifyContent: 'flex-start',
          marginTop: '0.125rem',
        },
      },
    },
  }),
  { name: AlertBodyStylesKey }
);

export type AlertBodyClasses = GetClasses<typeof useStyles>;

export interface AlertBodyProps {
  children?: React.ReactNode;
  className?: string;
  spaceBetween?: boolean;
}

export const AlertBody: React.FC<AlertBodyProps> = ({
  className,
  children,
  spaceBetween,
  ...rootProps
}) => {
  const { classes } = useStyles();
  return (
    <div
      className={clsx(
        classes.root,
        spaceBetween && classes.spaceBetween,
        className
      )}
      {...rootProps}
    >
      {children}
    </div>
  );
};
