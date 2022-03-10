import type {GetServerSideProps, NextPage} from 'next'
import {getSession} from "next-auth/react";
import {Page} from "../frontend/styles/global";
import {useHistory} from "../frontend/hooks/useHistory";

const Home: NextPage = () => {
  useHistory()

  return (
    <Page>
      Home page
    </Page>
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

