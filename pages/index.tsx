import { useConnection } from "../src/connection/context";

export const HomePage = () => {
  const { connectionState, connect } = useConnection();

  const isError = connectionState.type === 'METAMASK_ERROR';
  const isConnected = connectionState.type === 'METAMASK_CONNECTED';

  if (isError) {
    return (
      <h2>Error: {connectionState.error.message}</h2>
    );
  }

  if (isConnected) {
    return (
      <>
        <h2>Your Matamask wallet is connected!</h2>
        <p>Your wallet address: {connectionState.connection.myWalletAddress}</p>
      </>
    );
  }

  return (
    <button type="button" onClick={connect}>
      Connect Metamask
    </button>
  );
};

export default HomePage;