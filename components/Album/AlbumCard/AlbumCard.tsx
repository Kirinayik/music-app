import AlbumObjectFull = SpotifyApi.AlbumObjectFull;
import {FC} from "react";
import {Box, Grid} from "@mui/material";
import {InfoContainer} from "../../Artist/Artist.styles";
import Image from "next/image";
import Link from "next/link";
import {CardContainer, CardName, ImageContainer} from "../../../styles/global";

type AlbumCardProps = {
  album: AlbumObjectFull;
}

const AlbumCard:FC<AlbumCardProps> = ({album: {name, images, id}}) => {
  return (
    <Grid item xs={2} justifyContent={'center'}>
      <Link href={`/albums/${id}`} passHref>
        <CardContainer>
          <ImageContainer>
            <Image src={images[0]?.url} width={250} height={250} alt={''}/>
          </ImageContainer>
          <InfoContainer>
            <CardName>{name}</CardName>
            <Box fontWeight={'300'} color={'rgba(255,255,255,0.5)'}>Album</Box>
          </InfoContainer>
        </CardContainer>
      </Link>
    </Grid>
  );
};

export default AlbumCard