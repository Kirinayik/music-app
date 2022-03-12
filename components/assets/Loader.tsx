import {Box, LinearProgress} from "@mui/material";
import {useTheme} from "@emotion/react";

const Loader = () => {
  const theme = useTheme()

  return (
    <Box position={'absolute'} top={'0'} left={'0'} color={theme.colors.green} width={'100%'}>
      <LinearProgress color="inherit" />
    </Box>
  );
};

export default Loader