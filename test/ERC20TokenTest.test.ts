import {expect} from 'chai';
import {waffle, ethers, deployments} from "hardhat";
const { provider, deployMockContract } = waffle;
import {BigNumber, Signer, Wallet} from "ethers";
import {
  TestToken,
  TestToken__factory,
  IACLTest,
  IAsset,
  PublicSales,
  FundingTeam,
  PublicSales__factory,
  FundingTeam__factory,
  IERC20Extra,
  IERC20Taxable,
  IERC20Lockable
} from "../typechain/types";
import {MockContract} from "ethereum-waffle";
import {Address} from "hardhat-deploy/dist/types";

export enum AssetType {
  NONE,
  ERC20,
  ERC721,
  ERC1155,
}

export enum AssetSafeModeStatus {
  NONE,
  DISABLED,
  ENABLED,
}

export enum LockState {
  NONE,
  LOCKED,
  CLAIMED,
  UNLOCKED,
}


describe('Litogen Token and Assets Tests', function() {
  let admin: Signer;
  let treasury: Signer;
  let user1: Signer;
  let user2: Signer;
  let adminWallet: Wallet;
  let treasuryWallet: Wallet;
  let userWallet1: Wallet;
  let userWallet2: Wallet;
  let networkChainId: BigNumber;
  let livelyGuard: MockContract;
  let erc20TokenTest: TestToken;
  let publicSaleAsset: PublicSales;
  let fundingTeamAsset: FundingTeam;

  const tokenDecimal = BigNumber.from(10).pow(9);
  const totalSupply = BigNumber.from(10000).mul(tokenDecimal);
  const assetBalance = BigNumber.from(5000).mul(tokenDecimal);
  const dummyAmount = BigNumber.from(1000).mul(tokenDecimal);

  const user1LockIds: string[] = [];
  const user2LockIds: string[] = [];
  const taxValue = BigNumber.from(3);

  this.beforeAll(async () => {
    [admin, treasury, user1, user2] = await ethers.getSigners();
    [adminWallet, treasuryWallet, userWallet1, userWallet2] = waffle.provider.getWallets();
    networkChainId = await ethers.provider.send("eth_chainId", []);

    const profileACL = await deployments.getArtifact("IACLTest");
    livelyGuard = await deployMockContract(admin, profileACL.abi);
    await livelyGuard.mock.supportsInterface.returns(true);
    await livelyGuard.mock.profileHasAccountAccess.returns(0);
  });

  it("Should ERC20TokenTest deploy success", async () => {
    // given
    const tokenFactory = new TestToken__factory(admin);

    // when
    erc20TokenTest = await tokenFactory.connect(admin).deploy()

    // then
    expect(await erc20TokenTest.name()).to.be.equal("TestToken");
    expect(await erc20TokenTest.symbol()).to.be.equal("Test");
    expect(await erc20TokenTest.version()).to.be.equal("1.1.0");
    expect(await erc20TokenTest.decimals()).to.be.equal(9);
    expect(await erc20TokenTest.totalSupply()).to.be.equal(totalSupply);
    expect(await erc20TokenTest.profile()).to.be.equal("TestProfile");
    expect(await erc20TokenTest.acl()).to.be.equal(ethers.constants.AddressZero);
    expect(await erc20TokenTest.owner()).to.be.equal(adminWallet.address);
  })

  it("Should PublicSaleAsset deploy success", async () => {
    // given
    const assetFactory = new PublicSales__factory(admin);

    // when
    publicSaleAsset = await assetFactory.deploy(erc20TokenTest.address)

    // then
    expect(await publicSaleAsset.assetName()).to.be.equal("publicSales");
    expect(await publicSaleAsset.assetType()).to.be.equal(AssetType.ERC20);
    expect(await publicSaleAsset.assetVersion()).to.be.equal("1.1.0");
    expect(await publicSaleAsset.assetProfile()).to.be.equal("TestProfile");
    expect(await publicSaleAsset.assetToken()).to.be.equal(erc20TokenTest.address);
    expect(await publicSaleAsset.assetAccessControl()).to.be.equal(ethers.constants.AddressZero);
    expect(await publicSaleAsset.owner()).to.be.equal(adminWallet.address);
    expect(await publicSaleAsset.assetSafeMode()).to.be.equal(AssetSafeModeStatus.DISABLED);
    expect(await publicSaleAsset.assetBalance()).to.be.equal(0);

    // and
    const assetInfo: IAsset.AssetInfoStruct = await publicSaleAsset.assetInfo();
    expect(assetInfo.name).to.be.equal("publicSales");
    expect(assetInfo.version).to.be.equal("1.1.0");
    expect(assetInfo.atype).to.be.equal(AssetType.ERC20);
    expect(assetInfo.accessControl).to.be.equal(ethers.constants.AddressZero);
    expect(assetInfo.owner).to.be.equal(adminWallet.address);
    expect(assetInfo.token).to.be.equal(erc20TokenTest.address);
    expect(assetInfo.status).to.be.equal(AssetSafeModeStatus.DISABLED);
    expect(assetInfo.balance).to.be.equal(0);
    expect(assetInfo.profile).to.be.equal("TestProfile");
  })

  it("Should FundingTeamAsset deploy success", async () => {
    // given
    const assetFactory = new FundingTeam__factory(admin);

    // when
    fundingTeamAsset = await assetFactory.deploy(erc20TokenTest.address)

    // then
    expect(await fundingTeamAsset.assetName()).to.be.equal("fundingTeam");
    expect(await fundingTeamAsset.assetType()).to.be.equal(AssetType.ERC20);
    expect(await fundingTeamAsset.assetVersion()).to.be.equal("1.1.0");
    expect(await fundingTeamAsset.assetProfile()).to.be.equal("TestProfile");
    expect(await fundingTeamAsset.assetToken()).to.be.equal(erc20TokenTest.address);
    expect(await publicSaleAsset.assetAccessControl()).to.be.equal(ethers.constants.AddressZero);
    expect(await publicSaleAsset.owner()).to.be.equal(adminWallet.address);
    expect(await fundingTeamAsset.assetSafeMode()).to.be.equal(AssetSafeModeStatus.DISABLED);
    expect(await fundingTeamAsset.assetBalance()).to.be.equal(0);

    // and
    const assetInfo: IAsset.AssetInfoStruct = await fundingTeamAsset.assetInfo();
    expect(assetInfo.name).to.be.equal("fundingTeam");
    expect(assetInfo.version).to.be.equal("1.1.0");
    expect(assetInfo.atype).to.be.equal(AssetType.ERC20);
    expect(assetInfo.accessControl).to.be.equal(ethers.constants.AddressZero);
    expect(assetInfo.owner).to.be.equal(adminWallet.address);
    expect(assetInfo.token).to.be.equal(erc20TokenTest.address);
    expect(assetInfo.status).to.be.equal(AssetSafeModeStatus.DISABLED);
    expect(assetInfo.balance).to.be.equal(0);
    expect(assetInfo.profile).to.be.equal("TestProfile");
  })

  it("Should Distribute ERC20 token success", async() => {

    // when
    await expect(erc20TokenTest.connect(admin).distributeToken([publicSaleAsset.address, fundingTeamAsset.address], treasuryWallet.address))
      .to.emit(erc20TokenTest, "Transfer")
      .withArgs(adminWallet.address, publicSaleAsset.address, assetBalance)
      .to.emit(erc20TokenTest, "Transfer")
      .withArgs(adminWallet.address, fundingTeamAsset.address, assetBalance)

    // then
    expect(await publicSaleAsset.assetBalance()).to.be.equal(assetBalance);
    expect(await fundingTeamAsset.assetBalance()).to.be.equal(assetBalance);
  })

  it("Should reDistribute ERC20 token failed", async() => {

    // when and then
    await expect(erc20TokenTest.connect(admin).distributeToken([publicSaleAsset.address, fundingTeamAsset.address], treasuryWallet.address))
      .to.revertedWith("Already Distributed")
  })

  it("Should set tax rate by admin success", async () => {

    // when
    await expect(erc20TokenTest.connect(admin).taxUpdateRate(0))
      .to.emit(erc20TokenTest, "TaxRateUpdated")
      .withArgs(adminWallet.address, 0);

    // then
    expect(await erc20TokenTest.taxRate()).to.be.equal(0);
  });

  it("Should PublicSaleAsset transfer token to user1 success", async () => {
    // given
    const publicSaleAssetBalanceBefore = await erc20TokenTest.balanceOf(publicSaleAsset.address);
    const user1BalanceBefore = await erc20TokenTest.balanceOf(userWallet1.address);

    // when
    await expect(
      publicSaleAsset.connect(admin).tokenTransfer(userWallet1.address, dummyAmount)
    )
      .to.emit(erc20TokenTest, "Transfer")
      .withArgs(publicSaleAsset.address, userWallet1.address, dummyAmount);

    // and
    const publicSaleAssetBalanceAfter = await erc20TokenTest.balanceOf(publicSaleAsset.address);
    const user1BalanceAfter = await erc20TokenTest.balanceOf(userWallet1.address);
    expect(publicSaleAssetBalanceAfter.toString()).to.be.equal(
      publicSaleAssetBalanceBefore.sub(dummyAmount).toString()
    );
    expect(user1BalanceAfter.toString()).to.be.equal(user1BalanceBefore.add(dummyAmount).toString());
  });

  it("Should user1 to user2 transfer token success", async () => {
    // given
    const user1BalanceBefore = await erc20TokenTest.balanceOf(userWallet1.address);
    const user2BalanceBefore = await erc20TokenTest.balanceOf(userWallet2.address);
    const amount = BigNumber.from(100).mul(tokenDecimal);

    // when
    await expect(erc20TokenTest.connect(user1).transfer(userWallet2.address, amount))
      .to.emit(erc20TokenTest, "Transfer")
      .withArgs(userWallet1.address, userWallet2.address, amount);

    // then
    const user1BalanceAfter = await erc20TokenTest.balanceOf(userWallet1.address);
    const user2BalanceAfter = await erc20TokenTest.balanceOf(userWallet2.address);
    expect(user1BalanceAfter.toString()).to.be.equal(user1BalanceBefore.sub(amount).toString());
    expect(user2BalanceAfter.toString()).to.be.equal(user2BalanceBefore.add(amount).toString());
  });

  it("Should PublicSaleAsset approve to user1 and user2 success", async () => {
    // given
    const user2AllowanceBefore = await erc20TokenTest.allowance(
      publicSaleAsset.address,
      userWallet2.address
    );
    const user1AllowanceBefore = await erc20TokenTest.allowance(
      publicSaleAsset.address,
      userWallet1.address
    );

    // when
    await expect(
      publicSaleAsset.connect(admin).tokenApprove(userWallet2.address, dummyAmount)
    )
      .to.emit(erc20TokenTest, "Approval")
      .withArgs(publicSaleAsset.address, userWallet2.address, user2AllowanceBefore.add(dummyAmount));

    await expect(
      publicSaleAsset.connect(admin).tokenApprove(userWallet1.address, dummyAmount)
    )
      .to.emit(erc20TokenTest, "Approval")
      .withArgs(publicSaleAsset.address, userWallet1.address, user1AllowanceBefore.add(dummyAmount));

    // then
    const user2AllowanceAfter = await erc20TokenTest.allowance(publicSaleAsset.address, userWallet2.address);
    const user1AllowanceAfter = await erc20TokenTest.allowance(publicSaleAsset.address, userWallet2.address);
    expect(user2AllowanceAfter.toString()).to.be.equal(user2AllowanceBefore.add(dummyAmount).toString());
    expect(user1AllowanceAfter.toString()).to.be.equal(user1AllowanceBefore.add(dummyAmount).toString());
  });

  it("Should user1 approve to PublicSaleAsset success", async () => {
    // given
    const publicSaleAssetBefore = await erc20TokenTest.allowance(
      userWallet1.address,
      publicSaleAsset.address,
    );

    await expect(
      erc20TokenTest.connect(user1).approve(publicSaleAsset.address, dummyAmount)
    )
      .to.emit(erc20TokenTest, "Approval")
      .withArgs(userWallet1.address, publicSaleAsset.address, publicSaleAssetBefore.add(dummyAmount));

    // when
    // then
    const publicSaleAssetAfter = await erc20TokenTest.allowance(userWallet1.address, publicSaleAsset.address);
    expect(publicSaleAssetAfter.toString()).to.be.equal(publicSaleAssetBefore.add(dummyAmount).toString());
  });

  it("Should user2 transferFrom from PublicSaleAsset account success", async () => {
    // given
    const publicSaleAssetAllowanceBefore = await erc20TokenTest.allowance(
      publicSaleAsset.address,
      userWallet2.address
    );
    const user1BalanceBefore = await erc20TokenTest.balanceOf(userWallet1.address);
    const amount = BigNumber.from(100).mul(tokenDecimal);
    const finalAllowance = publicSaleAssetAllowanceBefore.sub(amount);

    // when
    await expect(
      erc20TokenTest.connect(user2).transferFrom(publicSaleAsset.address, userWallet1.address, amount)
    )
      .to.emit(erc20TokenTest, "Transfer")
      .withArgs(publicSaleAsset.address, userWallet1.address, amount)
      .to.emit(erc20TokenTest, "Approval")
      .withArgs(publicSaleAsset.address, userWallet2.address, finalAllowance);

    // then
    const publicSaleAssetAllowanceAfter = await erc20TokenTest.allowance(
      publicSaleAsset.address,
      userWallet2.address
    );
    const user1BalanceAfter = await erc20TokenTest.balanceOf(userWallet1.address);
    expect(publicSaleAssetAllowanceAfter.toString()).to.be.equal(finalAllowance.toString());
    expect(user1BalanceAfter.toString()).to.be.equal(user1BalanceBefore.add(amount).toString());
  });

  it("Should PublicSaleAsset increase allowance to user2 success", async () => {
    // given
    const publicSaleAssetAllowanceBefore = await erc20TokenTest.allowance(
      publicSaleAsset.address,
      userWallet2.address
    );
    const finalAllowance = publicSaleAssetAllowanceBefore.add(dummyAmount);

    // when
    await expect(
      publicSaleAsset
        .connect(admin)
        .tokenIncreaseAllowance(userWallet2.address, dummyAmount)
    )
      .to.emit(erc20TokenTest, "Approval")
      .withArgs(publicSaleAsset.address, userWallet2.address, finalAllowance)

    // then
    const publicSaleAssetAllowanceAfter = await erc20TokenTest.allowance(
      publicSaleAsset.address,
      userWallet2.address
    );
    expect(publicSaleAssetAllowanceAfter.toString()).to.be.equal(finalAllowance.toString());
  });

  it("Should PublicSaleAsset decrease allowance from user2 success", async () => {
    // given
    const publicSaleAssetAllowanceBefore = await erc20TokenTest.allowance(
      publicSaleAsset.address,
      userWallet2.address
    );
    const finalAllowance = publicSaleAssetAllowanceBefore.sub(dummyAmount);

    // when
    await expect(
      publicSaleAsset
        .connect(admin)
        .tokenDecreaseAllowance(userWallet2.address, dummyAmount)
    )
      .to.emit(erc20TokenTest, "Approval")
      .withArgs(publicSaleAsset.address, userWallet2.address, finalAllowance)

    // then
    const publicSaleAssetAllowanceAfter = await erc20TokenTest.allowance(
      publicSaleAsset.address,
      userWallet2.address
    );
    expect(publicSaleAssetAllowanceAfter.toString()).to.be.equal(finalAllowance.toString());
  });

  it("Should user2 transferFrom token exceeded allowance from PublicSaleAsset account failed", async () => {
    // given
    const publicSaleAssetAllowanceBefore = await erc20TokenTest.allowance(
      publicSaleAsset.address,
      userWallet2.address
    );

    const assetMangerBalanceBefore = await erc20TokenTest.balanceOf(publicSaleAsset.address);
    const amount = dummyAmount.add(10);

    // when
    await expect(
      erc20TokenTest.connect(user2).transferFrom(publicSaleAsset.address, userWallet1.address, amount)
    ).to.revertedWith("Illegal Allowance");

    // then
    const publicSaleAssetAllowanceAfter = await erc20TokenTest.allowance(
      publicSaleAsset.address,
      userWallet2.address
    );
    const assetMangerBalanceAfter = await erc20TokenTest.balanceOf(publicSaleAsset.address);
    expect(publicSaleAssetAllowanceBefore.toString()).to.be.equal(publicSaleAssetAllowanceAfter.toString());
    expect(assetMangerBalanceBefore.toString()).to.be.equal(assetMangerBalanceAfter.toString());
  });

  it("Should user1 permit to user2 success", async () => {
    // given
    const user1AllowanceBefore = await erc20TokenTest.allowance(userWallet1.address, userWallet2.address);
    const tokenName = await erc20TokenTest.name();
    const tokenVersion = await erc20TokenTest.version();
    const deadline = BigNumber.from(Date.now() + 10000);
    const nonce = await erc20TokenTest.nonces(userWallet1.address);
    const user1Signature = await generatePermitDomainSignatureByWaffleProvider(
      userWallet1.address,
      userWallet2.address,
      dummyAmount,
      nonce,
      deadline,
      erc20TokenTest.address,
      userWallet1.address,
      tokenName,
      tokenVersion,
      networkChainId.toString()
    );

    // when
    await expect(
      erc20TokenTest
        .connect(user1)
        .permit(userWallet1.address, userWallet2.address, dummyAmount, deadline, user1Signature)
    )
      .to.emit(erc20TokenTest, "Approval")
      .withArgs(userWallet1.address, userWallet2.address, dummyAmount);

    // then
    const nonceAfter = await erc20TokenTest.nonces(userWallet1.address);
    const user1AllowanceAfter = await erc20TokenTest.allowance(userWallet1.address, userWallet2.address);
    expect(user1AllowanceAfter.toString()).to.be.equal(user1AllowanceBefore.add(dummyAmount).toString());
    expect(nonceAfter.toString()).to.be.equal(nonce.add(BigNumber.from(1)).toString());
  });

  it("Should user2 transferFrom from user1 account success", async () => {
    // given
    let user1Allowance = await erc20TokenTest.allowance(userWallet1.address, userWallet2.address);
    const user1BalanceBefore = await erc20TokenTest.balanceOf(userWallet1.address);
    const adminBalanceBefore = await erc20TokenTest.balanceOf(adminWallet.address);
    const amount = BigNumber.from(100).mul(tokenDecimal);
    const finalAllowance = user1Allowance.sub(amount);

    // when
    await expect(erc20TokenTest.connect(user2).transferFrom(userWallet1.address, adminWallet.address, amount))
      .to.emit(erc20TokenTest, "Transfer")
      .withArgs(userWallet1.address, adminWallet.address, amount)
      .to.emit(erc20TokenTest, "Approval")
      .withArgs(userWallet1.address, userWallet2.address, finalAllowance);

    // then
    user1Allowance = await erc20TokenTest.allowance(userWallet1.address, userWallet2.address);
    const user1BalanceAfter = await erc20TokenTest.balanceOf(userWallet1.address);
    const adminBalanceAfter = await erc20TokenTest.balanceOf(adminWallet.address);
    expect(user1Allowance.toString()).to.be.equal(finalAllowance.toString());
    expect(user1BalanceAfter.toString()).to.be.equal(user1BalanceBefore.sub(amount).toString());
    expect(adminBalanceAfter.toString()).to.be.equal(adminBalanceBefore.add(amount).toString());
  });

  it("Should user1 batch transfer token success", async () => {
    // given
    const user1BalanceBefore = await erc20TokenTest.balanceOf(userWallet1.address);
    const user2BalanceBefore = await erc20TokenTest.balanceOf(userWallet2.address);
    const value = BigNumber.from(50).mul(tokenDecimal);
    const batchTransfer: IERC20Extra.BatchTransferRequestStruct = {
      amount: value,
      to: userWallet2.address,
    };

    // when
    await expect(erc20TokenTest.connect(user1).batchTransfer([batchTransfer]))
      .to.emit(erc20TokenTest, "Transfer")
      .withArgs(userWallet1.address, userWallet2.address, batchTransfer.amount)

    // then
    const user1BalanceAfter = await erc20TokenTest.balanceOf(userWallet1.address);
    const user2BalanceAfter = await erc20TokenTest.balanceOf(userWallet2.address);

    expect(user1BalanceAfter).to.be.equal(user1BalanceBefore.sub(value).toString());
    expect(user2BalanceAfter).to.be.equal(user2BalanceBefore.add(value).toString());
  });

  it("Should PublicSaleAsset batch transfer token success", async () => {
    // given
    const user1BalanceBefore = await erc20TokenTest.balanceOf(userWallet1.address);
    const publicSaleAssetBefore = await erc20TokenTest.balanceOf(publicSaleAsset.address);
    const value = BigNumber.from(50).mul(tokenDecimal);
    const batchTransfer: IERC20Extra.BatchTransferRequestStruct = {
      amount: value,
      to: userWallet1.address,
    };

    // when
    await expect(publicSaleAsset.connect(admin).tokenBatchTransfer([batchTransfer]))
      .to.emit(erc20TokenTest, "Transfer")
      .withArgs(publicSaleAsset.address, userWallet1.address, batchTransfer.amount)

    // then
    const user1BalanceAfter = await erc20TokenTest.balanceOf(userWallet1.address);
    const publicSaleAssetAfter = await erc20TokenTest.balanceOf(publicSaleAsset.address);

    expect(user1BalanceAfter).to.be.equal(user1BalanceBefore.add(value).toString());
    expect(publicSaleAssetAfter).to.be.equal(publicSaleAssetBefore.sub(value).toString());
  });

  it("Should user2 batch transferFrom user1 account success", async () => {
    // given
    let user1Allowance = await erc20TokenTest.allowance(userWallet1.address, userWallet2.address);
    const user1BalanceBefore = await erc20TokenTest.balanceOf(userWallet1.address);
    const adminBalanceBefore = await erc20TokenTest.balanceOf(adminWallet.address);
    const value = BigNumber.from(100).mul(tokenDecimal);
    const finalAllowance = user1Allowance.sub(value);
    const batchTransferFrom: IERC20Extra.BatchTransferFromRequestStruct = {
      from: userWallet1.address,
      to: adminWallet.address,
      amount: value,
    };

    // when
    await expect(erc20TokenTest.connect(user2).batchTransferFrom([batchTransferFrom]))
      .to.emit(erc20TokenTest, "Transfer")
      .withArgs(userWallet1.address, adminWallet.address, value)
      .to.emit(erc20TokenTest, "Approval")
      .withArgs(userWallet1.address, userWallet2.address, finalAllowance)


    // then
    user1Allowance = await erc20TokenTest.allowance(userWallet1.address, userWallet2.address);
    const user1BalanceAfter = await erc20TokenTest.balanceOf(userWallet1.address);
    const adminBalanceAfter = await erc20TokenTest.balanceOf(adminWallet.address);
    expect(user1Allowance.toString()).to.be.equal(finalAllowance.toString());
    expect(user1BalanceAfter.toString()).to.be.equal(user1BalanceBefore.sub(value).toString());
    expect(adminBalanceAfter.toString()).to.be.equal(adminBalanceBefore.add(value).toString());
  });

  it("Should PublicSaleAsset batch transferFrom user1 account success", async () => {
    // given
    let user1Allowance = await erc20TokenTest.allowance(userWallet1.address, publicSaleAsset.address);
    const user1BalanceBefore = await erc20TokenTest.balanceOf(userWallet1.address);
    const adminBalanceBefore = await erc20TokenTest.balanceOf(adminWallet.address);
    const value = BigNumber.from(10).mul(tokenDecimal);
    const finalAllowance = user1Allowance.sub(value);
    const batchTransferFrom: IERC20Extra.BatchTransferFromRequestStruct = {
      from: userWallet1.address,
      to: adminWallet.address,
      amount: value,
    };

    // when
    await expect(publicSaleAsset.connect(admin).tokenBatchTransferFrom([batchTransferFrom]))
      .to.emit(erc20TokenTest, "Transfer")
      .withArgs(userWallet1.address, adminWallet.address, value)

    // then
    user1Allowance = await erc20TokenTest.allowance(userWallet1.address, publicSaleAsset.address);
    const user1BalanceAfter = await erc20TokenTest.balanceOf(userWallet1.address);
    const adminBalanceAfter = await erc20TokenTest.balanceOf(adminWallet.address);
    expect(user1Allowance.toString()).to.be.equal(finalAllowance.toString());
    expect(user1BalanceAfter.toString()).to.be.equal(user1BalanceBefore.sub(value).toString());
    expect(adminBalanceAfter.toString()).to.be.equal(adminBalanceBefore.add(value).toString());
  });

  it("Should admin mint token success", async () => {
    // given
    const totalSupplyBefore = await erc20TokenTest.totalSupply();
    const user2BalanceBefore = await erc20TokenTest.balanceOf(userWallet2.address);

    // when
    await expect(erc20TokenTest.connect(admin).mintTo(userWallet2.address, dummyAmount))
      .to.emit(erc20TokenTest, "Mint")
      .withArgs(adminWallet.address, userWallet2.address, dummyAmount, totalSupplyBefore.add(dummyAmount));

    // then
    const totalSupplyAfter = await erc20TokenTest.totalSupply();
    const user2BalanceAfter = await erc20TokenTest.balanceOf(userWallet2.address);
    expect(totalSupplyAfter.toString()).to.be.equal(totalSupplyBefore.add(dummyAmount).toString());
    expect(user2BalanceAfter.toString()).to.be.equal(user2BalanceBefore.add(dummyAmount).toString());
  });

  it("Should admin burn token success", async () => {
    // given
    const totalSupplyBefore = await erc20TokenTest.totalSupply();
    const user2BalanceBefore = await erc20TokenTest.balanceOf(userWallet2.address);

    // when
    await expect(erc20TokenTest.connect(admin).burnFrom(userWallet2.address, dummyAmount))
      .to.emit(erc20TokenTest, "Burn")
      .withArgs(adminWallet.address, userWallet2.address, dummyAmount, totalSupplyBefore.sub(dummyAmount));

    // then
    const totalSupplyAfter = await erc20TokenTest.totalSupply();
    const user2BalanceAfter = await erc20TokenTest.balanceOf(userWallet2.address);
    expect(totalSupplyAfter.toString()).to.be.equal(totalSupplyBefore.sub(dummyAmount).toString());
    expect(user2BalanceAfter.toString()).to.be.equal(user2BalanceBefore.sub(dummyAmount).toString());
  });

  it("Should admin pause an user2 account success", async () => {
    // given
    const isPausedBefore = await erc20TokenTest.isPaused(userWallet2.address);

    // when
    await expect(erc20TokenTest.connect(admin).pause(userWallet2.address))
      .to.emit(erc20TokenTest, "Paused")
      .withArgs(adminWallet.address, userWallet2.address);

    // then
    const isPausedAfter = await erc20TokenTest.isPaused(userWallet2.address);
    const pausedAccounts = await erc20TokenTest.pausedAccounts(0);
    expect(isPausedBefore).to.be.false;
    expect(isPausedAfter).to.be.true;
    expect(pausedAccounts[0]).to.be.equal(userWallet2.address);
  });

  it("Should user2 to user1 transfer token when account paused failed", async () => {
    // given
    const user2BalanceBefore = await erc20TokenTest.balanceOf(userWallet2.address);

    // when
    await expect(erc20TokenTest.connect(user2).transfer(userWallet1.address, dummyAmount)).to.revertedWith(
      "Account Paused"
    );

    // then
    const user2BalanceAfter = await erc20TokenTest.balanceOf(userWallet2.address);
    expect(user2BalanceAfter.toString()).to.be.equal(user2BalanceBefore.toString());
  });

  it("Should user2 approve to user1 when account paused success", async () => {
    // given
    const user2AllowanceBefore = await erc20TokenTest.allowance(userWallet2.address, userWallet1.address);

    // when
    await expect(erc20TokenTest.connect(user2).approve(userWallet1.address, dummyAmount))
      .to.emit(erc20TokenTest, "Approval")
      .withArgs(userWallet2.address, userWallet1.address, user2AllowanceBefore.add(dummyAmount));


    // then
    const user2AllowanceAfter = await erc20TokenTest.allowance(userWallet2.address, userWallet1.address);
    expect(user2AllowanceAfter.toString()).to.be.equal(user2AllowanceBefore.add(dummyAmount));
  });

  it("Should user1 transferFrom user2 token when account paused failed", async () => {
    // given
    const user2BalanceBefore = await erc20TokenTest.balanceOf(userWallet2.address);
    const value = BigNumber.from(10).mul(tokenDecimal);

    // when
    await expect(
      erc20TokenTest.connect(user1).transferFrom(userWallet2.address, adminWallet.address, value)
    ).to.revertedWith("Account Paused");

    // then
    const user2BalanceAfter = await erc20TokenTest.balanceOf(userWallet2.address);
    expect(user2BalanceAfter.toString()).to.be.equal(user2BalanceBefore.toString());
  });

  it("Should admin unpause an user2 account success", async () => {
    // given
    const isPausedBefore = await erc20TokenTest.isPaused(userWallet2.address);

    // when
    await expect(erc20TokenTest.connect(admin).unpause(userWallet2.address))
      .to.emit(erc20TokenTest, "Unpaused")
      .withArgs(adminWallet.address, userWallet2.address);

    // then
    const isPausedAfter = await erc20TokenTest.isPaused(userWallet2.address);
    const pausedAccounts = await erc20TokenTest.pausedAccounts(0);
    expect(isPausedAfter).to.be.false;
    expect(isPausedBefore).to.be.true;
    expect(pausedAccounts).to.be.eql([]);
  });

  it("Should user1 to user2 transfer token when account unpaused success", async () => {
    // given
    const user2BalanceBefore = await erc20TokenTest.balanceOf(userWallet2.address);
    const user1BalanceBefore = await erc20TokenTest.balanceOf(userWallet1.address);
    const amount = BigNumber.from(10).mul(tokenDecimal);

    // when
    await expect(erc20TokenTest.connect(user2).transfer(userWallet1.address, amount))
      .to.emit(erc20TokenTest, "Transfer")
      .withArgs(userWallet2.address, userWallet1.address, amount);

    // then
    const user2BalanceAfter = await erc20TokenTest.balanceOf(userWallet2.address);
    const user1BalanceAfter = await erc20TokenTest.balanceOf(userWallet1.address);
    expect(user2BalanceAfter.toString()).to.be.equal(user2BalanceBefore.sub(amount).toString());
    expect(user1BalanceAfter.toString()).to.be.equal(user1BalanceBefore.add(amount).toString());
  });

  it("Should admin pause an publicSaleAsset account success", async () => {
    // given
    const isPausedBefore = await erc20TokenTest.isPaused(publicSaleAsset.address);

    // when
    await expect(erc20TokenTest.connect(admin).pause(publicSaleAsset.address))
      .to.emit(erc20TokenTest, "Paused")
      .withArgs(adminWallet.address, publicSaleAsset.address);

    // then
    const isPausedAfter = await erc20TokenTest.isPaused(publicSaleAsset.address);
    const pausedAccounts = await erc20TokenTest.pausedAccounts(0);
    expect(isPausedBefore).to.be.false;
    expect(isPausedAfter).to.be.true;
    expect(pausedAccounts[0]).to.be.equal(publicSaleAsset.address);
  });

  it("Should admin unpause publicSaleAsset account success", async () => {
    // given
    const isPausedBefore = await erc20TokenTest.isPaused(publicSaleAsset.address);

    // when
    await expect(erc20TokenTest.connect(admin).unpause(publicSaleAsset.address))
      .to.emit(erc20TokenTest, "Unpaused")
      .withArgs(adminWallet.address, publicSaleAsset.address);

    // then
    const isPausedAfter = await erc20TokenTest.isPaused(publicSaleAsset.address);
    const pausedAccounts = await erc20TokenTest.pausedAccounts(0);
    expect(isPausedAfter).to.be.false;
    expect(isPausedBefore).to.be.true;
    expect(pausedAccounts).to.be.eql([]);
  });

  it("Should admin pauseAll success", async () => {
    // given
    const isPausedAllBefore = await erc20TokenTest.isPausedAll();

    // when
    await expect(erc20TokenTest.connect(admin).pauseAll())
      .to.emit(erc20TokenTest, "PausedAll")
      .withArgs(adminWallet.address);

    // then
    const isPausedAllAfter = await erc20TokenTest.isPausedAll();
    expect(isPausedAllAfter).to.be.true;
    expect(isPausedAllBefore).to.be.false;
  });

  it("Should user1 transferFrom user2 token paused failed", async () => {
    // given
    const user2BalanceBefore = await erc20TokenTest.balanceOf(userWallet2.address);

    // when
    await expect(
      erc20TokenTest.connect(user1).transferFrom(userWallet2.address, adminWallet.address, dummyAmount)
    ).to.revertedWith("Token Paused");

    // then
    const user2BalanceAfter = await erc20TokenTest.balanceOf(userWallet2.address);
    expect(user2BalanceAfter.toString()).to.be.equal(user2BalanceBefore.toString());
  });

  it("Should admin unpauseAll success", async () => {
    // given
    const isPausedAllBefore = await erc20TokenTest.isPausedAll();

    // when
    await expect(erc20TokenTest.connect(admin).unpauseAll())
      .to.emit(erc20TokenTest, "UnpausedAll")
      .withArgs(adminWallet.address);

    // then
    const isPausedAllAfter = await erc20TokenTest.isPausedAll();
    expect(isPausedAllBefore).to.be.true;
    expect(isPausedAllAfter).to.be.false;

  });

  it("Should set tax rate by admin success", async () => {
    // given
    const taxRateBefore = await erc20TokenTest.taxRate();

    // when
    await expect(erc20TokenTest.connect(admin).taxUpdateRate(taxValue))
      .to.emit(erc20TokenTest, "TaxRateUpdated")
      .withArgs(adminWallet.address, taxValue);

    // then
    const taxRateAfter = await erc20TokenTest.taxRate();
    expect(taxRateAfter.toString()).to.be.equal(taxRateBefore.add(taxValue).toString());
  });

  it("Should user1 transfer token to user2 along with tax success", async () => {
    // given
    const user1BalanceBefore = await erc20TokenTest.balanceOf(userWallet1.address);
    const user2BalanceBefore = await erc20TokenTest.balanceOf(userWallet2.address);
    const taxTreasuryBalanceBefore = await erc20TokenTest.balanceOf(treasuryWallet.address);
    const amount = BigNumber.from(100).mul(tokenDecimal);
    const taxAmount = BigNumber.from(30000000);   // 0.03%

    // when
    await expect(erc20TokenTest.connect(user1).transfer(userWallet2.address, amount))
      .to.emit(erc20TokenTest, "Transfer")
      .withArgs(userWallet1.address, userWallet2.address, amount.sub(taxAmount))
      .to.emit(erc20TokenTest, "Transfer")
      .withArgs(userWallet1.address, treasuryWallet.address, taxAmount);

    // then
    const user2BalanceAfter = await erc20TokenTest.balanceOf(userWallet2.address);
    const user1BalanceAfter = await erc20TokenTest.balanceOf(userWallet1.address);
    const taxTreasuryBalanceAfter = await erc20TokenTest.balanceOf(treasuryWallet.address);
    expect(user1BalanceAfter.toString()).to.be.equal(user1BalanceBefore.sub(amount).toString());
    expect(user2BalanceAfter.toString()).to.be.equal(user2BalanceBefore.add(amount).sub(taxAmount).toString());
    expect(taxTreasuryBalanceAfter.toString()).to.be.equal(taxTreasuryBalanceBefore.add(taxAmount).toString());
  });

  it("Should user1 transferFrom token from PublicSaleAsset along with tax success", async () => {
    // given
    const publicSaleAssetUser1AllowanceBefore = await erc20TokenTest.allowance(
      publicSaleAsset.address,
      userWallet1.address
    );
    const user2BalanceBefore = await erc20TokenTest.balanceOf(userWallet2.address);
    const publicSaleAssetBalanceBefore = await erc20TokenTest.balanceOf(publicSaleAsset.address);
    const taxTreasuryBalanceBefore = await erc20TokenTest.balanceOf(treasuryWallet.address);
    const amount = BigNumber.from(100).mul(tokenDecimal);
    const taxAmount = BigNumber.from(30000000);

    // when
    await expect(
      erc20TokenTest.connect(user1).transferFrom(publicSaleAsset.address, userWallet2.address, amount)
    )
      .to.emit(erc20TokenTest, "Transfer")
      .withArgs(publicSaleAsset.address, userWallet2.address, amount.sub(taxAmount))
      .to.emit(erc20TokenTest, "Transfer")
      .withArgs(publicSaleAsset.address, treasuryWallet.address, taxAmount)
      .to.emit(erc20TokenTest, "Approval")
      .withArgs(publicSaleAsset.address, userWallet1.address, publicSaleAssetUser1AllowanceBefore.sub(amount));

    // then
    const publicSaleAssetUser1AllowanceAfter = await erc20TokenTest.allowance(
      publicSaleAsset.address,
      userWallet1.address
    );
    const user2BalanceAfter = await erc20TokenTest.balanceOf(userWallet2.address);
    const publicSaleAssetBalanceAfter = await erc20TokenTest.balanceOf(publicSaleAsset.address);
    const taxTreasuryBalanceAfter = await erc20TokenTest.balanceOf(treasuryWallet.address);
    expect(publicSaleAssetUser1AllowanceAfter.toString()).to.be.equal(
      publicSaleAssetUser1AllowanceBefore.sub(amount).toString()
    );
    expect(publicSaleAssetBalanceAfter.toString()).to.be.equal(publicSaleAssetBalanceBefore.sub(amount).toString());
    expect(user2BalanceAfter.toString()).to.be.equal(user2BalanceBefore.add(amount).sub(taxAmount).toString());
    expect(taxTreasuryBalanceAfter.toString()).to.be.equal(taxTreasuryBalanceBefore.add(taxAmount).toString());
  });

  it("Should set batch tax whitelist by admin success", async () => {
    // given
    const taxWhitelistBefore = await erc20TokenTest.taxWhitelist(0);
    const batchTaxWhitelistRequest: IERC20Taxable.TaxWhitelistUpdateRequestStruct = {
      account: userWallet1.address,
      isDeleted: false,
    };

    // when
    await expect(erc20TokenTest.connect(admin).taxUpdateWhitelist([batchTaxWhitelistRequest]))
      .to.emit(erc20TokenTest, "TaxWhitelistUpdated")
      .withArgs(adminWallet.address, userWallet1.address, false);

    // then
    const taxWhitelistAfter = await erc20TokenTest.taxWhitelist(0);
    expect(taxWhitelistAfter).to.be.eql([...taxWhitelistBefore, userWallet1.address]);
  });

  it("Should user1 transfer token with tax and tax whitelist success", async () => {
    // given
    const user2BalanceBefore = await erc20TokenTest.balanceOf(userWallet2.address);
    const user1BalanceBefore = await erc20TokenTest.balanceOf(userWallet1.address);
    const publicSaleAssetBalanceBefore = await erc20TokenTest.balanceOf(publicSaleAsset.address);
    const amount = BigNumber.from(100).mul(tokenDecimal);

    // when
    await expect(erc20TokenTest.connect(user1).transfer(userWallet2.address, amount))
      .to.emit(erc20TokenTest, "Transfer")
      .withArgs(userWallet1.address, userWallet2.address, amount);

    // then
    const user2BalanceAfter = await erc20TokenTest.balanceOf(userWallet2.address);
    const user1BalanceAfter = await erc20TokenTest.balanceOf(userWallet1.address);
    const publicSaleAssetBalanceAfter = await erc20TokenTest.balanceOf(publicSaleAsset.address);
    expect(user2BalanceAfter.toString()).to.be.equal(user2BalanceBefore.add(amount).toString());
    expect(user1BalanceAfter.toString()).to.be.equal(user1BalanceBefore.sub(amount).toString());
    expect(publicSaleAssetBalanceAfter.toString()).to.be.equal(publicSaleAssetBalanceBefore.toString());
  });

  it("Should lock token from publicSaleAsset to user2 success", async () => {
    // given
    const publicSaleAssetBalanceBefore = await erc20TokenTest.balanceOf(publicSaleAsset.address);
    const user2LockBalanceBefore = await erc20TokenTest.lockBalanceOf(userWallet2.address);
    const user1LockBalanceBefore = await erc20TokenTest.lockBalanceOf(userWallet1.address);
    const lockRequests: IERC20Lockable.LockTokenRequestStruct[] = [
      {
        source: publicSaleAsset.address,
        dest: userWallet2.address,
        amount: dummyAmount.div(50),
        claimAt: BigNumber.from(((Date.now() / 1000) | 0) + 48 * 60 * 60),
      },
      {
        source: publicSaleAsset.address,
        dest: userWallet2.address,
        amount: dummyAmount.div(100),
        claimAt: BigNumber.from(((Date.now() / 1000) | 0) + 72 * 60 * 60),
      },
      {
        source: publicSaleAsset.address,
        dest: userWallet1.address,
        amount: dummyAmount.div(20),
        claimAt: BigNumber.from(((Date.now() / 1000) | 0) + 96 * 60 * 60),
      },
      {
        source: publicSaleAsset.address,
        dest: userWallet1.address,
        amount: dummyAmount.div(40),
        claimAt: BigNumber.from(((Date.now() / 1000) | 0) + 48 * 60 * 60),
      },
      // {
      //   source: publicSaleAsset.address,
      //   dest: userWallet1.address,
      //   amount: dummyAmount,
      //   claimAt: BigNumber.from(((Date.now() / 1000) | 0) + 72 * 60 * 60),
      // },
    ];

    let totalAmount = BigNumber.from(0);
    const user2LockIdsSize = user2LockIds.length;
    let user2LockAmount = BigNumber.from(0);
    let user1LockAmount = BigNumber.from(0);
    for (let i = 0; i < lockRequests.length; i++) {
      if (lockRequests[i].dest === userWallet2.address) {
        user2LockIds.push(
          ethers.utils.keccak256(
            ethers.utils.solidityPack(
              ["address", "address", "uint256", "uint256"],
              [lockRequests[i].source, lockRequests[i].dest, lockRequests[i].claimAt, lockRequests[i].amount]
            )
          )
        );
        user2LockAmount = user2LockAmount.add(<BigNumber>lockRequests[i].amount);
      } else {
        user1LockIds.push(
          ethers.utils.keccak256(
            ethers.utils.solidityPack(
              ["address", "address", "uint256", "uint256"],
              [lockRequests[i].source, lockRequests[i].dest, lockRequests[i].claimAt, lockRequests[i].amount]
            )
          )
        );
        user1LockAmount = user1LockAmount.add(<BigNumber>lockRequests[i].amount);
      }
      totalAmount = totalAmount.add(<BigNumber>lockRequests[i].amount);
    }

    // when
    await expect(publicSaleAsset.connect(admin).tokenLock(lockRequests))
      .to.emit(erc20TokenTest, "TokenLocked")
      .withArgs(
        user2LockIds[user2LockIdsSize],
        publicSaleAsset.address,
        publicSaleAsset.address,
        userWallet2.address,
        lockRequests[0].claimAt,
        lockRequests[0].amount
      )
      .to.emit(erc20TokenTest, "TokenLocked")
      .withArgs(
        user2LockIds[1],
        publicSaleAsset.address,
        publicSaleAsset.address,
        userWallet2.address,
        lockRequests[1].claimAt,
        lockRequests[1].amount
      )
      .to.emit(erc20TokenTest, "TokenLocked")
      .withArgs(
        user1LockIds[0],
        publicSaleAsset.address,
        publicSaleAsset.address,
        userWallet1.address,
        lockRequests[2].claimAt,
        lockRequests[2].amount
      )
      .to.emit(erc20TokenTest, "TokenLocked")
      .withArgs(
        user1LockIds[1],
        publicSaleAsset.address,
        publicSaleAsset.address,
        userWallet1.address,
        lockRequests[3].claimAt,
        lockRequests[3].amount
      )
      .to.emit(erc20TokenTest, "TokenLocked");

    // then
    const user2Lock1 = { ...(await erc20TokenTest.lockInfo(user2LockIds[0], userWallet2.address)) };
    const user2Lock2 = { ...(await erc20TokenTest.lockInfo(user2LockIds[1], userWallet2.address)) };
    const user1Lock1 = { ...(await erc20TokenTest.lockInfo(user1LockIds[0], userWallet1.address)) };
    const user1Lock2 = { ...(await erc20TokenTest.lockInfo(user1LockIds[1], userWallet1.address)) };
    const publicSaleAssetBalanceAfter = await erc20TokenTest.balanceOf(publicSaleAsset.address);
    const user2LockBalanceAfter = await erc20TokenTest.lockBalanceOf(userWallet2.address);
    const user1LockBalanceAfter = await erc20TokenTest.lockBalanceOf(userWallet1.address);
    const latestBlockNumber = await provider.getBlockNumber();
    const block = await provider.getBlock(latestBlockNumber);

    expect(publicSaleAssetBalanceAfter.toString()).to.be.equal(publicSaleAssetBalanceBefore.sub(totalAmount).toString());
    expect(user2LockBalanceAfter.toString()).to.be.equal(user2LockBalanceBefore.add(user2LockAmount).toString());
    // expect(user2TotalBalanceAfter.toString()).to.be.equal(user2TotalBalanceBefore.add(user2LockAmount).toString());
    expect(user1LockBalanceAfter.toString()).to.be.equal(user1LockBalanceBefore.add(user1LockAmount).toString());

    // and
    expect(user2Lock1[0].toString()).to.be.equal(lockRequests[0].amount.toString());
    expect(user2Lock1[1].toString()).to.be.equal(block.timestamp.toString());
    expect(user2Lock1[2].toString()).to.be.equal(lockRequests[0].claimAt.toString());
    expect(user2Lock1[3]).to.be.hexEqual(publicSaleAsset.address);
    expect(<LockState>user2Lock1[4]).to.be.equal(LockState.LOCKED);

    // and
    expect(user2Lock2[0].toString()).to.be.equal(lockRequests[1].amount.toString());
    expect(user2Lock2[1].toString()).to.be.equal(block.timestamp.toString());
    expect(user2Lock2[2].toString()).to.be.equal(lockRequests[1].claimAt.toString());
    expect(user2Lock2[3]).to.be.hexEqual(publicSaleAsset.address);
    expect(<LockState>user2Lock2[4]).to.be.equal(LockState.LOCKED);

    // and
    expect(user1Lock1[0].toString()).to.be.equal(lockRequests[2].amount.toString());
    expect(user1Lock1[1].toString()).to.be.equal(block.timestamp.toString());
    expect(user1Lock1[2].toString()).to.be.equal(lockRequests[2].claimAt.toString());
    expect(user1Lock1[3]).to.be.hexEqual(publicSaleAsset.address);
    expect(<LockState>user1Lock1[4]).to.be.equal(LockState.LOCKED);

    // and
    expect(user1Lock2[0].toString()).to.be.equal(lockRequests[3].amount.toString());
    expect(user1Lock2[1].toString()).to.be.equal(block.timestamp.toString());
    expect(user1Lock2[2].toString()).to.be.equal(lockRequests[3].claimAt.toString());
    expect(user1Lock2[3]).to.be.hexEqual(publicSaleAsset.address);
    expect(<LockState>user1Lock2[4]).to.be.equal(LockState.LOCKED);
  });

  it("Should claim token from user2 success", async () => {
    // given
    const user2BalanceBefore = await erc20TokenTest.balanceOf(userWallet2.address);
    const user2LockBalanceBefore = await erc20TokenTest.lockBalanceOf(userWallet2.address);
    const user2TotalBalanceBefore = user2BalanceBefore.add(user2LockBalanceBefore)
    const ids = [user2LockIds[0], user2LockIds[1]];
    const [amount1] = await erc20TokenTest.lockInfo(user2LockIds[0], userWallet2.address);
    const [amount2] = await erc20TokenTest.lockInfo(user2LockIds[1], userWallet2.address);
    await provider.send("evm_increaseTime", [200 * 60 * 60]);

    // when
    await expect(erc20TokenTest.connect(user2).claimToken(ids))
      .to.emit(erc20TokenTest, "TokenClaimed")
      .withArgs(user2LockIds[0], userWallet2.address, publicSaleAsset.address, amount1)
      .to.emit(erc20TokenTest, "TokenClaimed")
      .withArgs(user2LockIds[1], userWallet2.address, publicSaleAsset.address, amount2);

    // then
    const [, , , , status1] = await erc20TokenTest.lockInfo(user2LockIds[0], userWallet2.address);
    const [, , , , status2] = await erc20TokenTest.lockInfo(user2LockIds[1], userWallet2.address);
    const user2BalanceAfter = await erc20TokenTest.balanceOf(userWallet2.address);
    const user2LockBalanceAfter = await erc20TokenTest.lockBalanceOf(userWallet2.address);
    const user2TotalBalanceAfter = user2BalanceAfter.add(user2LockBalanceAfter)

    expect(user2BalanceAfter.toString()).to.be.equal(user2BalanceBefore.add(amount1).add(amount2).toString());
    expect(user2LockBalanceAfter.toString()).to.be.equal(user2LockBalanceBefore.sub(amount1).sub(amount2).toString());
    expect(user2TotalBalanceAfter.toString()).to.be.equal(user2TotalBalanceBefore.toString());
    expect(<LockState>status1).to.be.equal(LockState.CLAIMED);
    expect(<LockState>status2).to.be.equal(LockState.CLAIMED);
  });

  it("Should unlock token from user1 success", async () => {
    // given
    const publicSaleAssetBalanceBefore = await erc20TokenTest.balanceOf(publicSaleAsset.address);
    const user1LockBalanceBefore = await erc20TokenTest.lockBalanceOf(userWallet1.address);
    const unlockRequests: IERC20Lockable.UnLockTokenRequestStruct[] = [
      {
        lockId: user1LockIds[0],
        account: userWallet1.address,
        reason: "Rollback1",
      },
    ];

    const [amount1, , , source1] = await erc20TokenTest.lockInfo(user1LockIds[0], userWallet1.address);

    // when
    await expect(erc20TokenTest.connect(admin).unlockToken(unlockRequests))
      .to.emit(erc20TokenTest, "TokenUnlocked")
      .withArgs(
        user1LockIds[0],
        adminWallet.address,
        userWallet1.address,
        source1,
        amount1,
        unlockRequests[0].reason
      )

    // and
    const [, , , , status1] = await erc20TokenTest.lockInfo(user1LockIds[0], userWallet1.address);
    const publicSaleAssetBalanceAfter = await erc20TokenTest.balanceOf(publicSaleAsset.address);
    const user1LockBalanceAfter = await erc20TokenTest.lockBalanceOf(userWallet1.address);

    expect(publicSaleAssetBalanceAfter.toString()).to.be.equal(
      publicSaleAssetBalanceBefore.add(amount1).toString()
    );
    expect(user1LockBalanceAfter.toString()).to.be.equal(user1LockBalanceBefore.sub(amount1).toString());

    expect(<LockState>status1).to.be.equal(LockState.UNLOCKED);
  });

  it("Should unlock token from user1 by publicSaleAsset without acl failed", async () => {
    // given
    const unlockRequests: IERC20Lockable.UnLockTokenRequestStruct[] = [
      {
        lockId: user1LockIds[1],
        account: userWallet1.address,
        reason: "Rollback2",
      },
    ];

    // when
    await expect(publicSaleAsset.connect(admin).unlockToken(unlockRequests))
      .to.revertedWith("Unlock Not Supported")
  });

  it("Should transferOwnership from owner to Liguard in erc20token success", async() => {
    // given
    const aclBefore = await erc20TokenTest.acl();
    const ownerBefore = await erc20TokenTest.owner();

    // when
    await expect(erc20TokenTest.connect(admin).transferOwnership(livelyGuard.address))
      .to.emit(erc20TokenTest, "OwnershipTransferred")
      .withArgs(adminWallet.address, livelyGuard.address);

    // then
    expect(aclBefore).to.be.equal(ethers.constants.AddressZero);
    expect(ownerBefore).to.be.equal(adminWallet.address);
    expect(await erc20TokenTest.acl()).to.be.equal(livelyGuard.address);
    expect(await erc20TokenTest.owner()).to.be.equal(ethers.constants.AddressZero);
  })

  it("Should transferOwnership from owner to Liguard in publicSaleAsset success", async() => {
    // given
    const aclBefore = await publicSaleAsset.assetAccessControl();
    const ownerBefore = await publicSaleAsset.owner();

    // when
    await expect(publicSaleAsset.connect(admin).transferOwnership(livelyGuard.address))
      .to.emit(publicSaleAsset, "OwnershipTransferred")
      .withArgs(adminWallet.address, livelyGuard.address);

    // then
    expect(aclBefore).to.be.equal(ethers.constants.AddressZero);
    expect(ownerBefore).to.be.equal(adminWallet.address);
    expect(await publicSaleAsset.assetAccessControl()).to.be.equal(livelyGuard.address);
    expect(await publicSaleAsset.owner()).to.be.equal(ethers.constants.AddressZero);
  })

  it("Should unlock token from user1 by publicSaleAsset success", async () => {
    // given
    const publicSaleAssetBalanceBefore = await erc20TokenTest.balanceOf(publicSaleAsset.address);
    const user1LockBalanceBefore = await erc20TokenTest.lockBalanceOf(userWallet1.address);
    const unlockRequests: IERC20Lockable.UnLockTokenRequestStruct[] = [
      {
        lockId: user1LockIds[1],
        account: userWallet1.address,
        reason: "Rollback2",
      },
    ];

    const [amount2, , , source2] = await erc20TokenTest.lockInfo(user1LockIds[1], userWallet1.address);

    // when
    await expect(publicSaleAsset.connect(admin).unlockToken(unlockRequests))
      .to.emit(erc20TokenTest, "TokenUnlocked")
      .withArgs(
        user1LockIds[1],
        publicSaleAsset.address,
        userWallet1.address,
        source2,
        amount2,
        unlockRequests[0].reason
      );

    // and
    const [, , , , status2] = await erc20TokenTest.lockInfo(user1LockIds[1], userWallet1.address);
    const publicSaleAssetBalanceAfter = await erc20TokenTest.balanceOf(publicSaleAsset.address);
    const user1LockBalanceAfter = await erc20TokenTest.lockBalanceOf(userWallet1.address);

    expect(publicSaleAssetBalanceAfter.toString()).to.be.equal(
      publicSaleAssetBalanceBefore.add(amount2).toString()
    );
    expect(user1LockBalanceAfter.toString()).to.be.equal(user1LockBalanceBefore.sub(amount2).toString());
    expect(<LockState>status2).to.be.equal(LockState.UNLOCKED);
  });

  it("Should transferOwnership from Liguard to owner in erc20token success", async() => {
    // given
    const aclBefore = await erc20TokenTest.acl();
    const ownerBefore = await erc20TokenTest.owner();

    // when
    await expect(erc20TokenTest.connect(admin).transferOwnership(userWallet1.address))
      .to.emit(erc20TokenTest, "OwnershipTransferred")
      .withArgs(livelyGuard.address, userWallet1.address);

    // then
    expect(aclBefore).to.be.equal(livelyGuard.address);
    expect(ownerBefore).to.be.equal(ethers.constants.AddressZero);
    expect(await erc20TokenTest.acl()).to.be.equal(ethers.constants.AddressZero);
    expect(await erc20TokenTest.owner()).to.be.equal(userWallet1.address);
  })

  it("Should transferOwnership from Liguard to owner in publicSaleAsset success", async() => {
    // given
    const aclBefore = await publicSaleAsset.assetAccessControl();
    const ownerBefore = await publicSaleAsset.owner();

    // when
    await expect(publicSaleAsset.connect(admin).transferOwnership(userWallet2.address))
      .to.emit(publicSaleAsset, "OwnershipTransferred")
      .withArgs(livelyGuard.address, userWallet2.address);

    // then
    expect(aclBefore).to.be.equal(livelyGuard.address);
    expect(ownerBefore).to.be.equal(ethers.constants.AddressZero);
    expect(await publicSaleAsset.assetAccessControl()).to.be.equal(ethers.constants.AddressZero);
    expect(await publicSaleAsset.owner()).to.be.equal(userWallet2.address);
  })
});

export async function generatePermitDomainSignatureByWaffleProvider(
  owner: Address,
  spender: Address,
  value: BigNumber,
  nonce: BigNumber,
  deadline: BigNumber,
  verifyingContract: Address,
  signerAddress: Address,
  domainName: string,
  version: string,
  chainId: string
): Promise<string> {
  const messageParams = JSON.stringify({
    types: {
      EIP712Domain: [
        { name: "name", type: "string" },
        { name: "version", type: "string" },
        { name: "chainId", type: "uint256" },
        { name: "verifyingContract", type: "address" },
      ],
      Permit: [
        { name: "owner", type: "address" },
        { name: "spender", type: "address" },
        { name: "value", type: "uint256" },
        { name: "nonce", type: "uint256" },
        { name: "deadline", type: "uint256" },
      ],
    },
    primaryType: "Permit",
    domain: {
      name: domainName,
      version: version,
      chainId,
      verifyingContract,
    },
    message: {
      owner,
      spender,
      value: value.toString(),
      nonce: nonce.toString(),
      deadline: deadline.toString(),
    },
  });

  return await provider.send("eth_signTypedData_v4", [signerAddress, messageParams]);
}