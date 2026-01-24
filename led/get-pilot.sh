#!/usr/bin/env bash

echo '{"method": "getPilot", "params": {}}' | nc -u -w 1 172.22.22.95 38899
