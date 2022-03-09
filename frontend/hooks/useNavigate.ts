import {useRouter} from "next/router";

export const useNavigate = () => {
  const router = useRouter()

  const handleToHome = () => {
    return router.push('/')
  }

  const handleToProfile = () => {
    return router.push('/profile')
  }

  return {handleToHome, handleToProfile}
}