#!/bin/sh

. /etc/os-release

cd /node-mdns
rm -rf node_modules

echo "Installing modules..."

npm install -g node-gyp

npm install --ignore-scripts

echo "Building for $(uname -m)..."

node .prebuild/buildify.js
