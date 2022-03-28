import styled from "@emotion/styled";
import {Box, Grid} from "@mui/material";

export const TrackContainer = styled(Grid)`
  position: relative;
  height: 70px;
  width: 100%;
  background: transparent;
  border-radius: 8px;
  
  &:hover {
    background-color: ${props => props.theme.colors['black-hover']};
  }
  
  @media (min-width: 0px) {
    padding: 10px;
  }

  @media (min-width: 700px) {
    padding: 10px 50px;
  }
`

export const TrackIndexContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 100%;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 0px) {
    display: none;
  }

  @media screen and (min-width: 700px) {
    display: flex;
  }
`
export const TrackIndex = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: rgba(255,255,255,0.7);
`

export const TrackFeaturesContainer = styled(Box)`
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 100%;
  
  @media (min-width: 0px) {
    padding: 0;
  }

  @media (min-width: 510px) {
    padding: 0 10px;
  }
`

export const FeaturesContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${props => props.theme.colors.green};
`

export const TrackName = styled.div`
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const TrackArtist = styled.a`
  display: inline-block;
  font-size: 13px;
  font-weight: 300;
  color: rgba(255,255,255,0.7);
`
