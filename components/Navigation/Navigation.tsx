import {Box, Stack} from "@mui/material";
import {NavigationContainer} from "./Navigation.styles";
import HistoryButton from "./HistoryButton/HistoryButton";
import NavigationProfile from "./NavigationProfile/NavigationProfile";
import NavigationFeature from "./NavigationFeature/NavigationFeature";
import {useRouter} from "next/router";
import {useNavColor} from "../../hooks/useNavColor";
import SearchBar from "../Search/SearchBar/SearchBar";

const Navigation = () => {
  const router = useRouter().pathname.split('/')
  const {background} = useNavColor();

  return (
    <NavigationContainer background={background}>
      <Box display={'flex'} alignItems={'center'}>
        <Stack color={'#fff'} direction={'row'}>
          <HistoryButton type={'prev'}/>
          <HistoryButton type={'next'}/>
        </Stack>
        {!!router.find(el => el === 'library') && <NavigationFeature/>}
        {!!router.find(el => el === 'search') && <SearchBar/>}
      </Box>
      <NavigationProfile/>
    </NavigationContainer>
  );
};

export default Navigation