import {Box, LinearProgress} from "@mui/material";
import {emotionTheme} from "../../styles/theme";

const Loader = () => {
  return (
    <Box position={'absolute'} top={'0'} left={'0'} color={emotionTheme.colors.green} width={'100%'}>
      <LinearProgress color="inherit" />
    </Box>
  );
};

export default Loader