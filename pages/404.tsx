import {Page} from "../frontend/styles/global";
import {NextPage} from "next";
import ErrorContainer from "../frontend/components/assets/ErrorContainer";

const Custom404:NextPage = () => {
  return (
    <Page>
      <ErrorContainer code={'404'} message={'Page not found'}/>
    </Page>
  )
}

export default Custom404