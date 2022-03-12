import {Grid} from "@mui/material";
import {FC} from "react";
import {TrackContainer, TrackIndex} from "./Track.styles";
import TrackPlay from "./TrackPlay";
import TrackInfo from "./TrackInfo";
import TrackFeatures from "./TrackFeatures";
import TrackObjectFull = SpotifyApi.TrackObjectFull;

type TrackProps = {
  track: TrackObjectFull;
  index: number;
}

const Track:FC<TrackProps> = ({track:{album, name, artists, duration_ms, ...track}, index}) => {
  return (
    <Grid item xs={12}>
      <TrackContainer padding={{xs: '10px 20px', sm: '10px 50px'}}>
        <TrackIndex>
            {index}
        </TrackIndex>
        <TrackInfo name={name} artist={artists[0].name} image={album.images[0].url}/>
        <TrackFeatures album={album.name}/>
        <TrackPlay/>
      </TrackContainer>
    </Grid>
  );
};

export default Track