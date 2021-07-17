import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';
import { AnimateSharedLayout } from "framer-motion";

const App = ({ Component, pageProps }: AppProps) => (
  <AnimateSharedLayout>
    <GlobalStyles />
    <Component {...pageProps} />
  </AnimateSharedLayout>
)

export default App
