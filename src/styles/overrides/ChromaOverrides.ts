import { StyleRules } from '@material-ui/core/styles/withStyles';

import {
  AlertClasses,
  AlertStylesKey,
  AlertActionsRowClasses,
  AlertActionsRowStylesKey,
  AlertBodyClasses,
  AlertBodyStylesKey,
  AlertIconClasses,
  AlertIconStylesKey,
} from '../../components/Alert';
import { AvatarClasses, AvatarStylesKey } from '../../components/Avatar';
import { BoxClasses, BoxStylesKey } from '../../components/Box';
import {
  BreadcrumbClasses,
  BreadcrumbNavClasses,
  BreadcrumbNavStylesKey,
  BreadcrumbsClasses,
  BreadcrumbsStylesKey,
  BreadcrumbStylesKey,
} from '../../components/Breadcrumbs';
import { ButtonClasses, ButtonStylesKey } from '../../components/Button/index';
import {
  ButtonFloatClasses,
  ButtonFloatStylesKey,
} from '../../components/ButtonFloat';
import {
  ButtonFilePickerClasses,
  ButtonFilePickerStylesKey,
} from '../../components/ButtonFilePicker';
import {
  ButtonLinkClasses,
  ButtonLinkStylesKey,
} from '../../components/ButtonLink/index';
import { CheckboxClasses, CheckboxStylesKey } from '../../components/Checkbox';
import { ChipClasses, ChipStylesKey } from '../../components/Chip';
import { DividerClasses, DividerStylesKey } from '../../components/Divider';
import {
  DotLoaderClasses,
  DotLoaderStylesKey,
} from '../../components/DotLoader';
import {
  ExpansionPanelClasses,
  ExpansionPanelStylesKey,
} from '../../components/ExpansionPanel';
import { FormBoxClasses, FormBoxStylesKey } from '../../components/FormBox';
import { HeaderClasses, HeaderStylesKey } from '../../components/Header';
import {
  IconButtonClasses,
  IconButtonStylesKey,
} from '../../components/IconButton';
import {
  IconButtonFloatClasses,
  IconButtonFloatStylesKey,
} from '../../components/IconButtonFloat';
import {
  IconButtonLinkClasses,
  IconButtonLinkStylesKey,
} from '../../components/IconButtonLink';
import { IconTileClasses, IconTileStylesKey } from '../../components/IconTile';
import {
  KeymapHelpClasses,
  KeymapHelpStylesKey,
} from '../../components/KeymapHelp';
import {
  LayoutManagerClasses,
  LayoutManagerStylesKey,
} from '../../components/LayoutManager';
import {
  LinearProgressClasses,
  LinearProgressStylesKey,
} from '../../components/LinearProgress';
import { LinkClasses, LinkStylesKey } from '../../components/Link';
import {
  MenuClasses,
  MenuButtonClasses,
  MenuButtonStylesKey,
  MenuItemClasses,
  MenuItemStylesKey,
  MenuStylesKey,
} from '../../components/Menu';
import {
  ModalActionsClasses,
  ModalActionsStylesKey,
  ModalClasses,
  ModalStylesKey,
} from '../../components/Modal';
import {
  PageHeaderClasses,
  PageHeaderStylesKey,
} from '../../components/PageHeader';
import {
  PageLayoutClasses,
  PageLayoutStylesKey,
} from '../../components/PageLayout';
import { PaperClasses, PaperStylesKey } from '../../components/Paper';
import { PillClasses, PillStylesKey } from '../../components/Pill';
import {
  PopoverActionsClasses,
  PopoverActionsStylesKey,
  PopoverListClasses,
  PopoverListStylesKey,
  PopoverItemClasses,
  PopoverItemStylesKey,
  PopoverContentClasses,
  PopoverContentStylesKey,
  PopoverClasses,
  PopoverStylesKey,
} from '../../components/Popover';
import {
  PrimaryNavigationClasses,
  PrimaryNavigationExpansionItemClasses,
  PrimaryNavigationExpansionItemStylesKey,
  PrimaryNavigationItemClasses,
  PrimaryNavigationItemStylesKey,
  PrimaryNavigationStylesKey,
  PrimaryNavigationSubItemClasses,
  PrimaryNavigationSubItemStylesKey,
} from '../../components/PrimaryNavigation';
import { RadioClasses, RadioStylesKey } from '../../components/Radio';
import {
  SearchFieldClasses,
  SearchFieldStylesKey,
} from '../../components/SearchField';
import {
  SecondaryNavigationClasses,
  SecondaryNavigationItemClasses,
  SecondaryNavigationItemStylesKey,
  SecondaryNavigationStylesKey,
} from '../../components/SecondaryNavigation';
import {
  SelectClasses,
  SelectOptionClasses,
  RoverOptionClasses,
  SelectOptionStylesKey,
  SelectStylesKey,
  RoverOptionStylesKey,
} from '../../components/Select';
import {
  SlideOverClasses,
  SlideOverStylesKey,
  ActionsClasses as SlideOverActionsClasses,
  ActionsStylesKey as SlideOverActionsStylesKey,
  BodyClasses as SlideOverBodyClasses,
  BodyStylesKey as SlideOverBodyStylesKey,
  HeaderClasses as SlideOverHeaderClasses,
  HeaderStylesKey as SlideOverHeaderStylesKey,
} from '../../components/SlideOver';
import {
  SmallTileClasses,
  SmallTileStylesKey,
} from '../../components/SmallTile';
import { SnackbarClasses, SnackbarStylesKey } from '../../components/Snackbar';
import {
  StepClasses,
  StepConnectorClasses,
  StepConnectorStylesKey,
  StepperClasses,
  StepperStylesKey,
  StepStylesKey,
} from '../../components/Stepper';
import {
  TableActionDividerClasses,
  TableActionDividerStylesKey,
  TableModuleClasses,
  TableModuleStylesKey,
} from '../../components/TableModule';
import {
  TabClasses,
  TabListClasses,
  TabListStylesKey,
  TabPanelClasses,
  TabPanelStylesKey,
  TabStylesKey,
} from '../../components/Tabs';
import { TextClasses, TextStylesKey } from '../../components/Text';
import { TextAreaClasses, TextAreaStylesKey } from '../../components/TextArea';
import {
  TextFieldClasses,
  TextFieldStylesKey,
} from '../../components/TextField';
import { ToggleClasses, ToggleStylesKey } from '../../components/Toggle';
import { TooltipClasses, TooltipStylesKey } from '../../components/Tooltip';
import {
  ButtonUnstyledClasses,
  ButtonUnstyledStylesKey,
} from '../../components/ButtonUnstyled';

