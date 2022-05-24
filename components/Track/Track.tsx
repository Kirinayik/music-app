import { Grid, IconButton } from "@mui/material";
import { FC } from "react";
import {
  TrackContainer,
  TrackIndex,
  TrackIndexContainer,
} from "./Track.styles";
import TrackInfo from "./TrackInfo/TrackInfo";
import TrackFeatures from "./TrackFeature/TrackFeatures";
import { useAppDispatch, useAppSelector } from "../../store";
import { setIsPlaying, setTrack } from "../../store/player/player";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import TrackObjectFull = SpotifyApi.TrackObjectFull;

type TrackProps = {
  track: TrackObjectFull;
  index: number;
  type?: string;
  albumImage?: string;
};

const Track: FC<TrackProps> = ({
  track: { album, name, artists, duration_ms, preview_url, id },
  index,
  type,
}) => {
  const dispatch = useAppDispatch();
  const image = type === "album" ? null : album.images[0].url;
  const { id: playerId, isPlaying } = useAppSelector((state) => state.player);
  const handlePlay = () => {
    if (id !== playerId) {
      const track = {
        href: preview_url,
        id,
      };

      dispatch(setTrack(track));
      dispatch(setIsPlaying(true));
    } else {
      if (isPlaying) {
        dispatch(setIsPlaying(false));
      } else {
        dispatch(setIsPlaying(true));
      }
    }
  };

  return (
    <Grid item xs={12}>
      <TrackContainer
        container
        padding={{ xs: "10px 0px", tiny: "10px 50px" }}
        columnSpacing={0}
      >
        <TrackIndexContainer>
          <TrackIndex isPlaying={playerId === id}>{index}</TrackIndex>
        </TrackIndexContainer>
        {/* @ts-ignore*/}
        <Grid item xs={9} md={6} big={7}>
          <TrackInfo
            name={name}
            artist={artists[0].name}
            artistId={artists[0].id}
            trackId={id}
            image={image}
          />
        </Grid>
        {/* @ts-ignore*/}
        <Grid item xs={3} md={6} big={5}>
          <TrackFeatures
            album={album?.name}
            id={album?.id}
            duration={duration_ms}
          />
        </Grid>
        {preview_url && (
          <IconButton
            onClick={handlePlay}
            sx={{
              color: "inherit",
              position: "absolute",
              top: "50%",
              right: "5px",
              transform: "translateY(-50%)",
            }}
          >
            {id !== playerId ? (
              <PlayArrowIcon />
            ) : isPlaying ? (
              <PauseIcon />
            ) : (
              <PlayArrowIcon />
            )}
          </IconButton>
        )}
      </TrackContainer>
    </Grid>
  );
};

export default Track;
