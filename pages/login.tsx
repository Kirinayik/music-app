import { NextPage } from "next";
import { Box, Button } from "@mui/material";
import Logo from "../public/img/logo.png";
import Image from "next/image";
import { LoginPage } from "../styles/global";
import { useAuth } from "../hooks/useAuth";

const Login: NextPage = () => {
  const { handleSignIn } = useAuth();

  return (
    <LoginPage>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Box width={"180px"} mb={"30px"}>
          <Image src={Logo} alt={""} />
        </Box>
        <Button variant="main" sx={{ width: "100%" }} onClick={handleSignIn}>
          Sign in
        </Button>
      </Box>
    </LoginPage>
  );
};

export default Login;
