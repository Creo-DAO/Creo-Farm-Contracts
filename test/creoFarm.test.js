const Creo = artifacts.require("Creo");
const CreoFarm = artifacts.require("CreoFarm");
const tokens = (n) => web3.utils.toWei(n, `ether`);

contract("Creo", function (accounts) {
  describe("First Tests", () => {
    let creo, farm, farmBal, active, locked, stakeBal, apr;
    before(async () => {
      creo = await Creo.deployed();
      farm = await CreoFarm.deployed();
    });
    it("It should have launch details ", async () => {
      const owner = await farm.owner();
      assert.strictEqual(owner, accounts[0], "incorrect owner");
      active = await farm.farmActive();
      assert.strictEqual(active, false, "incorrect active status");
      farmBal = await farm.farmBalance();
      assert.strictEqual(farmBal.toString(), tokens("0"), "incorrect balance");
    });
    it("It should have stake correctly ", async () => {
      await farm.setActiveStatus(true);
      await creo.approve.sendTransaction(farm.address, tokens("200"), {
        from: accounts[1],
      });
      await farm.stake.sendTransaction(tokens("100"), { from: accounts[1] });
      locked = await farm.totalLocked();
      stakeBal = await farm.stakingBalance(accounts[1]);
      assert.strictEqual(stakeBal.toString(), tokens("100"), "incorrect owner");
      assert.strictEqual(locked.toString(), tokens("100"), "incorrect owner");

      await creo.approve.sendTransaction(farm.address, tokens("200"), {
        from: accounts[2],
      });
      await farm.stake.sendTransaction(tokens("100"), { from: accounts[2] });
      locked = await farm.totalLocked();
      stakeBal = await farm.stakingBalance(accounts[2]);
      assert.strictEqual(stakeBal.toString(), tokens("100"), "incorrect owner");
      assert.strictEqual(locked.toString(), tokens("200"), "incorrect owner");

      await creo.approve.sendTransaction(farm.address, tokens("200"), {
        from: accounts[3],
      });
      await farm.stake.sendTransaction(tokens("100"), { from: accounts[3] });
      locked = await farm.totalLocked();
      stakeBal = await farm.stakingBalance(accounts[3]);
      assert.strictEqual(stakeBal.toString(), tokens("100"), "incorrect owner");
      assert.strictEqual(locked.toString(), tokens("300"), "incorrect owner");
    });
    
  });
});
