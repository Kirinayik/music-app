import Link from "next/link";
import {IconContainer} from "./Sidebar.styles";
import {FC} from "react";
import {useRouter} from "next/router";

import {NavIcon} from "./NavIcon";

type NavItemProps = {
  path: string;
}

const NavItem:FC<NavItemProps> = ({path}) => {
  const pathname = useRouter().pathname;
  
  return (
    <Link href={path}>
      <IconContainer isActive={pathname === path} disableRipple>
        <NavIcon path={path}/>
      </IconContainer>
    </Link>
  )
};

export default NavItem