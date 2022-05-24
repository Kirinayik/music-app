import { Box } from "@mui/material";
import { NavigationContainer } from "./Navigation.styles";
import NavigationProfile from "./NavigationProfile/NavigationProfile";
import NavigationFeature from "./NavigationFeature/NavigationFeature";
import { useRouter } from "next/router";
import { useNavColor } from "../../hooks/useNavColor";
import SearchBar from "../Search/SearchBar/SearchBar";

const Navigation = () => {
  const router = useRouter().pathname.split("/");
  const { background } = useNavColor();

  return (
    <NavigationContainer background={background}>
      <Box display={"flex"} alignItems={"center"}>
        {!!router.find((el) => el === "library") && <NavigationFeature />}
        {!!router.find((el) => el === "search") && <SearchBar />}
      </Box>
      <NavigationProfile />
    </NavigationContainer>
  );
};

export default Navigation;
