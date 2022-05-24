import { FC } from "react";
import {
  UserAvatar,
  UserContainer,
  UserInfoContainer,
  UserName,
  UserType,
} from "../../User/User.styles";
import { formatName } from "../../../helpers/formatName";
import { AlbumProfileInfo } from "../Album.styles";
import { Box } from "@mui/material";
import SpotifyButton from "../../assets/SpotifyButton";
import AlbumObjectFull = SpotifyApi.AlbumObjectFull;

type AlbumProfileProps = {
  album: AlbumObjectFull;
};

const AlbumProfile: FC<AlbumProfileProps> = ({
  album: { images, name, release_date, artists, total_tracks, external_urls },
}) => {
  return (
    <UserContainer>
      {images[0] ? (
        <UserAvatar src={images[0].url} variant={"square"} />
      ) : (
        <UserAvatar src={undefined} variant={"square"} />
      )}
      <UserInfoContainer>
        <UserType>Album</UserType>
        <UserName>{formatName(name, 40)}</UserName>
        <AlbumProfileInfo>
          <Box component={"li"}>{artists[0].name}</Box>
          <Box component={"li"}>{release_date.split("-")[0]}</Box>
          <Box component={"li"}>{total_tracks} songs</Box>
        </AlbumProfileInfo>
        {external_urls.spotify && (
          <SpotifyButton externalUrl={external_urls.spotify} />
        )}
      </UserInfoContainer>
    </UserContainer>
  );
};

export default AlbumProfile;
