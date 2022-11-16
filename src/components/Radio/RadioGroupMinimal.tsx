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
      marginBottom: theme.spacing(1),
      padding: 0,
      '&:empty': {
        marginBottom: theme.spacing(0),
      },
    },
    legendInverse: {
      color: theme.palette.common.white,
    },
    radios: {
      background: theme.hexToRgba(theme.palette.graphite[900], 0.15),
      borderRadius: theme.pxToRem(20),
      border: 'solid 1px transparent',
      display: 'inline-flex',
      flexDirection: 'column',
      margin: 0,
      overflow: 'hidden',
      padding: theme.spacing(0.25),
      '& input': {
        ...screenreaderOnlyStyles,
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
            zIndex: theme.zIndex.byValueUpTo20[1],
          },
          '& label > p, & svg': {
            position: 'relative',
            transition: 'color 0.15s ease-in',
            zIndex: theme.zIndex.byValueUpTo20[2],
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
          '& label > p, & svg': {
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
        '&:focus + div': {
          '&::before': {
            boxShadow: `0 0 0 2px ${theme.hexToRgba(
              theme.palette.primary[600],
              0.3
            )}`,
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
      backgroundColor: theme.hexToRgba(theme.palette.graphite[100], 0.1),
      '& input:checked + div': {
        '&::before': {
          background: theme.hexToRgba(theme.palette.common.white, 0.5),
        },
        '& label > p, & svg': {
          color: 'unset',
        },
      },
      '& input:focus + div': {
        '&::before': {
          boxShadow: `0 0 0 2px ${theme.hexToRgba(
            theme.palette.common.white,
            0.3
          )}`,
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
    required: {
      color: theme.palette.error[500],
      margin: theme.spacing(0, 0.5),
    },
    requiredInverse: {
      color: theme.palette.common.white,
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
  children?: React.ReactNode;
  className?: string;
  direction?: 'row' | 'column';
  fullWidth?: boolean;
  title?: string;
  /** This property shows the required asterisk (*). Required validation needs to be implemented separately. */
  showRequiredLabel?: boolean;
}

/**
 * The Radio Group Minimal and Radio components are styled radio inputs. They are typically
 * used in combination; however, Radio can work on its own as well. A `title` is required
 * to pass the `aria-label` prop so that screen readers can give meaning to the radio group.
 * Unlike Radio Group, Radio Group Minimal does not have a `helpMessage` prop.
 *
 * ### Accessibility
 *
 * - The component renders as a fieldset.
 * - The component has the `role="radiogroup"` attribute.
 * - An `aria-label` is set with the `title`.
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Radio/RadioGroupMinimal.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Radio/Radio.stories.tsx)
 */
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
  showRequiredLabel,
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
          {showRequiredLabel && (
            <span
              className={clsx(
                classes.required,
                color === 'inverse' && classes.requiredInverse
              )}
            >
              &#42;
            </span>
          )}
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
