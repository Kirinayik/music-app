import {TopLink, TopTitleContainer} from "./Top.styles";
import {Title} from "../../styles/global";
import {Box, Grid} from "@mui/material";
import {FC} from "react";
import Track from "../Track/Track";
import TrackObjectFull = SpotifyApi.TrackObjectFull;

type TopTracksProps = {
  tracks: TrackObjectFull[];
}

const TopTracks:FC<TopTracksProps> = ({tracks}) => {
  const filteredTracks = tracks.filter((_, index) => index < 4)

  return (
    <Box padding={{xs: '15px 15px 50px', sm: '15px 30px 50px'}}>
      <TopTitleContainer>
        <Title>Top tracks this month</Title>
        <TopLink>see all</TopLink>
      </TopTitleContainer>
      <Grid container rowSpacing={2}>
        {filteredTracks && filteredTracks.map((track, i) => (
          <Track track={track} key={track.id} index={i+1}/>
        ))}
      </Grid>
    </Box>
  );
};

export default TopTracks