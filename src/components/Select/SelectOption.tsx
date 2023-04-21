import clsx from 'clsx';
import * as React from 'react';
import { VisuallyHidden } from 'reakit/VisuallyHidden';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { Box } from '../Box';
import { Text } from '../Text';
import { IconButton } from '../IconButton';

export const SelectOptionStylesKey = 'ChromaSelectOption';

export const checkSize = 20;

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
    },
    title: {
      lineHeight: 1.3,
    },
    subtitle: {
      color: theme.palette.text.hint,
      lineHeight: 1.25,
      marginBottom: theme.spacing(0.25),
      marginTop: theme.spacing(0.25),
    },
    checked: {
      position: 'relative',
      '&::before': {
        background: theme.palette.primary.main,
        content: `''`,
        display: 'block',
        height: `calc(100% + ${theme.spacing(1)})`,
        position: 'absolute',
        left: theme.spacing(-2),
        top: theme.spacing(-0.5),
        width: 4,
      },
      '& *': {
        color: theme.palette.primary.main,
        '&$title': {
          fontWeight: 900,
        },
      },
    },
    disabled: {
      cursor: 'not-allowed',
      opacity: 0.625,
    },
    obviousHover: {
      '&:hover': {
        backgroundColor: theme.palette.primary[100],
      },
    },
  }),
  { name: SelectOptionStylesKey }
);

export type SelectOptionClasses = GetClasses<typeof useStyles>;

export type SelectSecondaryAction = {
  action: (args: any | undefined) => void;
  args: any | undefined;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
};

export interface SelectOptionProps {
  className?: string;
  children?: React.ReactNode;
  secondaryAction?: SelectSecondaryAction;
  disabled?: boolean;
  isChecked?: boolean;
  meta?: any;
  subtitle?: string;
  title?: string;
  value: string;
}

export const SelectOption: React.FC<SelectOptionProps> = ({
  className,
  children,
  secondaryAction,
  isChecked,
  title,
  subtitle,
  disabled,
  ...rootProps
}) => {
  const classes = useStyles({});
  return (
    <Box fullWidth justify="space-between">
      <Box className={clsx(classes.root, className)} fullWidth {...rootProps}>
        {isChecked && (
          // This is required for a11y: we need to have some indicator for our screenreader friends
          <VisuallyHidden>&#x2713;</VisuallyHidden>
        )}
        {title && (
          <Box
            direction="column"
            justify="flex-start"
            className={clsx(
              isChecked && classes.checked,
              disabled && classes.disabled
            )}
          >
            {title && (
              <Text className={classes.title} size="subbody">
                {title}
              </Text>
            )}
            {subtitle && (
              <Text className={classes.subtitle} size="caption">
                {subtitle}
              </Text>
            )}
          </Box>
        )}
        {children}
      </Box>
      {secondaryAction && (
        <IconButton
          className={classes.obviousHover}
          aria-label={secondaryAction?.label}
          icon={secondaryAction?.icon}
          onClick={(e) => {
            e.stopPropagation();
            secondaryAction.action(secondaryAction.args);
          }}
        />
      )}
    </Box>
  );
};
