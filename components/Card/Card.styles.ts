import styled from "@emotion/styled";

export const CardContainer = styled.div`
  cursor: pointer;
  background: rgb(38,38,38);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.2s background ease-in-out;
  border-radius: 8px;
  padding: 30px 20px;
  height: 100%;
  
  &:hover {
    background: ${props => props.theme.colors['black-hover']};
  }
`

export const ImageContainer = styled.div`
  overflow: hidden;
  max-width: 215px;
  margin-bottom: 30px;
  
  & img {
    border-radius: 50%;
  }
`

export const InfoContainer = styled.div`
  align-self: flex-start;
`