import {Box, Stack} from "@mui/material";
import {NavigationContainer} from "./Navigation.styles";
import HistoryButton from "./HistoryButton";
import NavigationProfile from "./NavigationProfile";
import NavigationFeature from "./NavigationFeature";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useTheme} from "@emotion/react";

const Navigation = () => {
  const theme = useTheme();
  const router = useRouter().pathname.split('/')
  const [background, setBackground] = useState<string>('');
  const handleResize = () => {
    if (window.scrollY >= 100 && window.scrollY < 200) {
      setBackground('rgba(7, 7, 7, 0.5)')
    } else if (window.scrollY >= 200) {
      setBackground(theme.colors['black-highlight'])
    } else {
      setBackground('transparent')
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleResize);
    return () => window.removeEventListener('scroll', handleResize);
  }, [handleResize]);

  return (
    <NavigationContainer background={background}>
      <Box display={'flex'} alignItems={'center'}>
        <Stack color={'#fff'} direction={'row'}>
          <HistoryButton type={'prev'}/>
          <HistoryButton type={'next'}/>
        </Stack>
        {!!router.find(el => el === 'library') && <NavigationFeature/>}
      </Box>
      <NavigationProfile/>
    </NavigationContainer>
  );
};

export default Navigation