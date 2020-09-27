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
        <link
          href="https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <div className="container mx-auto px-4">
        <GlobalHeader />
        <Component {...pageProps} />
        </div>
      </body>
    </>
  );
}

export default App;
