import {Stack} from "@mui/material";
import {NavigationContainer} from "./Navigation.styles";
import HistoryButton from "./HistoryButton";
import NavigationProfile from "./NavigationProfile";

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack color={'#fff'} direction={'row'}>
        <HistoryButton type={'prev'}/>
        <HistoryButton type={'next'}/>
      </Stack>
      <NavigationProfile/>
    </NavigationContainer>
  );
};

export default Navigation