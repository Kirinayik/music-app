import Link from "next/link";
import {IconContainer} from "./Sidebar.styles";
import {FC} from "react";

import {NavIcon} from "./NavIcon";

type NavItemProps = {
  path: string;
  isActive: boolean;
}

const NavItem:FC<NavItemProps> = ({path, isActive}) => {

  return (
    <Link href={path} passHref>
      <IconContainer active={`${isActive}`} disableRipple>
        <NavIcon path={path}/>
      </IconContainer>
    </Link>
  )
};

export default NavItem