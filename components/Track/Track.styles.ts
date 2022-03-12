import styled from "@emotion/styled";
import {Box} from "@mui/material";

export const TrackContainer = styled(Box)`
  position: relative;
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  background: transparent;
  border-radius: 8px;
  
  &:hover {
    background-color: ${props => props.theme.colors['black-hover']};
  }
`

export const TrackIndex = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: rgba(255,255,255,0.7);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 21px;
  
  @media screen and (max-width: 510px) {
    display: none;
  }
`

export const TrackPlayContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;
  color: ${props => props.theme.colors.white};
  
  @media screen and (max-width: 700px) {
    display: none;
  }
`

export const TrackArtist = styled.a`
  font-size: 13px;
  font-weight: 300;
  color: rgba(255,255,255,0.7);
`

export const TrackFeaturesContainer = styled(Box)`
  display: flex;
  align-items: center;
`

export const FeaturesContainer = styled(Box)`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.green};
  overflow: hidden;
`
