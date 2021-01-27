import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import {
  BaseFormElement,
  buildDescribedBy,
  FormHelpMessage,
  helpFor,
} from '../_private/forms';
import { generateUniqueId } from '../_private/UniqueId';
import { clearClipPath, defaultClipPath } from './clipPaths';

export const SearchFieldStylesKey = 'ChromaSearchField';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: 'relative',
    },
    input: {
      backgroundColor: 'rgba(132, 137, 166, 0.15)',
      border: `1px solid transparent`,
      borderRadius: theme.pxToRem(4),
      color: theme.palette.text.primary,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.pxToRem(14),
      lineHeight: 1.25,
      paddingLeft: theme.spacing(1.25),
      // Requires more paddingRight so we give the search icon enough
      // room when the text inside the search field is long.
      paddingRight: theme.spacing(3.75),
      transition: 'border 0.25s ease',
      maxWidth: theme.pxToRem(173),
      '&:focus': {
        outline: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        border: `1px solid rgba(132, 137, 166, 0.45)`,
      },
      '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.625,
        '& + $button': {
          cursor: 'not-allowed',
          opacity: 0.625,
        },
      },
      '&::-webkit-input-placeholder': {
        color: theme.palette.black[400],
      },
      '&::-moz-placeholder': {
        color: theme.palette.black[400],
      },
      '&:-ms-input-placeholder': {
        color: theme.palette.black[400],
      },
      '&:-moz-placeholder': {
        color: theme.palette.black[400],
      },
      // Hide the webkit clear (x) button
      '&::-webkit-search-decoration,&::-webkit-search-cancel-button,&::-webkit-search-results-button,&::-webkit-search-results-decoration': {
        display: 'none',
      },
    },
    inputInverse: {
      backgroundColor: 'rgba(230, 231, 237, 0.25)',
      color: theme.palette.common.white,
      '&:focus': {
        backgroundColor: 'rgba(230, 231, 237, 0.35)',
        border: `1px solid rgba(230, 231, 237, 0.55)`,
      },
      '&::-webkit-input-placeholder': {
        color: 'rgba(255, 255, 255, 0.8)',
      },
      '&::-moz-placeholder': {
        color: 'rgba(255, 255, 255, 0.8)',
      },
      '&:-ms-input-placeholder': {
        color: 'rgba(255, 255, 255, 0.8)',
      },
      '&:-moz-placeholder': {
        color: 'rgba(255, 255, 255, 0.8)',
      },
    },
    inputHeight0: {
      paddingBottom: theme.spacing(0.5),
      paddingTop: theme.spacing(0.5),
    },
    inputHeight1: {
      paddingBottom: theme.spacing(1),
      paddingTop: theme.spacing(1),
    },
    fullWidth: {
      '& $input': {
        maxWidth: 'none',
        width: '100%',
      },
      '& $button': {
        left: 'auto',
        right: theme.pxToRem(5),
      },
    },
    button: {
      position: 'absolute',
      left: theme.pxToRem(144),
      alignItems: 'center',
      backgroundColor: 'transparent',
      border: 0,
      color: theme.palette.black[500],
      cursor: 'pointer',
      display: 'inline-flex',
      flex: '0 0 auto',
      justifyContent: 'center',
      margin: 0,
      outline: 'none',
      padding: 0,
      transition: 'color 0.25s ease, opacity 0.25s ease',
      userSelect: 'none',
    },
    buttonHeight0: {
      top: theme.pxToRem(0.25),
    },
    buttonHeight1: {
      top: theme.pxToRem(4),
    },
    buttonSvg: {
      width: theme.pxToRem(24),
      height: theme.pxToRem(24),
      // Glass
      '& > circle': {
        fill: 'transparent',
        stroke: theme.palette.black[500],
        strokeWidth: 6,
        strokeLinecap: 'round',
      },
      // Magnifying glass pole part
      '& > path': {
        fill: 'none',
        stroke: theme.palette.black[500],
        strokeDasharray: '10 50',
        strokeDashoffset: 20,
        strokeLinecap: 'round',
        strokeWidth: 7,
        transition:
          'stroke-dasharray 200ms, stroke-dashoffset 200ms, stroke 200ms',
        '@media (prefers-reduced-motion: reduce)': {
          transition: 'none',
        },
      },
      // Background circle for glass and X clear
      '& > rect': {
        clipPath: defaultClipPath,
        WebkitClipPath: defaultClipPath,
        fill: 'transparent',
        transition: 'clip-path 100ms 100ms',
        '@media (prefers-reduced-motion: reduce)': {
          transition: 'none',
        },
      },
    },
    buttonSvgInverse: {
      '& > circle': {
        stroke: theme.palette.common.white,
      },
      '& > path': {
        stroke: theme.palette.common.white,
      },
    },
    buttonSvgClear: {
      marginTop: theme.spacing(0.125),
      '& > circle': {
        fill: theme.palette.black[500],
      },
      '& > path': {
        strokeDasharray: '24 50',
        strokeDashoffset: 74,
        stroke: theme.palette.common.white,
      },
      '& > rect': {
        clipPath: clearClipPath,
        WebkitClipPath: clearClipPath,
        fill: theme.palette.common.white,
        transition: 'clip-path 100ms',
        '@media (prefers-reduced-motion: reduce)': {
          transition: 'none',
        },
      },
    },
    buttonSvgClearInverse: {
      '& > circle': {
        fill: theme.palette.common.white,
        stroke: theme.palette.common.white,
      },
      '& > path': {
        stroke: theme.palette.blue[700],
      },
      '& > rect': {
        fill: theme.palette.blue[700],
      },
    },
    helpMessage: {
      marginTop: theme.spacing(1),
      marginLeft: 0,
    },
  }),
  { name: SearchFieldStylesKey }
);

