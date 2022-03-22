import {useEffect, useState} from "react";
import axios from "axios";

export const useNextCall = (initialArray:any, initialNextUrl:string | null) => {
  const [fetch, setFetch] = useState<boolean>(false)
  const [items, setItems] = useState<any[]>([...initialArray])
  const [nextUrl, setNextUrl] = useState<string | null>(initialNextUrl)

  useEffect(() => {
    if (fetch && nextUrl) {
      (async () => {
        const {data} = await axios.get(`http://localhost:3000/api/spotify/nextCall?nextUrl=${nextUrl}`)
        console.log(data)
        setItems(items.concat(data.items))
        setNextUrl(data.next)
        setFetch(false)
      })()
    }
  }, [fetch, nextUrl])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)

    return () => document.removeEventListener('scroll', scrollHandler)
  }, [])

  const scrollHandler = (e:any) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      if (nextUrl) {
        setFetch(true)
      }
    }
  }

  return {fetch, items, nextUrl}
}
