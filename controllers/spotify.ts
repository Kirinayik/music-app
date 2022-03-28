import {getSession} from "next-auth/react";
import SpotifyService from "../service/spotify-service";
import {IncomingMessage} from "http";

class Spotify {
  async getTopItems(req:IncomingMessage | undefined, item:string, limit:number) {
    // @ts-ignore
    const {accessToken} = await getSession({req})
    const {items} = await SpotifyService.getTopItems(accessToken, item, limit);

    return items
  }

  async getPlaylists(req:IncomingMessage | undefined) {
    // @ts-ignore
    const {accessToken} = await getSession({req})
    const playlists = await SpotifyService.getPlaylists(accessToken);

    return playlists
  }

  async getPlaylist(req: IncomingMessage | undefined, id: string | string[] | undefined) {
    // @ts-ignore
    const {accessToken} = await getSession({req})
    const playlist = await SpotifyService.getPlaylist(accessToken, id);

    return playlist
  }

  async getSavedTracks(req:IncomingMessage | undefined, limit:number=30) {
    // @ts-ignore
    const {accessToken} = await getSession({req})
    const favourite = await SpotifyService.getSavedTracks(accessToken, limit);

    return favourite
  }

  async nextCall(req: IncomingMessage | undefined, nextUrl: string) {
    // @ts-ignore
    const {accessToken} = await getSession({req})
    const items = await SpotifyService.nextCall(accessToken, nextUrl);

    return items
  }

  async search(req: IncomingMessage | undefined, query: string, type: string = 'track,artist,playlist,album', limit: number = 6) {
      // @ts-ignore
      const {accessToken} = await getSession({req})
      const items = await SpotifyService.search(accessToken, query, type, limit);

      return items
  }
}

export default new Spotify();