import type {GetServerSideProps, NextPage} from 'next'
import {getSession} from "next-auth/react";
import {Box} from "@mui/material";

const Home: NextPage = () => {
  return (
    <Box>
      Home page
    </Box>
  )
}

export default Home;

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

