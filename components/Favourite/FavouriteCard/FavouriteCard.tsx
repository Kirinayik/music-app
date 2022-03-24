import {Box, Grid} from "@mui/material";
import {FC} from "react";
import {FavouriteCardContainer, FavouriteCardSubTitle, FavouriteCardTitle} from "../Favourite.styles";
import Link from 'next/link'

type FavouriteCardProps = {
  total: number;
}

const FavouriteCard:FC<FavouriteCardProps> = ({total}) => {
  return (
    <Grid item xs={4}>
      <Link href={'/playlists/favourite'} passHref>
        <FavouriteCardContainer>
          <Box>
            <FavouriteCardTitle>Liked Songs</FavouriteCardTitle>
            <FavouriteCardSubTitle>{total} liked songs</FavouriteCardSubTitle>
          </Box>
        </FavouriteCardContainer>
      </Link>
    </Grid>
  );
};

export default FavouriteCard;