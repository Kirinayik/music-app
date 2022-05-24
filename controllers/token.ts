class Token {
  private TOKEN_ENDPOINT: string;

  constructor() {
    this.TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
  }

  async getAccessToken(refresh_token: string) {
    const basic = Buffer.from(
      `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
    ).toString("base64");
    const data = await fetch(this.TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token,
      }),
    }).then((response) => response.json());

    return data;
  }
}

export default Token;
