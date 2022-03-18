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

  async getAlbum(req: IncomingMessage | undefined, id: string | string[] | undefined) {
    // @ts-ignore
    const {accessToken} = await getSession({req})
    const album = await SpotifyService.getAlbum(accessToken, id);

    return album
  }

  async getAlbumTracks(req: IncomingMessage | undefined, id: string | string[] | undefined) {
    // @ts-ignore
    const {accessToken} = await getSession({req})
    const {items} = await SpotifyService.getAlbumTracks(accessToken, id);

    return items
  }
}

export default new Spotify();