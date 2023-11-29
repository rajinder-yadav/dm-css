#!/usr/bin/env bash

# NOTE: Use "npm pack --dry-run" to see what would happen.

cp package.json package.tmp.json
cp package.pub.json package.json
if [ "$1" == "dry" ]; then
  echo "===== DRY RUN ===="
  npm pack --dry-run
else
  npm pack
fi
cp package.tmp.json package.json && rm package.tmp.json
