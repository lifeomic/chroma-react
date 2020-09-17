import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Button } from '../../../src/components/Button';
import { IconButton } from '../../../src/components/IconButton';
import { MoreHorizontal } from '../../../src/icons/lined';
import { Header } from '../../../src/components/Header';
import {
  LayoutManager,
  useLayoutManager,
} from '../../../src/components/LayoutManager';
import {
  PrimaryNavigation,
  PrimaryNavigationExpansionItem,
  PrimaryNavigationItem,
  PrimaryNavigationSubItem,
} from '../../../src/components/PrimaryNavigation';
import { Text } from '../../../src/components/Text';
import { Insights } from '../../storyComponents/icons/Insights';
import { Subjects } from '../../storyComponents/icons/Subjects';
import { Logo } from '../../storyComponents/Logo';
import md from './default.md';

const ConnectedHeader = () => {
  const { toggleSidebarCollapsed } = useLayoutManager();

  return (
    <Header
      logo={<Logo />}
      right={
        <Button onClick={toggleSidebarCollapsed} variant="text">
          Toggle Sidebar Collapse
        </Button>
      }
    />
  );
};

const Cards = () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      margin: '2rem 0',
    }}
  >
    {Array.from({ length: 300 }).map((_, i) => (
      <div
        key={i}
        style={{
          backgroundColor: '#fff',
          height: 300,
          minWidth: 300,
          margin: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {i}
      </div>
    ))}
  </div>
);

const LayoutManagerStory: React.FunctionComponent = () => (
  <BrowserRouter>
    <LayoutManager
      style={{ height: 500 }}
      isSidebarCollapseDisabled={boolean('isSidebarCollapseDisabled', false)}
      header={<ConnectedHeader />}
      sidebar={
        <PrimaryNavigation
          header={<Button variant="text">Header</Button>}
          headerMin={<IconButton aria-label="min" icon={MoreHorizontal} />}
        >
          <PrimaryNavigationItem
            label="Insights"
            icon={<Insights height={20} width={20} />}
            to="/insights"
          />
          <PrimaryNavigationItem
            label="Subjects"
            icon={<Subjects height={20} width={20} />}
            to="/subjects"
            betaLabelText="BETA"
            beta
          />
          <PrimaryNavigationExpansionItem
            icon={<Insights height={20} width={20} />}
            label="Genomics"
            to="/genomics"
            rootParentPath="/genomics"
          >
            <PrimaryNavigationSubItem
              key={0}
              to="/genomics/foo"
              label="Tests"
            />
            <PrimaryNavigationSubItem
              key={1}
              to="/genomics/bar"
              label="Add Data"
            />
          </PrimaryNavigationExpansionItem>
        </PrimaryNavigation>
      }
    >
      <>
        <Text size="headline">I'm the main content!</Text>
        <Cards />
      </>
    </LayoutManager>
  </BrowserRouter>
);

storiesOf('Layout/Layout Manager', module).add(
  'Layout Manager',
  () => <LayoutManagerStory />,
  { readme: { content: md } }
);
