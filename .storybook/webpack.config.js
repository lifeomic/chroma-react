const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    include: [
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname, '../stories')
    ],
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          configFile: path.resolve(__dirname, '../tsconfig.docs.json'),
          compilerOptions: {
            noEmit: false
          }
        }
      }
    ]
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
