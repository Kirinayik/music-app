import styled from "@emotion/styled";
import {IconButton} from "@mui/material";

type IconContainerProps = {
  active: string;
}

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 10;
  background-color: ${props => props.theme.colors.black};
  
  @media screen and (max-width: 700px) {
    width: 100%;
    height: auto;
    top: 100%;
    transform: translateY(-100%);
    z-index: 1000;
  }
`

export const IconContainer = styled(IconButton)<IconContainerProps>`
  color: #fff;
  padding: 20px;
  cursor: pointer;
  opacity: ${props => props.active === 'true' ? '1' : '0.5'};
  transition: 0.2s opacity ease-in-out;

  & > svg {
    font-size: 30px;
  }
  
  &:hover {
    opacity: 1;
  }
`