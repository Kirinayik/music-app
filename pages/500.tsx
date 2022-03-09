import {Page} from "../frontend/styles/global";
import {NextPage} from "next";
import ErrorContainer from "../frontend/components/assets/ErrorContainer";

const Custom500:NextPage = () => {
  return (
    <Page>
      <ErrorContainer code={'500'} message={'Something went wrong'}/>
    </Page>
  )
}

export default Custom500