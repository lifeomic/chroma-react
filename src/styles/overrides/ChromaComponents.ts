import { ComponentsProps } from './ChromaProps';
import {
  ChromaOverrides as ChromaComponentsOverrides,
  ChromaComponentNameToClassKey,
} from './ChromaOverrides';
import { Theme } from '../createTheme';
import { Interpolation } from '@mui/material';
import { Components as MuiComponents } from '@mui/material/styles';
import {
  AlertStylesKey,
  AlertActionsRowStylesKey,
  AlertBodyStylesKey,
  AlertIconStylesKey,
} from '../../components/Alert';
import { AvatarStylesKey } from '../../components/Avatar';
import { BoxStylesKey } from '../../components/Box';
import {
  BreadcrumbNavStylesKey,
  BreadcrumbsStylesKey,
  BreadcrumbStylesKey,
} from '../../components/Breadcrumbs';
import { ButtonStylesKey } from '../../components/Button/index';
import { ButtonFloatStylesKey } from '../../components/ButtonFloat';
import { ButtonFilePickerStylesKey } from '../../components/ButtonFilePicker';
import { ButtonLinkStylesKey } from '../../components/ButtonLink/index';
import { CheckboxStylesKey } from '../../components/Checkbox';
import { ChipStylesKey } from '../../components/Chip';
import { DividerStylesKey } from '../../components/Divider';
import { DotLoaderStylesKey } from '../../components/DotLoader';
import { ExpansionPanelStylesKey } from '../../components/ExpansionPanel';
import { FormBoxStylesKey } from '../../components/FormBox';
import { HeaderStylesKey } from '../../components/Header';
import { IconButtonStylesKey } from '../../components/IconButton';
import { IconButtonFloatStylesKey } from '../../components/IconButtonFloat';
import { IconButtonLinkStylesKey } from '../../components/IconButtonLink';
import { IconTileStylesKey } from '../../components/IconTile';
import { KeymapHelpStylesKey } from '../../components/KeymapHelp';
import { LayoutManagerStylesKey } from '../../components/LayoutManager';
import { LinearProgressStylesKey } from '../../components/LinearProgress';
import { LinkStylesKey } from '../../components/Link';
import {
  MenuButtonStylesKey,
  MenuItemStylesKey,
  MenuStylesKey,
} from '../../components/Menu';
import { ModalActionsStylesKey, ModalStylesKey } from '../../components/Modal';
import { PageHeaderStylesKey } from '../../components/PageHeader';
import { PageLayoutStylesKey } from '../../components/PageLayout';
import { PaperStylesKey } from '../../components/Paper';
import { PillStylesKey } from '../../components/Pill';
import {
  PopoverActionsStylesKey,
  PopoverListStylesKey,
  PopoverItemStylesKey,
  PopoverContentStylesKey,
  PopoverStylesKey,
} from '../../components/Popover';
import {
  PrimaryNavigationExpansionItemStylesKey,
  PrimaryNavigationItemStylesKey,
  PrimaryNavigationStylesKey,
  PrimaryNavigationSubItemStylesKey,
} from '../../components/PrimaryNavigation';
import {
  RadioGroupMinimalStylesKey,
  RadioStylesKey,
} from '../../components/Radio';
import { SearchFieldStylesKey } from '../../components/SearchField';
import {
  SecondaryNavigationItemStylesKey,
  SecondaryNavigationStylesKey,
} from '../../components/SecondaryNavigation';
import {
  GroupHeadingStylesKey,
  SelectOptionStylesKey,
  SelectStylesKey,
  RoverOptionStylesKey,
} from '../../components/Select';
import {
  SlideOverStylesKey,
  ActionsStylesKey as SlideOverActionsStylesKey,
  BodyStylesKey as SlideOverBodyStylesKey,
  HeaderStylesKey as SlideOverHeaderStylesKey,
} from '../../components/SlideOver';
import { SmallTileStylesKey } from '../../components/SmallTile';
import { SnackbarStylesKey } from '../../components/Snackbar';
import {
  StepConnectorStylesKey,
  StepperStylesKey,
  StepStylesKey,
} from '../../components/Stepper';
import {
  TableActionDividerStylesKey,
  TableModuleStylesKey,
} from '../../components/TableModule';
import {
  TabListStylesKey,
  TabPanelStylesKey,
  TabStylesKey,
} from '../../components/Tabs';
import { TextStylesKey } from '../../components/Text';
import { TextAreaStylesKey } from '../../components/TextArea';
import { TextFieldStylesKey } from '../../components/TextField';
import { ToggleStylesKey } from '../../components/Toggle';
import { TooltipStylesKey } from '../../components/Tooltip';
import {
  UnitNumberFormatFieldStylesKey,
  PhoneNumberFormatFieldStylesKey,
} from '../../components/NumberFormat';
import { ButtonUnstyledStylesKey } from '../../components/ButtonUnstyled';
import { ColorPickerStylesKey } from '../../components/ColorPicker';
import { SkeletonStylesKey } from '../../components/Skeleton';
import { SliderStylesKey } from '../../components/Slider';
import { DayPickerStylesKey } from '../../components/DayPicker';

