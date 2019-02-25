#!/bin/bash

# Lossy Plugins
echo Lossy Plugins
echo ----------------------------
time node ./scripts/mozjpeg.js
echo --
time node ./scripts/pngquant.js
echo --
time node ./scripts/giflossy.js
echo --
time node ./scripts/webp.js
echo --
time node ./scripts/svgo.js
echo --
echo ----------------------------


# Lossyless Plugins
echo Lossyless Plugins
echo ----------------------------
time node ./scripts/jpegtran.js
echo --
time node ./scripts/optipng.js
echo --
time node ./scripts/gifsicle.js
echo --
echo ----------------------------
