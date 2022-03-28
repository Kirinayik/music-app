import {UserAvatar, UserContainer, UserInfoContainer, UserName, UserType} from "../../User/User.styles";
import {formatName} from "../../../helpers/formatName";
import {AlbumProfileInfo} from "../../Album/Album.styles";
import {FC} from "react";
import {Box} from "@mui/material";
import SpotifyButton from "../../assets/SpotifyButton";
import PlaylistObjectFull = SpotifyApi.PlaylistObjectFull;

type PlaylistProfileProps = {
  playlist: PlaylistObjectFull;
}

const PlaylistProfile:FC<PlaylistProfileProps> = ({playlist: {images, name, owner:{display_name}, tracks, followers, external_urls}}) => {
  return (
    <UserContainer>
      {images[0] ? (
        <UserAvatar src={images[0].url} variant={'square'}/>
      ) : (
        <UserAvatar src={undefined} variant={'square'}/>
      )}
      <UserInfoContainer>
        <UserType>Playlist</UserType>
        <UserName>
          {formatName(name, 40)}
        </UserName>
        <AlbumProfileInfo>
          <Box component={'li'}>{formatName(display_name, 30)}</Box>
          <Box component={'li'}>{tracks.total} songs</Box>
          <Box component={'li'}>{followers.total} followers</Box>
        </AlbumProfileInfo>
        {external_urls.spotify && tracks.total > 0 && <SpotifyButton externalUrl={external_urls.spotify}/>}
      </UserInfoContainer>
    </UserContainer>
  );
};

export default PlaylistProfile