import {GetServerSideProps, NextPage} from "next";
import {getSession} from "next-auth/react";
import {Box} from "@mui/material";

const Search:NextPage = () => {
  return (
    <Box>
      search page
    </Box>
  );
};

export default Search

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