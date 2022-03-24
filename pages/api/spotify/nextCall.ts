import type {NextApiRequest, NextApiResponse} from 'next'
import SpotifyController from "../../../controllers/spotify";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      const {nextUrl, params} = req.query;

      if (typeof nextUrl === "string" && typeof params === "string") {
        const items = await SpotifyController.nextCall(req, nextUrl + `&${params}`)

        return res.status(200).json(items)
      }

      return res.status(500)
  }
}