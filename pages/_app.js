import "../styles/globals.css";
import Head from "next/head";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import mouse from "../reducers/mouse";


const store = configureStore({
  reducer: { mouse },
});

function App({ Component, pageProps }) {
  return (
 
      <Provider store={store}>
        <Head>
          <title>Joan Mas</title>
        </Head>
        <Component {...pageProps} />
      </Provider>
    
  );
}

export default App;
