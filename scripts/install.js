'use strict'

const os = require('os');
const path = require('path');
const spawn = require('child_process').spawn;

const gypProcess = spawn(os.platform() === 'win32' ? 'node-gyp.cmd' : 'node-gyp', ['rebuild'], {
  cwd: path.join(__dirname, '..'),
  stdio: 'inherit'
});

gypProcess.on('exit', function (code) {
  // always exit without error
  process.exit(0);
});
