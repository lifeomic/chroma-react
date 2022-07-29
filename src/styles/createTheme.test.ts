import { createTheme } from './createTheme';

test('default theme', () => {
  expect(
    createTheme({
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              marginLeft: '1px',
            },
          },
        },
        ChromaAlert: {
          styleOverrides: {
            root: {
              marginLeft: '1px',
            },
          },
        },
      },
    })
  ).toMatchSnapshot();
});
