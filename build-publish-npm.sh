#!/usr/bin/env bash

npm-up.sh
npm run build

mv package.json package.tmp.json
cp package.pub.json package.json

npm login --registry https://registry.npmjs.org
npm publish

# Leave behind a backup
cp package.tmp.json package.json
