import { ethers } from "hardhat";
const helpers = require("@nomicfoundation/hardhat-network-helpers");

async function main () {
    const UNISWAP_ROUTER_ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
    const DAI_Address = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    const USDC_Address = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

    const TOKEN_HOLDER = "0xf584F8728B874a6a5c7A8d4d387C9aae9172D621";

    await helpers.impersonateAccount(TOKEN_HOLDER);
    const impersonatedSigner = await ethers.getSigner(TOKEN_HOLDER);
}