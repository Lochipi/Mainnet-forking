import { ethers } from "hardhat";
const helpers = require("@nomicfoundation/hardhat-network-helpers");

async function main() {
  const UNISWAP_ROUTER_ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
  const DAI_Address = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  const USDC_Address = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

  const TOKEN_HOLDER = "0xf584F8728B874a6a5c7A8d4d387C9aae9172D621";

  await helpers.impersonateAccount(TOKEN_HOLDER);
  const impersonatedSigner = await ethers.getSigner(TOKEN_HOLDER);

  const amountUSDC = ethers.parseUnits("1000", 6);
  const amountDAI = ethers.parseUnits("1000", 18);

  //   const amountUSDCMin = ethers.parseUnits("950", 6);
  //   const amountDAIMin = ethers.parseUnits("950", 18);

  const deadline = Math.floor(Date.now() / 1000) + 60 * 10;

  const USDC_CONTRACT = await ethers.getContractAt("IERC20", USDC_Address);
  const DAI_CONTRACT = await ethers.getContractAt("IERC20", DAI_Address);

  const ROUTER = await ethers.getContractAt(
    "IUniswapV2Router",
    UNISWAP_ROUTER_ADDRESS,
    impersonatedSigner
  );

  //   check the balance of the tokens
  const usdcBal = await USDC_CONTRACT.balanceOf(impersonatedSigner.address);
  const daiBal = await DAI_CONTRACT.balanceOf(impersonatedSigner.address);

  console.log("usdc balance before swap", Number(usdcBal));
  console.log("dai balance before swap", Number(daiBal));
}
