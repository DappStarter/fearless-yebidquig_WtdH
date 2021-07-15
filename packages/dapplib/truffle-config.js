require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remove coach give enroll brisk type'; 
let testAccounts = [
"0x5f5cf972917020cbc415a927dd91cdae8224fd09572080257aeb26660bccf90f",
"0x471df5c81fa366d8a55e1b102f4c256c9b11e45dfdf758bad12611e800bb9e39",
"0x1f6c461db2cc4242b4222a469a061733e1ad10cc3543898ba63a42b3bb8d94fc",
"0x6d53ad8d51092b445f486a45978833ca4557bab419973fd26e36b96ff0e4755d",
"0x50ebd1b3c0e581f2dcaaff668f8cfd3039fecd053c3e675459d46662eef7568e",
"0x8f2eddac8eaea4d198a314ea640debb79d8cfb40a3c1efef65c18108ce2d5e86",
"0x2aec96da61a151c0df217dd5d86fdef625456c8ed2300f0289d102a0242f6583",
"0x417f3bd4aded56244161f224d81ba66052a21d720901e51bcb587888de2e8db3",
"0x2e13517349d47e245c20a0b0618dbaa612a7b4e45c740963ead9c7e481d22e04",
"0x72e0225eb9323057452fe94bca2d6e98ebcd3e1331781f96b6352c64f8d11f7c"
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

