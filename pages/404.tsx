import {NextPage} from "next";
import {Box} from "@mui/material";
import ErrorContainer from "../components/assets/ErrorContainer";
import {useSession} from "next-auth/react";

const Custom404:NextPage = () => {
  const data = useSession()

  return (
    <Box>
      <ErrorContainer code={'404'} message={'Page not found'}/>
    </Box>
  )
}

export default Custom404
