import { Box, Grid } from "@mui/material";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { InfoContainer } from "../Artist.styles";
import {
  CardContainer,
  CardName,
  ImageContainer,
} from "../../../styles/global";
import logo from "../../../public/img/logo.png";
import ArtistObjectFull = SpotifyApi.ArtistObjectFull;

type CardProps = {
  artist: ArtistObjectFull;
};

const ArtistCard: FC<CardProps> = ({ artist: { images, name, id } }) => {
  return (
    <Grid item xs={2}>
      <Link href={`/artists/${id}`} passHref>
        <CardContainer>
          <ImageContainer variant={"circle"}>
            {images[0]?.url ? (
              <Image src={images[0]?.url} width={250} height={250} alt={""} />
            ) : (
              <Image src={logo} width={250} height={250} alt={""} />
            )}
          </ImageContainer>
          <InfoContainer>
            <CardName>{name}</CardName>
            <Box fontWeight={"300"} color={"rgba(255,255,255,0.5)"}>
              Artist
            </Box>
          </InfoContainer>
        </CardContainer>
      </Link>
    </Grid>
  );
};

export default ArtistCard;
