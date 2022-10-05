import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LayoutManager } from './LayoutManager';
import { MemoryRouter } from 'react-router-dom';
import {
  PrimaryNavigation,
  PrimaryNavigationExpansionItem,
  PrimaryNavigationItem,
  PrimaryNavigationSubItem,
} from '../PrimaryNavigation';
import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { MoreHorizontal } from '@lifeomic/chromicons';
import { Header } from '../Header';
import { Logo } from '../../assets/Logo';
import { Insights } from '../../assets/Insights';
import { Subjects } from '../../assets/Subjects';

export default {
  title: 'Layout/LayoutManager',
  component: LayoutManager,
  argTypes: {},
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
} as ComponentMeta<typeof LayoutManager>;

export const Default: ComponentStory<typeof LayoutManager> = (args) => (
  <LayoutManager
    {...args}
    header={<Header logo={<Logo />} />}
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
          <PrimaryNavigationSubItem key={0} to="/genomics/foo" label="Tests" />
          <PrimaryNavigationSubItem
            key={1}
            to="/genomics/bar"
            label="Add Data"
          />
        </PrimaryNavigationExpansionItem>
      </PrimaryNavigation>
    }
  >
    <p>Main Content</p>
  </LayoutManager>
);
