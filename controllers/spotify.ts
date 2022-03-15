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
    const {items} = await SpotifyService.getPlaylists(accessToken);

    return items
  }

  async getArtists(req:IncomingMessage | undefined) {
    // @ts-ignore
    const {accessToken} = await getSession({req})
    const {artists: {items}} = await SpotifyService.getArtists(accessToken);

    return items
  }
}

export default new Spotify();