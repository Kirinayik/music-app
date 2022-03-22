import {IncomingMessage} from "http";
import {getSession} from "next-auth/react";
import SpotifyService from "../service/spotify-service";

class AlbumController {
  async getAlbum(req: IncomingMessage | undefined, id: string | string[] | undefined) {
    // @ts-ignore
    const {accessToken} = await getSession({req})
    const album = await SpotifyService.getAlbum(accessToken, id);

    return album
  }

  async nextCall(req: IncomingMessage | undefined, id: string | string[] | undefined, nextUrl: string | string[]) {
    // @ts-ignore
    const {accessToken} = await getSession({req})
    const albumTracks = await SpotifyService.nextCall(accessToken, id, nextUrl);

    return albumTracks
  }
}

export default new AlbumController();