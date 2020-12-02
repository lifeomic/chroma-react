import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { Box } from '../Box';
import { Pill } from '../Pill';
import { Text } from '../Text';

export const StepStylesKey = 'ChromaStep';

export const useStyles = makeStyles(
  (theme) => ({
    buttonRoot: {
      alignItems: 'center',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: theme.typography.fontFamily,
      minWidth: theme.pxToRem(110),
      paddingBottom: theme.spacing(1.5),

      '&:focus': {
        outline: 'none',
      },

      '&:hover': {
        '&>div': {
          transform: 'scale(1.1)',
          transition: '0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
        },
      },
    },
    divRoot: {
      minWidth: theme.pxToRem(110),
      padding: theme.spacing(0, 0.875, 1.5, 0.875),
    },
    activeRoot: {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      paddingBottom: theme.spacing(1.25),
    },
    completedRoot: {},
    iconContainer: {
      width: theme.pxToRem(56),
      height: theme.pxToRem(56),
      minWidth: theme.pxToRem(56),
      minHeight: theme.pxToRem(56),
      borderRadius: theme.pxToRem(9999),
      backgroundColor: theme.palette.common.white,
      border: `2px solid ${theme.palette.black[200]}`,
      transition:
        'background-color .5s ease, border .5s ease, box-shadow .5s ease',

      '@media screen and (max-width: 850px)': {
        width: theme.pxToRem(40),
        height: theme.pxToRem(40),
        minWidth: theme.pxToRem(40),
        minHeight: theme.pxToRem(40),
      },
    },
    completed: {
      border: `2px solid ${theme.palette.common.white}`,
      boxShadow: theme.boxShadows.table,
    },
    active: {
      backgroundColor: theme.palette.primary[50],
      border: `2px solid ${theme.palette.primary.main}`,
      boxShadow: theme.boxShadows.table,
    },
    icon: {
      color: theme.palette.black[500],
      transition: 'color .5s ease',
    },
    activeIcon: {
      color: theme.palette.primary.main,
    },
    completedIcon: {
      color: theme.palette.black[200],
    },
    title: {
      color: theme.palette.black[500],
      transition: 'color .5s ease',

      '&:first-of-type': {
        marginTop: theme.spacing(1.5),
      },

      '@media screen and (max-width: 850px)': {
        fontSize: theme.pxToRem(12),
      },
    },
    activeTitle: {
      color: theme.palette.primary.main,
    },
    pillSubTitle: {
      transition: 'background .5s ease',
      marginTop: theme.spacing(0.5),
    },
    completedPillSubTitle: {
      background: theme.palette.black[200],
      marginTop: theme.spacing(0.5),
    },
    disabled: {
      cursor: 'not-allowed',

      '&:hover': {
        '&>div': {
          transform: 'none',
        },
      },
    },
  }),
  { name: StepStylesKey }
);

export type StepClasses = GetClasses<typeof useStyles>;

export interface StepProps {
  active?: boolean;
  as?: 'button' | 'div';
  className?: string;
  completed?: boolean;
  disabled?: boolean;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  index?: number;
  onClick?: (index: number | undefined) => void;
  subTitle?: string;
  subTitlePillLabel?: string;
  title: string;
}

export const Step: React.FC<StepProps> = ({
  active,
  as,
  className,
  completed,
  disabled,
  icon: Icon,
  index,
  onClick,
  subTitle,
  subTitlePillLabel,
  title,
  ...rootProps
}) => {
  const classes = useStyles({});

  const handleClick = () => {
    onClick?.(index);
  };

  const content = (
    <>
      <Box
        align="center"
        className={clsx(
          classes.iconContainer,
          active && classes.active,
          completed && classes.completed
        )}
        justify="center"
      >
        {Icon ? (
          <Icon
            aria-hidden="true"
            className={clsx(
              classes.icon,
              active && classes.activeIcon,
              completed && classes.completedIcon
            )}
            role="img"
          />
        ) : (
          <Text
            aria-hidden="true"
            size="headline"
            className={clsx(
              classes.icon,
              active && classes.activeIcon,
              completed && classes.completedIcon
            )}
          >
            {(index || 0) + 1}
          </Text>
        )}
      </Box>
      <Text
        className={clsx(classes.title, active && classes.activeTitle)}
        size="subbody"
      >
        {title}
      </Text>
      {subTitle && !subTitlePillLabel && (
        <Text
          className={clsx(classes.title, active && classes.activeTitle)}
          size="caption"
        >
          {subTitle}
        </Text>
      )}
      {subTitlePillLabel && !subTitle && (
        <Pill
          className={clsx(
            classes.pillSubTitle,
            completed && classes.completedPillSubTitle
          )}
          color={active ? 'primary' : 'default'}
          label={subTitlePillLabel}
        />
      )}
    </>
  );

  if (as === 'button') {
    return (
      <button
        className={clsx(
          classes.buttonRoot,
          active && classes.activeRoot,
          completed && classes.completedRoot,
          disabled && classes.disabled,
          className
        )}
        disabled={disabled}
        onClick={handleClick}
        {...rootProps}
      >
        {content}
      </button>
    );
  } else {
    return (
      <Box
        align="center"
        className={clsx(
          classes.divRoot,
          active && classes.activeRoot,
          completed && classes.completedRoot,
          className
        )}
        direction="column"
        {...rootProps}
      >
        {content}
      </Box>
    );
  }
};
