#!/bin/sh

. /etc/os-release

cd /node-mdns
# rm -rf node_modules

echo "Building for $(uname -m)..."

npm install --ignore-scripts

node .prebuild/buildify.js
