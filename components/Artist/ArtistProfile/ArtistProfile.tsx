import {
  UserAvatar,
  UserContainer,
  UserInfoContainer,
  UserName,
  UserSubtitle,
  UserType,
} from "../../User/User.styles";
import { formatName } from "../../../helpers/formatName";
import { FC } from "react";
import SpotifyButton from "../../assets/SpotifyButton";
import ArtistObjectFull = SpotifyApi.ArtistObjectFull;

type ArtistProfileProps = {
  artist: ArtistObjectFull;
};

const ArtistProfile: FC<ArtistProfileProps> = ({
  artist: { images, name, followers, external_urls },
}) => {
  return (
    <UserContainer>
      {images[0] ? (
        <UserAvatar src={images[0].url} />
      ) : (
        <UserAvatar src={undefined} />
      )}
      <UserInfoContainer>
        <UserType>Artist</UserType>
        <UserName>{formatName(name, 40)}</UserName>
        <UserSubtitle>Total followers: {followers.total}</UserSubtitle>
        {external_urls.spotify && (
          <SpotifyButton externalUrl={external_urls.spotify} />
        )}
      </UserInfoContainer>
    </UserContainer>
  );
};

export default ArtistProfile;
