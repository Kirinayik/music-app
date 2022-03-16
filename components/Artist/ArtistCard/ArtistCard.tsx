import {Box, Grid} from "@mui/material";
import {FC} from "react";
import Image from 'next/image'
import {ArtistCardContainer, ImageContainer, InfoContainer} from "./ArtistCard.styles";
import {formatName} from "../../../helpers/formatName";
import Link from 'next/link'
import ArtistObjectFull = SpotifyApi.ArtistObjectFull;

type CardProps = {
  artist: ArtistObjectFull;
}

const ArtistCard:FC<CardProps> = ({artist:{images, name, id}}) => {
  return (
    <Grid item xs={2}>
      <Link href={`/artists/${id}`} passHref>
        <ArtistCardContainer>
          <ImageContainer>
            <Image src={images[0]?.url} width={250} height={250} alt={''}/>
          </ImageContainer>
          <InfoContainer>
            <Box>{formatName(name, 27)}</Box>
            <Box fontWeight={'300'} color={'rgba(255,255,255,0.5)'}>Artist</Box>
          </InfoContainer>
        </ArtistCardContainer>
      </Link>
    </Grid>
  );
};

export default ArtistCard;