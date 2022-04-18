import type { AppProps } from 'next/app'
import { ConnectionProvider } from '../src/connection/context'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConnectionProvider>
      <Component {...pageProps} />
    </ConnectionProvider>
  )
}