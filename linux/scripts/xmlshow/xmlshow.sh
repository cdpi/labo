#!/usr/bin/env bash

# https://github.com/fralau/xmlshow
# https://unix.stackexchange.com/questions/267361/syntax-highlighting-in-the-terminal

if [ $# = 0 ]
then
    filename=/dev/stdin
else
    filename=$1
fi

xmllint --format "$filename" --recover | highlight --syntax=xml --out-format=truecolor -s andes | less -R -N
