import {Stack} from "@mui/material";
import {emotionTheme} from "../../styles/theme";
import NavItem from "./NavItem";
import {SidebarContainer} from "./Sidebar.styles";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Stack padding={'55px 0 30px'} color={emotionTheme.colors.white}>
        <NavItem path={'/'}/>
        <NavItem path={'/search'}/>
        <NavItem path={'/library'}/>
      </Stack>
    </SidebarContainer>
  );
};

export default Sidebar