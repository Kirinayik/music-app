import { NextApiRequest, NextApiResponse } from "next";
import SpotifyController from "../../../controllers/spotify";
import { errorHandler } from "../../../helpers/errorHandler";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      const { query } = req.body;

      try {
        const items = await SpotifyController.search(req, query);

        return res.status(200).json(items);
      } catch (e) {
        errorHandler(e);
      }
  }
};
