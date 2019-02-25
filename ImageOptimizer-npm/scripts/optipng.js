const imagemin = require('imagemin');
const imageminOptipng = require('imagemin-optipng');

(async() => {
  const files = await imagemin(
    ['./images/png/*.{png}'],
      './output/optipng',
    {
      plugins:
        [
          imageminOptipng()
        ]
    }
  );
  console.log('Images optimized with imagemin-optipng 😊');
})();