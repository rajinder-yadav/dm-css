#!/usr/bin/env bash

# NOTE: Use "npm pack --dry-run" to see what would happen.

npm run build

mv package.json package.tmp.json
cp package.pub.json package.json
if [ "$1" == "dry" ]; then
  echo "===== DRY RUN ===="
  npm pack --dry-run
else
  npm pack
fi

npm i -g dm-css-2.3.0.tgz

mv package.tmp.json package.json
