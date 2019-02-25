const imagemin = require('imagemin');
const imageminGifsicle = require('imagemin-gifsicle');

(async() => {
  const files = await imagemin(
    ['./images/gif/*.{gif}'],
      './output/gifsicle',
    {
      plugins:
        [
          imageminGifsicle()
        ]
    }
  );
  console.log('Images optimized with imagemin-gifsicle 😊');
})();