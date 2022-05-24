import { Box, Grid } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";
import { Title } from "../../styles/global";
import Spotify from "../../controllers/spotify";
import { errorHandler } from "../../helpers/errorHandler";
import { TopTitleContainer } from "../../components/Top/Top.styles";
import ArtistCard from "../../components/Artist/ArtistCard/ArtistCard";
import ArtistObjectFull = SpotifyApi.ArtistObjectFull;

type ArtistProps = {
  artists: ArtistObjectFull[];
};

const Artists: NextPage<ArtistProps> = ({ artists }) => {
  return (
    <Box padding={{ xs: "90px 15px 30px", sm: "90px 30px 30px" }}>
      <TopTitleContainer>
        <Title>Top artists this month</Title>
      </TopTitleContainer>
      <Grid
        container
        spacing={2}
        columns={{ xs: 2, tiny: 4, sm: 6, md: 8, big: 10, lg: 12 }}
      >
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </Grid>
    </Box>
  );
};

export default Artists;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const artists = await Spotify.getTopItems(context.req, "artists", 10);

    return {
      props: { artists },
    };
  } catch (e) {
    return errorHandler(e);
  }
};
