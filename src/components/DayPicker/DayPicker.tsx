import * as React from 'react';
import clsx from 'clsx';
import ReactDayPicker, { LocaleUtils } from 'react-day-picker';
// Is this safe? consumers might not be using webpack w/ CSS loaders,
import 'react-day-picker/lib/style.css';
import { Calendar, ChevronLeft, ChevronRight } from '@lifeomic/chromicons';

import { makeStyles, useTheme } from '../../styles';
import { TextField, TextFieldProps } from '../TextField';
import { GetClasses } from '../../typeUtils';

export const DayPickerStylesKey = 'ChromaDayPicker';
export type TextFieldClasses = GetClasses<typeof useStyles>;

/**
 * Helper hook for handling clicks outside of provided `ref` node.
 */
const useClickOutside = (
  ref: React.RefObject<Node>,
  handler: () => void,
  dependencies: any[]
) => {
  React.useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current?.contains(e.target)) {
        return;
      }
      handler();
    };

    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref.current, ...dependencies]);
};

const useStyles = makeStyles((theme) => ({
  dayPicker: {
    position: 'absolute',
    zIndex: 99999,
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1.5),
    backgroundColor: theme.palette.common.white,
    boxShadow: `0 1px 4px ${theme.palette.grey[400]}`,
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
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: theme.spacing(2),

    // TODO: a use hack to get the navbar title to always align with the first week marker
    // The one below doesn't work.

    // This paddingLeft serves to left-align the month title with
    // the days + weeks below
    paddingLeft: '0.5em',
  },
  chevronsContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  textFieldNonEditable: {
    '& input': {
      cursor: 'pointer',
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
   * Use to customize rendering of invidual days in the grid.
   */
  renderDay?: (day: Date) => React.ReactNode;
};

export const DayPicker: React.FC<DayPickerProps> = ({
  value,
  selectedBackgroundColor,
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
  useClickOutside(wrapperRef, () => setIsCalendarOpen(false), []);

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

    setIntermediateInput(undefined);
    onDayChange?.(date);
    calendarRef.current?.showMonth(date);
  };

  const onDayClick = (day: Date) => {
    setIntermediateInput(undefined);
    onDayChange?.(day);
    onTextChange?.(formatDate(day));
  };

  return (
    <div ref={wrapperRef}>
      <TextField
        endAdornment={<Calendar />}
        {...textFieldProps}
        value={intermediateInput ?? (value ? formatDate(value) : undefined)}
        className={clsx(textFieldProps.className, {
          [classes.textFieldNonEditable]: !parseDate,
        })}
        onChange={_onTextChange}
        onFocus={(e) => {
          setIsCalendarOpen(true);
          textFieldProps.onFocus?.(e);
        }}
      />
      {isCalendarOpen && (
        <ReactDayPicker
          ref={calendarRef}
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
              {formatMonthTitle(props.month)}
              <div className={classes.chevronsContainer}>
                <ChevronLeft
                  cursor={'pointer'}
                  onClick={() => props.onPreviousClick()}
                />
                <ChevronRight
                  cursor={'pointer'}
                  onClick={() => props.onNextClick()}
                />
              </div>
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
        />
      )}
    </div>
  );
};
