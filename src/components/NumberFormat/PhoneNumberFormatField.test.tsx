import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { PhoneNumberFormatField } from './';

test('rendering PhoneNumberFormatField renders a PhoneInput', async () => {
  const onChange = jest.fn();
  const value = '1234567890';
  const view = renderWithTheme(
    <PhoneNumberFormatField value={value} onChange={onChange} />
  );
  const field = await view.getByRole('textbox');
  expect(field).toBeInTheDocument();
  expect(field).toHaveAttribute('value', value);
});
