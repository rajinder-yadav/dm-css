{
  "name": "dm-css",
  "version": "2.3.3",
  "description": "Dyno Might CSS - Fast Compact CSS Toolkit for everyone!",
  "scripts": {
    "start": "run-p dev web",
    "dev": "gazeall -V -s 'prebuild build postbuild webrefresh' 'src/**/*' 'test/**/*'",
    "web": "browser-sync start --config bs-config.js",
    "webrefresh": "browser-sync reload",
    "test": "cypress open",
    "prebuild": "run-s clean unlink",
    "clean": "shx rm -rf css",
    "build": "sass src/:css/",
    "postbuild": "run-s prefix minify link",
    "link": "npm link",
    "prefix": "postcss css/dm.css --use autoprefixer --no-map -o css/dm.prefix.css",
    "minify": "postcss --no-map css/dm.prefix.css -o css/dm.min.css",
    "unlink": "npm unlink -g"
  },
  "keywords": [
    "css",
    "layout",
    "html",
    "web"
  ],
  "files": [
    "css/dm.css",
    "css/dm.min.css",
    "css/dm.prefix.css"
  ],
  "author": "Rajinder Yadav <devguy.ca@gmail.com>",
  "license": "GPL-3.0",
  "repository": {
    "type": "git",
    "url": "https://github.com/rajinder-yadav/dm-css"
  },
  "homepage": "http://dynomightcss.com/",
  "dependencies": {},
  "devDependencies": {}
}
