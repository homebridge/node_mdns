'use strict'

const os = require('os');
const path = require('path');
const spawn = require('child_process').spawn;

console.log('Compiling mdns bindings, this may take a few minutes, please wait...')

const gypProcess = spawn(os.platform() === 'win32' ? 'node-gyp.cmd' : 'node-gyp', ['rebuild'], {
  cwd: path.join(__dirname, '..'),
  stdio: process.env.MDNS_DEBUG ? 'inherit' : 'ignore' 
});

gypProcess.on('error', (err) => {
  console.log(err)
});

gypProcess.on('exit', function (code) {
  if (code !== 0) {
    console.log('Failed to compile mdns bindings; native mdns advertiser option will not be available.')
  } else {
    console.log('Succesfully compiled mdns bindings.')
  }
  // always exit without error
  process.exit(0);
});
