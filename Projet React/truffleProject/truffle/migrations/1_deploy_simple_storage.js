  const ActeDeDeces = artifacts.require("ActeDeDeces");
  const ActeDeNaissances = artifacts.require("ActeDeNaissances");
  module.exports = function (deployer) {
    deployer.deploy(ActeDeDeces);
    deployer.deploy(ActeDeNaissances);
  };
