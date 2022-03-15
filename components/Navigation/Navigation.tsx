import {Box, Stack} from "@mui/material";
import {NavigationContainer} from "./Navigation.styles";
import HistoryButton from "./HistoryButton";
import NavigationProfile from "./NavigationProfile";
import NavigationFeature from "./NavigationFeature";
import {useRouter} from "next/router";

const Navigation = () => {
  const router = useRouter().pathname.split('/')

  return (
    <NavigationContainer>
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