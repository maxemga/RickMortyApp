module.exports = {
  assets: ['./src/assets/fonts/'],
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          src: './src',
          assets: './assets',
        },
      },
    ],
  ],
};
