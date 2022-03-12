import {NextPage} from "next";
import {Box} from "@mui/material";
import ErrorContainer from "../components/assets/ErrorContainer";

const Custom404:NextPage = () => {
  return (
    <Box>
      <ErrorContainer code={'404'} message={'Page not found'}/>
    </Box>
  )
}

export default Custom404