export interface Components
  extends MuiComponents<Theme>,
    ChromaComponents<Theme> {}

export type ComponentsVariants = {
  [Name in keyof ChromaComponentNameToClassKey]?: Array<{
    props: Partial<ComponentsProps[Name]>;
    style: Interpolation<{ theme: Theme }>;
  }>;
};

export type ChromaComponents<Theme> = {
  [AlertStylesKey]?: {
    defaultProps?: ComponentsProps[typeof AlertStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof AlertStylesKey];
    variants?: ComponentsVariants[typeof AlertStylesKey];
  };
  [AlertActionsRowStylesKey]?: {
    defaultProps?: ComponentsProps[typeof AlertActionsRowStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof AlertActionsRowStylesKey];
    variants?: ComponentsVariants[typeof AlertActionsRowStylesKey];
  };
  [AlertBodyStylesKey]?: {
    defaultProps?: ComponentsProps[typeof AlertBodyStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof AlertBodyStylesKey];
    variants?: ComponentsVariants[typeof AlertBodyStylesKey];
  };
  [AlertIconStylesKey]?: {
    defaultProps?: ComponentsProps[typeof AlertIconStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof AlertIconStylesKey];
    variants?: ComponentsVariants[typeof AlertIconStylesKey];
  };
  [AvatarStylesKey]?: {
    defaultProps?: ComponentsProps[typeof AvatarStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof AvatarStylesKey];
    variants?: ComponentsVariants[typeof AvatarStylesKey];
  };
  [BoxStylesKey]?: {
    defaultProps?: ComponentsProps[typeof BoxStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof BoxStylesKey];
    variants?: ComponentsVariants[typeof BoxStylesKey];
  };
  [BreadcrumbNavStylesKey]?: {
    defaultProps?: ComponentsProps[typeof BreadcrumbNavStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof BreadcrumbNavStylesKey];
    variants?: ComponentsVariants[typeof BreadcrumbNavStylesKey];
  };
  [BreadcrumbsStylesKey]?: {
    defaultProps?: ComponentsProps[typeof BreadcrumbsStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof BreadcrumbsStylesKey];
    variants?: ComponentsVariants[typeof BreadcrumbsStylesKey];
  };
  [BreadcrumbStylesKey]?: {
    defaultProps?: ComponentsProps[typeof BreadcrumbStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof BreadcrumbStylesKey];
    variants?: ComponentsVariants[typeof BreadcrumbStylesKey];
  };
  [ButtonFloatStylesKey]?: {
    defaultProps?: ComponentsProps[typeof ButtonFloatStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof ButtonFloatStylesKey];
    variants?: ComponentsVariants[typeof ButtonFloatStylesKey];
  };
  [ButtonFilePickerStylesKey]?: {
    defaultProps?: ComponentsProps[typeof ButtonFilePickerStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof ButtonFilePickerStylesKey];
    variants?: ComponentsVariants[typeof ButtonFilePickerStylesKey];
  };
  [ButtonLinkStylesKey]?: {
    defaultProps?: ComponentsProps[typeof ButtonLinkStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof ButtonLinkStylesKey];
    variants?: ComponentsVariants[typeof ButtonLinkStylesKey];
  };
  [ButtonStylesKey]?: {
    defaultProps?: ComponentsProps[typeof ButtonStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof ButtonStylesKey];
    variants?: ComponentsVariants[typeof ButtonStylesKey];
  };
  [ButtonUnstyledStylesKey]?: {
    defaultProps?: ComponentsProps[typeof ButtonUnstyledStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof ButtonUnstyledStylesKey];
    variants?: ComponentsVariants[typeof ButtonUnstyledStylesKey];
  };
  [CheckboxStylesKey]?: {
    defaultProps?: ComponentsProps[typeof CheckboxStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof CheckboxStylesKey];
    variants?: ComponentsVariants[typeof CheckboxStylesKey];
  };
  [ChipStylesKey]?: {
    defaultProps?: ComponentsProps[typeof ChipStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof ChipStylesKey];
    variants?: ComponentsVariants[typeof ChipStylesKey];
  };
  [ColorPickerStylesKey]?: {
    defaultProps?: ComponentsProps[typeof ColorPickerStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof ColorPickerStylesKey];
    variants?: ComponentsVariants[typeof ColorPickerStylesKey];
  };
  [DayPickerStylesKey]?: {
    defaultProps?: ComponentsProps[typeof DayPickerStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof DayPickerStylesKey];
    variants?: ComponentsVariants[typeof DayPickerStylesKey];
  };
  [DividerStylesKey]?: {
    defaultProps?: ComponentsProps[typeof DividerStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof DividerStylesKey];
    variants?: ComponentsVariants[typeof DividerStylesKey];
  };
  [DotLoaderStylesKey]?: {
    defaultProps?: ComponentsProps[typeof DotLoaderStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof DotLoaderStylesKey];
    variants?: ComponentsVariants[typeof DotLoaderStylesKey];
  };
  [ExpansionPanelStylesKey]?: {
    defaultProps?: ComponentsProps[typeof ExpansionPanelStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof ExpansionPanelStylesKey];
    variants?: ComponentsVariants[typeof ExpansionPanelStylesKey];
  };
  [FormBoxStylesKey]?: {
    defaultProps?: ComponentsProps[typeof FormBoxStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof FormBoxStylesKey];
    variants?: ComponentsVariants[typeof FormBoxStylesKey];
  };
  [GroupHeadingStylesKey]?: {
    defaultProps?: ComponentsProps[typeof GroupHeadingStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof GroupHeadingStylesKey];
    variants?: ComponentsVariants[typeof GroupHeadingStylesKey];
  };
  [HeaderStylesKey]?: {
    defaultProps?: ComponentsProps[typeof HeaderStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof HeaderStylesKey];
    variants?: ComponentsVariants[typeof HeaderStylesKey];
  };
  [IconButtonStylesKey]?: {
    defaultProps?: ComponentsProps[typeof IconButtonStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof IconButtonStylesKey];
    variants?: ComponentsVariants[typeof IconButtonStylesKey];
  };
  [IconButtonFloatStylesKey]?: {
    defaultProps?: ComponentsProps[typeof IconButtonFloatStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof IconButtonFloatStylesKey];
    variants?: ComponentsVariants[typeof IconButtonFloatStylesKey];
  };
  [IconButtonLinkStylesKey]?: {
    defaultProps?: ComponentsProps[typeof IconButtonLinkStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof IconButtonLinkStylesKey];
    variants?: ComponentsVariants[typeof IconButtonLinkStylesKey];
  };
  [IconTileStylesKey]?: {
    defaultProps?: ComponentsProps[typeof IconTileStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof IconTileStylesKey];
    variants?: ComponentsVariants[typeof IconTileStylesKey];
  };
  [KeymapHelpStylesKey]?: {
    defaultProps?: ComponentsProps[typeof KeymapHelpStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof KeymapHelpStylesKey];
    variants?: ComponentsVariants[typeof KeymapHelpStylesKey];
  };
  [LayoutManagerStylesKey]?: {
    defaultProps?: ComponentsProps[typeof LayoutManagerStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof LayoutManagerStylesKey];
    variants?: ComponentsVariants[typeof LayoutManagerStylesKey];
  };
  [LinearProgressStylesKey]?: {
    defaultProps?: ComponentsProps[typeof LinearProgressStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof LinearProgressStylesKey];
    variants?: ComponentsVariants[typeof LinearProgressStylesKey];
  };
  [LinkStylesKey]?: {
    defaultProps?: ComponentsProps[typeof LinkStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof LinkStylesKey];
    variants?: ComponentsVariants[typeof LinkStylesKey];
  };
  [MenuButtonStylesKey]?: {
    defaultProps?: ComponentsProps[typeof MenuButtonStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof MenuButtonStylesKey];
    variants?: ComponentsVariants[typeof MenuButtonStylesKey];
  };
  [MenuItemStylesKey]?: {
    defaultProps?: ComponentsProps[typeof MenuItemStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof MenuItemStylesKey];
    variants?: ComponentsVariants[typeof MenuItemStylesKey];
  };
  [MenuStylesKey]?: {
    defaultProps?: ComponentsProps[typeof MenuStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof MenuStylesKey];
    variants?: ComponentsVariants[typeof MenuStylesKey];
  };
  [ModalActionsStylesKey]?: {
    defaultProps?: ComponentsProps[typeof ModalActionsStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof ModalActionsStylesKey];
    variants?: ComponentsVariants[typeof ModalActionsStylesKey];
  };
  [ModalStylesKey]?: {
    defaultProps?: ComponentsProps[typeof ModalStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof ModalStylesKey];
    variants?: ComponentsVariants[typeof ModalStylesKey];
  };
  [PageHeaderStylesKey]?: {
    defaultProps?: ComponentsProps[typeof PageHeaderStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof PageHeaderStylesKey];
    variants?: ComponentsVariants[typeof PageHeaderStylesKey];
  };
  [PageLayoutStylesKey]?: {
    defaultProps?: ComponentsProps[typeof PageLayoutStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof PageLayoutStylesKey];
    variants?: ComponentsVariants[typeof PageLayoutStylesKey];
  };
  [PaperStylesKey]?: {
    defaultProps?: ComponentsProps[typeof PaperStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof PaperStylesKey];
    variants?: ComponentsVariants[typeof PaperStylesKey];
  };
  [PhoneNumberFormatFieldStylesKey]?: {
    defaultProps?: ComponentsProps[typeof PhoneNumberFormatFieldStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof PhoneNumberFormatFieldStylesKey];
    variants?: ComponentsVariants[typeof PhoneNumberFormatFieldStylesKey];
  };
  [PillStylesKey]?: {
    defaultProps?: ComponentsProps[typeof PillStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof PillStylesKey];
    variants?: ComponentsVariants[typeof PillStylesKey];
  };
  [PopoverActionsStylesKey]?: {
    defaultProps?: ComponentsProps[typeof PopoverActionsStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof PopoverActionsStylesKey];
    variants?: ComponentsVariants[typeof PopoverActionsStylesKey];
  };
  [PopoverStylesKey]?: {
    defaultProps?: ComponentsProps[typeof PopoverStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof PopoverStylesKey];
    variants?: ComponentsVariants[typeof PopoverStylesKey];
  };
  [PopoverContentStylesKey]?: {
    defaultProps?: ComponentsProps[typeof PopoverContentStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof PopoverContentStylesKey];
    variants?: ComponentsVariants[typeof PopoverContentStylesKey];
  };
  [PopoverItemStylesKey]?: {
    defaultProps?: ComponentsProps[typeof PopoverItemStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof PopoverItemStylesKey];
    variants?: ComponentsVariants[typeof PopoverItemStylesKey];
  };
  [PopoverListStylesKey]?: {
    defaultProps?: ComponentsProps[typeof PopoverListStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof PopoverListStylesKey];
    variants?: ComponentsVariants[typeof PopoverListStylesKey];
  };
  [PrimaryNavigationExpansionItemStylesKey]?: {
    defaultProps?: ComponentsProps[typeof PrimaryNavigationExpansionItemStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof PrimaryNavigationExpansionItemStylesKey];
    variants?: ComponentsVariants[typeof PrimaryNavigationExpansionItemStylesKey];
  };
  [PrimaryNavigationItemStylesKey]?: {
    defaultProps?: ComponentsProps[typeof PrimaryNavigationItemStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof PrimaryNavigationItemStylesKey];
    variants?: ComponentsVariants[typeof PrimaryNavigationItemStylesKey];
  };
  [PrimaryNavigationStylesKey]?: {
    defaultProps?: ComponentsProps[typeof PrimaryNavigationStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof PrimaryNavigationStylesKey];
    variants?: ComponentsVariants[typeof PrimaryNavigationStylesKey];
  };
  [PrimaryNavigationSubItemStylesKey]?: {
    defaultProps?: ComponentsProps[typeof PrimaryNavigationSubItemStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof PrimaryNavigationSubItemStylesKey];
    variants?: ComponentsVariants[typeof PrimaryNavigationSubItemStylesKey];
  };
  [RadioStylesKey]?: {
    defaultProps?: ComponentsProps[typeof RadioStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof RadioStylesKey];
    variants?: ComponentsVariants[typeof RadioStylesKey];
  };
  [RadioGroupMinimalStylesKey]?: {
    defaultProps?: ComponentsProps[typeof RadioGroupMinimalStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof RadioGroupMinimalStylesKey];
    variants?: ComponentsVariants[typeof RadioGroupMinimalStylesKey];
  };
  [RoverOptionStylesKey]?: {
    defaultProps?: ComponentsProps[typeof RoverOptionStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof RoverOptionStylesKey];
    variants?: ComponentsVariants[typeof RoverOptionStylesKey];
  };
  [SearchFieldStylesKey]?: {
    defaultProps?: ComponentsProps[typeof SearchFieldStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof SearchFieldStylesKey];
    variants?: ComponentsVariants[typeof SearchFieldStylesKey];
  };
  [SecondaryNavigationItemStylesKey]?: {
    defaultProps?: ComponentsProps[typeof SecondaryNavigationItemStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof SecondaryNavigationItemStylesKey];
    variants?: ComponentsVariants[typeof SecondaryNavigationItemStylesKey];
  };
  [SecondaryNavigationStylesKey]?: {
    defaultProps?: ComponentsProps[typeof SecondaryNavigationStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof SecondaryNavigationStylesKey];
    variants?: ComponentsVariants[typeof SecondaryNavigationStylesKey];
  };
  [SelectOptionStylesKey]?: {
    defaultProps?: ComponentsProps[typeof SelectOptionStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof SelectOptionStylesKey];
    variants?: ComponentsVariants[typeof SelectOptionStylesKey];
  };
  [SelectStylesKey]?: {
    defaultProps?: ComponentsProps[typeof SelectStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof SelectStylesKey];
    variants?: ComponentsVariants[typeof SelectStylesKey];
  };
  [SkeletonStylesKey]?: {
    defaultProps?: ComponentsProps[typeof SkeletonStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof SkeletonStylesKey];
    variants?: ComponentsVariants[typeof SkeletonStylesKey];
  };
  [SliderStylesKey]?: {
    defaultProps?: ComponentsProps[typeof SliderStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof SliderStylesKey];
    variants?: ComponentsVariants[typeof SliderStylesKey];
  };
  [SlideOverStylesKey]?: {
    defaultProps?: ComponentsProps[typeof SlideOverStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof SlideOverStylesKey];
    variants?: ComponentsVariants[typeof SlideOverStylesKey];
  };
  [SlideOverActionsStylesKey]?: {
    defaultProps?: ComponentsProps[typeof SlideOverActionsStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof SlideOverActionsStylesKey];
    variants?: ComponentsVariants[typeof SlideOverActionsStylesKey];
  };
  [SlideOverBodyStylesKey]?: {
    defaultProps?: ComponentsProps[typeof SlideOverBodyStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof SlideOverBodyStylesKey];
    variants?: ComponentsVariants[typeof SlideOverBodyStylesKey];
  };
  [SlideOverHeaderStylesKey]?: {
    defaultProps?: ComponentsProps[typeof SlideOverHeaderStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof SlideOverHeaderStylesKey];
    variants?: ComponentsVariants[typeof SlideOverHeaderStylesKey];
  };
  [SmallTileStylesKey]?: {
    defaultProps?: ComponentsProps[typeof SmallTileStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof SmallTileStylesKey];
    variants?: ComponentsVariants[typeof SmallTileStylesKey];
  };
  [SnackbarStylesKey]?: {
    defaultProps?: ComponentsProps[typeof SnackbarStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof SnackbarStylesKey];
    variants?: ComponentsVariants[typeof SnackbarStylesKey];
  };
  [StepperStylesKey]?: {
    defaultProps?: ComponentsProps[typeof StepperStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof StepperStylesKey];
    variants?: ComponentsVariants[typeof StepperStylesKey];
  };
  [StepStylesKey]?: {
    defaultProps?: ComponentsProps[typeof StepStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof StepStylesKey];
    variants?: ComponentsVariants[typeof StepStylesKey];
  };
  [StepConnectorStylesKey]?: {
    defaultProps?: ComponentsProps[typeof StepConnectorStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof StepConnectorStylesKey];
    variants?: ComponentsVariants[typeof StepConnectorStylesKey];
  };
  [TableActionDividerStylesKey]?: {
    defaultProps?: ComponentsProps[typeof TableActionDividerStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof TableActionDividerStylesKey];
    variants?: ComponentsVariants[typeof TableActionDividerStylesKey];
  };
  [TableModuleStylesKey]?: {
    defaultProps?: ComponentsProps[typeof TableModuleStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof TableModuleStylesKey];
    variants?: ComponentsVariants[typeof TableModuleStylesKey];
  };
  [TabListStylesKey]?: {
    defaultProps?: ComponentsProps[typeof TabListStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof TabListStylesKey];
    variants?: ComponentsVariants[typeof TabListStylesKey];
  };
  [TabPanelStylesKey]?: {
    defaultProps?: ComponentsProps[typeof TabPanelStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof TabPanelStylesKey];
    variants?: ComponentsVariants[typeof TabPanelStylesKey];
  };
  [TabStylesKey]?: {
    defaultProps?: ComponentsProps[typeof TabStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof TabStylesKey];
    variants?: ComponentsVariants[typeof TabStylesKey];
  };
  [TextStylesKey]?: {
    defaultProps?: ComponentsProps[typeof TextStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof TextStylesKey];
    variants?: ComponentsVariants[typeof TextStylesKey];
  };
  [TextAreaStylesKey]?: {
    defaultProps?: ComponentsProps[typeof TextAreaStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof TextAreaStylesKey];
    variants?: ComponentsVariants[typeof TextAreaStylesKey];
  };
  [TextFieldStylesKey]?: {
    defaultProps?: ComponentsProps[typeof TextFieldStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof TextFieldStylesKey];
    variants?: ComponentsVariants[typeof TextFieldStylesKey];
  };
  [ToggleStylesKey]?: {
    defaultProps?: ComponentsProps[typeof ToggleStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof ToggleStylesKey];
    variants?: ComponentsVariants[typeof ToggleStylesKey];
  };
  [TooltipStylesKey]?: {
    defaultProps?: ComponentsProps[typeof TooltipStylesKey];
    styleOverrides?: ChromaComponentsOverrides<Theme>[typeof TooltipStylesKey];
    variants?: ComponentsVariants[typeof TooltipStylesKey];
  };
  [UnitNumberFormatFieldStylesKey]?: {
    defaultProps?: ComponentsProps[typeof UnitNumberFormatFieldStylesKey];
    styleOverrides?: ChromaComponentsOverrides<
      Theme
    >[typeof UnitNumberFormatFieldStylesKey];
    variants?: ComponentsVariants[typeof UnitNumberFormatFieldStylesKey];
  };
};
