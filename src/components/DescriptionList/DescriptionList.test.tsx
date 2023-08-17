import { act, fireEvent } from '@testing-library/react';
import * as React from 'react';
import {
  IconComponent,
  testId as iconTestId,
} from '../../testUtils/IconComponent';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import {
  DescriptionList,
  DescriptionListGroupHeading,
  DescriptionDetails,
  DescriptionDivider,
  DescriptionTerm,
} from './index';

const testId = 'List';

test('it renders the List title', async () => {
  const { findByText } = renderWithTheme(
    <DescriptionList
      aria-label="List"
      title="List Title"
      data-testid={testId}
      items={[
        <DescriptionDetails key={0} text="option1" />,
        <DescriptionDetails key={1} text="option2" />,
      ]}
    />
  );

  const title = await findByText('List Title');
  expect(title).toBeTruthy();
  expect(title.textContent).toEqual('List Title');
});

test('it renders the List items through text prop', async () => {
  const { findByTestId } = renderWithTheme(
    <DescriptionList
      aria-label="List"
      data-testid={testId}
      items={[
        <DescriptionDetails key={0} text="option1" />,
        <DescriptionDetails key={1} text="option2" />,
      ]}
    />
  );

  const root = await findByTestId(testId);
  const options = root.querySelectorAll('li');
  expect(options).toBeTruthy();
  expect(options.length).toEqual(2);
  expect(options[0].textContent).toEqual('option1');
});

test('it renders the List items through children', async () => {
  const { findByTestId } = renderWithTheme(
    <DescriptionList
      aria-label="List"
      data-testid={testId}
      items={[
        <DescriptionDetails key={0}>Option 1</DescriptionDetails>,
        <DescriptionDetails key={1}>Option 2</DescriptionDetails>,
      ]}
    />
  );

  const root = await findByTestId(testId);
  const options = root.querySelectorAll('li');
  expect(options).toBeTruthy();
  expect(options.length).toEqual(2);
  expect(options[0].textContent).toEqual('Option 1');
});

test('it calls the provided "onClick" of a Details', async () => {
  const mockFn = jest.fn();
  const { findByTestId } = renderWithTheme(
    <DescriptionList
      aria-label="List"
      data-testid={testId}
      items={[
        <DescriptionDetails
          key={0}
          icon={IconComponent}
          text="option1"
          onClick={mockFn}
          data-testid="option"
        />,
      ]}
    />
  );

  await act(async () => {
    const option = await findByTestId('option');
    fireEvent.click(option.firstChild as any);
    expect(mockFn).toBeCalledTimes(1);
  });
});

test('it disables List item', async () => {
  const { findByTestId } = renderWithTheme(
    <DescriptionList
      aria-label="List"
      data-testid={testId}
      items={[
        <DescriptionDetails
          disabled={true}
          key={0}
          text="option1"
          data-testid="option"
          onClick={jest.fn()}
        />,
      ]}
    />
  );

  const option = await findByTestId('option');
  expect(option.firstChild).toBeDisabled();
});

test('it spreads List item props properly', async () => {
  const { findByTestId } = renderWithTheme(
    <DescriptionList
      aria-label="List"
      data-testid={testId}
      items={[
        <DescriptionDetails
          className="List-item-1"
          disabled={true}
          key={0}
          text="option1"
          data-testid="option"
          onClick={jest.fn()}
        />,
      ]}
    />
  );

  const option = await findByTestId('option');
  expect(option.firstChild).toBeDisabled();
  expect(option.firstChild).toHaveClass('List-item-1');
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <DescriptionList
      aria-label="List"
      className="custom-class"
      data-testid={testId}
      items={[
        <DescriptionDetails text="option1" key={0} />,
        <DescriptionDetails text="option2" key={1} />,
      ]}
    />
  );

  const root = await findByTestId(testId);
  expect(root.classList.contains('custom-class')).toBeTruthy();
});

it('renders a List with group headings correctly', async () => {
  const { queryByText } = renderWithTheme(
    <DescriptionList
      aria-label="List"
      data-testid={testId}
      items={[
        <DescriptionListGroupHeading key={0}>
          First Section
        </DescriptionListGroupHeading>,
        <DescriptionDetails key={1} text="option1" />,
        <DescriptionDetails key={2} text="option2" />,
        // Testing non-string headers
        <DescriptionListGroupHeading key={3}>
          <button>Test Button</button>
        </DescriptionListGroupHeading>,
        <DescriptionDetails key={4} text="option3" />,
        <DescriptionDetails key={5} text="option4" />,
      ]}
    />
  );

  expect(queryByText('First Section')).not.toBeNull();
  expect(queryByText('Test Button')).not.toBeNull();
});

test('renders a List item with secondary text', async () => {
  const { findByTestId } = renderWithTheme(
    <DescriptionList
      aria-label="List"
      data-testid={testId}
      items={[
        <DescriptionDetails
          disabled={true}
          key={0}
          text="option1"
          secondaryText="secondary text"
          data-testid="option"
        />,
      ]}
    />
  );

  const option = await findByTestId('option');
  expect(option).toHaveTextContent('secondary text');
});

test('A List item with title icon, term, details and divider', async () => {
  const { findByTestId } = renderWithTheme(
    <DescriptionList
      aria-label="List"
      data-testid={testId}
      title="Title"
      titleIcon={IconComponent}
      items={[
        <DescriptionTerm key="term-1">Term 1</DescriptionTerm>,
        <DescriptionDetails key="details-1">Details 1</DescriptionDetails>,
        <DescriptionDivider key="divider-1" />,
      ]}
    />
  );

  const root = await findByTestId(testId);
  // title icon
  const titleIcon = await findByTestId(iconTestId);
  expect(titleIcon).toBeTruthy();

  const options = root.querySelectorAll('li');
  expect(options.length).toEqual(3);

  expect(options[0].textContent).toEqual('Term 1');
  expect(options[1].textContent).toEqual('Details 1');
  expect(options[2].textContent).toEqual(''); // divider has no text content
});
