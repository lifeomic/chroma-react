import 'react-phone-number-input/style.css';
import * as React from 'react';
import { TextFieldProps, TextField } from '../TextField';
// @ts-ignore The flags module is not typed
import flags from 'react-phone-number-input/flags';
import PhoneInput, { PhoneInputProps } from 'react-phone-number-input';
import { makeStyles } from '../../styles';
import clsx from 'clsx';
import { GetClasses } from '../../typeUtils';

export const PhoneNumberFormatFieldStylesKey = 'ChromaPhoneNumberFormatField';

const useStyles = ({
  about,
  errorMessage,
}: {
  about?: string;
  errorMessage?: string;
}) =>
  makeStyles(
    (theme) => ({
      textField: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
      },
      phoneInputRoot: {
        display: 'flex',
        position: 'relative',
        '& > .PhoneInputCountry': {
          position: 'absolute',
          bottom: theme.spacing(about || errorMessage ? 5.25 : 2.5),
          left: theme.spacing(1),
          '& .PhoneInputCountryIcon--border': {
            boxShadow: 'unset',
            backgroundColor: 'unset',
          },
        },
      },
      phoneInput: {
        '& input': {
          paddingLeft: theme.spacing(6),
        },
      },
    }),
    { name: PhoneNumberFormatFieldStylesKey }
  )({});

export type PhoneNumberFormatFieldClasses = GetClasses<typeof useStyles>;

const PhoneInputCompatibleChromaInput = React.forwardRef<
  HTMLInputElement,
  Omit<TextFieldProps, 'color'>
>((props, ref) => {
  const classes = useStyles({});
  const { className, ...textFieldProps } = props;
  return (
    <TextField
      fullWidth={props.fullWidth}
      label="Phone Number"
      showRequiredLabel={props.showRequiredLabel}
      helpMessage={props.about}
      ref={ref}
      {...textFieldProps}
      className={clsx(classes.phoneInput, classes.textField, className)}
    />
  );
});

export type PhoneNumberFormatFieldProps = Omit<
  PhoneInputProps,
  'value' | 'onChange'
> & {
  label?: string;
  value: string;
  onChange: (val: string) => void;
  hasError?: boolean;
  errorMessage?: string;
  /** This property shows the required asterisk (*). Required validation needs to be implemented separately. */
  fullWidth?: boolean;
  showRequiredLabel?: boolean;
};
export const PhoneNumberFormatField: React.FC<PhoneNumberFormatFieldProps> = ({
  className,
  fullWidth,
  showRequiredLabel,
  ...props
}) => {
  const { value, onChange, errorMessage } = props;
  const classes = useStyles(props);
  return (
    <PhoneInput
      className={clsx(classes.phoneInputRoot, className)}
      defaultCountry="US"
      flags={flags}
      fullWidth={fullWidth}
      {...props}
      showRequiredLabel={showRequiredLabel}
      // @ts-ignore defaultValue has type mismatch
      inputComponent={PhoneInputCompatibleChromaInput}
      value={value}
      onChange={onChange}
      error={errorMessage}
    />
  );
};
