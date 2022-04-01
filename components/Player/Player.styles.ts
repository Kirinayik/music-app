import styled from "@emotion/styled";

export const PlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #181818;
  border-top: 1px solid #282828;
  z-index: 1301;
  height: 90px;
  
  @media (min-width: 0) {
    bottom: 69px;
  }

  @media (min-width: 700px) {
    bottom: 0;
  }
`