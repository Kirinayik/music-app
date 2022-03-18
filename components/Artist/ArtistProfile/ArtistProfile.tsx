import {UserAvatar, UserContainer, UserInfoContainer, UserName, UserSubtitle, UserType} from "../../User/User.styles";
import {formatName} from "../../../helpers/formatName";
import {FC} from "react";
import ArtistObjectFull = SpotifyApi.ArtistObjectFull;

type ArtistProfileProps = {
  artist: ArtistObjectFull;
}

const ArtistProfile:FC<ArtistProfileProps> = ({artist: {images, name, followers}}) => {
  return (
    <UserContainer>
      {images[0] ? (
        <UserAvatar src={images[0].url}/>
      ) : (
        <UserAvatar src={undefined}/>
      )}
      <UserInfoContainer>
        <UserType>Album</UserType>
        <UserName>
          {formatName(name, 40)}
        </UserName>
        <UserSubtitle>Total followers: {followers.total}</UserSubtitle>
      </UserInfoContainer>
    </UserContainer>
  );
};

export default ArtistProfile