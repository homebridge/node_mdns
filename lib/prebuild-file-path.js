const fs = require('fs');
const os = require('os');
const path = require('path');

function prebuildName() {
  const tags = [];

  tags.push(process.versions.hasOwnProperty('electron') ? 'electron' : 'node');

  tags.push('abi' + process.versions.modules);

  if (os.platform() === 'linux' && fs.existsSync('/etc/alpine-release')) {
    tags.push('musl');
  }

  return tags.join('.') + '.node';
}

const pathToBuild = path.resolve(__dirname, `../prebuilds/${os.platform()}-${os.arch()}/${prebuildName()}`);

module.exports = fs.existsSync(pathToBuild) ? pathToBuild : null;
