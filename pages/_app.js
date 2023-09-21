import "../styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import localPage from "../reducers/localPage.js";


const store = configureStore({
  reducer: { localPage },
});

function App({ Component, pageProps }) {

  const router = useRouter();
  const canonicalUrl = (`https://joanmas.fr` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
 
      <Provider store={store}>
        <Head>
          <title>Joan Mas</title>
          <link rel='canonical' href={canonicalUrl}/>
          <meta name="description" content="I am a JavaScript fullstack developer junior, this is my portfolio."/>
        </Head>
        <Component {...pageProps} />
      </Provider>
    
  );
}

export default App;
