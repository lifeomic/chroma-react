import * as React from 'react';
import clsx from 'clsx';
import { BaseFormElement } from '../_private/forms';
import { ChevronDown } from '@lifeomic/chromicons';
import { DotLoader } from '../DotLoader';
import { generateUniqueId } from '../_private/UniqueId';
import { GetClasses } from '../../typeUtils';
import { IconButton } from '../IconButton';
import { makeStyles } from '../../styles';
import { SelectOption, useStyles as selectUseStyles } from './';
import { Text } from '../Text';
import { TextField } from '../TextField';
import { useCombobox } from 'downshift';

export const SelectAutoCompleteStylesKey = 'ChromaSelectAutoComplete';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: 'relative',
    },
    menuContainer: {
      position: 'absolute',
      marginTop: theme.spacing(1.5),
      width: theme.pxToRem(175),
    },
    highlighted: {
      backgroundColor: theme.hexToRgba(theme.palette.primary[50], 0.6),
    },
    disabled: {
      cursor: 'not-allowed',
      opacity: 0.625,
    },
    noResult: {
      lineHeight: 1.3,
      padding: theme.spacing(0, 2),
    },
  }),
  { name: SelectAutoCompleteStylesKey }
);

export type SelectAutoCompleteClasses = GetClasses<typeof useStyles>;

interface Item {
  disabled?: boolean;
  subtitle?: string;
  title: string;
  value: string;
}

export interface SelectAutoCompleteProps
  extends Pick<
      BaseFormElement,
      | 'color'
      | 'hasError'
      | 'errorMessage'
      | 'helpMessage'
      | 'label'
      | 'showRequiredLabel'
    >,
    Pick<React.ComponentPropsWithoutRef<'input'>, 'disabled'>,
    Pick<
      React.ComponentPropsWithoutRef<'select'>,
      'className' | 'id' | 'value'
    > {
  ['aria-label']?: string;
  fullWidth?: boolean;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isLoading?: boolean;
  items: Item[];
  matchFrom?: 'any' | 'exact' | 'start';
  onInputChange?: (value: string | undefined) => void;
  onSelect?: (selectedItem: string | undefined) => void;
  name?: string;
  placeholder?: string;
  secondaryLabel?: string;
  selectedItem?: Item | null | undefined;
  tooltipMessage?: string;
}

export const SelectAutoComplete = React.forwardRef<
  HTMLInputElement,
  SelectAutoCompleteProps
>(
  (
    {
      ['aria-label']: ariaLabel,
      className,
      disabled,
      id,
      isLoading,
      items = [],
      label,
      matchFrom = 'any',
      name,
      onInputChange,
      onSelect,
      selectedItem: currentSelectedItem = null,
      value,
      ...restProps
    },
    ref
  ) => {
    const [selectedItem, setSelectedItem] = React.useState<
      Item | null | undefined
    >(currentSelectedItem);
    const [inputItems, setInputItems] = React.useState<Item[]>(items);

    const classes = useStyles({});
    const selectClasses = selectUseStyles({});
    const [uniqueId] = React.useState<string>(
      () => id || name || generateUniqueId('auto-complete-select-')
    );

    const {
      highlightedIndex,
      isOpen,
      getComboboxProps,
      getInputProps,
      getItemProps,
      getMenuProps,
      getToggleButtonProps,
      openMenu,
    } = useCombobox({
      itemToString(item) {
        return item ? item.title : '';
      },
      items: inputItems,
      onInputValueChange: ({ inputValue }) => {
        if (!inputValue) {
          setInputItems(items);
          onInputChange?.(inputValue);
          return;
        }

        const inputValueTitle = inputValue?.toLowerCase() || '';

        const filteredItems = items.filter((item) => {
          const itemTitle = item?.title?.toLowerCase();

          switch (matchFrom) {
            case 'any':
              return itemTitle?.includes(inputValueTitle);
            case 'start':
              return itemTitle?.startsWith(inputValueTitle);
            case 'exact':
              return itemTitle === inputValueTitle;
            default:
              false;
          }
        });

        setInputItems(filteredItems);
        onInputChange?.(inputValue);
      },
      onSelectedItemChange: ({ selectedItem }) => {
        setSelectedItem(selectedItem);
        onSelect?.(selectedItem?.value);
      },
      selectedItem,
    });

    if (!label && !ariaLabel && process.env.NODE_ENV === 'development') {
      throw new Error(
        'If a "label" is not provided to SelectAutoComplete, please provide "aria-label".'
      );
    }

    return (
      <div className={clsx(classes.root, className)}>
        <div {...getComboboxProps()}>
          <TextField
            aria-label={ariaLabel}
            endAdornment={
              isLoading ? (
                <DotLoader data-testid="select-is-loading" size={0} />
              ) : (
                <IconButton
                  aria-label="toggle select options"
                  className={clsx(
                    selectClasses.arrowIcon,
                    isOpen && selectClasses.rotate
                  )}
                  disabled={disabled}
                  icon={ChevronDown}
                  {...getToggleButtonProps()}
                />
              )
            }
            label={label}
            ref={ref}
            {...getInputProps({
              disabled,
              id: uniqueId,
              onFocus: () => {
                if (!isOpen) {
                  openMenu();
                }
              },
            })}
            {...restProps}
          />
        </div>

        <div
          className={clsx(
            classes.menuContainer,
            isOpen && selectClasses.popover
          )}
        >
          <ul className={selectClasses.ul} {...getMenuProps()}>
            {isOpen && (
              <>
                {isLoading ? (
                  <Text className={classes.noResult} size="subbody">
                    Loading...
                  </Text>
                ) : (
                  <>
                    {inputItems.length ? (
                      inputItems.map((item: Item, index: number) => (
                        <li
                          className={clsx(
                            selectClasses.option,
                            highlightedIndex === index && classes.highlighted,
                            item.disabled && classes.disabled
                          )}
                          key={`selectAutoComplete-item-${index}`}
                          {...getItemProps({
                            disabled: item.disabled,
                            index,
                            item,
                          })}
                        >
                          <SelectOption
                            isChecked={selectedItem === item}
                            {...item}
                          />
                        </li>
                      ))
                    ) : (
                      <Text className={classes.noResult} size="subbody">
                        No Result
                      </Text>
                    )}
                  </>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
    );
  }
);
