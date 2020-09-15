import { fireEvent } from '@testing-library/dom';
import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Radio, RadioProps } from './index';

const testId = 'Radio';

const getBaseProps = (): RadioProps => ({
  id: 'id',
  label: 'Radio Label',
});

test('it renders a Radio', async () => {
  const props = getBaseProps();
  const { findByTestId, findByText } = renderWithTheme(
    <Radio {...props} data-testid={testId} />
  );
  const radio = await findByTestId(testId);
  expect(radio).toBeInTheDocument();
  expect(radio).toHaveClass('ChromaRadio-input');
  expect(radio.getAttribute('aria-describedby')).toBeTruthy();
  expect(radio.getAttribute('role')).toEqual('radio');
  expect(radio.getAttribute('type')).toEqual('radio');
  expect(radio.getAttribute('id')).toBeTruthy();
  expect(radio.getAttribute('tabIndex')).toEqual('0');

  const label = await findByText(props.label);
  expect(label).toBeInTheDocument();
});

test('it renders an inverse color Radio with a help message', async () => {
  const props = getBaseProps();
  const { findByTestId, findByText } = renderWithTheme(
    <Radio
      {...props}
      color="inverse"
      helpMessage="Helpful text"
      data-testid={testId}
    />
  );

  const radio = await findByTestId(testId);
  expect(radio).toHaveClass('ChromaRadio-inputInverse');

  const label = await findByText(props.label);
  expect(label).toHaveClass('ChromaRadio-labelInverse');

  const help = await findByText(/Helpful text/);
  expect(help).toBeInTheDocument();
  expect(help).toHaveClass('ChromaFormHelpMessage-inverse');
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Radio {...props} data-testid={testId} className="custom-class-name" />
  );
  const radio = await findByTestId(testId);
  expect(radio?.parentElement).toHaveClass('custom-class-name');
});

test('it renders a checked-by-default Radio', async () => {
  const props = getBaseProps();
  const handleChange = jest.fn();
  const { findByTestId } = renderWithTheme(
    <Radio {...props} onChange={handleChange} checked data-testid={testId} />
  );
  const radio = await findByTestId(testId);
  expect(radio.getAttribute('checked')).toEqual('');
});

test('it renders the provided help message', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <Radio {...props} helpMessage="Helpful text" data-testid={testId} />
  );

  const help = await findByText(/Helpful text/);
  expect(help).toBeInTheDocument();
});

test('it will check the radio if prop checked = true', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Radio {...props} checked={true} data-testid={testId} />
  );
  const checkbox = await findByTestId(testId);
  expect(checkbox).toHaveProperty('checked', true);
});

test('it will not check the radio if prop checked = false', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Radio {...props} checked={false} data-testid={testId} />
  );
  const checkbox = await findByTestId(testId);
  expect(checkbox).toHaveProperty('checked', false);
});

test('it will not check the radio if prop checked not provided', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Radio {...props} data-testid={testId} />
  );
  const checkbox = await findByTestId(testId);
  expect(checkbox).toHaveProperty('checked', false);
});

test('it calls the provided onChange event on-click', async () => {
  const props = getBaseProps();
  const handleChange = jest.fn();
  const { findByTestId } = renderWithTheme(
    <Radio {...props} onChange={handleChange} data-testid={testId} />
  );

  const input = await findByTestId(testId);
  fireEvent.click(input);
  expect(handleChange).toBeCalledTimes(1);
});

test('it renders children', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Radio {...props} data-testid={testId}>
      <span data-testid="id-children" />
    </Radio>
  );

  const children = await findByTestId('id-children');
  expect(children).toBeInTheDocument();
});
