const mdnsPath = require('../lib/prebuild-file-path');

if (mdnsPath) {
  console.log('Prebuild binary exists:', mdnsPath);
  try {
    require(mdnsPath);
  } catch (e) {
    console.error('Prebuild binary failed test.');
    process.exit(1);
  }
  process.exit(0);
} else {
  console.error('Prebuild binary missing for platform.');
  process.exit(1);
}