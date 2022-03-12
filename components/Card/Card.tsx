import {Box, Grid} from "@mui/material";
import {FC} from "react";
import Image from 'next/image'
import {CardContainer, ImageContainer, InfoContainer} from "./Card.styles";
import {formatName} from "../../helpers/formatName";
import ArtistObjectFull = SpotifyApi.ArtistObjectFull;

type CardProps = {
  artist: ArtistObjectFull;
}

const Card:FC<CardProps> = ({artist:{images, name}}) => {
  return (
    <Grid item xs={2}>
      <CardContainer>
        <ImageContainer>
          <Image src={images[0]?.url} width={250} height={250}/>
        </ImageContainer>
        <InfoContainer>
          <Box>{formatName(name, 27)}</Box>
          <Box fontWeight={'300'} color={'rgba(255,255,255,0.5)'}>Artist</Box>
        </InfoContainer>
      </CardContainer>
    </Grid>
  );
};

export default Card