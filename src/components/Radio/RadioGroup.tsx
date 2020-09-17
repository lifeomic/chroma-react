import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { RadioProps } from './Radio';
import { RadioGroupContext } from './useRadioGroup';

export const RadioGroupStylesKey = 'ChromaRadioGroup';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      border: 0,
      display: 'inline-flex',
      flexDirection: 'column',
      height: '100%',
      margin: 0,
      minWidth: 0,
      padding: 0,
      position: 'relative',
      verticalAlign: 'top',
      width: '100%',
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
      display: 'flex',
      flexDirection: 'column',
      '& > *:not(:last-child)': {
        marginBottom: theme.spacing(2),
      },
    },
    alignCenter: { alignItems: 'center' },
    alignStart: { alignItems: 'flex-start' },
    justifyStart: { justifyContent: 'flex-start' },
    justifyEvenly: { justifyContent: 'space-evenly' },
    justifyBetween: { justifyContent: 'space-between' },
    justifyCenter: { justifyContent: 'center' },
    directionRow: {
      flexDirection: 'row',
      '& > *:not(:last-child)': {
        margin: theme.spacing(0, 2, 0, 0),
      },
      '& label': {
        whiteSpace: 'nowrap',
      },
    },
    directionColumn: {
      flexDirection: 'column',
    },
  }),
  { name: RadioGroupStylesKey }
);

export type RadioGroupClasses = GetClasses<typeof useStyles>;

export interface RadioGroupProps
  extends Pick<RadioProps, 'color' | 'name' | 'onChange' | 'value'> {
  className?: string;
  align?: 'center' | 'flex-start';
  direction?: 'row' | 'column';
  justify?: 'center' | 'flex-start' | 'space-between' | 'space-evenly';
  title?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  className,
  align = 'flex-start',
  color = 'default',
  children,
  direction = 'column',
  justify = 'flex-start',
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

    onChange?.(e);
  };

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
        className={clsx(classes.root, className)}
        role="radiogroup"
        {...rootProps}
      >
        {title && (
          <legend
            className={clsx(classes.legend, {
              [classes.legendInverse]: color === 'inverse',
            })}
          >
            {title}
          </legend>
        )}
        <div
          className={clsx(
            classes.radios,
            {
              [classes.directionRow]: direction === 'row',
              [classes.directionColumn]: direction === 'column',
            },
            {
              [classes.alignCenter]: align === 'center',
              [classes.alignStart]: align === 'flex-start',
            },
            {
              [classes.justifyBetween]: justify === 'space-between',
              [classes.justifyEvenly]: justify === 'space-evenly',
              [classes.justifyStart]: justify === 'flex-start',
              [classes.justifyCenter]: justify === 'center',
            }
          )}
        >
          {children}
        </div>
      </fieldset>
    </RadioGroupContext.Provider>
  );
};
