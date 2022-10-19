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

  // Allows Chroma's default values to be overridden
  const breakpoints = { xs: 100, sm: 800, md: 1000, lg: 1500, xl: 2000 };

  expect(createTheme({ breakpoints, components })).toMatchSnapshot();
});
