import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import {
  PercentFormatField,
  PriceFormatField,
  UnitNumberFormatField,
} from './';
import { fireEvent } from '@testing-library/react';

test('UnitNumberFormatField renders a TextField with min/max and formatted value', async () => {
  const onChange = jest.fn();
  const value = 10;
  const view = renderWithTheme(
    <UnitNumberFormatField value={value} onChange={onChange} units="tests" />
  );

  const textfield = await view.getByRole('textbox');
  expect(textfield).toBeInTheDocument();
  expect(textfield).toHaveAttribute('min', '0');
  expect(textfield).toHaveAttribute('max', Number.MAX_SAFE_INTEGER.toString());
  expect(textfield).toHaveAttribute('value', '10 tests');
});

test('UnitNumberFormatField does not include a space for short units', async () => {
  const onChange = jest.fn();
  const value = 10;
  const view = renderWithTheme(
    <UnitNumberFormatField value={value} onChange={onChange} units="m" />
  );

  const textfield = await view.getByRole('textbox');
  expect(textfield).toBeInTheDocument();
  expect(textfield).toHaveAttribute('value', '10m');
});

test('UnitNumberFormatField rerenders a TextField with min/max and formatted value', async () => {
  const onChange = jest.fn();
  const value = 10;
  const view = renderWithTheme(
    <UnitNumberFormatField onChange={onChange} value={value} units={'tests'} />
  );
  const textfield = await view.getByRole('textbox');
  expect(textfield).toBeInTheDocument();
  expect(textfield).toHaveAttribute('min', '0');
  expect(textfield).toHaveAttribute('max', Number.MAX_SAFE_INTEGER.toString());
  expect(textfield).toHaveAttribute('value', '10 tests');

  view.rerender(
    <UnitNumberFormatField onChange={onChange} value={200} units={'tests'} />
  );
  expect(textfield).toHaveAttribute('value', '200 tests');
});

test('UnitNumberFormatField call onChange when the text input value change', async () => {
  const onChange = jest.fn();
  const value = 10;
  const view = renderWithTheme(
    <UnitNumberFormatField value={value} onChange={onChange} units="m" />
  );
  const textfield = await view.getByRole('textbox');
  expect(textfield).toBeInTheDocument();

  fireEvent.change(textfield, { target: { value: '200' } });

  expect(onChange).toHaveBeenCalledWith(200);
});

test('UnitNumberFormatField handles moving the cursor for a decimal overwrite', async () => {
  const onChange = jest.fn();
  const value = 10.0;

  const view = renderWithTheme(
    <UnitNumberFormatField
      value={value}
      onChange={onChange}
      units="m"
      decimalScale={2}
    />
  );

  const textfield = await view.getByRole('textbox');
  const el = textfield as HTMLInputElement;
  jest.spyOn(el, 'setSelectionRange');
  fireEvent.change(textfield, { target: { value: '10..00' } });
  expect(textfield).toHaveAttribute('value', '10.00m');

  expect(el.setSelectionRange).toHaveBeenCalledWith(3, 3);
});

test('UnitNumberFormatField handles moving the cursor when formatting changes abrubtly', async () => {
  const onChange = jest.fn();
  const value = 10.0;

  const viewProps = {
    value,
    onChange,
    units: '$',
    prefixUnits: true,
    decimalScale: 2,
  };

  const view = renderWithTheme(<UnitNumberFormatField {...viewProps} />);

  view.rerender(<UnitNumberFormatField {...viewProps} />);

  const fakeStateSet = (value: number) => {
    view.rerender(
      <UnitNumberFormatField
        {...viewProps}
        onChange={fakeStateSet}
        value={value}
      />
    );
  };

  view.rerender(
    <UnitNumberFormatField {...viewProps} onChange={fakeStateSet} />
  );

  const textfield = await view.getByRole('textbox');
  const el = textfield as HTMLInputElement;
  jest.spyOn(el, 'setSelectionRange');
  fireEvent.change(textfield, { target: { value: '1.2' } });
  expect(textfield).toHaveAttribute('value', '$1.20');

  expect(el.setSelectionRange).toHaveBeenCalledWith(4, 4); // cursor after last sig fig

  fireEvent.change(textfield, { target: { value: '1' } });
  expect(textfield).toHaveAttribute('value', '$1.00');
  expect(el.setSelectionRange).toHaveBeenCalledWith(2, 2); // cursor after last sig fig

  fireEvent.change(textfield, { target: { value: '10.25' } });
  expect(textfield).toHaveAttribute('value', '$10.25');
  expect(el.setSelectionRange).toHaveBeenCalledWith(6, 6); // cursor after last sig fig
});

