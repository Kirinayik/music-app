import { IncomingMessage } from "http";
import { getSession } from "next-auth/react";
import AlbumService from "../service/album-service";

class AlbumController {
  async getAlbum(
    req: IncomingMessage | undefined,
    id: string | string[] | undefined
  ) {
    // @ts-ignore
    const { accessToken } = await getSession({ req });
    const album = await AlbumService.getAlbum(accessToken, id);

    return album;
  }
}

export default new AlbumController();
