#!/usr/bin/env bash

# Si aucun argument n'est fourni lire depuis stdin
# sinon lire depuis le fichier donné en argument

if [ $# = 0 ]
then
	input=/dev/stdin
else
	input=$1
fi

fullpath="$input"
echo "$fullpath";

# https://stackoverflow.com/a/965072

fullpath_without_extension="${fullpath%.*}"
echo "$fullpath_without_extension";

# Nom du fichier avec extension (avec basename)
# filename=$(basename -- "$fullpath")
# echo "$filename";

# Nom du fichier avec extension
filename="${fullpath##*/}"
echo "$filename";

filename_without_extension="${filename%.*}"
echo "$filename_without_extension";

extension="${fullpath##*.}"
echo "$extension";
