import styled from "@emotion/styled";

export const LibraryCardContainer = styled.a`
  display: block;
  background: rgb(38, 38, 38);
  cursor: pointer;
  transition: 0.2s background ease-in-out;
  border-radius: 8px;
  padding: 15px;
  height: 100%;

  &:hover {
    background: ${(props) => props.theme.colors["black-hover"]};
    text-decoration: none;
  }
`;
