import { createTheme } from './createTheme';

test('default theme', () => {
  expect(createTheme()).toMatchSnapshot();
});
