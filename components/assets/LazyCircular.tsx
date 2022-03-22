import {Box, CircularProgress} from "@mui/material";
import {FC} from "react";
import {useTheme} from "@emotion/react";

type LazyCircularProps = {
  fetch: boolean;
  nextUrl:string|null;
}

const LazyCircular:FC<LazyCircularProps> = ({fetch, nextUrl}) => {
  const theme = useTheme()

  return (
    <>
      {fetch && nextUrl && (
        <Box padding={'15px 0'} display={'flex'} justifyContent={'center'} color={theme.colors.green}>
          <CircularProgress color={'inherit'}/>
        </Box>
      )}
    </>
  );
};

export default LazyCircular