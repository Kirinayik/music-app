import type {NextApiRequest, NextApiResponse} from 'next'
import SpotifyController from "../../../controllers/spotify";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      const {nextUrl} = req.query;

      const items = await SpotifyController.nextCall(req, nextUrl + '&include_groups=album,single')

      return res.status(200).json(items)
  }
}