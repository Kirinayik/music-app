import { Box, Grid } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";
import { TopTitleContainer } from "../../components/Top/Top.styles";
import { Title } from "../../styles/global";
import Track from "../../components/Track/Track";
import Spotify from "../../controllers/spotify";
import { errorHandler } from "../../helpers/errorHandler";
import TrackObjectFull = SpotifyApi.TrackObjectFull;

type TracksProps = {
  tracks: TrackObjectFull[];
};

const Tracks: NextPage<TracksProps> = ({ tracks }) => {
  return (
    <Box padding={{ xs: "90px 15px 30px", sm: "90px 30px 30px" }}>
      <TopTitleContainer>
        <Title>Top tracks this month</Title>
      </TopTitleContainer>
      <Grid container rowSpacing={2}>
        {tracks.map((track, i) => (
          <Track track={track} key={track.id} index={i + 1} />
        ))}
      </Grid>
    </Box>
  );
};

export default Tracks;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const tracks = await Spotify.getTopItems(context.req, "tracks", 50);

    return {
      props: { tracks },
    };
  } catch (e) {
    return errorHandler(e);
  }
};
