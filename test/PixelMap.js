const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
  
  describe("PixelMap", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployOneYearLockFixture() {
      const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
      const ONE_GWEI = 1_000_000_000;
  
      const lockedAmount = ONE_GWEI;
      const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;
  
      // Contracts are deployed using the first signer/account by default
      const [owner, otherAccount] = await ethers.getSigners();
  
      const PixelMap = await ethers.getContractFactory("PixelMap");
      const pixelMap = await PixelMap.deploy();
  
      return { pixelMap, unlockTime, lockedAmount, owner, otherAccount };
    }
  
    describe("setPixel", function () {
      it("Should update the pixel", async function () {
        const { pixelMap } = await loadFixture(deployOneYearLockFixture);
        const color = 5;
        await pixelMap.setPixel(0,0,color)
  
        expect(await pixelMap.getPixel(0,0)).to.equal(color);
      });
    });
  });
  