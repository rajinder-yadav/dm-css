# !/usr/bin/env node

rm -rf node_modules
mv package-lock.json package-lock.tmp.json
mv package.json package.tmp.json
cp package.dev.json package.json

npm i -D autoprefixer cssnano sass postcss postcss-cli browser-sync cypress gazeall npm-run-all shx
