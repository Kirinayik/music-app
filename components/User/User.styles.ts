import styled from "@emotion/styled";
import {Avatar} from "@mui/material";

export const UserAvatar = styled(Avatar)`
  box-shadow: 0px 5px 30px 6px rgba(34, 60, 80, 0.35);

  @media (min-width: 0px) {
    width: 130px;
    height: 130px;
  }

  @media (min-width: 510px) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 700px) {
    width: 250px;
    height: 250px;
  }
`

export const UserContainer = styled.div`
  display: flex;
  align-items: flex-end;
  background: linear-gradient(180deg, rgba(72,72,72,1) 0%, rgba(28,28,28,1) 100%);

  @media (min-width: 0px) {
    padding: 90px 15px 40px;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 510px) {
    flex-direction: row;
    align-items: flex-end;
  }
  
  @media (min-width: 700px) {
    padding: 90px 30px 40px;
  }
`

export const UserInfoContainer = styled.div`
  font-weight: 700;
  overflow: hidden;
  
  @media (min-width: 0px) {
    margin: 15px 0 0;
  }

  @media (min-width: 510px) {
    margin: 0 0 0 15px;
  }
  
  @media (min-width: 700px) {
    margin: 0 0 0 30px;
  }
`

export const UserName = styled.h2`
  margin-bottom: 15px;
  line-height: 1.2;
  font-weight: inherit;
  letter-spacing: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  
  @media (min-width: 0px) {
    font-size: 38px;
    text-align: center;
  }

  @media (min-width: 510px) {
    font-size: 50px;
    text-align: left;
  }

  @media (min-width: 700px) {
    font-size: 68px;
  }
  
  @media (min-width: 1100px) {
    font-size: 96px;
  }
`

export const UserType = styled.div`
  text-transform: uppercase;
  margin-bottom: 15px;

  @media (min-width: 0px) {
    display: none;
  }

  @media (min-width: 510px) {
   display: block;
  }
`

export const UserSubtitle = styled.div`
  margin-top: 15px;
  font-weight: 700;
  
  @media (min-width: 0px) {
    text-align: center;
  }

  @media (min-width: 510px) {
    text-align: left;
  }
`