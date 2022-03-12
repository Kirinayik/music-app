import {Stack} from "@mui/material";
import NavItem from "./NavItem";
import {SidebarContainer} from "./Sidebar.styles";
import {useTheme} from "@emotion/react";

const Sidebar = () => {
  const theme = useTheme()

  return (
    <SidebarContainer>
      <Stack justifyContent={{xs: 'center', sm: 'flex-start'}}
             direction={{xs: 'row', sm: 'column'}}
             padding={{xs: '0', sm:'55px 0 30px'}} color={theme.colors.white}>
        <NavItem path={'/'}/>
        <NavItem path={'/search'}/>
        <NavItem path={'/library'}/>
      </Stack>
    </SidebarContainer>
  );
};

export default Sidebar