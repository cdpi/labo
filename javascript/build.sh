#!/usr/bin/env bash

#rm -f -r js/*.js

cd common
npm run build
cd ..

cd browser
npm run build
cd ..

#tsc

#for file in js/*.js; do
	#echo "$file"
	#min=${file%.*}.min.js
	#uglifyjs "$file" -o "$min" --compress --mangle
	#uglifyjs "$file" -o "$min"
#done

# sed -f commands.sed js/cdpi.min.js > js/cdpi2.min.js
# cat js/geometry.min2.mjs js/dom.min2.mjs js/drawing.min2.mjs js/game.min2.mjs src/export.txt > dist/cdpi.min.mjs

# chmod +x js/home/server.js
# chmod +x js/home/cli.js

# chmod +x js/dev/run.js
