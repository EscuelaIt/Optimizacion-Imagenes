const imagemin = require('imagemin');
const imageminGiflossy = require('imagemin-giflossy');

(async() => {
  const files = await imagemin(
    ['./images/gif/*.{gif}'],
      './output/giflossy',
    {
      plugins:
        [
          imageminGiflossy({lossy: 80})
        ]
    }
  );
  console.log('Images optimized with imagemin-giflossy 😊');
})();