export type ChromaOverrides = {
  [Name in keyof ChromaComponentNameToClassKey]?: Partial<
    StyleRules<ChromaComponentNameToClassKey[Name]>
  >;
};

export interface ChromaComponentNameToClassKey {
  [AlertStylesKey]: AlertClasses;
  [AlertActionsRowStylesKey]: AlertActionsRowClasses;
  [AlertBodyStylesKey]: AlertBodyClasses;
  [AlertIconStylesKey]: AlertIconClasses;
  [AvatarStylesKey]: AvatarClasses;
  [BoxStylesKey]: BoxClasses;
  [BreadcrumbNavStylesKey]: BreadcrumbNavClasses;
  [BreadcrumbsStylesKey]: BreadcrumbsClasses;
  [BreadcrumbStylesKey]: BreadcrumbClasses;
  [ButtonFloatStylesKey]: ButtonFloatClasses;
  [ButtonFilePickerStylesKey]: ButtonFilePickerClasses;
  [ButtonLinkStylesKey]: ButtonLinkClasses;
  [ButtonStylesKey]: ButtonClasses;
  [ButtonUnstyledStylesKey]: ButtonUnstyledClasses;
  [CheckboxStylesKey]: CheckboxClasses;
  [ChipStylesKey]: ChipClasses;
  [DividerStylesKey]: DividerClasses;
  [DotLoaderStylesKey]: DotLoaderClasses;
  [ExpansionPanelStylesKey]: ExpansionPanelClasses;
  [FormBoxStylesKey]: FormBoxClasses;
  [HeaderStylesKey]: HeaderClasses;
  [IconButtonStylesKey]: IconButtonClasses;
  [IconButtonFloatStylesKey]: IconButtonFloatClasses;
  [IconButtonLinkStylesKey]: IconButtonLinkClasses;
  [IconTileStylesKey]: IconTileClasses;
  [KeymapHelpStylesKey]: KeymapHelpClasses;
  [LayoutManagerStylesKey]: LayoutManagerClasses;
  [LinearProgressStylesKey]: LinearProgressClasses;
  [LinkStylesKey]: LinkClasses;
  [MenuButtonStylesKey]: MenuButtonClasses;
  [MenuItemStylesKey]: MenuItemClasses;
  [MenuStylesKey]: MenuClasses;
  [ModalActionsStylesKey]: ModalActionsClasses;
  [ModalStylesKey]: ModalClasses;
  [PageHeaderStylesKey]: PageHeaderClasses;
  [PageLayoutStylesKey]: PageLayoutClasses;
  [PaperStylesKey]: PaperClasses;
  [PillStylesKey]: PillClasses;
  [PopoverActionsStylesKey]: PopoverActionsClasses;
  [PopoverStylesKey]: PopoverClasses;
  [PopoverContentStylesKey]: PopoverContentClasses;
  [PopoverItemStylesKey]: PopoverItemClasses;
  [PopoverListStylesKey]: PopoverListClasses;
  [PrimaryNavigationExpansionItemStylesKey]: PrimaryNavigationExpansionItemClasses;
  [PrimaryNavigationItemStylesKey]: PrimaryNavigationItemClasses;
  [PrimaryNavigationStylesKey]: PrimaryNavigationClasses;
  [PrimaryNavigationSubItemStylesKey]: PrimaryNavigationSubItemClasses;
  [RadioStylesKey]: RadioClasses;
  [RoverOptionStylesKey]: RoverOptionClasses;
  [SearchFieldStylesKey]: SearchFieldClasses;
  [SecondaryNavigationItemStylesKey]: SecondaryNavigationItemClasses;
  [SecondaryNavigationStylesKey]: SecondaryNavigationClasses;
  [SelectOptionStylesKey]: SelectOptionClasses;
  [SelectStylesKey]: SelectClasses;
  [SlideOverStylesKey]: SlideOverClasses;
  [SlideOverActionsStylesKey]: SlideOverActionsClasses;
  [SlideOverBodyStylesKey]: SlideOverBodyClasses;
  [SlideOverHeaderStylesKey]: SlideOverHeaderClasses;
  [SmallTileStylesKey]: SmallTileClasses;
  [SnackbarStylesKey]: SnackbarClasses;
  [StepperStylesKey]: StepperClasses;
  [StepStylesKey]: StepClasses;
  [StepConnectorStylesKey]: StepConnectorClasses;
  [TableActionDividerStylesKey]: TableActionDividerClasses;
  [TableModuleStylesKey]: TableModuleClasses;
  [TabListStylesKey]: TabListClasses;
  [TabPanelStylesKey]: TabPanelClasses;
  [TabStylesKey]: TabClasses;
  [TextStylesKey]: TextClasses;
  [TextAreaStylesKey]: TextAreaClasses;
  [TextFieldStylesKey]: TextFieldClasses;
  [ToggleStylesKey]: ToggleClasses;
  [TooltipStylesKey]: TooltipClasses;
}
