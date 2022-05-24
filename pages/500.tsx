import { NextPage } from "next";
import ErrorContainer from "../components/assets/ErrorContainer";
import { Box } from "@mui/material";

const Custom500: NextPage = () => {
  return (
    <Box>
      <ErrorContainer code={"500"} message={"Something went wrong"} />
    </Box>
  );
};

export default Custom500;
