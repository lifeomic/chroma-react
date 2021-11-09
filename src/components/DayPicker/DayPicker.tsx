import * as React from 'react';
import clsx from 'clsx';

import ReactDayPicker, { LocaleUtils } from 'react-day-picker';
// Is this safe? consumers might not be using webpack w/ CSS loaders,
import 'react-day-picker/lib/style.css';
import { Calendar, ChevronLeft, ChevronRight } from '@lifeomic/chromicons';

import { makeStyles, useTheme } from '../../styles';
import { TextField, TextFieldProps } from '../TextField';
import { GetClasses } from '../../typeUtils';
import { ButtonUnstyled } from '../ButtonUnstyled';

export const DayPickerStylesKey = 'ChromaDayPicker';
export type DayPickerClasses = GetClasses<typeof useStyles>;

const setToMidnight = (date: Date) => {
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
};

const useStyles = makeStyles((theme) => ({
  dayPicker: {
    position: 'absolute',
    zIndex: 99999,
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1.25),
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.boxShadows.popover,
    '& .DayPicker-wrapper': {
      paddingBottom: 0,
    },
    '& .DayPicker-Month': {
      margin: 0,
      marginTop: 0,
    },
    '& .DayPicker-Weekday': {
      ...theme.typography.body2,
      fontWeight: 'bold',
      color: theme.palette.text.dark,
      padding: 0,
      paddingBottom: theme.spacing(1),
    },
    '& .DayPicker-Day': {
      ...theme.typography.body2,
      width: theme.pxToRem(35),
      height: theme.pxToRem(35),
    },
    '& .DayPicker-Day--today': {
      color: theme.palette.common.black,
      backgroundColor: theme.palette.grey[300],
    },
  },
  navBar: {
    ...theme.typography.body2,
    fontWeight: theme.typography.fontWeightBold,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: theme.spacing(2),
  },
  chevronButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFieldNoManualInput: {
    // Override the default readonly styles from TextField
    '& input:read-only': {
      cursor: 'pointer',
      opacity: 'unset',
    },
  },
}));

export type DayPickerProps = Omit<TextFieldProps, 'value' | 'onChange'> & {
  /**
   * The currently selected day.
   */
  value?: Date;

  /**
   * A background color to use for the currently selected month.
   *
   * Default is the main primary color of the theme.
   */
  selectedBackgroundColor?: string;

  /**
   * Called when a day is selected in the calendar UI or a valid
   * date string is entered manually.
   */
  onDayChange?: (day: Date) => void;

  /**
   * Called when a day is selected in the calendar UI or the input
   * text is changed manually.
   *
   * Will only be called when `parseDate` is provided.
   */
  onTextChange?: (text: string) => void;

  /**
   * Used for formatting the date into the text field.
   */
  formatDate?: (day: Date) => string;

  /**
   * Used for parsing manual text input to a date.
   *
   * IMPORTANT: this function should _never_ throw. Invalid string
   * should return `undefined`.
   */
  parseDate?: (text: string) => Date | undefined;

  /**
   * Used for formatting the month title header.
   *
   * Useful for overriding to a localized month + year.
   */
  formatMonthTitle?: (day: Date) => string;

  /**
   * Used for formatting the weekday column headers.
   *
   * Useful for overriding to a localized abbreviation.
   */
  formatWeekdayShort?: (weekday: number) => string;

  /**
   * Use to customize rendering of individual days in the grid.
   */
  renderDay?: (day: Date) => React.ReactNode;

  /**
   * Overrides for internal aria-labels. Useful for localizing
   * the labels.
   */
  ariaLabelOverrides?: {
    monthHeader?: string;
    leftChevron?: string;
    rightChevron?: string;
  };
};

export const testIds = {
  calendar: 'chroma-day-picker-calendar',
};

