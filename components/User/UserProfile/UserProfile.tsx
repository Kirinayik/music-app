import {
  UserAvatar,
  UserContainer,
  UserInfoContainer,
  UserName,
  UserType,
} from "../User.styles";
import { useSession } from "next-auth/react";
import { formatName } from "../../../helpers/formatName";

const UserProfile = () => {
  const { data } = useSession();

  return (
    <UserContainer>
      {data?.user?.image ? (
        <UserAvatar src={data.user.image} />
      ) : (
        <UserAvatar src={undefined} />
      )}
      <UserInfoContainer>
        <UserType>profile</UserType>
        <UserName>{formatName(data?.user?.name, 40)}</UserName>
      </UserInfoContainer>
    </UserContainer>
  );
};

export default UserProfile;
