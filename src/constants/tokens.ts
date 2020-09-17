import { ethers } from "ethers";
import Token from "../types/Token";

export const ETH: Token = {
    address: ethers.constants.AddressZero,
    decimals: 18,
    symbol: "ETH",
    logoURI: "/images/tokens/ETH.png",
    balance: ethers.BigNumber.from(0)
};