import {IncomingMessage} from "http";
import {getSession} from "next-auth/react";
import ArtistService from "../service/artist-service";

class ArtistController {
  async getArtists(req:IncomingMessage | undefined) {
    // @ts-ignore
    const {accessToken} = await getSession({req})
    const {artists: {items}} = await ArtistService.getArtists(accessToken);

    return items
  }

  async getArtist(req: IncomingMessage | undefined, id: string | string[] | undefined) {
    // @ts-ignore
    const {accessToken} = await getSession({req})
    const artist = await ArtistService.getArtist(accessToken, id);

    return artist
  }

  async getTopArtistTracks(req: IncomingMessage | undefined, id: string | string[] | undefined) {
    // @ts-ignore
    const {accessToken} = await getSession({req})
    const {tracks} = await ArtistService.getTopArtistTracks(accessToken, id);

    return tracks
  }

  async getArtistAlbums(req: IncomingMessage | undefined, id: string | string[] | undefined, limit:number = 6) {
    // @ts-ignore
    const {accessToken} = await getSession({req})
    const albums = await ArtistService.getArtistAlbums(accessToken, id, limit);

    return albums
  }
}

export default new ArtistController();