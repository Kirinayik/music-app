import {FC, ReactNode, useEffect, useState} from "react";
import Sidebar from "../Sidebar/Sidebar";
import {useRouter} from "next/router";
import {Box} from "@mui/material";
import Loader from "../assets/Loader";
import Navigation from "../Navigation/Navigation";

type LayoutProps = {
  children: ReactNode
}

const Layout:FC<LayoutProps> = ({ children }) => {
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
    <>
      {router.pathname !== '/login' && <Sidebar/>}
      <Box component={'main'} position={'relative'} paddingLeft={router.pathname !== '/login' ? '70px' : '0px'}>
        {loading && <Loader/>}
        {router.pathname !== '/login' && <Navigation/>}
        {children}
      </Box>
    </>
  );
};

export default Layout