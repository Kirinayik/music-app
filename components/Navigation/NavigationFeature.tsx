import {Box, FormControl, InputLabel, MenuItem, Select, Stack} from "@mui/material";
import Link from 'next/link';
import {NavigationItem} from "./Navigation.styles";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const NavigationFeature = () => {
  const pathname = useRouter().pathname.split('/');

  return (
    <Stack padding={{xs: '0', tiny: '0 30px'}} direction={'row'}>
            <Link href={'/library/playlists'}>
              <NavigationItem isActive={!!pathname.find((el => el === 'playlists'))}>
                Playlists
              </NavigationItem>
            </Link>
            <Link href={'/library/artists'}>
              <NavigationItem isActive={!!pathname.find((el => el === 'artists'))}>
                Artists
              </NavigationItem>
            </Link>
    </Stack>
  );
};

export default NavigationFeature