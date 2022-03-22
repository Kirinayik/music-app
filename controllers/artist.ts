import {IncomingMessage} from "http";
import {getSession} from "next-auth/react";
import SpotifyService from "../service/spotify-service";

class ArtistController {
  async getArtists(req:IncomingMessage | undefined) {
    // @ts-ignore
    const {accessToken} = await getSession({req})
    const {artists: {items}} = await SpotifyService.getArtists(accessToken);

    return items
  }

  async getArtist(req: IncomingMessage | undefined, id: string | string[] | undefined) {
    // @ts-ignore
    const {accessToken} = await getSession({req})
    const artist = await SpotifyService.getArtist(accessToken, id);

    return artist
  }

  async getTopArtistTracks(req: IncomingMessage | undefined, id: string | string[] | undefined) {
    // @ts-ignore
    const {accessToken} = await getSession({req})
    const {tracks} = await SpotifyService.getTopArtistTracks(accessToken, id);

    return tracks
  }

  async getArtistAlbums(req: IncomingMessage | undefined, id: string | string[] | undefined) {
    // @ts-ignore
    const {accessToken} = await getSession({req})
    const {items} = await SpotifyService.getArtistAlbums(accessToken, id);

    return items
  }

  async getAlbum(req: IncomingMessage | undefined, id: string | string[] | undefined) {
    // @ts-ignore
    const {accessToken} = await getSession({req})
    const album = await SpotifyService.getAlbum(accessToken, id);

    return album
  }
}

export default new ArtistController();