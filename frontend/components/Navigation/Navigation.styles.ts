import styled from "@emotion/styled";
import {IconButton, Menu} from "@mui/material";

type NavigationProfileContainerProps = {
  isActive: boolean;
}

export const NavigationContainer = styled.nav`
  padding: 15px 30px 15px calc(70px + 30px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 70px;
`

export const NavigationButton = styled(IconButton)`
  color: inherit;
  background-color: ${props => props.theme.colors.black};
  height: 35px;
  width: 35px;
  cursor: pointer;
  
  & > svg {
    font-size: 24px;
  }
  
  &:disabled {
    color: inherit;
    background-color: ${props => props.theme.colors.black};
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: all;
  }
`

export const NavigationProfileContainer = styled.div<NavigationProfileContainerProps>`
  padding: 5px;
  display: flex;
  align-items: center;
  background-color: ${props => props.isActive ? '#2e2e2e' : props.theme.colors.black};
  border-radius: 20px;
  cursor: pointer;
  transition: 0.1s background ease-in-out;
  
  &:hover {
    background-color: #2e2e2e;
  }
`

export const ProfileMenu = styled(Menu)`
  & .MuiPaper-root {
    margin-top: 10px;
    min-width: 200px;
    border-radius: 0;
  }

  & .MuiMenu-list {
    padding: 5px 3px;
    color: #fff;
    background-color: #2e2e2e;
  }

  & .MuiMenuItem-root {
    font-family: inherit;
    font-size: 14px;
    font-weight: 700;
    justify-content: space-between;
    
    &:hover {
      background-color: #484848;
    }
  }
`
