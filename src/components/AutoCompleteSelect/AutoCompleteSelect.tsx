import * as React from 'react';
import clsx from 'clsx';
import { BaseFormElement } from '../_private/forms';
import { ChevronDown } from '@lifeomic/chromicons';
import { generateUniqueId } from '../_private/UniqueId';
import { GetClasses } from '../../typeUtils';
import { makeStyles } from '../../styles';
import {
  GroupHeading,
  SelectOption,
  useStyles as selectUseStyles,
} from '../Select';
import { Text } from '../Text';
import { TextField } from '../TextField';
import { useCombobox } from 'downshift';

export const AutoCompleteSelectStylesKey = 'ChromaAutoCompleteSelect';

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
  { name: AutoCompleteSelectStylesKey }
);

export type AutoCompleteSelectClasses = GetClasses<typeof useStyles>;

export interface AutoCompleteSelectProps
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
  items: Array<any>;
  onInputChange: (value: string | undefined) => void;
  onSelect: (selectedItem: any) => void;
  name?: string;
  selectedItem: any;
}

export const AutoCompleteSelect = React.forwardRef<
  HTMLInputElement,
  AutoCompleteSelectProps
>(
  (
    {
      ['aria-label']: ariaLabel,
      className,
      id,
      items = [],
      label,
      name,
      onInputChange,
      onSelect,
      selectedItem,
      value,
      ...restProps
    },
    ref
  ) => {
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
    } = useCombobox({
      itemToString(item) {
        return item ? item.label : '';
      },
      items,
      onInputValueChange: ({ inputValue }) => {
        setInputItems(
          items.filter((item) =>
            item?.title?.toLowerCase().startsWith(inputValue?.toLowerCase())
          )
        );

        onInputChange(inputValue);
      },
      onSelectedItemChange: ({ selectedItem }) => onSelect(selectedItem.value),
      selectedItem, // or should they just pass in the item?
    });

    if (!label && !ariaLabel && process.env.NODE_ENV === 'development') {
      throw new Error(
        'If a "label" is not provided to AutoCompleteSelect, please provide "aria-label".'
      );
    }

    return (
      <div className={clsx(classes.root, className)}>
        <div {...getComboboxProps()}>
          <TextField
            aria-label={ariaLabel}
            endAdornment={
              <ChevronDown
                className={clsx(
                  selectClasses.arrowIcon,
                  isOpen && selectClasses.rotate
                )}
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
                  items.map((item, index) =>
                    item.role === 'heading' ? (
                      <GroupHeading
                        className={selectClasses.option}
                        data-select-role="heading"
                      >
                        {item.title}
                      </GroupHeading>
                    ) : (
                      <SelectOption
                        className={selectClasses.option}
                        subtitle={item.subtitle}
                        title={item.title}
                        value={item.value}
                        {...getItemProps({ item, index })}
                      />
                    )
                  )
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
