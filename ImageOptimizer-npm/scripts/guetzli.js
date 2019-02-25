const imagemin = require('imagemin');
const imageminGuetzli = require('imagemin-guetzli');


(async() => {
  const files = await imagemin(
    ['./images/jpg/*.{jpg,jpeg}'],
      './output/guetzli',
    {
      plugins:
        [
          imageminGuetzli({quality: 95})
        ]
    }
  );
  console.log('Images optimized with imagemin-guetzli 😊');
})();