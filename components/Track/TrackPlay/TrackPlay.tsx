import {IconButton} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {TrackPlayContainer} from "../Track.styles";

const TrackPlay = () => {
  return (
    <TrackPlayContainer>
      <IconButton color={'inherit'}>
        <PlayArrowIcon />
      </IconButton>
    </TrackPlayContainer>
  );
};

export default TrackPlay