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
}

export default new Spotify();