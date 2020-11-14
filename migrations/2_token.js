const TTTToken = artifacts.require('./TTTToken.sol');

module.exports = (deployer) => {
    deployer.deploy(TTTToken)
}