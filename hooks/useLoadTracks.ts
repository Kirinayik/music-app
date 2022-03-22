import {useEffect, useState} from "react";
import axios from "axios";
import TrackObjectFull = SpotifyApi.TrackObjectFull;

export const useLoadTracks = (initialTracks:any, initialNextUrl:string | null, id:string | string[] | undefined) => {
  const [fetch, setFetch] = useState<boolean>(false)
  const [tracks, setTracks] = useState<TrackObjectFull[]>([...initialTracks])
  const [nextUrl, setNextUrl] = useState<string | null>(initialNextUrl)

  useEffect(() => {
    if (fetch && nextUrl) {
      (async () => {
        const {data} = await axios.get(`http://localhost:3000/api/spotify/nextCall?id=${id}&nextUrl=${nextUrl}`)
        setTracks(tracks.concat(data.items))
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

  return {fetch, tracks, nextUrl}
}
