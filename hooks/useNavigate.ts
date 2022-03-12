import {useRouter} from "next/router";

export const useNavigate = () => {
  const router = useRouter()

  const handleToProfile = () => {
    return router.push('/profile')
  }

  return {handleToProfile};
};