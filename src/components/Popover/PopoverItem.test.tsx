import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
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
  expect(hasClass(root, 'ChromaPopoverItem-root')).toBe(true);
  expect(hasClass(root, 'ChromaPopoverItem-directionRow')).toBe(true);
  expect(hasClass(root, 'ChromaPopoverItem-justifyStart')).toBe(true);
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
  expect(hasClass(root, 'ChromaPopoverItem-hoverPointer')).toBe(true);
});

test('it applies "noTextWrap" to text', async () => {
  const { findByText } = renderWithTheme(
    <PopoverItem data-testid={testId} text="chroma" noTextWrap={true} />
  );
  const text = await findByText(/chroma/);
  expect(hasClass(text, 'ChromaPopoverItem-textNoWrap')).toBe(true);
});

test('it applies "clipText"', async () => {
  const { findByText } = renderWithTheme(
    <PopoverItem data-testid={testId} text="chroma" clipText={true} />
  );
  const text = await findByText(/chroma/);
  expect(hasClass(text, 'ChromaPopoverItem-clipText')).toBe(true);
});

test('it applies "justify: space-between"', async () => {
  const { findByTestId } = renderWithTheme(
    <PopoverItem data-testid={testId} justify="space-between" />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaPopoverItem-justifyBetween')).toBe(true);
});

test('it applies "justify: center"', async () => {
  const { findByTestId } = renderWithTheme(
    <PopoverItem data-testid={testId} justify="center" />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaPopoverItem-justifyCenter')).toBe(true);
});

test('it applies "justify: flex-end"', async () => {
  const { findByTestId } = renderWithTheme(
    <PopoverItem data-testid={testId} justify="flex-end" />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaPopoverItem-justifyEnd')).toBe(true);
});

test('it applies "direction: row-reverse"', async () => {
  const { findByTestId } = renderWithTheme(
    <PopoverItem data-testid={testId} direction="row-reverse" />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaPopoverItem-directionRowReverse')).toBe(true);
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <PopoverItem data-testid={testId} className="custom-class-name" />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'custom-class-name')).toBe(true);
});
