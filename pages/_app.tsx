import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default MyApp
