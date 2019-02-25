const imagemin = require('imagemin');
const imageminSvgo = require('imagemin-svgo');

(async() => {
  const files = await imagemin(
    ['./images/svg/*.{svg}'],
      './output/svgo',
    {
      plugins:
        [
          imageminSvgo({
            plugins: [
              {removeViewBox: false}
            ]
          })
        ]
    }
  );
  console.log('Images optimized with imagemin-svgo 😊');
})();