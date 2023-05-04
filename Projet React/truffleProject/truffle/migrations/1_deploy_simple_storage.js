  const ActeDeNaissances = artifacts.require("ActeDeNaissances");

  module.exports = function (deployer) {
    deployer.deploy(ActeDeNaissances);
  };
