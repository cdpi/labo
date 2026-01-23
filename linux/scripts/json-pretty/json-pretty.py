#!/usr/bin/env python3.8

# ./json-pretty.py < Q408810.json

import json, sys

data=json.load(sys.stdin)

json.dump(data, sys.stdout, indent=4, ensure_ascii=False)