test('UnitNumberFormatField sets the selection to the entire input on focus', async () => {
  const onChange = jest.fn();
  const value = 25;

  const view = renderWithTheme(
    <UnitNumberFormatField value={value} onChange={onChange} units={'m'} />
  );

  const textfield = await view.getByRole('textbox');
  const el = textfield as HTMLInputElement;

  jest.spyOn(el, 'setSelectionRange');
  fireEvent.focus(el);

  expect(el.setSelectionRange).toHaveBeenCalledWith(0, 2);
});

test('UnitNumberFormatField sets the selection to the entire input on focus (prefixed units)', async () => {
  const onChange = jest.fn();
  const value = 10.25;

  const view = renderWithTheme(
    <UnitNumberFormatField
      value={value}
      onChange={onChange}
      units="$"
      prefixUnits={true}
      decimalScale={2}
    />
  );

  const textfield = await view.getByRole('textbox');
  const el = textfield as HTMLInputElement;
  jest.spyOn(el, 'setSelectionRange');
  fireEvent.focus(textfield);

  expect(el.setSelectionRange).toHaveBeenCalledWith(1, 6); // after $, til the end
});

test('UnitNumberFormatField resets to 0 on a garbage input', async () => {
  const onChange = jest.fn();
  const value = 25;

  const view = renderWithTheme(
    <UnitNumberFormatField value={value} onChange={onChange} units={'m'} />
  );

  const textfield = await view.getByRole('textbox');
  const el = textfield as HTMLInputElement;
  jest.spyOn(el, 'setSelectionRange');
  fireEvent.change(textfield, { target: { value: 'asdfasdf' } });

  expect(onChange).toHaveBeenCalledWith(0);
});

test('UnitNumberFormatField does not update the underlying value when only units are entered', async () => {
  const onChange = jest.fn();
  const value = 25;

  const view = renderWithTheme(
    <UnitNumberFormatField value={value} onChange={onChange} units={'units'} />
  );

  const textfield = await view.getByRole('textbox');
  const el = textfield as HTMLInputElement;
  jest.spyOn(el, 'setSelectionRange');
  fireEvent.change(textfield, { target: { value: ' units' } });

  expect(onChange).not.toHaveBeenCalled();

  expect(el.setSelectionRange).toHaveBeenCalledWith(0, 0);
});

test('UnitNumberFormatField does not update the underlying value when only units are entered with prefixed units', async () => {
  const onChange = jest.fn();
  const value = 25;

  const view = renderWithTheme(
    <UnitNumberFormatField
      value={value}
      onChange={onChange}
      units={'$'}
      prefixUnits={true}
    />
  );

  const textfield = await view.getByRole('textbox');
  const el = textfield as HTMLInputElement;
  jest.spyOn(el, 'setSelectionRange');
  fireEvent.change(textfield, { target: { value: '$' } });

  expect(onChange).not.toHaveBeenCalled();

  expect(el.setSelectionRange).toHaveBeenCalledWith(1, 1);
});

test('UnitNumberFormatField has an onBlur that resets the textFieldValue to the underlying value', async () => {
  const onChange = jest.fn();
  const onBlur = jest.fn();
  const value = 25;

  const view = renderWithTheme(
    <UnitNumberFormatField
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      units={'units'}
    />
  );

  const textfield = await view.getByRole('textbox');
  fireEvent.change(textfield, { target: { value: ' units' } });
  fireEvent.blur(textfield);

  expect(textfield).toHaveAttribute('value', '25 units');
  expect(onBlur).toHaveBeenCalledTimes(1);
});

test('UnitNumberFormatField sets the value to inside min/max onBlur', async () => {
  const onChange = jest.fn();
  const value = 4;

  const view = renderWithTheme(
    <UnitNumberFormatField
      value={value}
      min={5}
      onChange={onChange}
      units={'units'}
    />
  );

  const textfield = await view.getByRole('textbox');

  fireEvent.blur(textfield);
  expect(textfield).toHaveAttribute('value', '5 units');
});

