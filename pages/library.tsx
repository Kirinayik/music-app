import {GetServerSideProps, NextPage} from "next";
import {Page} from "../frontend/styles/global";
import {getSession} from "next-auth/react";

const Library:NextPage = () => {
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