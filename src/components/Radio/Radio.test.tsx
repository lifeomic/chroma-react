import { User } from '@lifeomic/chromicons';
import { fireEvent } from '@testing-library/dom';
import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
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
  expect(hasClass(radio, 'ChromaRadio-input')).toBe(true);
  expect(radio.getAttribute('aria-describedby')).toBeFalsy();
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
  expect(hasClass(radio, 'ChromaRadio-inputInverse')).toBe(true);

  const label = await findByText(props.label);
  expect(hasClass(label, 'ChromaRadio-labelInverse')).toBe(true);

  const help = await findByText(/Helpful text/);
  expect(help).toBeInTheDocument();
  expect(hasClass(help, 'ChromaFormHelpMessage-inverse')).toBe(true);
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Radio {...props} data-testid={testId} className="custom-class-name" />
  );
  const radio = await findByTestId(testId);
  expect(hasClass(radio?.parentElement, 'custom-class-name')).toBe(true);
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

test('it passes ref to input', async () => {
  const ref = React.createRef<HTMLInputElement>();
  const props = getBaseProps();
  const handleChange = jest.fn();
  renderWithTheme(
    <Radio {...props} onChange={handleChange} data-testid={testId} ref={ref} />
  );

  ref.current!.click();
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

// For accessibility audit
test('it does not apply aria-describedby', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Radio {...props} data-testid={testId} id="unique-id" />
  );

  const input = await findByTestId(testId);
  expect(input.getAttribute('aria-describedby')).toEqual(null);
});

test('it applies aria-describedby for helpMessage', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Radio
      {...props}
      data-testid={testId}
      helpMessage="Help Message"
      id="unique-id"
    />
  );

  const input = await findByTestId(testId);
  expect(input.getAttribute('aria-describedby')).toEqual('help-for-unique-id');
});

test('it renders icon', () => {
  const props = getBaseProps();
  renderWithTheme(<Radio {...props} icon={User} data-testid={testId} />);

  const icon = document.querySelector('svg[data-icon=SvgUser]');
  expect(icon).toBeInTheDocument();
});

test('it renders icon tooltip', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <Radio
      {...props}
      icon={User}
      data-testid={testId}
      label=""
      aria-label="My Icon"
    />
  );

  const tooltip = await findByText('My Icon');
  expect(tooltip).toBeInTheDocument();
});

test('it does not render icon tooltip if label is provided', () => {
  const props = getBaseProps();
  const { queryByText } = renderWithTheme(
    <Radio
      {...props}
      icon={User}
      data-testid={testId}
      label="My Label"
      aria-label="My Icon"
    />
  );

  const tooltip = queryByText('My Icon');
  expect(tooltip).not.toBeInTheDocument();
});
