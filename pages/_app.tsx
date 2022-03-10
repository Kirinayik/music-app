import type {AppProps} from 'next/app'
import {GlobalStyles} from "../frontend/styles/global";
import {emotionTheme, muiTheme} from "../frontend/styles/theme";
import Head from 'next/head'
import {SessionProvider} from "next-auth/react"
import {Provider as ReduxProvider} from 'react-redux';
import {ThemeProvider as EmotionProvider} from "@emotion/react";
import {ThemeProvider as MuiProvider} from "@mui/material";
import Layout from "../frontend/components/Layout/Layout";
import {store} from "../frontend/store";

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ReduxProvider store={store}>
      <MuiProvider theme={muiTheme}>
        <EmotionProvider theme={emotionTheme}>
          <GlobalStyles/>
          <Head>
            <title>Music app</title>
          </Head>
          <Layout>
            <Component {...pageProps}/>
          </Layout>
        </EmotionProvider>
      </MuiProvider>
      </ReduxProvider>
    </SessionProvider>
  )
}

export default MyApp;

