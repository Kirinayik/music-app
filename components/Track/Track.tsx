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

const Track:FC<TrackProps> = ({track:{album, name, artists}, index}) => {
  return (
    <Grid item xs={12}>
      <TrackContainer container padding={{xs: '10px 0px', tiny: '10px 50px'}} columnSpacing={0}>
        <TrackIndex>{index}</TrackIndex>
        {/*@ts-ignore*/}
        <Grid item xs={9} md={6} big={7}>
          <TrackInfo name={name}
                     artist={artists[0].name}
                     id={artists[0].id}
                     image={album.images[0].url}/>
        </Grid>
        {/*@ts-ignore*/}
        <Grid item xs={3} md={6} big={5}>
          <TrackFeatures album={album.name}/>
        </Grid>
        <TrackPlay/>
      </TrackContainer>
    </Grid>
  );
};

export default Track