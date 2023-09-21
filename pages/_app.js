import "../styles/globals.css";
import Head from "next/head";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import localPage from "../reducers/localPage.js";


const store = configureStore({
  reducer: { localPage },
});

function App({ Component, pageProps }) {
  return (
 
      <Provider store={store}>
        <Head>
          <title>Joan Mas</title>
          <meta name="description" content="I am a javaScript fullstack developer junior, this is my portfolio."/>
        </Head>
        <Component {...pageProps} />
      </Provider>
    
  );
}

export default App;
