# !/usr/bin/env node

rm -rf node_modules
mv package-lock.json package-lock.json.bak
mv package.json package.json.bak
cp package.json.t package.json

npm i -D autoprefixer cssnano sass postcss postcss-cli browser-sync cypress gazeall npm-run-all shx

if [ "$1" = "-" ]; then
  rm -rf node_modules
  rm -f package-lock.json yarn.lock
fi
