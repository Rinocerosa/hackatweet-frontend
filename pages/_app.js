import "../styles/globals.css";
import Head from "next/head";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
