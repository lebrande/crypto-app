import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';
import { handleError } from '../error/handleError';
import { connectMetamask } from './connectMetamask';
import { ConnectionState } from './states';

export const ConnectionContext = createContext<ConnectionContextData | null>(null);

interface ConnectionProviderProps {
  children: ReactNode;
}

export const ConnectionProvider = (props: ConnectionProviderProps) => {
  const connection = useProvideConnection();

  return (
    <ConnectionContext.Provider value={connection}>
      {props.children}
    </ConnectionContext.Provider>
  );
};

export const useProvideConnection = () => {
  const [connectionState, setConnectionState] = useState<ConnectionState>({
    type: 'NO_METAMASK',
  })

  const connect = async () => {
    try {
      const connection = await connectMetamask();
      setConnectionState({
        type: 'METAMASK_CONNECTED',
        connection,
      });
    } catch (e) {
      const error = handleError(e);
      setConnectionState({
        type: 'METAMASK_ERROR',
        error,
      })
    }
  };

  return {
    connectionState,
    connect,
  };
};

export type ConnectionContextData = ReturnType<typeof useProvideConnection>;

export const useConnection = () => {
  const connection = useContext(ConnectionContext);

  if (!connection) {
    throw new Error('useConnection must be used inside ConnectionProvider');
  }

  return connection;
};
