import {GetServerSideProps, NextPage} from "next";
import {getSession} from "next-auth/react";
import {Page} from "../frontend/styles/global";
import {useHistory} from "../frontend/hooks/useHistory";

const Library:NextPage = () => {
  useHistory()

  return (
    <Page>
      library page
    </Page>
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