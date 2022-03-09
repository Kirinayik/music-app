import {Box, Typography} from "@mui/material";
import {FC} from "react";

type ErrorComponentProps = {
  code: string;
  message: string;
}

const ErrorContainer:FC<ErrorComponentProps> = ({code, message}) => {
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} height={'100vh'}>
      <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
        <Typography fontWeight={'700'} variant="h1" component="h2">{code}</Typography>
        <Typography fontSize={'24px'}>{message}</Typography>
      </Box>
    </Box>
  );
};

export default ErrorContainer