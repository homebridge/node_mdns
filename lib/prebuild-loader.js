const mdnsPath = require('./prebuild-file-path');

let mdns;

try {
  mdns = require(mdnsPath || '../build/Release/dns_sd_bindings');
} catch (outerError) {
  try {
    mdns = require(mdnsPath ? '../build/Release/dns_sd_bindings' : '../build/Release/dns_sd_bindings');
  } catch (innerError) {
    console.error('innerError', innerError);
    // Re-throw the exception from the Release require if the Debug require fails as well
    throw outerError;
  }
}

module.exports = mdns;
