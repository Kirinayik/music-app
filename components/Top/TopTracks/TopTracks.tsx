import { TopLink, TopTitleContainer } from "../Top.styles";
import { Title } from "../../../styles/global";
import { Box, Grid } from "@mui/material";
import { FC } from "react";
import Track from "../../Track/Track";
import Link from "next/link";
import TrackObjectFull = SpotifyApi.TrackObjectFull;

type TopTracksProps = {
  tracks: TrackObjectFull[];
};

const TopTracks: FC<TopTracksProps> = ({ tracks }) => {
  return (
    <Box padding={{ xs: "15px 15px 50px", sm: "15px 30px 50px" }}>
      <TopTitleContainer>
        <Title>Top tracks this month</Title>
        <Link href={"/profile/tracks"} passHref>
          <TopLink>see all</TopLink>
        </Link>
      </TopTitleContainer>
      <Grid container rowSpacing={2}>
        {tracks.map((track, i) => (
          <Track track={track} key={track.id} index={i + 1} />
        ))}
      </Grid>
    </Box>
  );
};

export default TopTracks;
