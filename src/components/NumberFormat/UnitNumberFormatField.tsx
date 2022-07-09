import React, { ChangeEvent, useEffect } from 'react';
import { TextFieldProps, TextField } from '../TextField';

import { makeStyles } from '../../styles';
import clsx from 'clsx';
import { GetClasses } from '../../typeUtils';

export const UnitNumberFormatFieldStylesKey = 'ChromaUnitNumberFormatField';

const useStyles = makeStyles(
  (theme) => ({
    textField: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
      marginRight: theme.spacing(2),
    },
  }),
  { name: UnitNumberFormatFieldStylesKey }
);

export type UnitNumberFormatFieldClasses = GetClasses<typeof useStyles>;

export type UnitNumberFormatFieldProps = Omit<
  TextFieldProps,
  'onChange' | 'value'
> & {
  min?: number;
  max?: number;
  value: number;
  units: string;
  decimalScale?: number;
  prefixUnits?: boolean;
  onChange: (val: number) => void;
};

export const UnitNumberFormatField: React.FC<UnitNumberFormatFieldProps> = (
  props
) => {
  const {
    onChange,
    onBlur,
    value,
    min = 0,
    max = Number.MAX_SAFE_INTEGER,
    units,
    decimalScale = 0,
    prefixUnits = false,
    className,
    ...other
  } = props;
  // formatting helper. Prefixes units if specified, otherwise suffix.
  // also automatically adds a space if the units string is > 2 e.g $10.00 30%, 12ml, 10 slots
  const format = (val: number) =>
    prefixUnits
      ? `${units}${val.toFixed(decimalScale)}`
      : `${val.toFixed(decimalScale)}${units.length > 2 ? ' ' : ''}${units}`;
  const [textFieldValue, setTextFieldValue] = React.useState(format(value));

  const classes = useStyles({});

  const [rawValue, setRawValue] = React.useState(format(value));

  // when the text input changes, call onChange handler
  const handleValueChange = (value: ChangeEvent<HTMLInputElement>) => {
    const rawNewValue = value.target.value;

    // user deleted value, set text field value without updating underlying value
    if (rawNewValue.trim() === units) {
      setTextFieldValue(rawNewValue);
      return;
    }

    setRawValue(rawNewValue);

    // default to 0 to handle garbage NaN input
    const newValue = parseFloat(
      (parseFloat(rawNewValue.replace(units, '')) || 0).toFixed(decimalScale)
    );
    setTextFieldValue(format(newValue));
    onChange(newValue);
  };

  // when the provided value changes, update the displayed value
  useEffect(() => {
    setTextFieldValue(format(value));
  }, [value]);

  const textFieldRef = React.useRef<HTMLInputElement | null>(null);

  // This useEffect keeps the position of the cursor from jumping after the value is formatted
  useEffect(() => {
    if (textFieldValue === rawValue || !textFieldRef.current) {
      return;
    }

    // user deleted value, set cursor beside units
    if (textFieldValue.trim() === units) {
      const position = prefixUnits ? units.length : 0;
      textFieldRef.current.setSelectionRange(position, position);
      return;
    }

    // user typed a decimal next to a decimal, move cursor and throw it away
    if (rawValue.indexOf('..') > -1) {
      const position = textFieldValue.indexOf('.') + 1;
      textFieldRef.current.setSelectionRange(position, position);
      setRawValue(textFieldValue);
      return;
    }

    // handle positioning cursor when typing in decimal part
    const rawDecimalPart = rawValue.replace(units, '').split('.')[1];
    if (
      decimalScale > 0 &&
      rawDecimalPart &&
      rawDecimalPart.length > decimalScale
    ) {
      const rawNumberParts = `${parseFloat(
        textFieldValue.replace(units, '')
      ).toFixed(decimalScale)}`.split('.');
      const decimalPart = rawNumberParts[1].replace(/0+$/g, ''); // trim trailing 0s
      const position =
        rawNumberParts[0].length + // length before decimal
        1 + // the decimal
        Math.max(decimalPart.length, 1) + // at least one character after decimal
        (prefixUnits ? units.length : 0); // length of units, if they're prefixed
      textFieldRef.current.setSelectionRange(position, position);
      setRawValue(textFieldValue);
      return;
    }

    const position =
      `${parseFloat(textFieldValue.replace(units, ''))}`.length +
      (prefixUnits ? units.length : 0);
    textFieldRef.current.setSelectionRange(position, position);
    setRawValue(textFieldValue);
  }, [textFieldValue, rawValue]);

  // handles selecting just the value (not the units) on focus
  const handleFocus = React.useCallback(() => {
    /* istanbul ignore next */
    if (!textFieldRef.current) {
      return;
    }
    const inputLength = textFieldValue.replace(units, '').length;
    const inputStart = prefixUnits ? units.length : 0;

    // focus can only fire if the input ref has been set
    textFieldRef.current.setSelectionRange(
      inputStart,
      inputStart + inputLength
    );
  }, [textFieldValue]);

  // if the user deleted value and left only units, this restores the text field to valid value
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const newValue = parseFloat(
      Math.max(
        Math.min(parseFloat(rawValue.replace(units, '')), Number(max)),
        min
      ).toFixed(decimalScale)
    );
    setTextFieldValue(format(newValue));
    onChange(newValue);
    onBlur && onBlur(event);
  };

  return (
    <TextField
      {...other}
      className={clsx(classes.textField, className)}
      value={textFieldValue}
      min={min}
      max={max}
      onChange={handleValueChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      ref={textFieldRef}
    />
  );
};

export type PercentFormatFieldProps = Omit<
  TextFieldProps,
  'onChange' | 'value'
> & {
  min?: number;
  max?: number;
  value: number;
  onChange: (val: number) => void;
};

export const PercentFormatField: React.FC<PercentFormatFieldProps> = (
  props
) => {
  return (
    <UnitNumberFormatField {...props} units={'%'} max={props.max || 100} />
  );
};

/**
 * @param props All currency values are expected to be an integer amount of pennies
 */

export type PriceFormatFieldProps = Omit<
  TextFieldProps,
  'onChange' | 'value'
> & {
  min?: number;
  max?: number;
  value: number;
  onChange: (val: number) => void;
};
export const PriceFormatField: React.FC<PriceFormatFieldProps> = (props) => {
  const { value, onChange, min, max, ...otherProps } = props;
  if (
    !Number.isInteger(value) ||
    (min && !Number.isInteger(min)) ||
    (max && !Number.isInteger(max))
  ) {
    throw new Error('Non-integer amount of pennies passed to PriceFormatField');
  }
  return (
    <UnitNumberFormatField
      value={value / 100} // Value in pennies converted to dollars
      onChange={(val) => onChange(val * 100)} // Dollar converted to expected pennies
      min={min ? min / 100 : undefined} // Min in pennies converted to dollars
      max={max ? max / 100 : undefined} // Max in pennies converted to dollars
      {...otherProps}
      prefixUnits={true}
      units={'$'}
      decimalScale={2}
    />
  );
};
