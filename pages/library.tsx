import {GetServerSideProps, NextPage} from "next";
import {getSession} from "next-auth/react";
import {useHistory} from "../hooks/useHistory";
import {Box} from "@mui/material";

const Library:NextPage = () => {
  useHistory()

  return (
    <Box>
      library page
    </Box>
  );
};

export default Library

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}