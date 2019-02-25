const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
     new CopyWebpackPlugin([{
       from: 'images/**/**',
       to: path.resolve(__dirname, 'dist')
     }]),
    new ImageminPlugin({
      plugins: [
        imageminPngquant({ quality: [0.7, 0.8] }),
        imageminMozjpeg({ quality: 60 }),
      ]
    })
  ]
}
