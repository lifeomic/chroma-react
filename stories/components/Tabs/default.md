# Tabs

Tab components for conditionally rendering content.

## Import

```js
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from '@lifeomic/chroma-react/components/Tabs';
```

<!-- STORY -->

## Usage

### aria-label (required)

A descriptive label for the Tab List.

```jsx
<Tabs>
  <TabList aria-label="My Tabs"></TabList>
</Tabs>
```

### Variant

The tabs component takes two different variants, for different styled
tabs.

```jsx
<Tabs variant="default">…</Tabs>
<Tabs variant="pill">…</Tabs>
```

### Class Name

A class name can be provided.

```jsx
<TabList className="mr-4">
  <Tab className="mr-8" />
</TabList>
```

### Full Width

To set the width of tabs to take 100% of the width, use the `fullWidth`
prop.

```jsx
<Tabs fullWidth>…</Tabs>
```

### Rendering Tabs

The following is an example of how to render tabs.

#### Selected Tab Id

To default a selected Tab, use the `selectedTabId` prop on Tabs. This must match
a `stopId` for a particular Tab. More on this below..

#### Stop Id

Each Tab requires a `stopId` so that we can differentiate the tabs and which one
is selected.

#### On Click

To tie into the on click handler for the tab, provide an `onClick` to the Tab
component.

```jsx
<Tabs selectedTabId="tab1">
  <TabList aria-label="My Tabs">
    <Tab stopId="tab1" onClick={() => console.log('tab1 clicked')}>
      Tab 1
    </Tab>
    <Tab stopId="tab2" onClick={() => console.log('tab2 clicked')}>
      Tab 2
    </Tab>
  </TabList>
</Tabs>
```

### Rendering Tab Panels

When the content below the tab needs to change based on the selected Tab, use
Tab Panel.

#### Tab Panel Stop Id

Each Tab Panel requires a `stopId`, which corresponds to the Tab.

```jsx
<Tabs selectedTabId="tab1">
  <TabList aria-label="My Tabs">
    <Tab stopId="tab1" onClick={() => console.log('tab1 clicked')}>
      Tab 1
    </Tab>
    <Tab stopId="tab2" onClick={() => console.log('tab2 clicked')}>
      Tab 2
    </Tab>
  </TabList>
  <TabPanel stopId="tab1">Tab 1 selected</TabPanel>
  <TabPanel stopId="tab2">Tab 2 selected</TabPanel>
</Tabs>
```

## Accessibility

- Tab has `role="tab"`.
- Tab has `aria-controls` referring to its associated TabPanel.
- The selected Tab has `aria-selected` set to true and all other Tabs have it
  set to false.
- The `left` and `right` arrow keys can be used to cycle through the tabs, when
  the tab container has focus.
- TabList has `role="tablist"`.
- TabList has `aria-orientation` set to vertical or horizontal based on the
  value of the orientation option.
- TabPanel has `role="tabpanel"`.
- TabPanel has `aria-labelledby` referring to its associated Tab.

## Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Tabs/Tabs.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Tabs/Tabs.stories.tsx)
