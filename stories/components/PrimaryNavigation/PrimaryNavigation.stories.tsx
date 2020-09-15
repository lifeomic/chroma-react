import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LayoutManagerContext } from '../../../src/components/LayoutManager';
import {
  PrimaryNavigation,
  PrimaryNavigationExpansionItem,
  PrimaryNavigationItem,
  PrimaryNavigationSubItem,
} from '../../../src/components/PrimaryNavigation';
import { Text } from '../../../src/components/Text';
import { useTheme } from '../../../src/styles';
import { Container } from '../../storyComponents/Container';
import { Insights } from '../../storyComponents/icons/Insights';
import { Subjects } from '../../storyComponents/icons/Subjects';
import { Logo } from '../../storyComponents/Logo';
import primaryNavigationMd from './primaryNavigation.md';
import primaryNavigationItemMd from './primaryNavigationItem.md';
import primaryNavigationSubroutingMd from './primaryNavigationSubrouting.md';
import customStylingMd from './customStyling.md';
import { Noop } from '../../storyComponents/Noop';

function useKnobValue<T>(
  knobValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = React.useState(knobValue);
  React.useEffect(() => {
    setValue(knobValue);
  }, [knobValue]);

  return [value, setValue];
}

const LayoutManagerContextProvider: React.FC = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useKnobValue(
    boolean('isSidebarCollapsed', false)
  );
  const [isSidebarCollapseDisabled] = useKnobValue(
    boolean('isSidebarCollapseDisabled', false)
  );

  return (
    <LayoutManagerContext.Provider
      value={{
        isSidebarCollapsed,
        toggleSidebarCollapsed: () => setIsSidebarCollapsed((state) => !state),
        isSidebarCollapseDisabled,
      }}
    >
      {children}
    </LayoutManagerContext.Provider>
  );
};

const PrimaryNavigationItemStory: React.FunctionComponent = () => {
  const { palette } = useTheme();

  return (
    <LayoutManagerContextProvider>
      <BrowserRouter>
        <Container
          containerStyles={{
            backgroundColor: palette.grey.main,
            color: palette.common.white,
          }}
        >
          <PrimaryNavigationItem icon={<Logo />} label="Nav Item" to="/foo" />
        </Container>
      </BrowserRouter>
    </LayoutManagerContextProvider>
  );
};

const PrimaryNavigationStory: React.FunctionComponent = () => (
  <LayoutManagerContextProvider>
    <BrowserRouter>
      <PrimaryNavigation
        header={
          boolean('Show Header Section', true) ? (
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
          ) : null
        }
        footer={
          boolean('Show Footer Section', true) ? (
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
          ) : null
        }
        headerMin={boolean('Include: headerMin', false) ? <b>MIN</b> : ''}
      >
        <PrimaryNavigationItem icon={<Insights />} label="Insights" to="/foo" />
        <PrimaryNavigationItem
          icon={<Subjects />}
          label="Subjects"
          to="/baz"
          beta
          betaLabelText="Beta"
        />
      </PrimaryNavigation>
    </BrowserRouter>
  </LayoutManagerContextProvider>
);

const PrimaryNavigationExpansionExampleStory: React.FunctionComponent = () => (
  <LayoutManagerContextProvider>
    <BrowserRouter>
      <PrimaryNavigation
        header={
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
        }
        footer={
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
        }
        headerMin={true}
      >
        <PrimaryNavigationItem icon={<Insights />} label="Insights" to="/foo" />
        <PrimaryNavigationItem icon={<Subjects />} label="Subjects" to="/baz" />
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
    </BrowserRouter>
  </LayoutManagerContextProvider>
);

storiesOf('Components/Primary Navigation', module)
  .add('Primary Navigation Item', () => <PrimaryNavigationItemStory />, {
    readme: { content: primaryNavigationItemMd },
  })
  .add('Primary Navigation', () => <PrimaryNavigationStory />, {
    readme: { content: primaryNavigationMd },
  })
  .add(
    'Primary Navigation Subrouting',
    () => <PrimaryNavigationExpansionExampleStory />,
    {
      readme: { content: primaryNavigationSubroutingMd },
    }
  )
  .add('Custom Styling', () => <Noop />, {
    readme: { content: customStylingMd },
  });
