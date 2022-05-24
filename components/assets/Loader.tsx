import { Box, LinearProgress } from "@mui/material";
import { useTheme } from "@emotion/react";

const Loader = () => {
  const theme = useTheme();

  return (
    <Box
      position={"fixed"}
      top={"0"}
      left={"0"}
      zIndex={1301}
      color={theme.colors.green}
      width={"100%"}
    >
      <LinearProgress color="inherit" />
    </Box>
  );
};

export default Loader;
