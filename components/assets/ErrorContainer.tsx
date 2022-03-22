import {Box, Button, Typography} from "@mui/material";
import {FC} from "react";
import {useNavigate} from "../../hooks/useNavigate";

type ErrorComponentProps = {
  code: string;
  message: string;
}

const ErrorContainer:FC<ErrorComponentProps> = ({code, message}) => {
  const {handleToHome} = useNavigate();

  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} height={'100vh'}>
      <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
        <Typography fontWeight={'700'} variant="h1" component="h2">{code}</Typography>
        <Typography fontSize={'24px'}>{message}</Typography>
          <Button onClick={handleToHome} variant={'main'} sx={{width: '200px', marginTop: '50px'}}>
            Back to home
          </Button>
      </Box>
    </Box>
  );
};

export default ErrorContainer