import styled from "@emotion/styled";

type SearchIconProps = {
  position: string;
}

export const SearchBarContainer = styled.div`
  background: #fff;
  height: 40px;
  position: relative;
  border-radius: 15px;
  overflow: hidden;

  @media (min-width: 510px) {
    width: 250px;
  }

  @media (min-width: 770px) {
    width: 300px;
  }
`

export const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  padding: 0 40px;
`

export const SearchIconContainer = styled.div<SearchIconProps>`
  position: absolute;
  top: 0;
  color: ${props => props.theme.colors.black};
  ${props => props.position}: 0;
  
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 40px;
  }
`