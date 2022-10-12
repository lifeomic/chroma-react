import {
  AlertProps,
  AlertStylesKey,
  AlertActionsRowProps,
  AlertActionsRowStylesKey,
  AlertBodyProps,
  AlertBodyStylesKey,
  AlertIconProps,
  AlertIconStylesKey,
} from '../../components/Alert';
import { AvatarProps, AvatarStylesKey } from '../../components/Avatar';
import { BoxProps, BoxStylesKey } from '../../components/Box';
import {
  BreadcrumbProps,
  BreadcrumbNavProps,
  BreadcrumbNavStylesKey,
  BreadcrumbsProps,
  BreadcrumbsStylesKey,
  BreadcrumbStylesKey,
} from '../../components/Breadcrumbs';
import { ButtonProps, ButtonStylesKey } from '../../components/Button/index';
import {
  ButtonFloatProps,
  ButtonFloatStylesKey,
} from '../../components/ButtonFloat';
import {
  ButtonFilePickerProps,
  ButtonFilePickerStylesKey,
} from '../../components/ButtonFilePicker';
import {
  ButtonLinkProps,
  ButtonLinkStylesKey,
} from '../../components/ButtonLink/index';
import { CheckboxProps, CheckboxStylesKey } from '../../components/Checkbox';
import { ChipProps, ChipStylesKey } from '../../components/Chip';
import { DividerProps, DividerStylesKey } from '../../components/Divider';
import { DotLoaderProps, DotLoaderStylesKey } from '../../components/DotLoader';
import {
  ExpansionPanelProps,
  ExpansionPanelStylesKey,
} from '../../components/ExpansionPanel';
import { FormBoxProps, FormBoxStylesKey } from '../../components/FormBox';
import { HeaderProps, HeaderStylesKey } from '../../components/Header';
import {
  IconButtonProps,
  IconButtonStylesKey,
} from '../../components/IconButton';
import {
  IconButtonFloatProps,
  IconButtonFloatStylesKey,
} from '../../components/IconButtonFloat';
import {
  IconButtonLinkProps,
  IconButtonLinkStylesKey,
} from '../../components/IconButtonLink';
import { IconTileProps, IconTileStylesKey } from '../../components/IconTile';
import {
  KeymapHelpProps,
  KeymapHelpStylesKey,
} from '../../components/KeymapHelp';
import {
  LayoutManagerProps,
  LayoutManagerStylesKey,
} from '../../components/LayoutManager';
import {
  LinearProgressProps,
  LinearProgressStylesKey,
} from '../../components/LinearProgress';
import { LinkProps, LinkStylesKey } from '../../components/Link';
import {
  MenuProps,
  MenuButtonProps,
  MenuButtonStylesKey,
  MenuItemProps,
  MenuItemStylesKey,
  MenuStylesKey,
} from '../../components/Menu';
import {
  ModalActionsProps,
  ModalActionsStylesKey,
  ModalProps,
  ModalStylesKey,
} from '../../components/Modal';
import {
  PageHeaderProps,
  PageHeaderStylesKey,
} from '../../components/PageHeader';
import {
  PageLayoutProps,
  PageLayoutStylesKey,
} from '../../components/PageLayout';
import { PaperProps, PaperStylesKey } from '../../components/Paper';
import { PillProps, PillStylesKey } from '../../components/Pill';
import {
  PopoverActionsProps,
  PopoverActionsStylesKey,
  PopoverListProps,
  PopoverListStylesKey,
  PopoverItemProps,
  PopoverItemStylesKey,
  PopoverContentProps,
  PopoverContentStylesKey,
  PopoverProps,
  PopoverStylesKey,
} from '../../components/Popover';
import {
  PrimaryNavigationProps,
  PrimaryNavigationExpansionItemProps,
  PrimaryNavigationExpansionItemStylesKey,
  PrimaryNavigationItemProps,
  PrimaryNavigationItemStylesKey,
  PrimaryNavigationStylesKey,
  PrimaryNavigationSubItemProps,
  PrimaryNavigationSubItemStylesKey,
} from '../../components/PrimaryNavigation';
import {
  RadioProps,
  RadioGroupMinimalProps,
  RadioGroupMinimalStylesKey,
  RadioStylesKey,
} from '../../components/Radio';
import {
  SearchFieldProps,
  SearchFieldStylesKey,
} from '../../components/SearchField';
import {
  SecondaryNavigationProps,
  SecondaryNavigationItemProps,
  SecondaryNavigationItemStylesKey,
  SecondaryNavigationStylesKey,
} from '../../components/SecondaryNavigation';
import {
  GroupHeadingProps,
  SelectAutoCompleteProps,
  SelectProps,
  SelectOptionProps,
  RoverOptionProps,
  GroupHeadingStylesKey,
  SelectAutoCompleteStylesKey,
  SelectOptionStylesKey,
  SelectStylesKey,
  RoverOptionStylesKey,
} from '../../components/Select';
import {
  SlideOverProps,
  SlideOverStylesKey,
  ActionsProps as SlideOverActionsProps,
  ActionsStylesKey as SlideOverActionsStylesKey,
  BodyProps as SlideOverBodyProps,
  BodyStylesKey as SlideOverBodyStylesKey,
  HeaderProps as SlideOverHeaderProps,
  HeaderStylesKey as SlideOverHeaderStylesKey,
} from '../../components/SlideOver';
import { SmallTileProps, SmallTileStylesKey } from '../../components/SmallTile';
import { SnackbarProps, SnackbarStylesKey } from '../../components/Snackbar';
import {
  StepProps,
  StepConnectorProps,
  StepConnectorStylesKey,
  StepperProps,
  StepperStylesKey,
  StepStylesKey,
} from '../../components/Stepper';
import {
  TableActionDividerProps,
  TableActionDividerStylesKey,
  TableModuleProps,
  TableModuleStylesKey,
} from '../../components/TableModule';
import {
  TabProps,
  TabListProps,
  TabListStylesKey,
  TabPanelProps,
  TabPanelStylesKey,
  TabStylesKey,
} from '../../components/Tabs';
import { TextProps, TextStylesKey } from '../../components/Text';
import { TextAreaProps, TextAreaStylesKey } from '../../components/TextArea';
import { TextFieldProps, TextFieldStylesKey } from '../../components/TextField';
import { ToggleProps, ToggleStylesKey } from '../../components/Toggle';
import { TooltipProps, TooltipStylesKey } from '../../components/Tooltip';
import {
  UnitNumberFormatFieldProps,
  UnitNumberFormatFieldStylesKey,
  PhoneNumberFormatFieldProps,
  PhoneNumberFormatFieldStylesKey,
} from '../../components/NumberFormat';
import {
  ButtonUnstyledProps,
  ButtonUnstyledStylesKey,
} from '../../components/ButtonUnstyled';
import {
  ColorPickerProps,
  ColorPickerStylesKey,
} from '../../components/ColorPicker';
import { SkeletonProps, SkeletonStylesKey } from '../../components/Skeleton';
import { SliderProps, SliderStylesKey } from '../../components/Slider';
import { DayPickerProps, DayPickerStylesKey } from '../../components/DayPicker';

