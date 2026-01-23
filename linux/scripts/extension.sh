#!/usr/bin/env bash

#https://stackoverflow.com/a/965072

#FILE="$1"

echo $1;

me="${1##*/}"
echo $me;

#filename=$(basename -- "$1")
filename="$1"
echo $filename;

filename3=$(basename -- "$1")
echo $filename3;

extension="${filename##*.}"
echo $extension;

filename2="${filename%.*}"
echo $filename2;
