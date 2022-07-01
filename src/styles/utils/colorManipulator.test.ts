import { hexToRgba } from './colorManipulator';

test('it handles mixed alphanumeric hex codes', () => {
  const hex = '#fcba03';
  expect(hexToRgba(hex)).toBe('(252,186,3,1)');
});

test('it throws an error for missing hex code', () => {
  expect(hexToRgba).toThrow('Invalid hex code');
});

test('it throws an error for improperly formatted hex codes', () => {
  const hex = '#32a85';
  const opacity = 60;
  expect(() => {
    hexToRgba(hex, opacity);
  }).toThrow('Invalid hex code');
});

test('it works for capital hex codes', () => {
  const hex = '#DDAAFF';
  const opacity = 0.5;
  expect(hexToRgba(hex, opacity)).toBe('(221,170,255,0.5)');
});

test('it works for mixed-case hex codes', () => {
  const hex = '#aBCdeF';
  const opacity = 0.5;
  expect(hexToRgba(hex, opacity)).toBe('(171,205,239,0.5)');
});

test('it works for length 3 hex codes', () => {
  const hex = '#abc';
  const opacity = 0.5;
  expect(hexToRgba(hex, opacity)).toBe('(170,187,204,0.5)');
});

test('it works for length 6 hex codes', () => {
  const hex = '#aabbcc';
  const opacity = 0.5;
  expect(hexToRgba(hex, opacity)).toBe('(170,187,204,0.5)');
});

test('it assigns opacity 1 if opacity arg is omitted', () => {
  const hex = '#aabbcc';
  expect(hexToRgba(hex)).toBe('(170,187,204,1)');
});

test('it handles opacity in decimal format', () => {
  const hex = '#123456';
  const opacity = 0.3;
  expect(hexToRgba(hex, opacity)).toBe('(18,52,86,0.3)');
});

test('it assumes opacity 1 should be decimal, not percent format', () => {
  const hex = '#123456';
  const opacity = 1;
  expect(hexToRgba(hex, opacity)).toBe('(18,52,86,1)');
});

test('it handles opacity in % format', () => {
  const hex = '#123456';
  const opacity = 76;
  expect(hexToRgba(hex, opacity)).toBe('(18,52,86,76%)');
});
