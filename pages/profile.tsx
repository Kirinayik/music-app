import {Page} from "../frontend/styles/global";
import {useHistory} from "../frontend/hooks/useHistory";
import {GetServerSideProps} from "next";
import {getSession} from "next-auth/react";

const Profile = () => {
  useHistory()

  return (
    <Page>
      Profile page
    </Page>
  );
};

export default Profile

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