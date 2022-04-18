import { providers } from "ethers";
import { Connection, WindowInstanceWithEthereum } from "./types";

export const connectMetamask = async (): Promise<Connection> => {
  const ethereum = (window as WindowInstanceWithEthereum).ethereum;

  if (!ethereum) {
    throw new Error('No metamask detected');
  }

  const [myWalletAddress] = await ethereum.request({
    method: 'eth_requestAccounts',
  })

  const provider = new providers.Web3Provider(ethereum as any);

  return {
    myWalletAddress,
    provider,
  }
}