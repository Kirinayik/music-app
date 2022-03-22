import type {NextApiRequest, NextApiResponse} from 'next'
import AlbumController from "../../../controllers/album";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      const {id, nextUrl} = req.query;

      const albumTracks = await AlbumController.nextCall(req, id, nextUrl)

      return res.status(200).json(albumTracks)
  }
}