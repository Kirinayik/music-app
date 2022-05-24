import styled from "@emotion/styled";

export const AlbumProfileInfo = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  flex-wrap: wrap;

  & > li:first-of-type {
    margin: 0 15px 0 0;
    list-style-type: none;
  }

  & > li {
    margin: 0 15px;
  }

  @media (min-width: 0px) {
    justify-content: center;
  }

  @media (min-width: 510px) {
    justify-content: flex-start;
  }
`;
