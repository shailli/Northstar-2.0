/**
 * Ravi Kundalia
 * This portion of code is modified as a fix to symlinks in react-native support
 *
 * @format
 */


const path = require('path');

// react-native >= 0.57

const extraNodeModules = {
  shared: path.resolve(`${__dirname}/../shared/`),
};
const watchFolders = [
  path.resolve(`${__dirname}/../shared/`)
];

module.exports = {
  resolver: {
    extraNodeModules,
  },
  watchFolders,
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
