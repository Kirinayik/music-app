import {Box} from "@mui/material";
import {UserAvatar, UserAvatarStyles, UserContainer, UserName, UserNameStyles} from "./User.styles";
import {useSession} from "next-auth/react";
import {formatName} from "../../helpers/formatName";

const User = () => {
  const {data} = useSession()

  return (
    <UserContainer flexDirection={{xs: 'column', tiny: 'row'}}
                   alignItems={{xs: 'center', tiny: 'flex-end'}}
                   padding={{xs: '90px 15px 40px', sm: '90px 30px 40px'}}>
      {data?.user?.image ? (
        <UserAvatar sx={UserAvatarStyles} src={data.user.image}/>
      ) : (
        <UserAvatar sx={UserAvatarStyles} src={undefined}/>
      )}
      <Box margin={{xs: '15px 0 0', tiny: '0 0 0 15px', sm: '0 0 0 30px'}} fontWeight={'700'}>
        <Box display={{xs: 'none', tiny: 'block'}}  sx={{textTransform: 'uppercase', marginBottom: '15px'}}>
          Profile
        </Box>
        <UserName variant={'h1'} sx={UserNameStyles}>
          {formatName(data?.user?.name, 40)}
        </UserName>
      </Box>
    </UserContainer>
  );
};

export default User