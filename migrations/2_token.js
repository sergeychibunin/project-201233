const TTTToken = artifacts.require("TTTToken");
const Crowdsale = artifacts.require("TTTCrowdsale");

module.exports = async (deployer, network, [owner]) => {
  await deployer.deploy(TTTToken, "TTT Token", "TTT", 18, 210000);

  const now = Math.floor(Date.now() / 1000);
  const day = 24 * 60 * 60;

  const openingTime = now;
  const closingTime = now + 47 * day;
  const rate = 1000;

  await deployer.deploy(Crowdsale, openingTime, closingTime, rate, owner, TTTToken.address);

  const Token_ = await TTTToken.deployed();
  await Token_.transfer(Crowdsale.address, 200000 * (10 ** 18), { from: owner });
};