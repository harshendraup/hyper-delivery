const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: [
      'bin',
      'bmp',
      'gif',
      'jpg',
      'jpeg',
      'png',
      'psd',
      'svg',
      'tiff',
      'webp',
    ], // Include 'svg'
    sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx', 'svg'], // Include 'svg'
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
