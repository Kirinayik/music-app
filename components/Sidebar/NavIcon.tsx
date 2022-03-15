import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import {FC} from "react";

type NavIconProps = {
  path: string;
}

export const NavIcon:FC<NavIconProps> = ({path}) => {
  switch (path) {
    case '/':
      return <HomeIcon/>
    case '/search':
      return <SearchIcon/>
    case '/library/playlists':
      return <LibraryMusicIcon/>
    default:
      return null 
  } 
};