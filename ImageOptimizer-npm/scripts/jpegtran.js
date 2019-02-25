const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');

(async() => {
  const files = await imagemin(
    ['./images/jpg/*.{jpg,jpeg}'],
      './output/jpegtran',
    {
      plugins:
        [
          imageminJpegtran()
        ]
    }
  );
  console.log('Images optimized with imagemin-jpegtran 😊');
})();