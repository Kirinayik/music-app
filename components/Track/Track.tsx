import {Grid} from "@mui/material";
import {FC} from "react";
import {TrackContainer, TrackIndex, TrackIndexContainer} from "./Track.styles";
import TrackPlay from "./TrackPlay/TrackPlay";
import TrackInfo from "./TrackInfo/TrackInfo";
import TrackFeatures from "./TrackFeature/TrackFeatures";
import TrackObjectFull = SpotifyApi.TrackObjectFull;

type TrackProps = {
  track: TrackObjectFull;
  index: number;
  type?: string;
}

const Track:FC<TrackProps> = ({track:{album, name, artists}, index, type}) => {
  const image = type === 'album' ? null : album.images[0].url

  return (
    <Grid item xs={12}>
      <TrackContainer container padding={{xs: '10px 0px', tiny: '10px 50px'}} columnSpacing={0}>
        <TrackIndexContainer>
          <TrackIndex>{index}</TrackIndex>
        </TrackIndexContainer>
        {/*@ts-ignore*/}
        <Grid item xs={9} md={6} big={7}>
          <TrackInfo name={name}
                     artist={artists[0].name}
                     id={artists[0].id}
                     image={image}/>
        </Grid>
        {/*@ts-ignore*/}
        <Grid item xs={3} md={6} big={5}>
          <TrackFeatures album={album?.name} id={album?.id}/>
        </Grid>
        <TrackPlay/>
      </TrackContainer>
    </Grid>
  );
};

export default Track