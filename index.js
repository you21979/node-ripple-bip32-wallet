var bip39 = require("bip39");
var keypairs = require('ripple-keypairs');

var generateAddress = function(options) {
  var secret = keypairs.generateSeed(options);
  var keypair = keypairs.deriveKeypair(secret);
  var address = keypairs.deriveAddress(keypair.publicKey);
  return { secret: secret, address: address };
}

var mnemonicToRippleAddress = module.exports = function(mnemonic, password){
    var masterseed = bip39.mnemonicToSeed(mnemonic, password);
    return rippleAddress = generateAddress({ entropy: masterseed })
}

