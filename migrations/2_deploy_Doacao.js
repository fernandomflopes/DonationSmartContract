const doacao = artifacts.require("../Doacao.sol");

const doacaoSettings = {
  beneficiario: "0xb14FF98692a4a03c7e8Ef0A61464204EdCd4E545".toString("hex")
}

module.exports = function (deployer, network, accounts) {
  deployer.deploy(doacao, doacaoSettings.beneficiario);
};
