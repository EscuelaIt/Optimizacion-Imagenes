const mozjpeg = require('imagemin-mozjpeg')
const pngquant = require('imagemin-pngquant');
const imagemin = require('gulp-imagemin');
const imageminSvgo = require('imagemin-svgo');
const imageminWebp = require('imagemin-webp');
const extReplace = require('gulp-ext-replace');
const gulp = require('gulp');

gulp.task('default', () => {
  gulp.src('images/**/*.{jpg,png,svg}')
    .pipe(imagemin([
      pngquant({quality: '50'}),
      mozjpeg({ quality: '50' }),
      imageminSvgo({
				plugins: [
					{removeViewBox: false}
				]
			})
    ]))
    .pipe(gulp.dest('dist/images/'))
});

gulp.task('webp', () => {
  let src = 'images/**/*.{jpg,png}';
  let dest = 'dist/images';

  return gulp.src(src)
    .pipe(imagemin([
      imageminWebp({
        quality: 75
      })
    ]))
    .pipe(extReplace('.webp'))
    .pipe(gulp.dest(dest));
});