import * as React from 'react';
import { IconComponent } from '../../testUtils/IconComponent';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { PopoverItem, PopoverItemProps } from '../Popover';

const testId = 'PopoverItem';

const getBaseProps = (): PopoverItemProps => ({
  icon: IconComponent,
  text: 'text',
});

test('it renders a PopoverItem', async () => {
  const { findByTestId } = renderWithTheme(
    <PopoverItem {...getBaseProps()} data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
  expect(root.getAttribute('role')).toEqual('button');
  expect(root.getAttribute('tabIndex')).toEqual('0');
  expect(root).toHaveClass('ChromaPopoverItem-root');
  expect(root).toHaveClass('ChromaPopoverItem-directionRow');
  expect(root).toHaveClass('ChromaPopoverItem-justifyStart');
});

test('it renders text', async () => {
  const { findByText } = renderWithTheme(
    <PopoverItem data-testid={testId} text="chroma" />
  );
  const text = await findByText(/chroma/);
  expect(text).toBeInTheDocument();
});

test('it applies the proper classes when `onClick` is provided', async () => {
  const onClick = () => ({});
  const { findByTestId } = renderWithTheme(
    <PopoverItem data-testid={testId} onClick={onClick} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaPopoverItem-hoverPointer');
});

test('it applies "noTextWrap" to text', async () => {
  const { findByText } = renderWithTheme(
    <PopoverItem data-testid={testId} text="chroma" noTextWrap={true} />
  );
  const text = await findByText(/chroma/);
  expect(text).toHaveClass('ChromaPopoverItem-textNoWrap');
});

test('it applies "clipText"', async () => {
  const { findByText } = renderWithTheme(
    <PopoverItem data-testid={testId} text="chroma" clipText={true} />
  );
  const text = await findByText(/chroma/);
  expect(text).toHaveClass('ChromaPopoverItem-clipText');
});

test('it applies "justify: space-between"', async () => {
  const { findByTestId } = renderWithTheme(
    <PopoverItem data-testid={testId} justify="space-between" />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaPopoverItem-justifyBetween');
});

test('it applies "justify: center"', async () => {
  const { findByTestId } = renderWithTheme(
    <PopoverItem data-testid={testId} justify="center" />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaPopoverItem-justifyCenter');
});

test('it applies "justify: flex-end"', async () => {
  const { findByTestId } = renderWithTheme(
    <PopoverItem data-testid={testId} justify="flex-end" />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaPopoverItem-justifyEnd');
});

test('it applies "direction: row-reverse"', async () => {
  const { findByTestId } = renderWithTheme(
    <PopoverItem data-testid={testId} direction="row-reverse" />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaPopoverItem-directionRowReverse');
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <PopoverItem data-testid={testId} className="custom-class-name" />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('custom-class-name');
});