test('UnitNumberFormatField correctly positions the cursor when typing in the decimal part', async () => {
  const onChange = jest.fn();
  const value = 25;

  const view = renderWithTheme(
    <UnitNumberFormatField
      value={value}
      onChange={onChange}
      units={'$'}
      prefixUnits={true}
      decimalScale={2}
    />
  );

  const textfield = await view.getByRole('textbox');
  const el = textfield as HTMLInputElement;
  jest.spyOn(el, 'setSelectionRange');
  const setSelectionRange = el.setSelectionRange as jest.Mock;

  fireEvent.change(textfield, { target: { value: '$25.000' } });

  expect(setSelectionRange).toHaveBeenCalledWith(5, 5);
  setSelectionRange.mockClear();

  fireEvent.change(textfield, { target: { value: '$25.500' } });

  expect(setSelectionRange).toHaveBeenCalledWith(5, 5);
  setSelectionRange.mockClear();

  fireEvent.change(textfield, { target: { value: '$25.520' } });

  expect(setSelectionRange).toHaveBeenCalledWith(6, 6);
  setSelectionRange.mockClear();
});

test('UnitNumberFormatField correctly positions the cursor when typing in the decimal part', async () => {
  const onChange = jest.fn();
  const value = 25;

  const view = renderWithTheme(
    <UnitNumberFormatField
      value={value}
      onChange={onChange}
      units={'units'}
      prefixUnits={false}
      decimalScale={2}
    />
  );

  const textfield = await view.getByRole('textbox');
  const el = textfield as HTMLInputElement;
  jest.spyOn(el, 'setSelectionRange');
  const setSelectionRange = el.setSelectionRange as jest.Mock;

  fireEvent.change(textfield, { target: { value: '25.000 units' } });
  expect(setSelectionRange).toHaveBeenCalledWith(4, 4);
  setSelectionRange.mockClear();

  fireEvent.change(textfield, { target: { value: '25.500 units' } });
  expect(setSelectionRange).toHaveBeenCalledWith(4, 4);
  setSelectionRange.mockClear();

  fireEvent.change(textfield, { target: { value: '25.520 units' } });
  expect(setSelectionRange).toHaveBeenCalledWith(5, 5);
  setSelectionRange.mockClear();
});

test('rendering a PercentFormatField renders a UnitNumberFormatField with % units', async () => {
  const onChange = jest.fn();
  const value = 10;
  const view = renderWithTheme(
    <PercentFormatField value={value} onChange={onChange} />
  );
  const textfield = await view.getByRole('textbox');
  expect(textfield).toBeInTheDocument();
  expect(textfield).toHaveAttribute('value', '10%');
});

test('rendering a PriceFormatField renders a UnitNumberFormatField with $ prefixed units', async () => {
  const onChange = jest.fn();
  const value = 1000;
  const view = renderWithTheme(
    <PriceFormatField value={value} onChange={onChange} />
  );
  const textfield = await view.getByRole('textbox');
  expect(textfield).toBeInTheDocument();
  expect(textfield).toHaveAttribute('value', '$10.00');
});

test('rendering a PriceFormatField with noninteger amount of pennies throws', async () => {
  // Avoid uncaught exception from showing in the console
  jest.spyOn(console, 'error');
  (console.error as jest.Mock).mockImplementation(() => {});

  const onChange = jest.fn();
  const value = 1000.5;
  expect(() =>
    renderWithTheme(<PriceFormatField value={value} onChange={onChange} />)
  ).toThrow();

  (console.error as jest.Mock).mockRestore();
});

test('PriceFormatField passes value as pennies to onChange', async () => {
  const onChange = jest.fn();
  const value = 1000;
  const view = renderWithTheme(
    <PriceFormatField value={value} onChange={onChange} />
  );

  const textfield = await view.getByRole('textbox');
  fireEvent.change(textfield, { target: { value: '2' } });

  expect(onChange).toHaveBeenCalled();
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith(200);
});

test('PriceFormatField converts its min, max, and value to dollars', async () => {
  const onChange = jest.fn();
  const value = 1000;
  const min = 100;
  const max = 200;
  const view = renderWithTheme(
    <PriceFormatField value={value} onChange={onChange} min={min} max={max} />
  );

  const textfield = await view.getByRole('textbox');

  expect(textfield).toHaveAttribute('min', '1');
  expect(textfield).toHaveAttribute('max', '2');
  expect(textfield).toHaveAttribute('value', '$10.00');
});
