/**
 * This script performs a very basic (and approximate) analysis of the
 * end-consumer bundle size of Chroma's components.
 *
 * How it works:
 * 1. Build Chroma to dist.
 * 2. For every component, create a simple entrypoint file that imports
 *    the component from the dist.
 * 3. For every component, bundle the created entrypoint file using a
 *    very basic webpack config, collecting stats + creating a visual
 *    report of the bundle size.
 * 4. Save and output per-component and average bundle size stats.
 */

const { execSync } = require('child_process');
const path = require('path');
const {
  readdirSync,
  mkdirSync,
  writeFileSync,
  rmdirSync,
  readFileSync,
} = require('fs');
const { orderBy } = require('lodash');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ora = require('ora');

const outpath = (...parts) =>
  path.resolve(__dirname, 'bundle-analysis', ...parts);

/**
 * Helper function for wrapping webpack execution in a promise.
 *
 * @param {String} component The component name.
 */
const bundle = (component) =>
  new Promise((resolve, reject) => {
    const compiler = webpack({
      mode: 'production',
      entry: outpath(component, 'App.js'),
      output: {
        path: outpath(component),
        filename: 'bundle.js',
      },
      plugins: [
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: outpath(component, 'report.html'),
          openAnalyzer: false,
          logLevel: 'silent',
        }),
      ],
    });

    compiler.run((err, stats) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.stringify(stats.toJson(), null, 2));
    });
  });

const spinner = ora();

const main = async () => {
  // Build Chroma to dist.
  execSync('yarn build', { stdio: 'inherit' });
  rmdirSync(outpath(), { recursive: true });

  const matcher = process.argv[2] || '';
  if (matcher) {
    console.log(
      `Running bundle analysis for components matching "${matcher}".`
    );
  } else {
    console.log('Running bundle analysis for all components.');
  }
  // 2. Scaffold out file structure.
  const components = readdirSync(`${__dirname}/dist/components`).filter(
    (name) =>
      !name.startsWith('_') &&
      name.toLowerCase().includes(matcher.toLowerCase())
  );

  if (!components.length) {
    console.log(`No components found matching "${matcher}".`);
    return;
  }

  spinner.start('Bundling components...');
  // For every component...
  for (const component of components) {
    spinner.text = `Analyzing ${component}...`;

    mkdirSync(outpath(component), { recursive: true });
    // Create the simple entrypoint file for the component.
    writeFileSync(
      outpath(component, 'App.js'),
      [
        `import { ${component} } from '../../dist/components/${component}';`,
        '',
        `console.log(${component});`,
      ].join('\n')
    );

    // Bundle the simple entrypoint file for the component.
    const stats = await bundle(component);

    // Output the stats for the component.
    writeFileSync(outpath(component, 'stats.json'), stats);
  }

  spinner.stop();
  console.log(`Bundled micro apps for ${components.length} components.`);
  spinner.start('Aggregating results...');

  // Aggregate stats.
  const aggregateStats = components.reduce(
    (accum, comp) => {
      const stats = JSON.parse(
        readFileSync(outpath(comp, 'stats.json')).toString()
      );
      return {
        averageSize:
          accum.averageSize + stats.assets[0].size / components.length,
        averageTime: accum.averageTime + stats.time / components.length,
        components: {
          ...accum.components,
          [comp]: {
            size: stats.assets[0].size,
            time: stats.time,
          },
        },
      };
    },
    {
      averageSize: 0,
      averageTime: 0,
      components: {},
    }
  );

  // Save aggregated stats.
  writeFileSync(
    outpath('aggregate-report.json'),
    JSON.stringify(aggregateStats, null, 2)
  );

  spinner.stop();

  // Output friendly stats to the console.
  const friendlyStats = orderBy(
    Object.entries(aggregateStats.components),
    ([, stats]) => stats.size,
    'desc'
  ).map(([name, { size, time }]) => ({
    component: name,
    time: `${time}ms`,
    size: `${(size / 1024).toFixed(0)} KB`,
  }));

  console.table(friendlyStats, ['component', 'size', 'time']);
  console.log(
    `Average Size: ${(aggregateStats.averageSize / 1024).toFixed(0)} KB`
  );
  console.log(`Average Time: ${aggregateStats.averageTime.toFixed(0)} ms`);
  console.log('Analysis complete.');
};

main().catch((err) => {
  spinner.stop();
  console.error(err);
  process.exitCode = -1;
});
