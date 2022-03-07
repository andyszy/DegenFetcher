const DegenFetcher = artifacts.require("DegenFetcher");

module.exports = function(deployer) {
  deployer.deploy(DegenFetcher);
};
