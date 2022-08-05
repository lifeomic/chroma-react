import { createTheme, Theme } from './createTheme';

test('default theme', () => {
  expect(createTheme()).toMatchSnapshot();
});

test('overridden theme', () => {
  const components = (theme: Theme) => ({
    MuiButton: {
      styleOverrides: {
        root: {
          marginLeft: theme.spacing(1),
        },
      },
    },
    ChromaAlert: {
      styleOverrides: {
        root: {
          marginLeft: theme.spacing(1),
        },
      },
    },
  });

  expect(createTheme({ components })).toMatchSnapshot();
});
