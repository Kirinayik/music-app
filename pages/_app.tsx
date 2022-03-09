import type {AppProps} from 'next/app'
import {GlobalStyles} from "../frontend/styles/global";
import {emotionTheme, muiTheme} from "../frontend/styles/theme";
import Head from 'next/head'
import {SessionProvider} from "next-auth/react"
import {ThemeProvider as EmotionProvider} from "@emotion/react";
import {ThemeProvider as MuiProvider} from "@mui/material";
import {useRouter} from "next/router";
import Sidebar from "../frontend/components/Sidebar/Sidebar";
import {useEffect, useState} from "react";
import Loader from "../frontend/components/assets/Loader";

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)


  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });

    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, [])


  return (
    <SessionProvider session={session}>
      <MuiProvider theme={muiTheme}>
        <EmotionProvider theme={emotionTheme}>
          <GlobalStyles/>
          <Head>
            <title>Music app</title>
          </Head>
          {loading && <Loader/>}
          {router.pathname !== '/login' && <Sidebar/>}
          <Component {...pageProps}/>
        </EmotionProvider>
      </MuiProvider>
    </SessionProvider>
  )
}

export default MyApp;

