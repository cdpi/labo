#!/usr/bin/env bash

cat ./red.json | nc -u -w 1 172.22.22.95 38899
