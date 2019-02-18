const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp');
const imageminSvgo = require('imagemin-svgo');
const imageminGifsicle = require('imagemin-gifsicle');

(async() => {
  const files = await imagemin(
    ['images/**/*.{jpg,png,svg,gif}'],
      'dist/images',
    {
      plugins:
        [
          imageminJpegtran(),
          imageminPngquant({
            quality: [0.6, 0.8]
          }),
          imageminGifsicle(),
          imageminSvgo({
            plugins: [
              {removeViewBox: false}
            ]
          }),
          //imageminWebp({ quality: 70 })
        ]
    }
  );
  console.log('Images optimized 😊');
})();