import {FC, ReactNode, useEffect, useState} from "react";
import Sidebar from "../Sidebar/Sidebar";
import {useRouter} from "next/router";
import Loader from "../assets/Loader";
import Navigation from "../Navigation/Navigation";
import {LayoutContainer} from "./Layout.styles";
import {useAppSelector} from "../../store";

type LayoutProps = {
  children: ReactNode
}

const Layout:FC<LayoutProps> = ({ children }) => {
  //TODO: разобраться с эвентами + сделать useHistory через эвенты
  const router = useRouter()
  const {isFetching} = useAppSelector(state => state.loader)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });

    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  })

  return (
    <>
      {router.pathname !== '/login' && <Sidebar/>}
      <LayoutContainer
        component={'main'}
           padding={{
             xs: router.pathname !== '/login' ? '0 0 70px' : '0',
             sm: router.pathname !== '/login' ? '0 0 0 70px' : '0'
           }}>
        {(loading || isFetching) && <Loader/>}
        {router.pathname !== '/login' && <Navigation/>}
        {children}
      </LayoutContainer>
    </>
  );
};

export default Layout