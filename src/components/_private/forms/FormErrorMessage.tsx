import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../../styles';
import { GetClasses } from '../../../typeUtils';
import { Text } from '../../Text';
import { BaseFormMessage } from './FormElementUtils';

export const FormErrorMessageStylesKey = 'ChromaFormErrorMessage';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      color: theme.palette.error.main,
      lineHeight: 1.25,
      marginTop: theme.spacing(0.375),
    },
    inverse: {
      mixBlendMode: 'color-dodge',
    },
  }),
  { name: FormErrorMessageStylesKey }
);

export type FormErrorMessageClasses = GetClasses<typeof useStyles>;

export interface FormErrorMessageProps extends BaseFormMessage {}

export const FormErrorMessage: React.FC<FormErrorMessageProps> = ({
  className,
  describedById,
  color,
  children,
  rootElementId,
  ...rootProps
}) => {
  const classes = useStyles({});
  return (
    <Text
      size="caption"
      weight="bold"
      error-for={rootElementId}
      id={describedById}
      aria-live="assertive"
      role="alert"
      className={clsx(
        classes.root,
        color === 'inverse' && classes.inverse,
        className
      )}
      {...rootProps}
    >
      {children}
    </Text>
  );
};
