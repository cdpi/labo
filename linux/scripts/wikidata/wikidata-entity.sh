#!/usr/bin/env bash

# Bonnes pratiques pour interroger l'API Wikidata
# User-Agent personnalisé et gestion de l'encodage
# TODO: Ajouter gestion des erreurs HTTP (NotFound, TooManyRequests)

# TODO: Format encodage JSON (UTF-8 et pas \uXXXX)
# Fait dans le script json-pretty

USER_AGENT="Personal script to learn about Linux and Wikidata API/0.0.1"

END_POINT="https://www.wikidata.org/wiki/Special:EntityData/"

ENTITY=$1

FORMAT=".json"
#FORMAT=".html"

ENCODING="Accept-Encoding: gzip, deflate"

URL="$END_POINT$ENTITY$FORMAT"

wget -q -O - --user-agent="$USER_AGENT" --header="$ENCODING" $URL | gunzip -c
