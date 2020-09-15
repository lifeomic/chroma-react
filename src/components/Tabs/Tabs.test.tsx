import { fireEvent } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Tab, TabList, TabPanel, Tabs } from './index';

const testId = 'Tabs';

test('it renders Tabs', async () => {
  const { findByTestId } = renderWithTheme(
    <Tabs>
      <TabList aria-label="Test Tabs" data-testid={testId}>
        <Tab stopId="tab1">Tab 1</Tab>
        <Tab stopId="tab2">Tab 2</Tab>
      </TabList>
    </Tabs>
  );

  const root = await findByTestId(testId);
  const options = root.querySelectorAll('[role="tab"]');
  expect(options).toBeTruthy();
  expect(options.length).toEqual(2);
});

test('it renders Tabs with the selectedTabId', async () => {
  const { findByTestId } = renderWithTheme(
    <Tabs selectedTabId="tab2">
      <TabList aria-label="Test Tabs" data-testid={testId}>
        <Tab stopId="tab1">Tab 1</Tab>
        <Tab stopId="tab2" data-testid="tab2">
          Tab 2
        </Tab>
      </TabList>
    </Tabs>
  );

  const root = await findByTestId(testId);

  const tab1 = root.querySelector('[aria-selected="false"]');
  const tab2 = root.querySelector('[aria-selected="true"]');

  expect(tab1).toBeTruthy();
  expect(tab2).toBeTruthy();

  // Just double-check we selected the correct tabs
  expect(tab1?.textContent).toEqual('Tab 1');
  expect(tab2?.textContent).toEqual('Tab 2');
});

test('it renders TabPanels for the selected Tab and hides the unselected TabPanel', async () => {
  const { findByTestId } = renderWithTheme(
    <Tabs selectedTabId="tab2">
      <TabList aria-label="Test Tabs">
        <Tab stopId="tab1">Tab 1</Tab>
        <Tab stopId="tab2">Tab 2</Tab>
      </TabList>
      <TabPanel stopId="tab1" data-testid="panel1">
        Tab 1
      </TabPanel>
      <TabPanel stopId="tab2" data-testid="panel2">
        Tab 2
      </TabPanel>
    </Tabs>
  );

  const panel1 = await findByTestId('panel1');
  const panel2 = await findByTestId('panel2');

  expect(panel1.hidden).toBeTruthy();
  expect(panel2).toBeTruthy();
});

test('it calls the provided "onClick" or the Tab', async () => {
  const mockFn = jest.fn();

  // There's some focus stuff going on under the hood, so we need to
  // override the jsdom focus for this test so we don't get an error
  // in the console.
  const jsdomFocus = window.focus;
  window.focus = () => {};

  const { findByTestId } = renderWithTheme(
    <Tabs selectedTabId="tab2">
      <TabList aria-label="Test Tabs">
        <Tab stopId="tab1" onClick={mockFn} data-testid="tab1">
          Tab 1
        </Tab>
        <Tab stopId="tab2">Tab 2</Tab>
      </TabList>
      <TabPanel>Tab 1</TabPanel>
      <TabPanel>Tab 2</TabPanel>
    </Tabs>
  );

  const tab1 = await findByTestId('tab1');
  fireEvent.click(tab1);

  window.focus = jsdomFocus; // restore the jsdom focus
  expect(mockFn).toBeCalledTimes(1);
});

test('it allows providing a "className" to TabList and Tab', async () => {
  const { findByTestId } = renderWithTheme(
    <Tabs>
      <TabList
        aria-label="Test Tabs"
        data-testid={testId}
        className="custom-class-tablist"
      >
        <Tab stopId="tab1" className="custom-class-tab" data-testid="panel1">
          Tab 1
        </Tab>
      </TabList>
    </Tabs>
  );

  const root = await findByTestId(testId);
  const panel1 = await findByTestId('panel1');

  expect(root.classList.contains('custom-class-tablist')).toBeTruthy();
  expect(panel1.classList.contains('custom-class-tab')).toBeTruthy();
});
