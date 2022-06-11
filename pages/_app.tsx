import '../styles/globals.css'
import { AppPropsWithLayout } from '../models/global.model';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
