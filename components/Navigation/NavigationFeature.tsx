import {Stack} from "@mui/material";
import Link from 'next/link';
import {NavigationItem} from "./Navigation.styles";
import {useRouter} from "next/router";

const NavigationFeature = () => {
  const pathname = useRouter().pathname.split('/');

  return (
    <Stack padding={{xs: '0', tiny: '0 30px'}} direction={'row'}>
            <Link href={'/library/playlists'} passHref>
              <NavigationItem isActive={!!pathname.find((el => el === 'playlists'))}>
                Playlists
              </NavigationItem>
            </Link>
            <Link href={'/library/artists'} passHref>
              <NavigationItem isActive={!!pathname.find((el => el === 'artists'))}>
                Artists
              </NavigationItem>
            </Link>
    </Stack>
  );
};

export default NavigationFeature