export type SearchFieldClasses = GetClasses<typeof useStyles>;

export interface SearchFieldProps
  extends React.ComponentPropsWithRef<'input'>,
    Pick<BaseFormElement, 'helpMessage'> {
  buttonType?: string;
  color?: 'default' | 'inverse';
  disableClearOnSearch?: boolean;
  fullWidth?: boolean;
  onClear?: () => any;
  onSearch?(textValue: string | number | string[] | undefined): any;
  height?: 0 | 1;
}

export const SearchField = React.forwardRef<HTMLInputElement, SearchFieldProps>(
  (
    {
      className,
      color = 'default',
      disableClearOnSearch = false,
      fullWidth,
      height = 1,
      id,
      name,
      helpMessage,
      onChange,
      onSearch,
      onClear,
      value,
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({});

    const [uniqueId] = React.useState<string>(
      () => id || name || generateUniqueId('searchField-')
    );

    const [showClear, setShowClear] = React.useState<boolean>(false);
    const [searchText, setSearchText] = React.useState<string>('');

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (e.target.value.length > 0) {
        setShowClear(true);
      }
    };

    const handleBlur = () => {
      if (searchText.length === 0) {
        setShowClear(false);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);

      if (showClear && e.target.value.length === 0) {
        setShowClear(false);
      }

      if (!showClear && e.target.value.length > 0) {
        setShowClear(true);
      }

      onChange?.(e);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && !disableClearOnSearch) {
        setShowClear(false);
        onSearch && onSearch(searchText);
        setSearchText('');
      }

      if (e.key === 'Enter' && disableClearOnSearch) {
        onSearch && onSearch(searchText);
      }
    };

    const handleClearButtonClick = () => {
      setSearchText('');
      setShowClear(false);
      onClear?.();
      const input = document.getElementById(uniqueId) as HTMLInputElement;
      const event = new Event('change');
      input.value = '';
      input.dispatchEvent(event);
      onChange?.((event as unknown) as React.ChangeEvent<HTMLInputElement>);
    };

    return (
      <div
        className={clsx(
          classes.root,
          fullWidth && classes.fullWidth,
          className
        )}
      >
        <input
          aria-describedby={buildDescribedBy({
            hasHelpMessage: !!helpMessage,
            uniqueId,
          })}
          className={clsx(
            classes.input,
            {
              [classes.inputInverse]: color === 'inverse',
            },
            {
              [classes.inputHeight0]: height === 0,
              [classes.inputHeight1]: height === 1,
            }
          )}
          id={uniqueId}
          name={name}
          ref={ref}
          type="search"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={searchText}
          {...rootProps}
        />
        <button
          aria-label={showClear ? 'Clear input' : 'Search'}
          className={clsx(classes.button, {
            [classes.buttonHeight0]: height === 0,
            [classes.buttonHeight1]: height === 1,
          })}
          tabIndex={-1}
          onClick={handleClearButtonClick}
        >
          <svg
            className={clsx(
              classes.buttonSvg,
              color === 'inverse' && classes.buttonSvgInverse,
              showClear && classes.buttonSvgClear,
              color === 'inverse' && showClear && classes.buttonSvgClearInverse
            )}
            viewBox="0 0 100 100"
            role="img"
            aria-hidden
          >
            <circle r="24.5" cy="54.200001" cx="45.700001" />
            <path d="M 37.240349,46.733243 72.551185,82.414382" />

            <rect x="0" y="0" width="100" height="100" />
          </svg>
        </button>
        {helpMessage && (
          <FormHelpMessage
            className={classes.helpMessage}
            color={color}
            rootElementId={uniqueId}
            describedById={helpFor(uniqueId)}
          >
            {helpMessage}
          </FormHelpMessage>
        )}
      </div>
    );
  }
);
