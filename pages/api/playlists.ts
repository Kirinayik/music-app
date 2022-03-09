import {NextApiRequest, NextApiResponse} from "next";
import {getSession} from "next-auth/react";
import SpotifyService from "../../frontend/service/spotify-service";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {token: {accessToken}} = await getSession({req})
  const {items} = await SpotifyService.getPlaylists(accessToken);

  return res.status(200).json({items});
}