export type ComponentsProps = {
  [Name in keyof ChromaComponentsPropsList]?: Partial<
    ChromaComponentsPropsList[Name]
  >;
};

export interface ChromaComponentsPropsList {
  [AlertStylesKey]: AlertProps;
  [AlertActionsRowStylesKey]: AlertActionsRowProps;
  [AlertBodyStylesKey]: AlertBodyProps;
  [AlertIconStylesKey]: AlertIconProps;
  [AvatarStylesKey]: AvatarProps;
  [BoxStylesKey]: BoxProps;
  [BreadcrumbNavStylesKey]: BreadcrumbNavProps;
  [BreadcrumbsStylesKey]: BreadcrumbsProps;
  [BreadcrumbStylesKey]: BreadcrumbProps;
  [ButtonFloatStylesKey]: ButtonFloatProps;
  [ButtonFilePickerStylesKey]: ButtonFilePickerProps;
  [ButtonLinkStylesKey]: ButtonLinkProps;
  [ButtonStylesKey]: ButtonProps;
  [ButtonUnstyledStylesKey]: ButtonUnstyledProps;
  [CheckboxStylesKey]: CheckboxProps;
  [ChipStylesKey]: ChipProps;
  [ColorPickerStylesKey]: ColorPickerProps;
  [DayPickerStylesKey]: DayPickerProps;
  [DividerStylesKey]: DividerProps;
  [DotLoaderStylesKey]: DotLoaderProps;
  [ExpansionPanelStylesKey]: ExpansionPanelProps;
  [FormBoxStylesKey]: FormBoxProps;
  [GroupHeadingStylesKey]: GroupHeadingProps;
  [HeaderStylesKey]: HeaderProps;
  [IconButtonStylesKey]: IconButtonProps;
  [IconButtonFloatStylesKey]: IconButtonFloatProps;
  [IconButtonLinkStylesKey]: IconButtonLinkProps;
  [IconTileStylesKey]: IconTileProps;
  [KeymapHelpStylesKey]: KeymapHelpProps;
  [LayoutManagerStylesKey]: LayoutManagerProps;
  [LinearProgressStylesKey]: LinearProgressProps;
  [LinkStylesKey]: LinkProps;
  [MenuButtonStylesKey]: MenuButtonProps;
  [MenuItemStylesKey]: MenuItemProps;
  [MenuStylesKey]: MenuProps;
  [ModalActionsStylesKey]: ModalActionsProps;
  [ModalStylesKey]: ModalProps;
  [PageHeaderStylesKey]: PageHeaderProps;
  [PageLayoutStylesKey]: PageLayoutProps;
  [PaperStylesKey]: PaperProps;
  [PhoneNumberFormatFieldStylesKey]: PhoneNumberFormatFieldProps;
  [PillStylesKey]: PillProps;
  [PopoverActionsStylesKey]: PopoverActionsProps;
  [PopoverStylesKey]: PopoverProps;
  [PopoverContentStylesKey]: PopoverContentProps;
  [PopoverItemStylesKey]: PopoverItemProps;
  [PopoverListStylesKey]: PopoverListProps;
  [PrimaryNavigationExpansionItemStylesKey]: PrimaryNavigationExpansionItemProps;
  [PrimaryNavigationItemStylesKey]: PrimaryNavigationItemProps;
  [PrimaryNavigationStylesKey]: PrimaryNavigationProps;
  [PrimaryNavigationSubItemStylesKey]: PrimaryNavigationSubItemProps;
  [RadioStylesKey]: RadioProps;
  [RadioGroupMinimalStylesKey]: RadioGroupMinimalProps;
  [RoverOptionStylesKey]: RoverOptionProps;
  [SearchFieldStylesKey]: SearchFieldProps;
  [SecondaryNavigationItemStylesKey]: SecondaryNavigationItemProps;
  [SecondaryNavigationStylesKey]: SecondaryNavigationProps;
  [SelectAutoCompleteStylesKey]: SelectAutoCompleteProps;
  [SelectOptionStylesKey]: SelectOptionProps;
  [SelectStylesKey]: SelectProps;
  [SkeletonStylesKey]: SkeletonProps;
  [SliderStylesKey]: SliderProps;
  [SlideOverStylesKey]: SlideOverProps;
  [SlideOverActionsStylesKey]: SlideOverActionsProps;
  [SlideOverBodyStylesKey]: SlideOverBodyProps;
  [SlideOverHeaderStylesKey]: SlideOverHeaderProps;
  [SmallTileStylesKey]: SmallTileProps;
  [SnackbarStylesKey]: SnackbarProps;
  [StepperStylesKey]: StepperProps;
  [StepStylesKey]: StepProps;
  [StepConnectorStylesKey]: StepConnectorProps;
  [TableActionDividerStylesKey]: TableActionDividerProps;
  [TableModuleStylesKey]: TableModuleProps;
  [TabListStylesKey]: TabListProps;
  [TabPanelStylesKey]: TabPanelProps;
  [TabStylesKey]: TabProps;
  [TextStylesKey]: TextProps;
  [TextAreaStylesKey]: TextAreaProps;
  [TextFieldStylesKey]: TextFieldProps;
  [ToggleStylesKey]: ToggleProps;
  [TooltipStylesKey]: TooltipProps;
  [UnitNumberFormatFieldStylesKey]: UnitNumberFormatFieldProps;
}
