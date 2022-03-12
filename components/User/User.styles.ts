import styled from "@emotion/styled";
import {Avatar, Box, Typography} from "@mui/material";

export const UserAvatarStyles = {
  width: {
    xs: '130px',
      sm: '200px', md: '250px'
  },
  height: {
    xs: '130px',
      sm: '200px', md: '250px'
  }
}

export const UserNameStyles = {
  fontSize: {
    xs: '38px',
    tiny: '50px',
    sm: '68px',
    md: '96px'
  }
}



export const UserAvatar = styled(Avatar)`
  box-shadow: 0px 5px 30px 6px rgba(34, 60, 80, 0.35);
`

export const UserContainer = styled(Box)`
  display: flex;
  align-items: flex-end;
  background: linear-gradient(180deg, rgba(72,72,72,1) 0%, rgba(28,28,28,1) 100%);
`

export const UserName = styled(Typography)`
  line-height: 1;
  font-weight: inherit;
  letter-spacing: 0;
  word-break: break-all;
`