import * as React from 'react';
import clsx from 'clsx';
import { BaseFormElement } from '../_private/forms';
import { ChevronDown } from '@lifeomic/chromicons';
import { generateUniqueId } from '../_private/UniqueId';
import { GetClasses } from '../../typeUtils';
import { makeStyles } from '../../styles';
import { SelectOption, useStyles as selectUseStyles } from './';
import { Text } from '../Text';
import { TextField } from '../TextField';
import { useCombobox } from 'downshift';
import { IconButton } from '../IconButton';

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
    noResult: {
      lineHeight: 1.3,
      padding: theme.spacing(0, 2),
    },
  }),
  { name: SelectAutoCompleteStylesKey }
);

export type SelectAutoCompleteClasses = GetClasses<typeof useStyles>;

interface Item {
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
  items: Item[];
  matchFrom: 'any' | 'exact' | 'start';
  onInputChange: (value: string | undefined) => void;
  onSelect: (selectedItem: string | undefined) => void;
  name?: string;
  selectedItem?: Item | null | undefined;
}

export const SelectAutoComplete = React.forwardRef<
  HTMLInputElement,
  SelectAutoCompleteProps
>(
  (
    {
      ['aria-label']: ariaLabel,
      className,
      id,
      items = [],
      label,
      matchFrom = 'any',
      name,
      onInputChange,
      onSelect,
      selectedItem: currentSelectedItem,
      value,
      ...restProps
    },
    ref
  ) => {
    const [selectedItem, setSelectedItem] = React.useState(currentSelectedItem);
    const [inputItems, setInputItems] = React.useState(items);

    const classes = useStyles({});
    const selectClasses = selectUseStyles({});
    const [uniqueId] = React.useState<string>(
      () => id || name || generateUniqueId('auto-complete-select-')
    );

    const {
      isOpen,
      getComboboxProps,
      getInputProps,
      getItemProps,
      getMenuProps,
      getToggleButtonProps,
    } = useCombobox({
      itemToString(item) {
        return item ? item.title : '';
      },
      items: inputItems,
      onInputValueChange: ({ inputValue }) => {
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
              <IconButton
                aria-label="toggle select options"
                className={clsx(
                  selectClasses.arrowIcon,
                  isOpen && selectClasses.rotate
                )}
                icon={ChevronDown}
                {...getToggleButtonProps()}
              />
            }
            id={uniqueId}
            label={label}
            ref={ref}
            {...restProps}
            {...getInputProps()}
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
                {inputItems.length ? (
                  inputItems.map((item: Item, index: number) => (
                    <SelectOption
                      className={selectClasses.option}
                      key={`selectAutoComplete-option-${index}`}
                      {...item}
                      {...getItemProps({ item, index })}
                    />
                  ))
                ) : (
                  <Text className={classes.noResult} size="subbody">
                    No Result
                  </Text>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
    );
  }
);
