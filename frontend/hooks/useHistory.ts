import {useRouter} from "next/router";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../store";
import {addToPrev, pushNext, pushPrev} from "../store/history/history";

export const useHistory = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = router.pathname
  const prevArray = useAppSelector(state => state.history.prev)
  const nextArray = useAppSelector(state => state.history.next)

  useEffect(() => {
    if (prevArray[prevArray.length - 1] !== pathname)
      dispatch(addToPrev(pathname))
  }, [])

  const handlePrevPage = () => {
    if (prevArray.length > 1) {
      dispatch(pushPrev())

      return router.push(prevArray[prevArray.length - 2])
    }
  }

  const handleNextPage = () => {
    dispatch(pushNext())

    return router.push(nextArray[nextArray.length - 1])
  }

  return {handlePrevPage, handleNextPage}
}