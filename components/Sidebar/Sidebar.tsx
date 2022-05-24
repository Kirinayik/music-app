import { Stack } from "@mui/material";
import NavItem from "./NavItem";
import { SidebarContainer } from "./Sidebar.styles";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";

const Sidebar = () => {
  const theme = useTheme();
  const pathname = useRouter().pathname;
  const navArr = ["/", "/search", "/library/playlists"];

  return (
    <SidebarContainer>
      <Stack
        justifyContent={{ xs: "center", sm: "flex-start" }}
        direction={{ xs: "row", sm: "column" }}
        padding={{ xs: "0", sm: "55px 0 30px" }}
        color={theme.colors.white}
      >
        {navArr.map((path, i) => (
          <NavItem
            key={i}
            isActive={
              pathname === path ||
              (path === "/library/playlists" && pathname === "/library/artists")
            }
            path={path}
          />
        ))}
      </Stack>
    </SidebarContainer>
  );
};

export default Sidebar;