export const DayPicker: React.FC<DayPickerProps> = ({
  value,
  selectedBackgroundColor,
  ariaLabelOverrides,
  onDayChange,
  onTextChange,
  // Default is very dumb, but doesn't require a date library
  formatDate = (day) =>
    `${day.getMonth() + 1}/${day.getDate()}/${day.getFullYear()}`,
  parseDate,
  formatMonthTitle = LocaleUtils.formatMonthTitle,
  formatWeekdayShort = LocaleUtils.formatWeekdayShort,
  renderDay,
  ...textFieldProps
}) => {
  if (
    !textFieldProps.label &&
    !textFieldProps['aria-label'] &&
    process.env.NODE_ENV === 'development'
  ) {
    throw new Error(
      'If a "label" is not provided to DayPicker, please provide "aria-label".'
    );
  }

  // @ts-ignore This is throwing a bogus type error.
  const classes = useStyles({});
  const theme = useTheme();

  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);

  const calendarRef = React.useRef<ReactDayPicker>(null);

  const wrapperRef = React.useRef<HTMLDivElement>(null);

  /**
   * Holds the intermediary text input, which may not yet be a valid date
   * string.
   *
   * `undefined` means the value has either:
   *   - never been set, or
   *   - was just set via the date picker
   *
   * an empty string means that:
   *   - the user has set the value to an empty string
   */
  const [intermediateInput, setIntermediateInput] = React.useState<
    string | undefined
  >(undefined);

  const _onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!parseDate) {
      return;
    }

    onTextChange?.(e.target.value);

    const date = parseDate(e.target.value);

    if (!date) {
      setIntermediateInput(e.target.value);
      return;
    }
    setToMidnight(date);

    setIntermediateInput(undefined);
    onDayChange?.(date);
    calendarRef.current?.showMonth(date);
  };

  const onDayClick = (day: Date) => {
    setToMidnight(day);
    setIntermediateInput(undefined);
    onDayChange?.(day);
    onTextChange?.(formatDate(day));
  };

  const isInternalNode = (target: EventTarget | null) => {
    return target instanceof Node && wrapperRef.current?.contains(target);
  };

  return (
    <div
      ref={wrapperRef}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          setIsCalendarOpen(false);
        }
      }}
    >
      <TextField
        startAdornment={<Calendar />}
        {...textFieldProps}
        readOnly={textFieldProps.readOnly || !parseDate}
        value={
          intermediateInput ??
          (value
            ? formatDate(value)
            : // Use an empty string instead of undefined to silence warnings
              // about switching b/w controlled and uncontrolled component
              '')
        }
        className={clsx(textFieldProps.className, {
          [classes.textFieldNoManualInput]: !parseDate,
        })}
        onChange={_onTextChange}
        onMouseDown={(e) => {
          /**
           * This handler allows for opening _and_ closing the popover via click in
           * readonly mode.
           *
           * We need to use onMouseDown instead of onClick so we can run this _before_
           * onFocus runs and avoid an immediate open/close.
           */
          if (!parseDate) {
            setIsCalendarOpen((current) => !current);
          }

          textFieldProps.onMouseDown?.(e);
        }}
        onFocus={(e) => {
          setIsCalendarOpen(true);
          textFieldProps.onFocus?.(e);
        }}
        onBlur={(e) => {
          /**
           * This logic primarily serves to provide good keyboard navigation.
           */
          if (!isInternalNode(e.relatedTarget)) {
            setIsCalendarOpen(false);
          }
          textFieldProps.onBlur?.(e);
        }}
      />
      {isCalendarOpen && (
        <ReactDayPicker
          ref={calendarRef}
          containerProps={{
            // @ts-ignore data-testid is a real prop, even though TS thinks it's not.
            'data-testid': testIds.calendar,
          }}
          className={classes.dayPicker}
          modifiers={{
            selected: value,
          }}
          modifiersStyles={{
            selected: {
              backgroundColor:
                selectedBackgroundColor || theme.palette.primary.main,
            },
          }}
          navbarElement={(props) => (
            <div className={classes.navBar}>
              <ButtonUnstyled
                aria-label={ariaLabelOverrides?.leftChevron ?? 'Previous month'}
                className={classes.chevronButtonContainer}
                onClick={() => props.onPreviousClick()}
              >
                <ChevronLeft />
              </ButtonUnstyled>
              <span
                aria-label={ariaLabelOverrides?.monthHeader ?? 'Current month'}
              >
                {formatMonthTitle(props.month)}
              </span>
              <ButtonUnstyled
                aria-label={ariaLabelOverrides?.rightChevron ?? 'Next month'}
                className={classes.chevronButtonContainer}
                onClick={() => props.onNextClick()}
              >
                <ChevronRight />
              </ButtonUnstyled>
            </div>
          )}
          // We are setting this to empty and overriding it with our
          // navbarElement above.
          captionElement={<></>}
          onDayClick={onDayClick}
          renderDay={renderDay}
          localeUtils={{
            ...LocaleUtils,
            formatMonthTitle,
            formatWeekdayShort,
          }}
          onBlur={(e) => {
            /**
             * This logic primarily serves to provide good keyboard navigation.
             */
            if (!isInternalNode(e.relatedTarget)) {
              setIsCalendarOpen(false);
            }
          }}
        />
      )}
    </div>
  );
};
