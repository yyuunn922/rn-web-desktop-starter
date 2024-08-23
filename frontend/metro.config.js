const {getDefaultConfig} = require('expo/metro-config');
const {mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');

const config = mergeConfig(getDefaultConfig(__dirname), {
  resolver: {
    sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs', 'mjs'],
    assetExts: ['glb', 'gltf', 'png', 'jpg'],
  },
});

module.exports = withNativeWind(config, {input: './global.css'});
