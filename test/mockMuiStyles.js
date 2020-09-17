const removeHash = (classes = {}) => {
  return Object.entries(classes).reduce(
    (prev, [key, value]) => {
      const split = value.split('-');
      const lastIndex = split.length - 1;
      const newValue = parseInt(split[lastIndex])
        ? split.slice(0, lastIndex).join('-')
        : value;
      prev[key] = newValue;
      return prev;
    },
    { ...classes }
  );
};

jest.mock('@material-ui/styles/makeStyles', () => {
  const makeStylesActual = require.requireActual(
    '@material-ui/styles/makeStyles'
  ).default;

  const makeStyles = (styles, options) => {
    const useStyles = makeStylesActual(styles, options);
    return (props) => {
      const classes = useStyles(props);
      return removeHash(classes);
    };
  };

  return makeStyles;
});

jest.mock('@material-ui/core/styles/withStyles', () => {
  const React = require('react');
  const withStylesActual = require.requireActual(
    '@material-ui/core/styles/withStyles'
  ).default;

  return (styles, options) => {
    const wrap = withStylesActual(styles, options);

    return (Component) => {
      return wrap(({ classes, ...props }) => {
        const newClasses = removeHash(classes);
        return React.createElement(Component, {
          classes: newClasses,
          ...props
        });
      });
    };
  };
});
