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
  
  @media screen and (max-width: 699px) {
    display: none;
  }
`

export const TrackFeaturesContainer = styled(Box)`
  display: flex;
  align-items: center;
  padding: 0 10px;
  overflow: hidden;
  height: 100%;
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
