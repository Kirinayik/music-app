import axios from "axios";
import Token from "../controllers/token";

class ArtistService extends Token {
  async getArtists(token:string) {
    const {access_token} = await this.getAccessToken(token);
    const {data} = await axios.get(`https://api.spotify.com/v1/me/following?type=artist`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      },
    })

    return data
  }

  async getArtist(token: string, id: string | string[] | undefined) {
    const {access_token} = await this.getAccessToken(token);
    const {data} = await axios.get(`https://api.spotify.com/v1/artists/${id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      },
    })

    return data
  }

  async getTopArtistTracks(token: string, id: string | string[] | undefined) {
    const {access_token} = await this.getAccessToken(token);
    const {data} = await axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=US`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      },
    })

    return data
  }

  async getArtistAlbums(token: string, id: string | string[] | undefined, limit:number) {
    const {access_token} = await this.getAccessToken(token);
    const {data} = await axios.get(`https://api.spotify.com/v1/artists/${id}/albums?limit=${limit}&include_groups=album,single`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      },
    })

    return data
  }
}

export default new ArtistService()