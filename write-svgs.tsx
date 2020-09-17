const fs = require('fs');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { createTheme, ThemeProvider } = require('./dist/styles');

const theme = createTheme();

const writeLinedIcons = (iconIndex: any, pathName: string) => {
  for (const iconName of Object.keys(iconIndex)) {
    const iconPath = `${pathName}/${iconName}`;
    console.log(`Exporting lined icon: ${iconPath}`);
    const Icon = iconIndex[iconName];
    const markup = renderToStaticMarkup(
      <ThemeProvider theme={theme}>
        <Icon />
      </ThemeProvider>
    );
    fs.writeFileSync(`${iconPath}.svg`, markup);
  }
};

/* npm: feathericons/react-feather icons */

const linedIcons = require('./dist/icons/lined');
writeLinedIcons(linedIcons, './dist/icons/lined');

/* npm: @lifeomic/chroma lined-custom icons */

const linedCustomIcons = require('./dist/icons/linedCustom');
writeLinedIcons(linedCustomIcons, './dist/icons/linedCustom');

/* npm: @lifeomic/chroma icons */

const icons = [
  './dist/icons/Canceled',
  './dist/icons/ChevronDown',
  './dist/icons/Complete',
  './dist/icons/Error',
  './dist/icons/File',
  './dist/icons/Folder',
  './dist/icons/Guide',
  './dist/icons/Heart',
  './dist/icons/Info',
  './dist/icons/Queued',
  './dist/icons/Running',
  './dist/icons/SideBar',
  './dist/icons/XCircle',
];

for (const iconPath of icons) {
  const name = iconPath.substring(iconPath.lastIndexOf('/') + 1);
  console.log(`Exporting icon: ${iconPath}`);
  const Icon = require(iconPath)[name];
  const markup = renderToStaticMarkup(
    <ThemeProvider theme={theme}>
      <Icon />
    </ThemeProvider>
  );
  fs.writeFileSync(`${iconPath}.svg`, markup);
}
