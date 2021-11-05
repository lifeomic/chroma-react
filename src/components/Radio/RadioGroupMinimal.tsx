import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { RadioProps } from './Radio';
import { RadioGroupContext } from './useRadioGroup';
import { screenreaderOnlyStyles } from '../../styles/screenreaderOnly';

export const RadioGroupMinimalStylesKey = 'ChromaRadioGroupMinimal';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      border: 0,
      flexDirection: 'column',
      height: '100%',
      margin: 0,
      minWidth: 0,
      padding: 0,
      verticalAlign: 'top',
    },
    fullWidth: {
      display: 'inline-flex',
    },
    legend: {
      color: theme.palette.black[800],
      fontSize: theme.pxToRem(14),
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(1.5),
      padding: 0,
      '&:empty': {
        marginBottom: theme.spacing(0),
      },
    },
    legendInverse: {
      color: theme.palette.common.white,
    },
    radios: {
      background: 'rgba(132, 137, 166, 0.15)',
      borderRadius: theme.pxToRem(20),
      border: 'solid 1px transparent',
      display: 'inline-flex',
      flexDirection: 'column',
      margin: 0,
      overflow: 'hidden',
      padding: theme.spacing(0.25),
      '& input': {
        display: 'none',
        '& + div': {
          display: 'flex',
          justifyContent: 'center',
          padding: theme.spacing(0.75, 2),
          userSelect: 'none',
          marginLeft: 0,
          position: 'relative',
          '&::before': {
            borderRadius: theme.pxToRem(16),
            content: `''`,
            display: 'block',
            height: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            zIndex: 1,
          },
          '& label > p': {
            position: 'relative',
            transition: 'color 0.15s ease-in',
            zIndex: 2,
          },
        },
        '&:not(:checked) + div::before': {
          opacity: 0,
          // When specifying transitionProperty here
          // the transition does not work like it works
          // for :checked below?
          transition: '0.15s ease-in',
          transform: 'scale3d(0.3, 0.3, 0.3)',
        },
        '&:checked + div': {
          '&::before': {
            opacity: 1,
            transform: 'scale3d(1, 1, 1)',
            transition: '0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
            transitionProperty: 'transform, opacity',
            background: theme.palette.primary.main,
          },
          '& label > p': {
            color: theme.palette.common.white,
            transition: 'color 0.25s ease-out',
          },
        },
        '&:disabled + div': {
          opacity: 0.625,
          '&, & > label': {
            cursor: 'not-allowed',
          },
        },
      },
      '& label': {
        marginTop: 0,
        textAlign: 'center',
        '& + p': {
          display: 'none',
        },
      },
    },
    radiosFullWidth: {
      '& > div': {
        flex: 1,
      },
    },
    radiosInverse: {
      backgroundColor: 'rgba(230, 231, 237, 0.1)',
      '& input:checked + div': {
        '&::before': {
          background: 'rgba(255, 255, 255, 0.5)',
        },
        '& label > p': {
          color: 'unset',
        },
      },
    },
    radiosNoBackground: {
      background: 'none',
    },
    directionRow: {
      flexDirection: 'row',
      '& label': {
        whiteSpace: 'nowrap',
      },
    },
    directionColumn: {
      borderRadius: theme.pxToRem(4),
      flexDirection: 'column',
      '& input:checked + div::before': {
        borderRadius: theme.pxToRem(3),
      },
    },
    srOnly: {
      ...screenreaderOnlyStyles,
    },
  }),
  { name: RadioGroupMinimalStylesKey }
);

export type RadioGroupMinimalClasses = GetClasses<typeof useStyles>;

export interface RadioGroupMinimalProps
  extends Pick<
    RadioProps,
    'aria-label' | 'color' | 'name' | 'onChange' | 'value'
  > {
  background?: boolean;
  className?: string;
  direction?: 'row' | 'column';
  fullWidth?: boolean;
  title?: string;
}

export const RadioGroupMinimal: React.FC<RadioGroupMinimalProps> = ({
  ['aria-label']: ariaLabel,
  background = 'true',
  className,
  color = 'default',
  children,
  direction = 'row',
  fullWidth,
  name,
  onChange,
  value,
  title,
  ...rootProps
}) => {
  const classes = useStyles({});

  const [contextValue, setContextValue] = React.useState(value);

  const handleContextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContextValue(e.target.value);

    onChange && onChange(e);
  };

  if (!title && !ariaLabel && process.env.NODE_ENV === 'development') {
    throw new Error(
      'If a "title" is not provided to RadioGroupMinimal, please provide "aria-label".'
    );
  }

  return (
    <RadioGroupContext.Provider
      value={{
        color,
        name,
        onChange: handleContextChange,
        value: contextValue,
      }}
    >
      <fieldset
        className={clsx(
          classes.root,
          fullWidth && classes.fullWidth,
          className
        )}
        role="radiogroup"
        {...rootProps}
      >
        <legend
          className={clsx(
            classes.legend,
            {
              [classes.legendInverse]: color === 'inverse',
            },
            !title && ariaLabel && classes.srOnly
          )}
        >
          {title || ariaLabel}
        </legend>
        <div
          className={clsx(
            classes.radios,
            fullWidth && classes.radiosFullWidth,
            {
              [classes.radiosInverse]: color === 'inverse',
            },
            {
              [classes.radiosNoBackground]: background === false,
            },
            {
              [classes.directionRow]: direction === 'row',
              [classes.directionColumn]: direction === 'column',
            }
          )}
        >
          {children}
        </div>
      </fieldset>
    </RadioGroupContext.Provider>
  );
};
