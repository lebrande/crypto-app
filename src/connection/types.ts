import { ethers } from "ethers";

interface EthRequestAccountsRequestPaylod {
  method: 'eth_requestAccounts';
}

interface WindowEthereum {
  request(payload: EthRequestAccountsRequestPaylod): [string];
}

export type WindowInstanceWithEthereum = Window &
  typeof globalThis & { ethereum?: WindowEthereum };

export interface Connection {
  myWalletAddress: string;
  provider: ethers.providers.Web3Provider;
}