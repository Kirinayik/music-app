import axios from "axios";
import Token from "../controllers/token";

class AlbumService extends Token {
  async getAlbum(token: string, id: string | string[] | undefined) {
    const { access_token } = await this.getAccessToken(token);
    const { data } = await axios.get(
      `https://api.spotify.com/v1/albums/${id}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return data;
  }
}

export default new AlbumService();
