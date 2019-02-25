const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async() => {
  const files = await imagemin(
    ['./images/jpg/*.{jpg,jpeg}'],
      './output/webp',
    {
      plugins:
        [
          imageminWebp({ quality: 70 })
        ]
    }
  );
  console.log('Images optimized with imagemin-webp 😊');
})();