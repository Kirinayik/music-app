import {
  UserAvatar,
  UserContainer,
  UserInfoContainer,
  UserName,
  UserType,
} from "../../User/User.styles";
import { formatName } from "../../../helpers/formatName";
import { AlbumProfileInfo } from "../../Album/Album.styles";
import { Box } from "@mui/material";
import { FC } from "react";
import { useSession } from "next-auth/react";
import UsersSavedTracksResponse = SpotifyApi.UsersSavedTracksResponse;

type FavouriteProps = {
  favourite: UsersSavedTracksResponse;
};

const FavouriteProfile: FC<FavouriteProps> = ({ favourite: { total } }) => {
  const { data } = useSession();

  return (
    <UserContainer>
      {data?.user?.image ? (
        <UserAvatar src={data.user.image} variant={"square"} />
      ) : (
        <UserAvatar src={undefined} variant={"square"} />
      )}
      <UserInfoContainer>
        <UserType>Playlist</UserType>
        <UserName>Liked songs</UserName>
        <AlbumProfileInfo>
          <Box component={"li"}>{formatName(data?.user?.name, 30)}</Box>
          <Box component={"li"}>{total} songs</Box>
        </AlbumProfileInfo>
      </UserInfoContainer>
    </UserContainer>
  );
};

export default FavouriteProfile;
