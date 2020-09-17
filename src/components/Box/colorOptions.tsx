const colorOptions = [
  'common.white',
  'common.black',
  'background.paper',
  'background.default',
  'text.primary',
  'text.secondary',
  'text.disabled',
  'text.hint',
  'text.contrast',
  'text.dark',
  'divider',
];

const accents = ['A100', 'A200', 'A300', 'A400'];
const shades = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
];

// Variants have no accents (14 keys)
['primary', 'secondary', 'error'].forEach((variant) => {
  shades.forEach((shade) => {
    colorOptions.push(`${variant}.${shade}`);
  });
  colorOptions.push(`${variant}.main`);
  colorOptions.push(`${variant}.light`);
  colorOptions.push(`${variant}.dark`);
  colorOptions.push(`${variant}.contrastText`);
});

// Hues have no 'dark' or accents (13 keys)
[
  'blue',
  'charcoal',
  'darkGraphite',
  'graphite',
  'green',
  'navy',
  'orange',
  'purple',
  'red',
  'yellow',
].forEach((hue) => {
  shades.forEach((shade) => {
    colorOptions.push(`${hue}.${shade}`);
  });
  colorOptions.push(`${hue}.main`);
  colorOptions.push(`${hue}.light`);
  colorOptions.push(`${hue}.contrastText`);
});

// Grey has no 'dark' or 'contrastText' (16 keys)
shades.forEach((shade) => {
  colorOptions.push(`grey.${shade}`);
});
accents.forEach((accent) => {
  colorOptions.push(`grey.${accent}`);
});
colorOptions.push(`grey.main`);
colorOptions.push(`grey.light`);

// Message types have no shades or accents (4 keys)
['warning', 'info', 'success'].forEach((messageType) => {
  colorOptions.push(`${messageType}.main`);
  colorOptions.push(`${messageType}.light`);
  colorOptions.push(`${messageType}.dark`);
  colorOptions.push(`${messageType}.contrastText`);
});

export default colorOptions;
