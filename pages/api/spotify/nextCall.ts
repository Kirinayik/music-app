import type { NextApiRequest, NextApiResponse } from "next";
import SpotifyController from "../../../controllers/spotify";
import { errorHandler } from "../../../helpers/errorHandler";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      const { nextUrl, params } = req.body;

      try {
        const items = await SpotifyController.nextCall(
          req,
          nextUrl + `&${params}`
        );

        if (items.artists) {
          return res.status(200).json(items.artists);
        } else if (items.tracks) {
          return res.status(200).json(items.tracks);
        } else if (items.albums) {
          return res.status(200).json(items.albums);
        } else if (items.playlists) {
          return res.status(200).json(items.playlists);
        }

        return res.status(200).json(items);
      } catch (e) {
        errorHandler(e);
      }
  }
};
