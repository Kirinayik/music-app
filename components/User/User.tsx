import {Box} from "@mui/material";
import {UserAvatar, UserAvatarStyles, UserContainer, UserName, UserNameStyles} from "./User.styles";
import {useSession} from "next-auth/react";
import {formatName} from "../../helpers/formatName";
import {FC} from "react";

type UserProps = {
  type: string;
  artist?: {
    name: string;
    images: any;
    followers: number;
  };
}

const User:FC<UserProps> = ({type, artist}) => {
  const {data} = useSession()

  return (
    <UserContainer flexDirection={{xs: 'column', tiny: 'row'}}
                   alignItems={{xs: 'center', tiny: 'flex-end'}}
                   padding={{xs: '90px 15px 40px', sm: '90px 30px 40px'}}>
      {type === 'profile' ? (
        <>
          {data?.user?.image ? (
            <UserAvatar sx={UserAvatarStyles} src={data.user.image}/>
          ) : (
            <UserAvatar sx={UserAvatarStyles} src={undefined}/>
          )}
        </>
      ) : (
        <>
          {artist?.images[0] ? (
            <UserAvatar sx={UserAvatarStyles} src={artist?.images[0].url}/>
          ) : (
            <UserAvatar sx={UserAvatarStyles} src={undefined}/>
          )}
        </>
        )}
      <Box margin={{xs: '15px 0 0', tiny: '0 0 0 15px', sm: '0 0 0 30px'}} fontWeight={'700'}>
        <Box display={{xs: 'none', tiny: 'block'}}  sx={{textTransform: 'uppercase', marginBottom: '15px'}}>
          {type === 'profile' ? 'Profile' : 'Artist'}
        </Box>
        <UserName variant={'h1'} sx={UserNameStyles}>
          {formatName(type === 'profile' ? data?.user?.name : artist?.name, 40)}
        </UserName>
        {artist?.followers && (
          <Box fontWeight={'300'} fontSize={'16px'} marginTop={'15px'} sx={{textAlign: {xs: 'center', tiny: 'left'}}}>
            Total followers: {artist.followers}
          </Box>
        )}
      </Box>
    </UserContainer>
  );
};

export default User