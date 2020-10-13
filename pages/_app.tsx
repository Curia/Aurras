import { AppProps } from "next/app";
import Head from "next/head";

// Styles
import "../styles/tailwind.css";
import "@components/AudioPlayer/style.css";

// Components
import GlobalHeader from "@components/GlobalHeader";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Aurras</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,600;1,700&family=Playfair+Display:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <GlobalHeader />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
