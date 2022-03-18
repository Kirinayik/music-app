import {Box, Grid} from "@mui/material";
import {Title} from "../../../styles/global";
import {FC} from "react";
import Track from "../../Track/Track";
import {TopTitleContainer} from "../../Top/Top.styles";
import TrackObjectFull = SpotifyApi.TrackObjectFull;

type ArtistPopularProps = {
  topTracks: TrackObjectFull[];
}

const ArtistPopular:FC<ArtistPopularProps> = ({topTracks}) => {
  return (
    <Box padding={{xs: '50px 15px 30px', sm: '50px 30px 30px'}}>
      <TopTitleContainer>
        <Title>Popular</Title>
      </TopTitleContainer>
        <Grid container>
          {topTracks.map((track, i) => (
              <Track track={track} index={i+1} key={track.id} />
            )
          )}
        </Grid>
    </Box>
  );
};

export default ArtistPopular