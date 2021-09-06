import type { AppProps } from "next/app"
import { ReactElement } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { globalStyles } from "ui/stitches.config"

const queryClient = new QueryClient()

export default function App({ Component, pageProps: { ...pageProps } }: AppProps): ReactElement {
  globalStyles()
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
