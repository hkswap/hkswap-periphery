const HKSRouter = artifacts.require("HKSRouter");

module.exports = function (deployer) {
  deployer.deploy(HKSRouter, factoryAddress, WethAddress);
};
