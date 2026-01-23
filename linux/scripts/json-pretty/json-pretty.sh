#!/usr/bin/env bash

# ./json-pretty.sh < Q408810.json

# unknown option --json-ensure-ascii (v3.9)
#python3.8 --json-ensure-ascii False -m json.tool $1
#python3.8 -m json.tool $1 = --json-ensure-ascii True = convertit les caractères non-ASCII en \uXXXX
#python3.8 -m json.tool

#python3.8 -c "import json, sys; data=json.load(sys.stdin); json.dump(data, sys.stdout, indent=4, ensure_ascii=False)" < $1

python3.8 -c "import json, sys; data=json.load(sys.stdin); json.dump(data, sys.stdout, indent=4, ensure_ascii=False)"
