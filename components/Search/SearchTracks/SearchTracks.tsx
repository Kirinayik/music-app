import { TopLink, TopTitleContainer } from "../../Top/Top.styles";
import { Title } from "../../../styles/global";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { FC } from "react";
import Track from "../../Track/Track";
import { useAppSelector } from "../../../store";
import PagingObject = SpotifyApi.PagingObject;
import TrackObjectFull = SpotifyApi.TrackObjectFull;

type SearchTracksProps = {
  tracks: PagingObject<TrackObjectFull> | null;
};

const SearchTracks: FC<SearchTracksProps> = ({ tracks }) => {
  const { searchQuery } = useAppSelector((state) => state.search);

  return (
    <Box>
      <TopTitleContainer>
        <Title>Tracks</Title>
        <Link href={`/search/tracks/${searchQuery}`} passHref>
          <TopLink>see all</TopLink>
        </Link>
      </TopTitleContainer>
      <Grid container rowSpacing={2}>
        {tracks &&
          tracks.items.map((track, i) => (
            <Track track={track} key={track.id} index={i + 1} />
          ))}
      </Grid>
    </Box>
  );
};

export default SearchTracks;
