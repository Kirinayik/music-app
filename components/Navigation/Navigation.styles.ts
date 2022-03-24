import styled from "@emotion/styled";
import {IconButton, Menu} from "@mui/material";

type NavigationContainerProps = {
  background: string;
}

type NavigationProfileContainerProps = {
  isActive: boolean;
}

type NavigationItemProps = {
  isActive: boolean;
}

export const NavigationContainer = styled.nav<NavigationContainerProps>`
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1299;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s all ease-in-out;
  background: ${props => props.background};
  
  @media screen and (min-width: 0px) {
    padding: 15px;
  }

  @media screen and (min-width: 700px) {
    padding: 15px 30px 15px calc(70px + 30px);
  }

`

export const NavigationButton = styled(IconButton)`
  color: inherit;
  background-color: ${({theme}) => theme.colors.black};
  height: 35px;
  width: 35px;
  cursor: pointer;
  border: 2px solid ${props => props.theme.colors.white};

  & > svg {
    font-size: 24px;
  }
  
  &:disabled {
    color: inherit;
    background-color: ${({theme}) => theme.colors.black};
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: all;
  }
`

export const NavigationProfileContainer = styled.div<NavigationProfileContainerProps>`
  padding: 5px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.isActive ? props.theme.colors['black-hover'] : props.theme.colors.black};
  border-radius: 20px;
  cursor: pointer;
  transition: 0.1s background ease-in-out;
  border: 2px solid ${props => props.theme.colors.white};

  &:hover {
    background-color: ${props => props.theme.colors['black-hover']};
  }
`

export const ProfileMenu = styled(Menu)`
  & .MuiPaper-root {
    overflow: visible;
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

export const NavigationItem = styled.a<NavigationItemProps>`
  display: inline-block;
  background: ${props => props.isActive ? props.theme.colors['black-hover'] : 'transparer'};
  text-align: center;
  transition: 0.1s background ease-in-out;
  
  &:hover {
    background: ${props => props.theme.colors['black-hover']};
    text-decoration: none;
  }

  @media (min-width: 510px) {
    padding: 10px 15px;
    width: 90px;
  }
  
  @media (min-width: 0px) {
    padding: 10px;
    width: 80px;
  }
`
