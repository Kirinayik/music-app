import axios from "axios";


class SpotifyService {
  private TOKEN_ENDPOINT:string;

  constructor() {
    this.TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
  }

  async getAccessToken(refresh_token: string) {
    const basic = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')
    const data = await fetch(this.TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token,
      }),
    }).then(response => response.json());

    return data
  }

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
}

export default new SpotifyService();