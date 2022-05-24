import { Box, CircularProgress } from "@mui/material";
import { useTheme } from "@emotion/react";

const LazyCircular = () => {
  const theme = useTheme();

  return (
    <Box
      padding={"15px 0"}
      display={"flex"}
      justifyContent={"center"}
      color={theme.colors.green}
    >
      <CircularProgress color={"inherit"} />
    </Box>
  );
};

export default LazyCircular;
