require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera food eight recipe stereo method coral light army giant'; 
let testAccounts = [
"0x1cd67a1719ca6bda46663fbcaae4fbc5379de07201131073349973da84c57aa2",
"0x70c8bf44d7f97491105d2304691cf025d28ad659a028aa824133c3f5f2fb8d9d",
"0x1dc50a20aba1758911873b05b108678401fdfdd28be4213e1fc8caf4d90109ef",
"0xbcbd57a6c0334291fd0b3c37d1b37892137c90798350fe0d9f8293d7a6198e9e",
"0x1ce4df97691af399d19522ece81b130567384e3a260c5cf1c26a64e784f47658",
"0x213751cf6e7572f4cf73846f854334d540dd41ef6f74a7098db5a7895d9dcdad",
"0x2a2ef6b55f00ff40861c62f6bd2b5fbc615b621f8fa7c0da41d78593f14c4b90",
"0x2540840fcde8de6cb25a11816db47120b117c605b427791ef7773898e72440d9",
"0x203dfc67b63bde7a3109a66beccc32a89916617fe2d172afc37c3b943dc35293",
"0x6f5a3720a97a0b25ff6aca1d423b21c00c6a62f787ca12f77888a6178d18684e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

