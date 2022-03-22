import {Avatar, Box, Divider, MenuItem} from "@mui/material";
import {useSession} from "next-auth/react";
import {NavigationProfileContainer, ProfileMenu} from "../Navigation.styles";
import {MouseEvent, useState} from "react";
import {useAuth} from "../../../hooks/useAuth";
import {useNavigate} from "../../../hooks/useNavigate";
import LogoutIcon from '@mui/icons-material/Logout';
import {formatName} from "../../../helpers/formatName";

const NavigationProfile = () => {
  const {handleToProfile} = useNavigate();
  const {handleSignOut} = useAuth();
  const {data} = useSession()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLinkProfile = async () => {
    handleClose()
    await handleToProfile()
  }

  if (!data) return null

  return (
    <>
      <NavigationProfileContainer isActive={open} onClick={handleClick}>
        {data?.user?.image ? (
          <Avatar sx={{ width: 25, height: 25 }} alt="user" src={data.user.image} />
        ) : (
          <Avatar src={undefined} sx={{ width: 25, height: 25 }} alt="user"/>
        )}
        <Box display={{xs: 'none', sm: 'block'}} padding={'0 10px'}>
          {formatName(data?.user?.name, 15)}
        </Box>
      </NavigationProfileContainer>
      <ProfileMenu open={open} onClose={handleClose} anchorEl={anchorEl} disableScrollLock>
        <Box>
          <MenuItem onClick={handleLinkProfile}>
            Profile
          </MenuItem>
          <Divider sx={{ my: 0.5, borderColor: 'rgba(255,255,255,0.1)' }} />
          <MenuItem onClick={handleSignOut}>
            Logout
            <LogoutIcon sx={{fontSize: '14px'}}/>
          </MenuItem>
        </Box>
      </ProfileMenu>
    </>
  );
};

export default NavigationProfile