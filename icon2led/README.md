# Icon to LED

## SVG vers PNG

inkscape "noto-emoji.svg" --actions="export-width:256;export-height:256;export-type:png;export-do;" --export-filename="noto-emoji.png"

## PNG vers BMP

convert "noto-emoji.png" -background "#000" -alpha remove "noto-emoji.bmp"

## BMP 16 x 16

convert "noto-emoji.bmp" -scale 16x "noto-emoji-16x16.bmp"
