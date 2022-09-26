import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PrimaryNavigation } from './PrimaryNavigation';
import { PrimaryNavigationItem } from './PrimaryNavigationItem';
import { ArrowLeft, ArrowRight, Edit } from '@lifeomic/chromicons';
import { MemoryRouter } from 'react-router-dom';
import { LayoutManagerContext } from '../LayoutManager';
import { Text } from '../../../src/components/Text';
import { PrimaryNavigationExpansionItem } from './PrimaryNavigationExpansionItem';
import { Subjects } from '../../assets/Subjects';
import { PrimaryNavigationSubItem } from './PrimaryNavigationSubItem';

(LayoutManagerContext.Provider as any).displayName =
  'LayoutManagerContext.Provider';

export default {
  title: 'Components/PrimaryNavigation',
  component: PrimaryNavigation,
  argTypes: {},
  decorators: [
    (story) => {
      const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);
      const [isSidebarCollapseDisabled] = React.useState(false);
      return (
        <LayoutManagerContext.Provider
          value={{
            isSidebarCollapsed,
            toggleSidebarCollapsed: () =>
              setIsSidebarCollapsed((state) => !state),
            isSidebarCollapseDisabled,
          }}
        >
          {story()}
        </LayoutManagerContext.Provider>
      );
    },
    (story) => <MemoryRouter>{story()}</MemoryRouter>,
  ],
} as ComponentMeta<typeof PrimaryNavigation>;

export const Default: ComponentStory<typeof PrimaryNavigation> = (args) => {
  return (
    <PrimaryNavigation {...args}>
      <PrimaryNavigationItem to="/edit" icon={<Edit />} label="Nav Item" />
      <PrimaryNavigationItem
        to="/right"
        icon={<ArrowRight />}
        label="Nav Item 2"
        betaLabelText="Beta"
      />
    </PrimaryNavigation>
  );
};
Default.args = {
  header: (
    <div
      style={{
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        border: '1px dashed white',
      }}
    >
      <Text color="inverse">Optional Header Section</Text>
    </div>
  ),
  footer: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        width: '100%',
        border: '1px dashed white',
      }}
    >
      <Text color="inverse">Optional Footer Section</Text>
    </div>
  ),
  headerMin: <b>MIN</b>,
};

export const PrimaryNavigationSubrouting: ComponentStory<typeof PrimaryNavigation> = (
  args
) => {
  return (
    <PrimaryNavigation {...args}>
      <PrimaryNavigationItem to="/edit" icon={<Edit />} label="Nav Item" />
      <PrimaryNavigationItem
        to="/left"
        icon={<ArrowLeft />}
        label="Nav Item 2"
        betaLabelText="Beta"
      />
      <PrimaryNavigationExpansionItem
        icon={<Subjects />}
        label="Base Route"
        to="/base"
        rootParentPath="/base"
      >
        <PrimaryNavigationSubItem label="Child Route1" to="/base/c1" />
        <PrimaryNavigationSubItem label="Child Route2" to="/base/c2" />
      </PrimaryNavigationExpansionItem>
    </PrimaryNavigation>
  );
};
PrimaryNavigationSubrouting.parameters = {
  docs: {
    description: {
      story:
        'Combining PrimaryNavigationExpansionItem and PrimaryNavigationSubItem allows for ' +
        'consumers to create an expansion-panel-esque component in their navigation bar. ' +
        'The current pattern is that clicking the root path will navigate users to the ' +
        'root/dashboard view. Child routes navigation items are then rendered below. ' +
        'Navigating away from the "rootParentPath" closes the expansion-panel route item.',
    },
  },
};
PrimaryNavigationSubrouting.args = {
  header: (
    <div
      style={{
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        border: '1px dashed white',
      }}
    >
      <Text color="inverse">Optional Header Section</Text>
    </div>
  ),
  footer: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        width: '100%',
        border: '1px dashed white',
      }}
    >
      <Text color="inverse">Optional Footer Section</Text>
    </div>
  ),
  headerMin: <b>MIN</b>,
};
