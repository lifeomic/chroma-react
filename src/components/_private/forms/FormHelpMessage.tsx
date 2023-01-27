import clsx from 'clsx';
import * as React from 'react';
import { newMakeStyles } from '../../../styles';
import { GetClasses } from '../../../typeUtils';
import { Text } from '../../Text';
import { BaseFormMessage } from './FormElementUtils';

export const FormHelpMessageStylesKey = 'ChromaFormHelpMessage';

const useStyles = newMakeStyles({ name: FormHelpMessageStylesKey })(
  (theme) => ({
    root: {
      color: theme.palette.text.hint,
      lineHeight: 1.25,
      marginTop: theme.spacing(0.375),
    },
    inverse: {
      color: theme.palette.common.white,
      opacity: 0.9,
    },
  })
);

export type FormHelpMessageClasses = GetClasses<typeof useStyles>;

export interface FormHelpMessageProps extends BaseFormMessage {}

export const FormHelpMessage: React.FC<FormHelpMessageProps> = ({
  className,
  color,
  children,
  rootElementId,
  describedById,
  ...rootProps
}) => {
  const { classes } = useStyles();
  return (
    <Text
      size="caption"
      help-for={rootElementId}
      id={describedById}
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
