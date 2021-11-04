const CreoFarm = artifacts.require("CreoFarm");
const tokens = (n) => web3.utils.toWei(n, `ether`);
module.exports = async function (callback) {
  let farm = await CreoFarm.deployed();
  await farm.setActiveStatus(true);
  await farm.stake(tokens("50"));
  //   codes
  console.log("Staked");
  callback();
};

// CLI Test commands
// creo = await Creo.deployed();
// (await farm.totalLocked()).toString();
// (await farm.claimedRewards()).toString();
// (await farm.unclaimedRewards()).toString();
// (await farm.stakingBalance(accounts[0])).toString();
// (await farm.stakingBalance(accounts[1])).toString();
// (await farm.stakedTime(accounts[0])).toString();
// (await farm.startTime(accounts[0])).toString();
// (await farm.rewardBalance(accounts[0])).toString();
// (await farm.rewardBalance(accounts[1])).toString();
// (await farm.farmBalance()).toString();
// (await farm.APR()).toString();
// farm.stake("50000000000000000000");
// farm.unstake("50000000000000000000");
// farm.withdrawYield();
// farm.withdrawYield({from: accounts[1]});
// (await creo.balanceOf(farm.address)).toString();
// (await creo.balanceOf(accounts[0])).toString();
// (await creo.balanceOf(accounts[1])).toString();
// creo.transfer(accounts[1], web3.utils.toWei("1000", "ether"));
// await farm.stake.sendTransaction(tokens("100"), { from: accounts[4] });
// locked = await farm.totalLocked();
// assert.strictEqual(locked.toString(), tokens("400"), "incorrect owner");
// await farm.stake.sendTransaction(tokens("100"), { from: accounts[5] });
// locked = await farm.totalLocked();
// assert.strictEqual(locked.toString(), tokens("500"), "incorrect owner");

// // Frequently used cli Commands
// //init
// let router = await UniswapV2Router02.at("0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D");
// let factory = await PancakeFactory.deployed();
// let creo = await Creo.deployed();
// farm = await CreoLPFarm.deployed();
// router = await UniswapV2Router02.at("0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D");
// let accounts = await web3.eth.getAccounts();

// //others
// router.addLiquidityETH(creo.address,web3.utils.toWei("5000", "ether"),web3.utils.toWei("5000", "ether"),web3.utils.toWei("0.5", "ether"),accounts[0],1634331759,{ value: web3.utils.toWei("0.5", "ether") }),
// creo.approve(router.address, web3.utils.toWei("5000","ether"));
// creo.approve(farm.address, web3.utils.toWei("1000", "ether"));
// farm.stake(web3.utils.toWei("100", "ether"));
// farm.stake(web3.utils.toWei("100", "ether"), {from: accounts[1]});
// farm.unstake(web3.utils.toWei("100", "ether"));
// farm.unstake(web3.utils.toWei("100", "ether"), { from: accounts[1] });
// farm.swapRewardForLp(accounts[0]);
// (await creo.allowance(accounts[0], farm.address)).toString();
// (await creo.allowance(accounts[1], farm.address)).toString();
// (await creo.allowance(accounts[0], router.address)).toString();