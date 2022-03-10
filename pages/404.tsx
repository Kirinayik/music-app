import {NextPage} from "next";
import ErrorContainer from "../frontend/components/assets/ErrorContainer";
import {Box} from "@mui/material";

const Custom404:NextPage = () => {
  return (
    <Box>
      <ErrorContainer code={'404'} message={'Page not found'}/>
    </Box>
  )
}

export default Custom404
