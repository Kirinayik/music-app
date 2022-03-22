import axios from "axios";
import Token from "../controllers/token";


class SpotifyService extends Token{
  async getPlaylists(token:string) {
    const {access_token} = await this.getAccessToken(token);
    const {data} = await axios.get('https://api.spotify.com/v1/me/playlists', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })

    return data
  }

  async getTopItems(token:string, item:string, limit:number) {
    const {access_token} = await this.getAccessToken(token);
    const {data} = await axios.get(`https://api.spotify.com/v1/me/top/${item}?time_range=short_term&limit=${limit}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      },
    })

    return data
  }

  async nextCall(token: string, nextUrl: string | string[]) {
    const {access_token} = await this.getAccessToken(token);
    if (typeof nextUrl === "string") {
      const {data} = await axios.get(nextUrl, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json'
        },
      })

      return data
    }
  }
}

export default new SpotifyService();