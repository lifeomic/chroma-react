import * as React from 'react';
import { Rover, RoverStateReturn } from 'reakit/Rover';
import { newMakeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { SelectOptionProps } from './SelectOption';
import { motion, Variants } from 'framer-motion';

export const RoverOptionStylesKey = 'ChromaRoverOption';

export const useStyles = newMakeStyles({ name: RoverOptionStylesKey })(
  (theme) => ({
    option: {
      alignItems: 'center',
      backgroundColor: theme.palette.common.white,
      cursor: 'pointer',
      display: 'flex',
      minHeight: theme.pxToRem(26),
      outline: 'none',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      transition: 'background-color 0.25s ease',
      '&:hover, &:focus': {
        backgroundColor: theme.hexToRgba(theme.palette.primary[50], 0.6),
      },
    },
  })
);

export type RoverOptionClasses = GetClasses<typeof useStyles>;

export interface RoverOptionProps
  extends Pick<React.ComponentPropsWithoutRef<'select'>, 'value' | 'disabled'> {
  option: React.ReactElement<SelectOptionProps>;
  handleOptionSelect: (optionValue: string, meta: any) => void;
  variants?: Variants;
  rover: RoverStateReturn;
}

export const RoverOption: React.FC<RoverOptionProps> = React.memo(
  ({
    handleOptionSelect: handleSelectOption,
    option,
    rover,
    variants,
    value,
    disabled,
  }) => {
    const { classes } = useStyles();
    const { value: optionValue, meta } = option?.props || {};
    const handleClick = React.useCallback(() => {
      handleSelectOption(optionValue, meta);
    }, [optionValue, meta, handleSelectOption]);

    return (
      <Rover
        {...rover}
        aria-selected={optionValue === value}
        className={classes.option}
        as={motion.li}
        role="option"
        value={option?.props?.value}
        variants={variants}
        onClick={handleClick}
        disabled={disabled}
      >
        {React.cloneElement<SelectOptionProps>(option, {
          isChecked: optionValue === value,
          disabled,
          ...option.props,
        })}
      </Rover>
    );
  }
);
