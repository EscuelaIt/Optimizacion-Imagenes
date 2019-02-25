const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');


(async() => {
  const files = await imagemin(
    ['./images/jpg/*.{jpg,jpeg}'],
      './output/mozjpeg',
    {
      plugins:
        [
          imageminMozjpeg()
        ]
    }
  );
  console.log('Images optimized with imagemin-mozjpeg 😊');
})();