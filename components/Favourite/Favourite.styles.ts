import styled from "@emotion/styled";

export const FavouriteCardContainer = styled.a`
  display: flex;
  align-items: flex-end;
  background: linear-gradient(149.46deg,#450af5,#8e8ee5 99.16%);
  padding: 15px;
  border-radius: 8px;
  height: 100%;
  
  &:hover{
    text-decoration: none;
  }
`

export const FavouriteCardTitle = styled.div`
  font-size: 40px;
  line-height: 1;
  margin-bottom: 10px;
  font-weight: 700;
`

export const FavouriteCardSubTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
`