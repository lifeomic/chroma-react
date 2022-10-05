import * as React from 'react';
import clsx from 'clsx';

import ReactDayPicker, {
  DayPickerProps as ReactDayPickerProps,
  LocaleUtils,
} from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { Calendar, ChevronLeft, ChevronRight } from '@lifeomic/chromicons';

import { makeStyles, useTheme } from '../../styles';
import { TextField, TextFieldProps } from '../TextField';
import { GetClasses } from '../../typeUtils';
import { ButtonUnstyled } from '../ButtonUnstyled';
import { composeEventHandlers } from '../../utils';
import { alpha } from '@mui/material/styles';

export const DayPickerStylesKey = 'ChromaDayPicker';
export type DayPickerClasses = GetClasses<typeof useStyles>;

const midnightOf = (date: Date) => {
  const copy = new Date(date.toISOString());
  copy.setHours(0);
  copy.setMinutes(0);
  copy.setSeconds(0);
  copy.setMilliseconds(0);
  return copy;
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  dayPicker: {
    position: 'absolute',
    zIndex: 99999,
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1.25),
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.boxShadows.popover,
    width: theme.pxToRem(277),
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
    '&.DayPicker:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover': {
      backgroundColor: alpha(theme.palette.primary[50], 0.5),
    },
  },
  dayPickerBottomLeft: {
    top: '100%',
    left: 0,
    marginTop: theme.spacing(1),
  },
  dayPickerBottomRight: {
    top: '100%',
    right: 0,
    marginTop: theme.spacing(1),
  },
  dayPickerTopLeft: {
    bottom: '100%',
    left: 0,
    marginBottom: theme.spacing(1),
  },
  dayPickerTopRight: {
    bottom: '100%',
    right: 0,
    marginBottom: theme.spacing(1),
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

export type DayPickerAnchorPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export type DayPickerProps = Omit<TextFieldProps, 'value' | 'onChange'> & {
  /**
   * The currently selected day.
   */
  value?: Date;

  /**
   * A background color to use for the currently selected month.
   *
   * Default is 'primary'.
   */
  pickerColor?: 'primary' | 'secondary';

  /**
   * Where to anchor the calender pop-up. Default is 'bottom-left'.
   */
  anchorPosition?: DayPickerAnchorPosition;

  /**
   * A minimum date to allow. This will prevent manual input or day
   * selection of any day before this date.
   */
  minDate?: Date;

  /**
   * A maximum date to allow. This will prevent manual input or day
   * selection of any day after this date.
   */
  maxDate?: Date;

  /**
   * Overrides for internal aria-labels. Useful for localizing
   * the labels.
   */
  ariaLabelOverrides?: {
    monthHeader?: string;
    leftChevron?: string;
    rightChevron?: string;
  };

  /**
   * Props to spread into the internal day picker.
   *
   * IMPORTANT: Props provided via this object take priority over internally
   * specified props. Defining some values may cause the component to behave
   * unusually.
   */
  calendarProps?: Partial<ReactDayPickerProps>;

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
   * A predicate for identifying days to disable selecting.
   *
   * Also will prevent manually entering dates matching this
   * predicate (when using `parseDate`).
   */
  disableDay?: (day: Date) => boolean;

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
};

export const testIds = {
  calendar: 'chroma-day-picker-calendar',
};

/**
 * An input component for selecting a day.
 *
 * ### Other Props
 *
 * `DayPicker` inherits (and forwards) most of its props on to the internal `TextField`. See
 * the documentation on `TextField` for more detailed descriptions of those props.
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/DayPicker/DayPicker.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/DayPicker/DayPicker.stories.tsx)
 */
export const DayPicker = React.forwardRef<HTMLInputElement, DayPickerProps>(
  (
    {
      value,
      pickerColor = 'primary',
      anchorPosition = 'bottom-left',
      minDate,
      maxDate,
      ariaLabelOverrides,
      calendarProps,
      onDayChange,
      onTextChange,
      disableDay,
      // Default is very dumb, but doesn't require a date library
      formatDate = (day) =>
        `${day.getMonth() + 1}/${day.getDate()}/${day.getFullYear()}`,
      parseDate,
      formatMonthTitle = LocaleUtils.formatMonthTitle,
      formatWeekdayShort = LocaleUtils.formatWeekdayShort,
      renderDay,
      ...textFieldProps
    },
    ref
  ) => {
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

    const isDayDisabled = (date: Date) => {
      if (
        (minDate && midnightOf(date) < midnightOf(minDate)) ||
        (maxDate && midnightOf(date) > midnightOf(maxDate)) ||
        (disableDay && disableDay(midnightOf(date)))
      ) {
        return true;
      }
      return false;
    };

    const _onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!parseDate) {
        return;
      }

      onTextChange && onTextChange(e.target.value);

      const parsed = parseDate(e.target.value);

      if (!parsed || isDayDisabled(parsed)) {
        setIntermediateInput(e.target.value);
        return;
      }
      const date = midnightOf(parsed);

      setIntermediateInput(undefined);
      onDayChange && onDayChange(date);
      calendarRef.current?.showMonth(date);
    };

    const onDayClick = (_day: Date) => {
      const day = midnightOf(_day);

      if (isDayDisabled(day)) {
        return;
      }

      setIntermediateInput(undefined);
      onDayChange && onDayChange(day);
      onTextChange && onTextChange(formatDate(day));
    };

    const onBlur = (e: React.FocusEvent<unknown>) => {
      /**
       * This logic primarily serves to provide good keyboard navigation.
       */
      if (!isInternalNode(e.relatedTarget)) {
        setIsCalendarOpen(false);
      }

      /**
       * Clear any intermediate input. This minimizes confusion -- if
       * the text field is not focused, then it contains the most recent
       * value.
       *
       * Otherwise, consumers may see a value that hasn't been reported
       * via `onDayChange`.
       */
      setIntermediateInput(undefined);
    };

    const isInternalNode = (target: EventTarget | null) => {
      return target instanceof Node && wrapperRef.current?.contains(target);
    };

    const DAY_PICKER_STYLES: Record<DayPickerAnchorPosition, string> = {
      'bottom-left': classes.dayPickerBottomLeft,
      'bottom-right': classes.dayPickerBottomRight,
      'top-left': classes.dayPickerTopLeft,
      'top-right': classes.dayPickerTopRight,
    };

    return (
      <div
        ref={wrapperRef}
        className={classes.root}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            setIsCalendarOpen(false);
          }
        }}
      >
        <TextField
          startAdornment={<Calendar />}
          {...textFieldProps}
          ref={ref}
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
          onMouseDown={composeEventHandlers([
            textFieldProps.onMouseDown,
            () => {
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
            },
          ])}
          onFocus={composeEventHandlers([
            textFieldProps.onFocus,
            () => setIsCalendarOpen(true),
          ])}
          onBlur={composeEventHandlers([textFieldProps.onBlur, onBlur])}
        />
        {isCalendarOpen && (
          <ReactDayPicker
            ref={calendarRef}
            containerProps={{
              // @ts-ignore data-testid is a real prop, even though TS thinks it's not.
              'data-testid': testIds.calendar,
            }}
            className={clsx(
              classes.dayPicker,
              DAY_PICKER_STYLES[anchorPosition]
            )}
            modifiers={{
              selected: value,
            }}
            initialMonth={value}
            disabledDays={isDayDisabled}
            modifiersStyles={{
              selected: {
                backgroundColor:
                  pickerColor === 'secondary'
                    ? theme.palette.secondary.main
                    : theme.palette.primary.main,
                color:
                  pickerColor === 'secondary'
                    ? theme.palette.getContrastText(
                        theme.palette.secondary.main
                      )
                    : theme.palette.getContrastText(theme.palette.primary.main),
              },
              outside: {
                backgroundColor: 'transparent',
              },
            }}
            navbarElement={(props) => (
              <div className={classes.navBar}>
                <ButtonUnstyled
                  aria-label={
                    ariaLabelOverrides?.leftChevron ?? 'Previous month'
                  }
                  className={classes.chevronButtonContainer}
                  onClick={() => props.onPreviousClick()}
                >
                  <ChevronLeft />
                </ButtonUnstyled>
                <span
                  aria-label={
                    ariaLabelOverrides?.monthHeader ?? 'Current month'
                  }
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
            onBlur={onBlur}
            {...calendarProps}
          />
        )}
      </div>
    );
  }
);
