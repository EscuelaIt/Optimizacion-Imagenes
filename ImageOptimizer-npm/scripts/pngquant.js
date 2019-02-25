const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');

(async() => {
  const files = await imagemin(
    ['./images/png/*.{png}'],
      './output/pngquant',
    {
      plugins:
        [
          imageminPngquant({
            quality: [0.6, 0.8]
          })
        ]
    }
  );
  console.log('Images optimized with imagemin-pngquant 😊');
})();