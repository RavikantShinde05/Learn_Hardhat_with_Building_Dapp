const { artifacts } = require("hardhat");

require("@nomicfoundation/hardhat-toolbox");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  network: {
    hardhat:{
      chainId: 1337
    },
  },
path:{
  artifacts:"./src/artifacts",
}

};
