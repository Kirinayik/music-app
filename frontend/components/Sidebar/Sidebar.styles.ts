import styled from "@emotion/styled";
import {IconButton} from "@mui/material";

type IconContainerProps = {
  active: string;
}

export const SidebarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 10;
  background-color: ${props => props.theme.colors.black};
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