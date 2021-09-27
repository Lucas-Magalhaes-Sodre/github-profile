import { Provider as NextAuthProvider} from "next-auth/client"
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps){
  return (
    <NextAuthProvider session={pageProps.session}>
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default App;