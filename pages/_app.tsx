import { AppProps } from "next/app";
import Head from "next/head";

// Styles
import "../styles/tailwind.css";

// Components
import GlobalHeader from "@components/GlobalHeader";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Aurras</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalHeader />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
