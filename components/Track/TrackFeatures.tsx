import {Box, IconButton} from "@mui/material";
import {FeaturesContainer, TrackArtist, TrackFeaturesContainer} from "./Track.styles";
import {formatName} from "../../helpers/formatName";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {FC} from "react";

type TrackFeaturesProps = {
  album: string;
}

const TrackFeatures:FC<TrackFeaturesProps> = ({album}) => {
  return (
    <TrackFeaturesContainer justifyContent={{xs:'flex-end',sm:'space-between'}}
      flexBasis={{xs:'20%',sm: '60%', md: '50%', big: '40%'}}>
      <Box display={{xs: 'none', sm: 'block'}}>
        <TrackArtist>{formatName(album, 33)}</TrackArtist>
      </Box>
      <FeaturesContainer width={{xs:'auto', tiny: '100px'}}>
        <IconButton disableRipple color={'inherit'} sx={{marginRight: {xs:'0', tiny:'15px'}}}>
          <FavoriteIcon sx={{fontSize: '18px'}}/>
        </IconButton>
        <Box display={{xs: 'none', tiny: 'block'}} fontWeight={'300'} color={'rgba(255,255,255,0.7)'}>14:52</Box>
      </FeaturesContainer>
    </TrackFeaturesContainer>
  );
};

export default TrackFeatures